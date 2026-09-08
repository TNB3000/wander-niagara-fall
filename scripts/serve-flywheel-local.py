#!/usr/bin/env python3
"""Local stand-in for Flywheel's Nginx when php isn't installed.

Serves dist-flywheel/ and resolves directory requests to index.php (served as
text/html — our index.php files are pure HTML that PHP would just echo).
Preferred when available:  php -S localhost:8080 -t dist-flywheel

Usage: python scripts/serve-flywheel-local.py [port]
"""
import http.server, os, sys, functools

ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "dist-flywheel")
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080


class Handler(http.server.SimpleHTTPRequestHandler):
    def translate_path(self, path):
        p = super().translate_path(path)
        if os.path.isdir(p):
            php = os.path.join(p, "index.php")
            if os.path.isfile(php):
                return php
        return p

    def guess_type(self, path):
        if path.endswith(".php"):
            return "text/html; charset=UTF-8"
        return super().guess_type(path)

    def send_head(self):
        # Mirror Nginx: /fall → 301 → /fall/  (directory without trailing slash)
        p = super().translate_path(self.path.split("?")[0])
        if os.path.isdir(p) and not self.path.split("?")[0].endswith("/"):
            self.send_response(301)
            self.send_header("Location", self.path.split("?")[0] + "/")
            self.end_headers()
            return None
        return super().send_head()

    def log_message(self, fmt, *args):
        msg = fmt % args
        if " 404 " in msg or " 500 " in msg:
            sys.stderr.write("!! " + msg + "\n")


if __name__ == "__main__":
    handler = functools.partial(Handler, directory=ROOT)
    print(f"Serving {ROOT} at http://localhost:{PORT}/fall/  (directory -> index.php)")
    http.server.ThreadingHTTPServer(("", PORT), handler).serve_forever()
