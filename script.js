const NUM_CHESTS = 88;
let currentFloor = 0;

// Example: 2 floors, with positions as pixel coords
const floors = [
  Array.from({ length: NUM_CHESTS }, (_, i) => ({
    x: (i % 11) * 40,   // 11 per row
    y: Math.floor(i / 11) * 40,
    name: `Chest ${i + 1}`,
    price: `${(i + 1) * 10} coins`,
    per: `${i % 10}%`,
    active: i % 4 !== 0
  })),
  Array.from({ length: NUM_CHESTS }, (_, i) => ({
    x: (i % 11) * 40,
    y: Math.floor(i / 11) * 40,
    name: `Level 2 Chest ${i + 1}`,
    price: `${(i + 1) * 15} coins`,
    per: `${(i + 1) % 15}%`,
    active: i % 5 !== 0
  }))
];

function loadFloor(index) {
  currentFloor = index;
  document.getElementById("floor-image").src = `floors/floor${index + 1}.png`;
  const grid = document.getElementById("chest-grid");
  grid.innerHTML = "";

  floors[index].forEach((chest, i) => {
    const div = document.createElement("div");
    div.classList.add("chest");
    if (!chest.active) div.classList.add("inactive");
    div.style.left = chest.x + "px";
    div.style.top = chest.y + "px";
    div.onclick = () => showInfo(chest);
    grid.appendChild(div);
  });
}

function showInfo(chest) {
  document.getElementById("info-name").textContent = chest.name;
  document.getElementById("info-price").textContent = "Price: " + chest.price;
  document.getElementById("info-per").textContent = "Per: " + chest.per;
}

// Create floor buttons
const selector = document.getElementById("floor-selector");
for (let i = 0; i < floors.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Floor ${i + 1}`;
  btn.onclick = () => loadFloor(i);
  selector.appendChild(btn);
}

loadFloor(0);
