#!/bin/sh
# Genera linkedin/destacado-linkedin.png (1200×627): saca una captura de la web publicada y la compone con destacado.html.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1280,800 --virtual-time-budget=4000 \
  --screenshot="$PWD/captura-web.png" "https://bautolloni-png.github.io/?captura=1" >/dev/null 2>&1
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=1200,627 --virtual-time-budget=3000 \
  --screenshot="$PWD/../../linkedin/destacado-linkedin.png" "file://$PWD/destacado.html" >/dev/null 2>&1
echo "linkedin/destacado-linkedin.png"
