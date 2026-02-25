let elements = [];

async function loadElements() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/akp-labs/periodic-table/main/src/data/element-data.json");
        elements = await response.json();
        renderPeriodicTable(elements);
    } catch (error) {
        console.error("Error loading element data:", error);
    }
}
loadElements();

// Most of the data above is AI generated and can contain inaccuracies



const periodicTable = document.getElementById("periodic-table");
const selectedElement = document.getElementById("selected-element");


function renderPeriodicTable(allElements) {

    periodicTable.innerHTML = "";
    allElements.forEach((element) => {

        const cell = document.createElement("div");
        cell.className = "periodic-element";
        cell.dataset.element = element.id;
        cell.innerHTML = `
      <div class="period-label">${element.period}</div>
      <div class="group-label">${element.group}</div>
      <div class="number">${element.atomicNumber}</div>
      <div class="symbol">${element.symbol}</div>
      <div class="name">${element.name}</div>      
        `;

        periodicTable.appendChild(cell);

        cell.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            openPopup(element);
        });

        let pressTimer;
        cell.addEventListener("touchstart", () => {
            pressTimer = setTimeout(() => openPopup(element), 900);
        });
        cell.addEventListener("touchend", () => clearTimeout(pressTimer));
        cell.addEventListener("touchmove", () => clearTimeout(pressTimer));


    });}


const popup = document.getElementById("element-popup");
const popupContent = document.getElementById("element-popup-content");


popup.addEventListener("click", (event) => {
  if (event.target === popup) popup.style.display = "none";
  document.body.style.overflow = "auto";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

function openPopup(el) {
  document.body.style.overflow = "hidden";
  popupContent.innerHTML = `
  ${createElementCard(el)}
  `;
  popup.style.display = "flex";
  popupContent.style.overflowX = "auto";
}


function createElementCard(element) {

    return `

        <div class="element-header">
        <div class="element-symbol">
            ${element.symbol}
        </div>
        <div class="element-number">
            #${element.atomicNumber}
        </div>
        </div>
        <div class="element-name">
            ${element.name}
        </div>

        <div class="element-info">

          <strong>Group</strong>
          <span>${element.group ?? "-"}</span>

          <strong>Period</strong>
          <span>${element.period ?? "-"}</span>

          <strong>Block</strong>
          <span>${element.block ?? "-"}</span>

          <strong>Valency</strong>
          <span>${element.valency ?? "-"}</span>

          <strong>Atomic Mass</strong>
          <span>${element.atomicMass ?? "-"}</span>

          <strong>Neutrons</strong>
          <span>${element.neutrons ?? "-"}</span>

        </div>
        
        <hr>


<details>

<summary>More Information</summary>

<div class="element-info">

<strong>Category</strong>
<span>${element.category ?? "-"}</span>

<strong>Phase</strong>
<span>${element.phase ?? "-"}</span>

<strong>Standard State</strong>
<span>${element.standardState ?? "-"}</span>

<strong>Color</strong>
<span>${element.color ?? "-"}</span>

<strong>Electron Configuration</strong>
<span>${element.electronConfiguration ?? "-"}</span>

<strong>Oxidation States</strong>
<span>${element.oxidationStates ?? "-"}</span>

<strong>Ionization Energy</strong>
<span>${element.ionizationEnergy ?? "-"}</span>

<strong>Electron Affinity</strong>
<span>${element.electronAffinity ?? "-"}</span>

<strong>Atomic Radius</strong>
<span>${element.atomicRadius ?? "-"}</span>

<strong>Ionic Radius</strong>
<span>${element.ionicRadius ?? "-"}</span>

<strong>Covalent Radius</strong>
<span>${element.covalentRadius ?? "-"}</span>

<strong>Density</strong>
<span>${element.density ?? "-"}</span>

<strong>Melting Point</strong>
<span>${element.meltingPoint ?? "-"}</span>

<strong>Boiling Point</strong>
<span>${element.boilingPoint ?? "-"}</span>

<strong>Bonding Type</strong>
<span>${element.bondingType ?? "-"}</span>

<strong>Crystal Structure</strong>
<span>${element.crystalStructure ?? "-"}</span>

<strong>Natural Occurrence</strong>
<span>${element.naturalOccurrence ?? "-"}</span>

<strong>Radioactive</strong>
<span>${element.radioactive ?? "-"}</span>

<strong>Toxicity</strong>
<span>${element.toxicity ?? "-"}</span>

<strong>Uses</strong>
<span>${element.uses ?? "-"}</span>

<strong>Isotopes</strong>
<span>${element.isotopes ?? "-"}</span>

<strong>Atomicity</strong>
<span>${element.atomicity ?? "-"}</span>

<strong>Molecular Mass</strong>
<span>${element.molecularMass ?? "-"}</span>

<strong>Discovery Year</strong>
<span>${element.discoveryYear ?? "-"}</span>

<strong>Discovered By</strong>
<span>${element.discoveredBy ?? "-"}</s</div>

</details>

    `;
  }




