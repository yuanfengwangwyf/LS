# LeiGod Design 团队 Git 协作指南

这份文档可以直接发送给新成员。服务器只在公司/工作室局域网内开放，不需要访问公网。

## 1. 服务器地址

- 网页地址：<http://10.1.105.205:3000>
- 项目地址：<http://10.1.105.205:3000/LeiGod-team/LeiGod-design>
- SSH 仓库地址：`ssh://git@10.1.105.205:2222/LeiGod-team/LeiGod-design.git`
- 默认分支：`main`

访问条件：电脑必须与服务器 Mac 位于同一局域网。服务器 Mac 必须开机、保持登录、连接网络且不能合盖休眠。

## 2. 第一次加入项目

### 第一步：获取账号

请管理员创建 Gitea 账号，并把你加入 `LeiGod-team` 团队。收到账号后先打开网页地址并登录。

不要多人共用一个账号；提交记录需要能对应到具体成员。

### 第二步：设置 Git 身份

把姓名和邮箱替换为你自己的信息：

```bash
git config --global user.name "你的姓名"
git config --global user.email "你的邮箱"
git config --global init.defaultBranch main
git config --global pull.rebase true
```

查看是否生效：

```bash
git config --global --list
```

### 第三步：创建 SSH 密钥

macOS、Linux 或 Windows Git Bash：

```bash
ssh-keygen -t ed25519 -C "你的姓名@LeiGod-team"
```

询问保存位置时直接按回车。建议设置一个你能记住的密钥密码。

查看公钥：

```bash
cat ~/.ssh/id_ed25519.pub
```

Windows PowerShell 查看公钥：

```powershell
Get-Content $HOME\.ssh\id_ed25519.pub
```

复制完整的一行公钥，然后在 Gitea 中打开：

1. 右上角头像 → 设置；
2. 找到“SSH / GPG 密钥”；
3. 选择“添加密钥”；
4. 标题填写自己的电脑名称，粘贴公钥并保存。

测试连接：

```bash
ssh -T -p 2222 git@10.1.105.205
```

第一次连接会询问是否信任主机，确认地址无误后输入 `yes`。看到成功认证提示即可。

### 第四步：克隆项目

进入你准备存放项目的目录，然后执行：

```bash
git clone ssh://git@10.1.105.205:2222/LeiGod-team/LeiGod-design.git
cd LeiGod-design
git status
```

克隆完成后，远程仓库默认名称是 `origin`。

### 第五步：确认项目 Skill

项目专用 Skill 已保存在仓库中：

```text
.agents/skills/nn-design-system-enforcer/
```

Codex 会自动发现仓库内的 `.agents/skills`，不需要复制到个人目录，也不需要单独安装。项目同时保留 `.trae/skills/nn-design-system-enforcer` 兼容入口，两者读取的是同一份 Skill。

确认文件存在：

```bash
test -f .agents/skills/nn-design-system-enforcer/SKILL.md && echo "项目 Skill 已就绪"
```

如果以前手动安装过同名的个人 Skill，请移走旧的个人副本，避免出现两个同名 Skill。之后以项目中的版本为准。

## 3. 每次开始工作的标准步骤

先回到主分支并获取最新版本：

```bash
git switch main
git pull --rebase origin main
```

`git pull` 会同时拉取并更新项目 Skill。Codex 会监控本地 Skill 文件变化；已经开始执行的任务仍按当次已加载的说明运行，新任务会使用拉取后的版本。

再为自己的任务建立新分支：

```bash
git switch -c feature/member-center
```

常用分支命名：

- `feature/功能名称`：新功能；
- `fix/问题名称`：修复问题；
- `docs/文档名称`：只改文档；
- `refactor/模块名称`：代码整理或重构；
- `design/页面名称`：设计、样式或页面调整。

名称使用简短英文、小写字母和连字符，例如 `feature/video-player`。

## 4. 保存和推送修改

先查看自己改了什么：

```bash
git status
git diff
```

只添加本次任务相关的文件：

```bash
git add path/to/file
git commit -m "新增个人中心页面"
```

第一次推送当前分支：

```bash
git push -u origin feature/member-center
```

以后在同一分支继续提交，只需：

```bash
git push
```

## 5. 发起合并请求

1. 打开项目网页；
2. 进入“合并请求 / Pull Requests”；
3. 新建合并请求；
4. 来源选择你的功能分支，目标选择 `main`；
5. 说明改了什么、如何验证，以及是否有截图；
6. 等待至少一名成员检查后再合并。

`main` 是受保护分支，不应直接推送。所有正式修改都通过独立分支和合并请求进入 `main`。

合并完成后，本地清理旧分支：

```bash
git switch main
git pull --rebase origin main
git branch -d feature/member-center
```

如果网页上没有自动删除远程分支，可执行：

```bash
git push origin --delete feature/member-center
```

## 6. 工作期间同步 main 的最新修改

在自己的功能分支中执行：

```bash
git fetch origin
git rebase origin/main
```

如果没有冲突，再推送：

```bash
git push --force-with-lease
```

这里只能对自己的功能分支使用 `--force-with-lease`，绝对不要对 `main` 使用强制推送。

## 7. 遇到冲突怎么办

先查看冲突文件：

```bash
git status
```

打开冲突文件，找到并处理下面这些标记：

```text
<<<<<<< HEAD
你的修改
=======
main 中的修改
>>>>>>> origin/main
```

保留正确内容并删除标记，然后执行：

```bash
git add 冲突文件
git rebase --continue
```

如果不确定如何处理，可以安全取消本次 rebase：

```bash
git rebase --abort
```

不要为了消除冲突而直接删除别人的代码。

## 8. 临时切换任务

当前修改还不适合提交时，可以临时收起：

```bash
git stash push -u -m "临时保存：个人中心"
```

恢复：

```bash
git stash list
git stash pop
```

## 9. 团队约定

1. 一项任务对应一个分支，不在同一个分支混入无关修改。
2. 提交前执行 `git status` 和 `git diff`。
3. 不提交密码、令牌、个人配置、缓存或系统临时文件。
4. 不直接修改 `main`，不对 `main` 强制推送。
5. 大图片、视频或其他大型二进制文件先与管理员确认是否使用 Git LFS。
6. 每天开始工作先更新 `main`，减少后续冲突。
7. 合并请求写清修改范围和验证方法。
8. 项目 Skill 只维护 `.agents/skills/nn-design-system-enforcer/`；修改后与业务代码一起提交，不在个人目录维护另一份副本。

## 10. 常见问题

### 网页打不开或 SSH 超时

依次确认：

1. 是否连接到与服务器相同的局域网；
2. 能否打开 `http://10.1.105.205:3000`；
3. 服务器 Mac 是否开机、登录、联网且没有合盖；
4. 联系管理员确认服务器地址是否变化。

### `Permission denied (publickey)`

说明 SSH 密钥没有被识别。确认：

```bash
ssh -T -p 2222 git@10.1.105.205
```

并检查公钥是否完整添加到当前登录的 Gitea 账号。

### 提示没有仓库权限

请管理员确认你已加入 `LeiGod-team`，并拥有 `LeiGod-design` 仓库的写入权限。

### 不小心添加了不该提交的文件

只取消暂存、不删除本地文件：

```bash
git restore --staged path/to/file
```

不确定时先执行 `git status`，不要使用 `git reset --hard`。
