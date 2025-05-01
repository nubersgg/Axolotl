const NUM_CHESTS = 88;
let currentFloor = 0;

// Example: 2 floors, with positions as pixel coords
const floors = [
  [
    { x: 260, y: 165, name: "empty", price: "0$", per: "32", active: false },
    { x: 275, y: 165, name: "empty", price: "0$", per: "32", active: false },
    { x: 305, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 320, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 335, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 370, y: 122, name: "empty", price: "0$", per: "32", active: false },
    { x: 385, y: 122, name: "empty", price: "0$", per: "32", active: false },
    { x: 412, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 429, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 444, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 461, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 476, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 492, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 508, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 523, y: 105, name: "empty", price: "0$", per: "32", active: false },
    { x: 555, y: 122, name: "empty", price: "0$", per: "32", active: false },
    { x: 570, y: 122, name: "empty", price: "0$", per: "32", active: false },
    { x: 600, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 615, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 630, y: 137, name: "empty", price: "0$", per: "32", active: false },
    { x: 662, y: 165, name: "empty", price: "0$", per: "32", active: false },
    { x: 677, y: 165, name: "empty", price: "0$", per: "32", active: false },
  ],

  [
    { x: 20, y: 40, name: "empty", price: "0$", per: "32", active: false },
    { x: 60, y: 80, name: "empty", price: "0$", per: "32", active: false },
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
