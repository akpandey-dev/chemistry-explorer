# Chemistry Explorer

An interactive, browser-based chemical element reference that allows users to explore the periodic table and view detailed information about chemical elements.

Chemistry Explorer provides a lightweight reference environment inside the browser, enabling quick exploration of element properties through a responsive periodic table and dynamically generated information cards.

---

⚠️ Disclaimer
This project is intended for educational and experimental purposes only. It is not a substitute for authoritative scientific references. Some dataset entries, particularly synthetic and theoretical elements, may contain inaccuracies.

---

## Usage

### Option 1 — Quick Use (Recommended)

1. Download `dist/chemistry-explorer.html`
2. Start localhost server from repository root 
```
    py tools/server.py
```
3. Open in any browser
4. Select an element from the periodic table

* Works offline once cached.
* No installation required.

---

### Option 2 — Development Mode

1. Clone the repository
2. Start localhost server from repository root 
```
    py tools/server.py
```
2. Open:
```text
src/index.html
```
3. Edit files in `src/`
4. Build using
```text
py scripts/build.py
```

Recommended for learning, experimentation, and development.

---

## Features

* Information for all 118 officially recognized elements
* Experimental/theoretical entries for elements 119 and 120
* Interactive periodic table
* Responsive element cells for desktop and mobile devices
* Element details displayed when a cell is selected
* Atomic number, symbol, name, group, period, and block information
* Valency, atomic mass, and neutron count
* Expandable additional information section
* Electron configuration and oxidation states
* Atomic, ionic, and covalent radii
* Ionization energy and electron affinity
* Density, melting point, and boiling point
* Bonding type and crystal structure
* Discovery information
* Natural occurrence and radioactivity information
* Toxicity and common uses
* Isotope, atomicity, and molecular mass information
* Smooth element navigation
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

## Project Overview

This project uses two modes:

### Development Mode

* Modular structure
* Easier maintenance
* Easier debugging
* Simple to modify and extend
* Suitable for learning and experimentation

### Standalone Mode

* Single HTML file
* Fully portable
* Works offline once cached
* No external dependencies

---

## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript
* JavaScript DOM API
* Python (Server stuff and build script)

---

## Limitations

* Not intended to replace authoritative scientific references
* Some scientific data may be inaccurate
* Synthetic and theoretical element data may be incomplete or speculative
* No external scientific database or API
* Needs localhost server to work
* Browser-dependent behavior

---

## Live Demo

Try it here:
https:/akpandey-dev.github.io/chemistry-explorer

---

## Contributing

* Open for learning and experimentation
* Bugs and data inaccuracies may exist
* Scientific corrections are welcome
* Improvements and new features are welcome

---

## License

Open-source for educational, experimental, and personal use.
