#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-8123}"
HOST="${2:-0.0.0.0}"
PID_FILE="$ROOT_DIR/.preview-server.pid"
LOG_FILE="$ROOT_DIR/.preview-server.log"
SCREEN_NAME="nn-design-preview"
LAN_IP="$(ipconfig getifaddr en0 2>/dev/null || ipconfig getifaddr en1 2>/dev/null || true)"
if [[ -z "$LAN_IP" ]]; then
  LAN_IP="127.0.0.1"
fi

if [[ -f "$PID_FILE" ]]; then
  EXISTING_PID="$(cat "$PID_FILE")"
  if kill -0 "$EXISTING_PID" >/dev/null 2>&1; then
    echo "Preview server is already running:"
    echo "  PID: $EXISTING_PID"
    echo "  Local URL: http://127.0.0.1:$PORT/index.html"
    echo "  LAN URL: http://$LAN_IP:$PORT/index.html"
    exit 0
  fi
  rm -f "$PID_FILE"
fi

if command -v lsof >/dev/null 2>&1; then
  PORT_PIDS=("${(@f)$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)}")
  for PID in "${PORT_PIDS[@]}"; do
    if [[ -n "$PID" ]] && kill -0 "$PID" >/dev/null 2>&1; then
      echo "Stopping existing preview server on port $PORT: $PID"
      kill "$PID"
      sleep 0.2
    fi
  done
fi

cd "$ROOT_DIR"
if command -v screen >/dev/null 2>&1; then
  screen -S "$SCREEN_NAME" -X quit >/dev/null 2>&1 || true
  screen -dmS "$SCREEN_NAME" zsh -lc "cd '$ROOT_DIR' && python3 '$ROOT_DIR/preview-server.py' --port '$PORT' --bind '$HOST' --directory '$ROOT_DIR' > '$LOG_FILE' 2>&1"
  sleep 0.5
  SERVER_PID="$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null | head -n 1 || true)"
else
  nohup python3 "$ROOT_DIR/preview-server.py" --port "$PORT" --bind "$HOST" --directory "$ROOT_DIR" >"$LOG_FILE" 2>&1 &
  SERVER_PID=$!
fi

if [[ -z "${SERVER_PID:-}" ]] || ! kill -0 "$SERVER_PID" >/dev/null 2>&1; then
  echo "Failed to start preview server. See log: $LOG_FILE" >&2
  exit 1
fi

echo "$SERVER_PID" >"$PID_FILE"

echo "Preview server started"
echo "  PID: $SERVER_PID"
echo "  Bind: $HOST:$PORT"
echo "  Local URL: http://127.0.0.1:$PORT/index.html"
echo "  LAN URL: http://$LAN_IP:$PORT/index.html"
echo "  Log: $LOG_FILE"
