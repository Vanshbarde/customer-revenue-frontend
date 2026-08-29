#!/bin/sh
# Restart contract for the CRIOI preview. Idempotent: probe 8080, start only if down.
set -eu
cd /workspace

if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
  exit 0
fi

npm run dev >/tmp/crioi-dev.log 2>&1 &
for i in 1 2 3 4 5 6 7 8 8 9 10 12 14 16 18 20; do
  if curl -sf -o /dev/null --max-time 2 http://127.0.0.1:8080/; then
    exit 0
  fi
  sleep 0.5
done
exit 0
