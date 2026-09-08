#!/usr/bin/env bash
# Mirror dist-flywheel/fall/ to the Flywheel site root over SFTP.
#
# Usage:
#   npm run build:flywheel
#   FLYWHEEL_USER=… FLYWHEEL_PASS=… FLYWHEEL_SITE_PATH=… ./scripts/deploy-flywheel.sh
#   (or put those three in a local .env — it is gitignored — and `source .env` first)
#
# Then: Flywheel dashboard → site → Advanced → Flush Cache, and check
# https://wanderniagara.com/fall/ in a private window.
set -euo pipefail

HOST="sftp.flywheelsites.com"
PORT="22"
LOCAL="dist-flywheel/fall"

# Load a local .env if present (never committed).
if [ -f .env ]; then set -a; . ./.env; set +a; fi

: "${FLYWHEEL_USER:?Set FLYWHEEL_USER (Flywheel SFTP username)}"
: "${FLYWHEEL_PASS:?Set FLYWHEEL_PASS (Flywheel SFTP password)}"
: "${FLYWHEEL_SITE_PATH:?Set FLYWHEEL_SITE_PATH (remote path to the WordPress root, e.g. /sitename)}"

if [ ! -f "$LOCAL/index.php" ]; then
  echo "✗ $LOCAL/index.php not found. Run: npm run build:flywheel" >&2
  exit 1
fi

# --delete is scoped to the remote fall/ directory ONLY. The mirror target is
# "$FLYWHEEL_SITE_PATH/fall", never the WordPress root, so wp-content etc. are
# untouchable by this script.
REMOTE="${FLYWHEEL_SITE_PATH%/}/fall"

if ! command -v lftp >/dev/null 2>&1; then
  cat <<EOF
✗ lftp is not installed, so this script cannot upload automatically.

  Install it (macOS: brew install lftp · Debian/Ubuntu: sudo apt install lftp ·
  Windows: use WSL, or skip the script) — or deploy manually:

  1. Open your SFTP client (Cyberduck, Transmit, FileZilla) →
     host $HOST, port $PORT, user \$FLYWHEEL_USER.
  2. Navigate to the WordPress root (the folder containing wp-content).
  3. Drag the local folder  $LOCAL/  into it, so the server has  fall/index.php.
     Replace the existing fall/ folder if there is one.
  4. Flywheel dashboard → site → Advanced → Flush Cache.
  5. Check https://wanderniagara.com/fall/ in a private window.
EOF
  exit 2
fi

echo "→ Mirroring $LOCAL → sftp://$HOST:$PORT$REMOTE"
lftp -u "$FLYWHEEL_USER","$FLYWHEEL_PASS" -p "$PORT" "sftp://$HOST" <<EOF
set sftp:auto-confirm yes
set net:max-retries 2
mkdir -p "$REMOTE"
mirror -R --delete --verbose --exclude-glob .DS_Store "$LOCAL" "$REMOTE"
bye
EOF

echo "✓ Uploaded. Now: Flywheel dashboard → site → Advanced → Flush Cache,"
echo "  then verify https://wanderniagara.com/fall/ in a private window."
