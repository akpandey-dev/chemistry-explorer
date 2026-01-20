import http.server
import socketserver
import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
os.chdir(BASE_DIR)

print("========================================")
print("Server base directory:")
print(BASE_DIR)
print("Contents of this directory:")
for f in BASE_DIR.iterdir():
    print(" -", f.name)
print("========================================")

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

if __name__ == "__main__":
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}/elements.json")
        httpd.serve_forever()
