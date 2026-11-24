#!/bin/zsh

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
PORT="${1:-8123}"
PID_FILE="$ROOT_DIR/.preview-server.pid"
SCREEN_NAME="nn-design-preview"
STOPPED=0

if [[ -f "$PID_FILE" ]]; then
  SERVER_PID="$(cat "$PID_FILE")"
  if kill -0 "$SERVER_PID" >/dev/null 2>&1; then
    kill "$SERVER_PID"
    echo "Stopped preview server: $SERVER_PID"
    STOPPED=1
  else
    echo "Preview server process was not running."
  fi
  rm -f "$PID_FILE"
fi

if command -v lsof >/dev/null 2>&1; then
  PORT_PIDS=("${(@f)$(lsof -tiTCP:"$PORT" -sTCP:LISTEN 2>/dev/null || true)}")
  for PID in "${PORT_PIDS[@]}"; do
    if [[ -n "$PID" ]] && kill -0 "$PID" >/dev/null 2>&1; then
      kill "$PID"
      echo "Stopped preview server on port $PORT: $PID"
      STOPPED=1
    fi
  done
fi

if command -v screen >/dev/null 2>&1; then
  if screen -list | grep -q "\\.${SCREEN_NAME}[[:space:]]"; then
    screen -S "$SCREEN_NAME" -X quit >/dev/null 2>&1 || true
    echo "Stopped preview screen session: $SCREEN_NAME"
    STOPPED=1
  fi
fi

if [[ "$STOPPED" -eq 0 ]]; then
  echo "Preview server is not running."
fi
