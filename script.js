const NUM_CHESTS = 88;
let currentFloor = 0;

// Example: 2 floors, with positions as pixel coords
const floors = [
  [
    { x: 260, y: 165, name: "1", price: "0", per: "32", active: false },
    { x: 275, y: 165, name: "2", price: "0", per: "32", active: false },
    { x: 305, y: 137, name: "3", price: "0", per: "32", active: false },
    { x: 320, y: 137, name: "4", price: "0", per: "32", active: false },
    { x: 335, y: 137, name: "5", price: "0", per: "32", active: false },
    { x: 370, y: 122, name: "6", price: "0", per: "32", active: false },
    { x: 385, y: 122, name: "7", price: "0", per: "32", active: false },
    { x: 412, y: 105, name: "8", price: "0", per: "32", active: false },
    { x: 429, y: 105, name: "9", price: "0", per: "32", active: false },
    { x: 444, y: 105, name: "10", price: "0", per: "32", active: false },
    { x: 461, y: 105, name: "11", price: "0", per: "32", active: false },
    { x: 476, y: 105, name: "12", price: "0", per: "32", active: true },
    { x: 492, y: 105, name: "13", price: "0", per: "32", active: true },
    { x: 508, y: 105, name: "14", price: "0", per: "32", active: true },
    { x: 523, y: 105, name: "15", price: "0", per: "32", active: true },
    { x: 555, y: 122, name: "16", price: "0", per: "32", active: true },
    { x: 570, y: 122, name: "17", price: "0", per: "32", active: true },
    { x: 600, y: 137, name: "18", price: "0", per: "32", active: true },
    { x: 615, y: 137, name: "19", price: "0", per: "32", active: true },
    { x: 630, y: 137, name: "20", price: "0", per: "32", active: true },
    { x: 662, y: 165, name: "21", price: "0", per: "32", active: true },
    { x: 677, y: 165, name: "22", price: "0", per: "32", active: true },
  ],

  [
    { x: 20, y: 40, name: "Level 2 Chest 1", price: "15 coins", per: "8%", active: true },
    { x: 60, y: 80, name: "Level 2 Chest 2", price: "30 coins", per: "12%", active: false },
  ],
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
