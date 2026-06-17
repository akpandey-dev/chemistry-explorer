# Chemistry Explorer

An interactive, JSON-powered periodic table and chemistry exploration system.

Chemistry Explorer visualizes chemical elements in a dynamic periodic table and allows users to explore detailed information using multiple search modes. It is designed for students, developers, and science enthusiasts who want a lightweight, browser-based way to explore chemical data.

The dataset includes up to **120 elements**, each described using **36 detailed properties**, including both standard and extended entries.

---

⚠️ **Disclaimer**
Some element data is AI-generated and may contain inaccuracies. This project is intended for educational and experimental purposes only. Do not treat the data as authoritative for scientific, professional, or academic work.

---

## Usage

### Option 1 — Quick Use (Recommended)

1. Download `dist/chemistry-explorer.html`
2. Open in any browser (mobile or PC)
3. Use instantly — no setup required

* Works offline.
* No installation required.

---

### Option 2 — Development Mode

1. Clone the repository
2. Start the local JSON server:

```
python tools/server.py
```

3. Open:

```
src/index.html
```
4. Edit files in `src/`
5. Build using
```text
py scripts/build.py
```

This mode is recommended for:

* learning
* modifying the project
* experimenting with features

---

## Features

* Information for all 118 officially recognized elements
* Experimental/theoretical entries for elements 119 and 120
* Interactive and dynamic periodic table interface
* Responsive element cells for desktop and mobile devices
* Scroll to top button for smoother UX
* Color-coded element categories
* Legend for guidance
* Additional Guide/Information button on top for extra support
* Interactive UI (click / hold for quick info)
    * Symbol
    * Name
    * Atomic Number
    * Atomic Mass
    * Valency
    * Category
    * Block
    * Period
    * Group
* Smooth element navigation
* Powerful element search feature
    * Search mode:
        * Brief
        * Details
    * Search methods:
        * Atomic Number
        * Symbol
        * Name
* Dynamically generated interface using JavaScript
* Lightweight and dependency-free
* Easy data fetching using Python localhost server


---

## Project Structure

```
chemistry-explorer/
│
├── index.html              # Entry / landing page (GitHub Pages)
│
├── src/                    # Development source code
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── data/
│       └── elements.json   # Raw dataset (dev only)
│
├── dist/                   # Final build (for users)
│   └── chemistry-explorer.html  # Single-file app
│
├── scripts/                # Build tools
│   └── build.py
│
├── tools/                  # Development utilities
│   └── server.py
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Build System

Run:

```
py scripts/build.py
```

This will:

* combine HTML, CSS, and JS
* embed `elements.json`
* generate a fully self-contained file in `dist/`

---

## Architecture Overview

This project uses two modes:

### Development Mode

* Modular structure (`src/`)
* JSON loaded via local server
* Easy to edit and extend

### Production Mode

* Single HTML file (`dist/`)
* JSON embedded directly
* Works offline and anywhere

---

## Data

* Stored in `src/data/elements.json`
* Contains detailed properties for each element
* Used during development and embedded during build

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* Python (for local server and build automation)

No external libraries or frameworks are used.

---

## Limitations

* Not intended to replace authoritative scientific references
* Some chemical data may be inaccurate
* Not connected to live scientific databases/APIs
* Search system is basic and can be improved
* UI is functional but not fully polished
* Browser-dependent behavior

---

## Live Demo

Try it here:
https:/akpandey-dev.github.io/chemistry-explorer

---

## Contributing

This project is open for:

* learning
* modification
* experimentation

There may be bugs or incomplete features - feel free to explore and improve.

---

## License

Open-source for educational, experimental, and personal use.
