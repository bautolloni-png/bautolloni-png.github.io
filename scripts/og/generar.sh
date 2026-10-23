#!/bin/sh
# Genera public/og-es.png y public/og-en.png (1200×630) desde plantilla.html con Chrome sin ventana.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
for lang in es en; do
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1200,630 --virtual-time-budget=3000 \
    --screenshot="../../public/og-$lang.png" "file://$PWD/plantilla.html#$lang" >/dev/null 2>&1
  echo "public/og-$lang.png"
done
