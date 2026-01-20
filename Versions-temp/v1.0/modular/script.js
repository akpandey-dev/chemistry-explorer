const colorMap = {
  "nonmetal": "#a0e6ff",
  "metalloid": "#ffd580",
  "alkali metal": "#ff9e9e",
  "alkaline earth metal": "#ffcc99",
  "transition metal": "#c0ffc0",
  "halogen": "#b3b3ff",
  "noble gas": "#e0b3ff",
  "lanthanide": "#ff6666",
  "actinide": "#66ff99",
  "post-transition metal": "#ffb3b3"
};

let allElements = []; // cache all elements

async function loadElements() {
  try {
    const response = await fetch("http://localhost:8080/elements.json");
    allElements = await response.json();
    renderPeriodicTable(allElements);
  } catch (error) {
    console.error("❌ Error loading JSON:", error);
  }
}

function renderPeriodicTable(elements) {
  const table = document.getElementById("periodic-table");
  table.innerHTML = "";

  elements.forEach((el) => {
    const cell = document.createElement("div");
    cell.className = "element";

    const category = (el.category || "").toLowerCase().trim();
    const color = colorMap[category] || "var(--panel-bg)";
    cell.style.backgroundColor = color;

    const blockColors = {
      s: "#00ffff",
      p: "#ff00ff",
      d: "#00ff00",
      f: "#ff8800",
    };
    const borderColor = blockColors[el.block] || "#999";
    cell.style.border = `2px solid ${borderColor}`;

    cell.title = `${el.name} (${el.atomicMass})`;

    cell.innerHTML = `
      <div class="period-label">${el.period}</div>
      <div class="group-label">${el.group}</div>
      <div class="number">${el.atomicNumber}</div>
      <div class="symbol">${el.symbol}</div>
    `;

    table.appendChild(cell);


// RIGHT-CLICK = open popup
cell.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  openPopup(el);
});

// LONG PRESS = open popup
let pressTimer;
cell.addEventListener("touchstart", () => {
  pressTimer = setTimeout(() => openPopup(el), 500);
});
cell.addEventListener("touchend", () => clearTimeout(pressTimer));
  });
}




// =========================
// Popup System
// =========================
const popup = document.getElementById("element-popup");
const popupContent = document.getElementById("popup-content");

// Close popup when clicking outside it
popup.addEventListener("click", (event) => {
  if (event.target === popup) popup.style.display = "none";
});

function openPopup(el) {
  popupContent.innerHTML = `
    <h2 style="color:${colorMap[el.category.toLowerCase()] || 'white'};">
      ${el.symbol} – ${el.name}
    </h2>
    <p><strong>Atomic No:</strong> ${el.atomicNumber}</p>
    <p><strong>Atomic Mass:</strong> ${el.atomicMass}</p>
    <p><strong>Valency:</strong> ${el.valency}</p>
    <p><strong>Category:</strong> ${el.category}</p>
    <p><strong>Block:</strong> ${el.block.toUpperCase()}</p>
    <p><strong>Period:</strong> ${el.period}</p>
    <p><strong>Group:</strong> ${el.group}</p>
  `;

  popup.style.display = "flex";
}




// 🔍 SEARCH FEATURE
function searchElement() {
  const query = document.getElementById("searchbox").value.trim().toLowerCase();
  const method = document.getElementById("searchselect").value;

  if (!query) {
    renderPeriodicTable(allElements);
    return;
  }

  const results = allElements.filter((el) => {
    if (method === "name") return el.name.toLowerCase().includes(query);
    if (method === "symbol") return el.symbol.toLowerCase() === query;
    if (method === "atomicNo") return el.atomicNumber == query;
  });

  let resultDiv = document.getElementById("search-result");

  if (results.length === 0) {
    resultDiv.innerHTML = `<p style="padding:8px;color:red;">No element found!</p>`;
    renderPeriodicTable(allElements);
    return;
  }


  const styleSearch = document.getElementById("searchstyleselect").value;


  if (styleSearch == "brief"){
    // show summary
  resultDiv.innerHTML = results
    .map(
      (el) => `
      <div style="padding:8px;border-bottom:1px solid #333;">
        <strong>${el.name}</strong> (${el.symbol})<br>
        Atomic No: ${el.atomicNumber}<br>
        Atomic Mass: ${el.atomicMass}<br>
        Valency: ${el.valency}<br>
        Category: ${el.category}<br>
        Block: ${el.block.toUpperCase()}
      </div>`
    )
    .join("");


  };

  if (styleSearch == "detail"){
  // show summary
  resultDiv.innerHTML = results
    .map(
      (el) => `
      <div style="padding:8px;border-bottom:1px solid #333;">
        <strong>${el.name}</strong> (${el.symbol})<br>
        Neutrons: ${el.neutrons}<br>
        Atomic No: ${el.atomicNumber}<br>
        Atomic Mass: ${el.atomicMass}<br>
        Atomic Radius: ${el.atomicRadius}<br>
        Ionic Radius: ${el.ionicRadius}<br>
        Valency: ${el.valency}<br>
        Atomicity : ${el.atomicity}<br>
        Molecular Mass: ${el.molecularMass}<br>
        Category: ${el.category}<br>
        Phase: ${el.phase}<br>
        Standard State: ${el.standardState}<br>
        Color: ${el.color}<br>
        Block: ${el.block.toUpperCase()}<br>
        Period: ${el.period}<br>
        Group: ${el.group}<br>
        Density: ${el.density}<br>
        Melting Point: ${el.meltingPoint}<br>
        Boiling Point: ${el.boilingPoint}<br>
        Electron Configuration: ${el.electronConfiguration}<br>
        Electro-Negativity: ${el.electronegativity}<br>
        Covalent Radius: ${el.covalentRadius}<br>
        Ionization Energy: ${el.ionizationEnergy}<br>
        Electron Affinity: ${el.electronAffinity}<br>
        Oxidation States: ${el.oxidationStates}<br>
        Bonding Type: ${el.bondingType}<br>
        Crystal Structure: ${el.crystalStructure}<br>
        Isotopes: ${el.isotopes}<br>
        Radioactive: ${el.radioactive}<br>
        Toxicity: ${el.toxicity}<br>
        Occurrence: ${el.naturalOccurrence}<br>
        Origin: ${el.naturalOrManMade}<br>
        Discovered-by: ${el.discoveredBy}<br>
        Discovered-in: ${el.discoveryYear}<br>
        Uses: ${el.uses}<br>
      </div>`
    )
    .join("");
    }
document.getElementById("clearbtn").style.color = "red";

}
document.getElementById("searchbtn").addEventListener("click", searchElement);
document.getElementById("searchbox").addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchElement();
});


document.getElementById("clearbtn").addEventListener("click", ()=>{   
    document.getElementById("search-result").innerHTML = '';
    document.getElementById("searchbox").value = '';
    document.getElementById("searchselect").selectedIndex = 0 ;
    document.getElementById("searchstyleselect").selectedIndex = 0;
    document.getElementById("clearbtn").style.color = "black";
    

});


loadElements();


/*There may be some inaccuracy in the information. So please verify before use.*/
//Details on elements are generated by AI and thus may be inaccurate.