# LeiGod Design Gitea 管理员维护手册

## 服务信息

- Gitea 版本：28.4.0，Apple Silicon 原生版本；
- 网页地址：<http://10.1.105.205:3000>；
- SSH 地址：`10.1.105.205:2222`；
- 管理员用户名：`admin`；
- 组织：`LeiGod-team`；
- 仓库：`LeiGod-team/LeiGod-design`；
- 数据目录：`/Users/artmagic/Library/Application Support/Gitea`；
- 配置文件：`/Users/artmagic/Library/Application Support/Gitea/custom/conf/app.ini`；
- 自动备份目录：`/Users/artmagic/Library/Application Support/Gitea/backup`。

管理员初始密码不记录在仓库里。首次登录后应立即在账号设置中修改密码。

## 保证可访问的条件

这台 Mac 是局域网服务器，因此必须：

1. 保持开机并连接电源；
2. 用户 `artmagic` 保持登录；
3. 保持连接当前局域网；
4. 不要合上笔记本屏幕；
5. 不要退出 Gitea 所在的 macOS 用户会话。

已安装登录自动启动项，并通过 `caffeinate` 阻止空闲休眠；屏幕仍可正常熄灭。合盖休眠无法由该设置可靠阻止。

为了防止地址变化，建议在路由器中给服务器保留固定 DHCP 地址：

- 当前 IP：`10.1.105.205`；
- 当前 Wi-Fi MAC：`1a:a6:bd:c9:f5:fe`。

如果 macOS 的“私有 Wi-Fi 地址”被重新生成，MAC 地址可能变化，需要重新设置 DHCP 保留地址。

## 创建团队成员账号

1. 使用 `admin` 登录；
2. 打开站点管理；
3. 在用户管理中创建个人账号；
4. 进入组织 `LeiGod-team`；
5. 把新成员加入适当团队，并授予 `LeiGod-design` 仓库写入权限；
6. 让成员按照《团队 Git 协作指南》添加自己的 SSH 公钥。

每位成员使用独立账号，不要共享管理员账号。

## 服务状态和常用命令

查看状态：

```bash
launchctl print gui/$(id -u)/com.nndesign.gitea
curl http://127.0.0.1:3000/api/healthz
```

重启服务：

```bash
launchctl kickstart -k gui/$(id -u)/com.nndesign.gitea
```

查看端口：

```bash
lsof -nP -iTCP:3000 -sTCP:LISTEN
lsof -nP -iTCP:2222 -sTCP:LISTEN
```

查看日志：

```bash
tail -100 "/Users/artmagic/Library/Application Support/Gitea/log/launchd.err.log"
tail -100 "/Users/artmagic/Library/Application Support/Gitea/log/gitea.log"
```

相关自动启动项：

```text
~/Library/LaunchAgents/com.nndesign.gitea.plist
~/Library/LaunchAgents/com.nndesign.gitea-backup.plist
~/Library/LaunchAgents/com.nndesign.gitea-awake.plist
```

## 备份

系统每天 03:30 自动生成完整备份，并保留最近 14 天。

手动备份：

```bash
"/Users/artmagic/Library/Application Support/Gitea/bin/backup.sh"
```

确认备份：

```bash
ls -lh "/Users/artmagic/Library/Application Support/Gitea/backup"
```

本机备份不能代替异地备份。建议定期把最新 ZIP 复制到 NAS 或其他电脑。

## 升级原则

1. 升级前执行一次手动备份；
2. 阅读新版本升级说明；
3. 停止或重启服务时使用 `launchctl`；
4. 只替换 `bin/gitea`，不要改变二进制文件名和路径；
5. 替换后重新启动并检查 `/api/healthz`；
6. 不要直接编辑 SQLite 数据库。

## 当前项目的远程仓库

服务器 Mac 上的工作目录配置了两个远程：

```text
lan     ssh://git@10.1.105.205:2222/LeiGod-team/LeiGod-design.git
origin  https://gitee.com/evil-samoyed/nn-design.git
```

`lan` 是当前主协作仓库，Gitee `origin` 保留为云端备份。当前本地 `main` 跟踪 `lan/main`。

同步提交历史到 Gitee 时，应先确认没有敏感信息，再执行：

```bash
git push origin main:master
```

不要使用 `--force` 覆盖任何共享分支。

## 故障排查顺序

1. 检查 Mac 是否联网、是否合盖或退出登录；
2. 检查 `10.1.105.205` 是否仍是当前 IP；
3. 检查健康接口；
4. 检查 3000 和 2222 端口；
5. 查看 Gitea 日志；
6. 检查磁盘剩余空间；
7. 必要时重启 Gitea 服务。

查看当前 IP：

```bash
ipconfig getifaddr en0
```

查看磁盘：

```bash
df -h "/Users/artmagic/Library/Application Support/Gitea"
```
