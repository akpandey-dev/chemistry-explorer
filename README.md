# Periodic Table

A lightweight, browser-based chemical element reference built with pure HTML, CSS, and JavaScript.

Periodic Table provides quick access to detailed information about chemical elements through a clean, responsive, cell +  card-based interface. Browse using the cells of elements.

Designed as a compact, dependency-free reference tool that works entirely offline without external libraries or frameworks.

> **Note:** This project is intended for educational and reference purposes. The dataset is continuously being expanded and refined.

---

## Features

* Information for all **118 officially recognized elements**
* Includes **experimental elements 119 (Ununennium)** and **120 (Unbinilium)** as theoretical entries
* Includes a dynamic periodic table
* Displays essential information when clicked on a cell:

  * Symbol
  * Name
  * Atomic Number
  * Group
  * Period
  * Block
  * Valency
  * Atomic Mass
  * Neutron Count
* Expandable **More Information** section containing additional scientific properties such as:

  * Category
  * Electron Configuration
  * Phase
  * Standard State
  * Oxidation States
  * Electronegativity
  * Atomic, Ionic, and Covalent Radii
  * Ionization Energy
  * Electron Affinity
  * Density
  * Melting and Boiling Points
  * Bonding Type
  * Crystal Structure
  * Color
  * Discovery Information
  * Natural Occurrence
  * Radioactivity
  * Toxicity
  * Uses
  * Isotopes
  * Molecular Mass
  * Atomicity
* Fast cell-based navigation
* Responsive card and cell layout for desktop and mobile devices
* Smooth scrolling
* Scroll-to-top button
* Dynamically generated interface using JavaScript
* Periodic table
* Fully offline
* No external libraries or dependencies

> **Note:** Some scientific data—particularly for recently discovered, synthetic, and theoretical elements—was generated or supplemented using AI assistance and may contain inaccuracies. Always verify important scientific information using authoritative sources.

---

## Project Structure

```text
periodic-table/
├─ README.md
├─ .gitignore
├─ LICXENSE
├─ index.html 
├─ src/
└─ dist/
```

The project is available in two versions:

* **src** — Separate HTML, CSS, JavaScript, and data files intended for development and customization.
* **dist** — A single self-contained HTML file for convenient offline use and distribution.

---

## Usage

No installation is required.

### Src Version

The modular version separates the project into multiple files:

* `index.html`
* `style.css`
* `script.js`

Benefits:

* Easier maintenance
* Cleaner code organization
* Simpler debugging
* Better scalability for future features

---

### Dist Version

The standalone version packages everything into a single HTML file.

Benefits:

* Easy to share
* No setup required
* Convenient for quick testing
* Portable and self-contained

---

## Goals

Provide a lightweight, offline, and easy-to-use reference for chemical elements while keeping the project simple, fast, and dependency-free.

The dataset is not yet 100% verified. If you find inaccuracies or have improvements, contributions are always welcome.


---


## Technology Stack

* HTML5
* CSS3
* Vanilla JavaScript (DOM)

---

## License

This project is open for learning, modification, experimentation, and personal use.
