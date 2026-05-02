#!/usr/bin/env bash
set -euo pipefail
files=$(rg -n "^(<<<<<<<|=======|>>>>>>>)" . --glob '!*.png' --glob '!*.jpg' --glob '!*.gif' || true)
if [[ -n "$files" ]]; then
  echo "[ERROR] Merge conflict markers found:"
  echo "$files"
  exit 1
fi
echo "[OK] No merge conflict markers found."
