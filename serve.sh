#!/bin/sh
# Serves this folder so FormSubmit and _next redirects work (not for file:// URLs).
cd "$(dirname "$0")"
PORT="${PORT:-8080}"
echo ""
echo "  → Open in your browser: http://localhost:${PORT}"
echo "  → Press Ctrl+C to stop the server"
echo ""
exec python3 -m http.server "$PORT"
