#!/usr/bin/env bash
set -euo pipefail

cleanup() {
  if [[ -n "${API_PID:-}" ]] && kill -0 "$API_PID" 2>/dev/null; then
    kill "$API_PID"
  fi
}

trap cleanup EXIT INT TERM

python3 backend/server.py &
API_PID=$!

echo "Started preview API (pid=$API_PID). Launching React app..."
BROWSER=none npm start
