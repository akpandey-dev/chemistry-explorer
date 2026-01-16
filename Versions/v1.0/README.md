# Chemistry Explorer Sheet — v1.0

Version **v1.0** is the first stable release of the Chemistry Explorer Sheet project.

It provides an interactive periodic table interface with a built-in search system that allows users to retrieve information about chemical elements using:

- Atomic number  
- Element symbol  
- Element name  

Search results can be viewed in either **brief** or **detailed** form.

---

## Available Formats

This version is provided in three different formats to support different use cases.

### 1. Fully Self-Contained (`single-file/`)

**Chemistry_Explorer_Sheet_noServer.html**

- HTML, CSS, JavaScript, and element data are fully embedded
- Requires no server or external files
- Works offline
- Suitable for mobile devices and quick distribution

This is the easiest way to use the project.

---

### 2. Combined Frontend with Local JSON Server(`single-file/`)

**Chemistry_Explorer_Sheet.html**

- HTML, CSS, and JavaScript are combined
- Element data is loaded from a JSON file
- Requires a local server to serve `elements.json`

---

### 3. Modular Frontend Structure(`modular/`)

**index.html + script.js + style.css**

- Same functionality as the combined frontend
- HTML, CSS, and JavaScript are separated into individual files
- Requires the JSON data file to be served locally

This format is recommended for learning, customization, and further development.

---

## Data

The element data is stored in `elements.json` and includes detailed properties for each element.  
It is an additional copy of the JSON file from the server directory and is included for backup and reference purposes.

---

## Local JSON File Server

This version includes a small Python-based local server located in the `JSON_file_server/` directory.

- The server is preconfigured
- Simply copy the directory and run the Python script
- Once running, open the appropriate HTML file in your browser

If you prefer not to use a local server, use the **fully self-contained** version instead.

---

## Core Functionality

- Contains a dynamic periodic table
- Colours used for enhanced visibility
- Legend given below to map terms
- Hold or double click elements in the periodic table to see a brief detail instantly
- Search system to find easily
- Search using Atomic number, Symbol or name
- Get search result in brief or detailed form
- 36 different properties for each elements

---

## Browser Compatibility

Tested on modern Chromium browsers like Chrome, Firefox, etc.
Tested on Edge and Brave also.

---

## Design Notes

- No external libraries or frameworks
- A server needed sometimes as per the build distribution
- Emphasis on direct DOM manipulation
- Some features and UI designs are incomplete

---

## Limitations

- Not 100% accurate chemical data(there may be some inaccuracies)
- Not live data information
- Not perfect search system (yet)

---
## Version Status

✔ Stable  
✔ Feature-complete for initial release  
✔ Suitable for personal use

## Notes

- Python cache files (`__pycache__`, `.pyc`) are intentionally excluded from version control
- This version focuses on functionality and structure, not visual polish

Note: This can be for learners. This can be incomplete. This can be yours too. There may be bugs and logic gaps, feel free to report.