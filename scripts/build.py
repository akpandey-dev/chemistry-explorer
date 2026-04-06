import os
import json

# -------------------------
# Paths
# -------------------------
SRC_DIR = "src"
DIST_DIR = "dist"

HTML_FILE = os.path.join(SRC_DIR, "index.html")
CSS_FILE = os.path.join(SRC_DIR, "style.css")
JS_FILE = os.path.join(SRC_DIR, "script.js")
JSON_FILE = os.path.join(SRC_DIR, "data", "elements.json")

OUTPUT_FILE = os.path.join(DIST_DIR, "chemistry-explorer.html")


# -------------------------
# Helpers
# -------------------------
def read_file(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write_file(path, content):
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


# -------------------------
# Build Process
# -------------------------
def build():
    print("Building Chemistry Explorer...")

    html = read_file(HTML_FILE)
    css = read_file(CSS_FILE)
    js = read_file(JS_FILE)

    # Load JSON
    with open(JSON_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    json_string = json.dumps(data, indent=2)

    # -------------------------
    # Remove server-based logic
    # -------------------------
    js = js.replace("loadElements();", "")
    js = js.replace(
        'const response = await fetch("http://localhost:8080/elements.json");',
        ""
    )
    js = js.replace("allElements = await response.json();", "")
    js = js.replace("renderPeriodicTable(allElements);", "")

    # -------------------------
    # Inject JSON directly
    # -------------------------
    injection = "let allElements = " + json_string + ";\nrenderPeriodicTable(allElements);"
    js = js.replace("let allElements = [];", injection)

    # -------------------------
    # Inline CSS
    # -------------------------
    html = html.replace(
        '<link rel="stylesheet" href="style.css">',
        "<style>\n" + css + "\n</style>"
    )

    # -------------------------
    # Inline JS
    # -------------------------
    html = html.replace(
        '<script src="script.js"></script>',
        "<script>\n" + js + "\n</script>"
    )

    # -------------------------
    # Ensure dist exists
    # -------------------------
    os.makedirs(DIST_DIR, exist_ok=True)

    # -------------------------
    # Write output
    # -------------------------
    write_file(OUTPUT_FILE, html)

    print("Build complete!")
    print("Output:", OUTPUT_FILE)


# -------------------------
# Run
# -------------------------
if __name__ == "__main__":
    build()