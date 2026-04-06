import http.server
import socketserver
from pathlib import Path

# Point directly to data folder
DATA_DIR = Path(__file__).resolve().parent.parent / "src" / "data"

PORT = 8080

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DATA_DIR), **kwargs)

    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        super().end_headers()

if __name__ == "__main__":
    print("========================================")
    print("Serving directory:")
    print(DATA_DIR)
    print("Files:")
    for f in DATA_DIR.iterdir():
        print(" -", f.name)
    print("========================================")

    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"🚀 Server running at http://localhost:{PORT}/")
        print(f"📄 Access JSON at http://localhost:{PORT}/elements.json")
        httpd.serve_forever()