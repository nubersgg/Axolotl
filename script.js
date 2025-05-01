const NUM_CHESTS = 88;
let currentFloor = 0;
const OriginX =497;
const OriginY = 496;
// Example: 2 floors, with positions as pixel coords
const floors = [
  [ 
    //North
    { x: OriginX-220, y: OriginY-315, name: "North 1", price: "0$", per: "32", active: false },
    { x: OriginX-202, y: OriginY-315, name: "North 2", price: "0$", per: "32", active: false },
    { x: OriginX-171, y: OriginY-349, name: "North 3", price: "0$", per: "32", active: false },
    { x: OriginX-154, y: OriginY-349, name: "North 4", price: "0$", per: "32", active: false },
    { x: OriginX-137, y: OriginY-349, name: "North 5", price: "0$", per: "32", active: false },
    { x: OriginX-105, y: OriginY-364, name: "North 6", price: "0$", per: "32", active: false },
    { x: OriginX-90, y: OriginY-364, name: "North 7", price: "0$", per: "32", active: false },
    { x: OriginX-55, y: OriginY-384, name: "North 8", price: "0$", per: "32", active: false },
    { x: OriginX-38, y: OriginY-384, name: "North 9", price: "0$", per: "32", active: false },
    { x: OriginX-24, y: OriginY-384, name: "North 10", price: "0$", per: "32", active: false },
    { x: OriginX-8, y: OriginY-384, name: "North 11", price: "0$", per: "32", active: false },
    { x: OriginX+10, y: OriginY-384, name: "North 12", price: "0$", per: "32", active: false },
    { x: OriginX+26, y: OriginY-384, name: "North 13", price: "0$", per: "32", active: false },
    { x: OriginX+40, y: OriginY-384, name: "North 14", price: "0$", per: "32", active: false },
    { x: OriginX+57, y: OriginY-384, name: "North 15", price: "0$", per: "32", active: false },
    { x: OriginX+92, y: OriginY-364, name: "North 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY-364, name: "North 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY-349, name: "North 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY-349, name: "North 19", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY-349, name: "North 20", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY-315, name: "North 21", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY-315, name: "North 22", price: "0$", per: "32", active: false },

    // East
    { x: OriginX+315, y: OriginY-220, name: "East 1", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY-202, name: "East 2", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-171, name: "East 3", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-154, name: "East 4", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-137, name: "East 5", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-105, name: "East 6", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-90, name: "East 7", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-55, name: "East 8", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-38, name: "East 9", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-24, name: "East 10", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-8, name: "East 11", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+10, name: "East 12", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+26, name: "East 13", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+40, name: "East 14", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+57, name: "East 15", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+92, name: "East 16", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+107, name: "East 17", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+139, name: "East 18", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+156, name: "East 19", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+173, name: "East 20", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+204, name: "East 21", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+222, name: "East 22", price: "0$", per: "32", active: false },

    // South
    { x: OriginX-222, y: OriginY+315, name: "South 1", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: "South 2", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: "South 3", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: "South 4", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: "South 5", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: "South 6", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: "South 7", price: "0$", per: "32", active: false },
    { x: OriginX-57, y: OriginY+384, name: "South 8", price: "0$", per: "32", active: false },
    { x: OriginX-40, y: OriginY+384, name: "South 9", price: "0$", per: "32", active: false },
    { x: OriginX-26, y: OriginY+384, name: "South 10", price: "0$", per: "32", active: false },
    { x: OriginX-10, y: OriginY+384, name: "South 11", price: "0$", per: "32", active: false },
    { x: OriginX+8, y: OriginY+386, name: "South 12", price: "0$", per: "32", active: false },
    { x: OriginX+24, y: OriginY+386, name: "South 13", price: "0$", per: "32", active: false },
    { x: OriginX+38, y: OriginY+386, name: "South 14", price: "0$", per: "32", active: false },
    { x: OriginX+55, y: OriginY+386, name: "South 15", price: "0$", per: "32", active: false },
    { x: OriginX+90, y: OriginY+368, name: "South 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY+368, name: "South 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY+351, name: "South 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY+351, name: "South 19", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY+351, name: "South 20", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY+317, name: "South 21", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY+317, name: "South 22", price: "0$", per: "32", active: false },

    // West
    { x: OriginX-315, y: OriginY-220, name: "West 1", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY-202, name: "West 2", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-171, name: "West 3", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-154, name: "West 4", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-137, name: "West 5", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-105, name: "West 6", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-90, name: "West 7", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-55, name: "West 8", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-38, name: "West 9", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-24, name: "West 10", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-8, name: "West 11", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+10, name: "West 12", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+26, name: "West 13", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+40, name: "West 14", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+57, name: "West 15", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+92, name: "West 16", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+107, name: "West 17", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+139, name: "West 18", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+156, name: "West 19", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+173, name: "West 20", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+204, name: "West 21", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+222, name: "West 22", price: "0$", per: "32", active: false },
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
