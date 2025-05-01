const NUM_CHESTS = 88;
let currentFloor = 0;
const OriginX =497;
const OriginY = 496;
// Example: 2 floors, with positions as pixel coords
const floors = [
  [ //Floor 1

    //North
    { x: OriginX-220, y: OriginY-315, name: "Oak Leaves", price: "0$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Spruce Leaves", price: "0$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Birch Leaves", price: "0$", per: "32", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Jungle Leaves", price: "0$", per: "32", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Acacia Leaves", price: "0$", per: "32", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Dark oak leaves", price: "0$", per: "32", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Mangrove leaves", price: "0$", per: "32", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Oak Log", price: "0$", per: "32", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Spruce Log", price: "0$", per: "32", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Birch Log", price: "0$", per: "32", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Jungle Log", price: "0$", per: "32", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Acacia Log", price: "0$", per: "32", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Dark Oak Log", price: "0$", per: "32", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Mangrove Log", price: "0$", per: "32", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Cherry Log", price: "0$", per: "32", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Cheery Leaves", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Flowering Azalea Leaves", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Azalea Leaves", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Azalea", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Flowering Azalea", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Bamboo Block", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Bamboo", price: "0$", per: "32", active: true },

    // East
    { x: OriginX+315, y: OriginY-220, name: "Poppy", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY-202, name: "Blue Orchid", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-171, name: "Allium", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Azure Bluet", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Red Tulip", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: "Orange Tulip", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-90, name: "White Tulip", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-55, name: "Pink Tulip", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-38, name: "Oxeye Daisy", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-24, name: "CornFlower", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-8, name: "Lily of the Valley", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+10, name: "Torchflower", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+26, name: "Wither Rose", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+40, name: "Pink Petals", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+57, name: "Spore Blossom", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+92, name: "Sunflower", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+107, name: "Rose Bush", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+139, name: "Peony", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+156, name: "Lilac", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+173, name: "Pitcher Plant", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+204, name: "Red Mushroom", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+222, name: "Brown Mushroom", price: "0$", per: "32", active: true },

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

  [ //Floor 2
    { x: 20, y: 40, name: "empty", price: "0$", per: "32", active: false },
    { x: 60, y: 80, name: "empty", price: "0$", per: "32", active: false },
  ],
];

function getChestImage(chestName) {
  // Convert chest name to lowercase and replace spaces with underscores
  const formattedName = chestName.toLowerCase().replace(/ /g, "_");
  // Construct the file path
  return `Images/${formattedName}.png`;
}

function loadFloor(index) {
  currentFloor = index;
  document.getElementById("floor-image").src = `floors/floor${index + 1}.png`;
  const grid = document.getElementById("chest-grid");
  grid.innerHTML = ""; // Clear the grid

  floors[index].forEach((chest, i) => {
    const div = document.createElement("div");
    div.classList.add("chest");
    if (!chest.active) div.classList.add("inactive");
    div.style.left = chest.x + "px";
    div.style.top = chest.y + "px";

    // Add click event to show chest info
    div.onclick = () => showInfo(chest);
    grid.appendChild(div);
  });
}

function showInfo(chest) {
  document.getElementById("info-name").textContent = chest.name;
  document.getElementById("info-price").textContent = "Price: " + chest.price;
  document.getElementById("info-per").textContent = "Per: " + chest.per;

  // Display the chest image in the info section
  const infoImage = document.getElementById("info-image");
  const imagePath = getChestImage(chest.name);
  console.log(`Loading image: ${imagePath}`); // Debugging
  infoImage.src = imagePath;
  infoImage.alt = chest.name;
  infoImage.onerror = () => {
    console.log(`Image not found: ${imagePath}, loading default image.`);
    infoImage.src = "Images/default.png"; // Fallback image if the chest image is missing
  };
}

// Create floor buttons
const selector = document.getElementById("floor-selector");
for (let i = 0; i < floors.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Floor ${i + 1}`;
  btn.onclick = () => loadFloor(i);
  selector.appendChild(btn);
}

// Load the first floor by default
loadFloor(0);