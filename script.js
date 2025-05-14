const NUM_CHESTS = 88;
let currentFloor = 0;
const OriginX =458;
const OriginY = 460;
const scaleFactor = 1.10;

let stockData = {};

// Fetch the Gist JSON data
async function loadStockData() {
  const url = 'https://gist.githubusercontent.com/nubersgg/f8a0c56dc7a243335c62e06f068c6bbe/raw/stock.json';
  const cacheBuster = `?t=${new Date().getTime()}`; // Add a timestamp to prevent caching
  try {
    const response = await fetch(url + cacheBuster);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    stockData = await response.json();
    console.log("Stock data loaded:", stockData); // Debug log
  } catch (err) {
    console.error("Failed to load Gist:", err);
  }
}

const yellowIntensityPerPower = [
  1.0, 0.93, 0.86, 0.79, 0.72,
  0.65, 0.58, 0.51, 0.44, 0.37,
  0.30, 0.23, 0.16, 0.09, 0.04, 0.0
];

function getOverlayColor(power) {
  const maxPower = 15;
  power = Math.max(0, Math.min(maxPower, power));

  let red = 0, green = 0;

  if (power === 0) {
    red = 255;
    green = 0;
  } else if (power === 1) {
    red = 255;
    green = 128;
  } else if (power <= 6) {
    red = 255;
    green = Math.round(128 + ((127 / 5) * (power - 1))); // green goes from 128 to 255
  } else {
    red = Math.round(255 - ((255 / 9) * (power - 6))); // red goes from 255 to 0
    green = 255;
  }

  return {
    backgroundColor: `rgba(${red}, ${green}, 0, 0.3)`,
    borderColor: `rgb(${red}, ${green}, 0)`
  };
}




// Example: 2 floors, with positions as pixel coords
const floors = [
  [ //Floor 1

    //north
    { x: OriginX-220, y: OriginY-315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-202, y: OriginY-315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-171, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-154, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-137, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-105, y: OriginY-364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-90, y: OriginY-364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-55, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-38, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-24, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-8, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+10, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+26, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+40, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+57, y: OriginY-384, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+92, y: OriginY-364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY-364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY-349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY-315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY-315, name: "", price: "0$", per: "32", active: false },

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
    { x: OriginX-222, y: OriginY+315, name: "Bamboo", price: "400$", per: "32", active: true },
    { x: OriginX-204, y: OriginY+315, name: "Bamboo Block", price: "1500$", per: "32", active: true },
    { x: OriginX-173, y: OriginY+349, name: "Flowering Azalea", price: "4000$", per: "32", active: true },
    { x: OriginX-156, y: OriginY+349, name: "Azalea", price: "4000$", per: "32", active: true },
    { x: OriginX-139, y: OriginY+349, name: "Azalea Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX-106, y: OriginY+364, name: "Flowering Azalea Leaves", price: "3000$", per: "32", active: true },
    { x: OriginX-92, y: OriginY+364, name: "Cherry Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Cherry Log", price: "4000$", per: "32", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Mangrove Log", price: "3500$", per: "32", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Dark Oak Log", price: "3500$", per: "32", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Acacia Log", price: "2000$", per: "32", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Jungle Log", price: "3500$", per: "32", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Birch Log", price: "4500$", per: "32", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Spruce Log", price: "3500$", per: "32", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Oak Log", price: "3500$", per: "32", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Mangrove leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Dark oak leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Acacia Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Jungle Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Birch Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "Spruce Leaves", price: "2500$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "Oak Leaves", price: "2500$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY-202, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-171, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-154, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-137, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-105, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-90, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-55, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-38, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-24, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-8, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+10, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+26, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+40, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+57, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+92, name: " Blue Ice", price: "18000$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+107, name: "Packed Ice", price: "2000$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+139, name: "Brown Mushroom Block", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+156, name: "Red Mushroom Block", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+173, name: "Mushroom Stem", price: "3000$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+204, name: "Muddy Mangrove Roots", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+222, name: "Mangrove Roots", price: "0$", per: "32", active: false },
  ],

  [ //Floor 2

    //north
    { x: OriginX-220, y: OriginY-315, name: "Stone", price: "1500$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Stone Bricks", price: "2000$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Mossy Stone Bricks", price: "3500$", per: "32", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Deepslate Bricks", price: "1500$", per: "32", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Deepslate Tiles", price: "1500$", per: "32", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Tuff Bricks", price: "2500$", per: "32", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Mud Bricks", price: "3000$", per: "32", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Bricks", price: "1500$", per: "32", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Smooth Stone", price: "2000$", per: "32", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Polished Granite", price: "2500$", per: "32", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Polished Diorite", price: "2500$", per: "32", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Polished Andesite", price: "2500$", per: "32", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Polished Deepslate", price: "2000$", per: "32", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Polished Tuff", price: "2000$", per: "32", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Chiseled Stone Bricks", price: "2500$", per: "32", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Chiseled Deepslate", price: "2000$", per: "32", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Chiseled Tuff", price: "2000$", per: "32", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Chiseled Tuff Bricks", price: "2000$", per: "32", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Chiseled Sandstone", price: "2000$", per: "32", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Chiseled Red Sandstone", price: "2000$", per: "32", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Calcite", price: "2000$", per: "32", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Smooth Basalt", price: "2500$", per: "32", active: true },

    // East
    { x: OriginX+315, y: OriginY-220, name: "Grass Block", price: "2000$", per: "32", active: true },
    { x: OriginX+315, y: OriginY-202, name: "Podzol", price: "3500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-171, name: "Mycelium", price: "3500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Coarse Dirt", price: "3000$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Dirt", price: "2000$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: "Moss Block", price: "3000$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-90, name: "Mud", price: "2500$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-55, name: "Sand", price: "4000$", per: "64", active: true },
    { x: OriginX+384, y: OriginY-38, name: "Sandstone", price: "2000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-24, name: "Red Sand", price: "4000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-8, name: "Red Sandstone", price: "2000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+10, name: "Gravel", price: "3500$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+26, name: "Clay", price: "2000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+40, name: "Mossy Cobblestone", price: "3500$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+57, name: "Cobblestone", price: "1500$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+92, name: "Deepslate", price: "1500$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+107, name: "Cobbled Deepslate", price: "1500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+139, name: "Granite", price: "2000$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+156, name: "Diorite", price: "2000$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+173, name: "Andesite", price: "2000$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+204, name: "Dripstone Block", price: "2000$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+222, name: "Tuff", price: "2000$", per: "32", active: true },

    // South
    { x: OriginX-222, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: "Pink Terracotta", price: "2500$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: "Magenta Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Purple Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Blue Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Light Blue Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Cyan Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Green Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Lime Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Yellow Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Orange Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Red Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Brown Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Black Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Gray Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Light Gray Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "White Terracotta", price: "2500$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "Terracotta", price: "2500$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "Amethyst Block", price: "2500$", per: "32", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Quartz Block", price: "17500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-171, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-154, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-137, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-105, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-90, name: "Pink Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Magenta Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Purple Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Blue Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Light Blue Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Cyan Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Green Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Lime Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Yellow Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Orange Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Red Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Brown Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Black Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Gray Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Light Gray Concrete Powder", price: "6500$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+222, name: "White Concrete Powder", price: "6500$", per: "32", active: true },
  ],

  [ //Floor 3

    //north
    { x: OriginX-220, y: OriginY-315, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-202, y: OriginY-315, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-171, y: OriginY-349, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-154, y: OriginY-349, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-137, y: OriginY-349, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-105, y: OriginY-364, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-90, y: OriginY-364, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-55, y: OriginY-384, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-38, y: OriginY-384, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-24, y: OriginY-384, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-8, y: OriginY-384, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+10, y: OriginY-384, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+26, y: OriginY-384, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+40, y: OriginY-384, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+57, y: OriginY-384, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+92, y: OriginY-364, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY-364, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY-349, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY-349, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY-349, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY-315, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY-315, name: " 22", price: "0$", per: "32", active: false },

    // East
    { x: OriginX+315, y: OriginY-220, name: "Lantern", price: "2500$", per: "32", active: true },
    { x: OriginX+315, y: OriginY-202, name: "Soul Lantern", price: "1500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-171, name: "Ochre Froglight", price: "6000$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Verdant Froglight", price: "6000$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Pearlescent Froglight", price: "6000$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: "Redstone Lamp", price: "6000$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-90, name: "Shroomlight", price: "6000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-55, name: "End Rod", price: "3250$", per: "16", active: true },
    { x: OriginX+384, y: OriginY-38, name: "Chain", price: "1500$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-24, name: "Painting", price: "500$", per: "8", active: true },
    { x: OriginX+384, y: OriginY-8, name: "Flower Pot", price: "1000$", per: "8", active: true },
    { x: OriginX+384, y: OriginY+10, name: "Decorated Pot", price: "1000$", per: "8", active: true },
    { x: OriginX+384, y: OriginY+26, name: "Ladder", price: "751$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+40, name: "Scaffolding", price: "2000$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+57, name: "Beehive", price: "2000$", per: "16", active: true },
    { x: OriginX+364, y: OriginY+92, name: "Lodestone", price: "8000$", per: "8", active: true },
    { x: OriginX+364, y: OriginY+107, name: "Copper Bulb", price: "2500$", per: "8", active: true },
    { x: OriginX+349, y: OriginY+139, name: "Beacon", price: "100000$", per: "1", active: true },
    { x: OriginX+349, y: OriginY+156, name: "Glowstone", price: "4500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+173, name: "Sea Lantern", price: "4000$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+204, name: "Cartography Table", price: "800$", per: "8", active: true },
    { x: OriginX+315, y: OriginY+222, name: "Loom", price: "500$", per: "8", active: true },

    // South
    { x: OriginX-222, y: OriginY+315, name: "Pointed Dripstone", price: "2000$", per: "16", active: true },
    { x: OriginX-204, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: "Glass", price: "2500$", per: "32", active: true },
    { x: OriginX-156, y: OriginY+349, name: "White Wool", price: "2000$", per: "32", active: true },
    { x: OriginX-139, y: OriginY+349, name: "Candle", price: "500$", per: "16", active: true },
    { x: OriginX-106, y: OriginY+364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: "Pink Dye", price: "500$", per: "16", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Magenta Dye", price: "500$", per: "16", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Purple Dye", price: "500$", per: "16", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Blue Dye", price: "500$", per: "16", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Light Blue Dye", price: "500$", per: "16", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Cyan Dye", price: "500$", per: "16", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Green Dye", price: "500$", per: "16", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Lime Dye", price: "500$", per: "16", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Yellow Dye", price: "500$", per: "16", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Orange Dye", price: "500$", per: "16", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Red Dye", price: "500$", per: "16", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Brown Dye", price: "500$", per: "16", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Black Dye", price: "500$", per: "16", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Gray Dye", price: "500$", per: "16", active: true },
    { x: OriginX+204, y: OriginY+317, name: "Light Gray Dye", price: "500$", per: "16", active: true },
    { x: OriginX+222, y: OriginY+317, name: "White Dye", price: "500$", per: "16", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "Bell", price: "10000$", per: "1", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Ender Chest", price: "10000$", per: "1", active: true },
    { x: OriginX-349, y: OriginY-171, name: "Chiseled Bookshelf", price: "1000$", per: "16", active: true },
    { x: OriginX-349, y: OriginY-154, name: "Bookshelf", price: "2000$", per: "16", active: true },
    { x: OriginX-349, y: OriginY-137, name: "Lectern", price: "1000$", per: "16", active: true },
    { x: OriginX-364, y: OriginY-105, name: "Jukebox", price: "750$", per: "1", active: true },
    { x: OriginX-364, y: OriginY-90, name: "Note Block", price: "1000$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Soul Campfire", price: "850$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Campfire", price: "750$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Cauldron", price: "1000$", per: "8", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Brewing Stand", price: "1500$", per: "16", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Enchanting Table", price: "2000$", per: "8", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Netherite Upgrade Smithing Template", price: "20000$", per: "1", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Smithing Table", price: "2000$", per: "8", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Anvil", price: "1500$", per: "8", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Grindstone", price: "500$", per: "16", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Stonecutter", price: "500$", per: "16", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Blast Furnace", price: "1200$", per: "8", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Smoker", price: "1200$", per: "8", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Furnace", price: "1000$", per: "8", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Barrel", price: "1500$", per: "16", active: true },
    { x: OriginX-315, y: OriginY+222, name: "Chest", price: "1500$", per: "16", active: true },
  ],

  [ //Floor 4

    //north
    { x: OriginX-220, y: OriginY-315, name: "Chorus Fruit", price: "2000$", per: "16", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Chorus Flower", price: "1500$", per: "16", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Cookie", price: "1000$", per: "16", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Cake", price: "250$", per: "1", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Pumpkin Pie", price: "1000$", per: "16", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Bread", price: "1000$", per: "16", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Golden Carrot", price: "1500$", per: "16", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Bamboo", price: "850$", per: "16", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Sugar Cane", price: "1000$", per: "16", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Cactus", price: "1000$", per: "16", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Carrot", price: "1000$", per: "16", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Potato", price: "1000$", per: "16", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Beetroot", price: "1000$", per: "16", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Pumpkin", price: "1000$", per: "8", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Melon", price: "1000$", per: "8", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Glow Berries", price: "1000$", per: "16", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Sweet Berries", price: "1000$", per: "16", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Beetroot Seeds", price: "1000$", per: "16", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Melon Seeds", price: "1000$", per: "16", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Pumpkin Seeds", price: "1000$", per: "16", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Cocoa Beans", price: "1000$", per: "16", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Wheat Seeds", price: "1000$", per: "16", active: true },

    // East
    { x: OriginX+315, y: OriginY-220, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY-202, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-171, name: "Firework Rocket Level 3", price: "2750$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Firework Rocket Level 2", price: "2500$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Firework Rocket Level 1", price: "2250$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-90, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-55, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-38, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-24, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-8, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+10, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+26, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+40, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+57, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+92, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+107, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+139, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+156, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+173, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+204, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+222, name: " 22", price: "0$", per: "32", active: false },

    // South
    { x: OriginX-222, y: OriginY+315, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: "Cooked Cod", price: "0$", per: "32", active: true },
    { x: OriginX-92, y: OriginY+364, name: "Slimeball", price: "0$", per: "32", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Rabbit's Foot", price: "0$", per: "32", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Leather", price: "0$", per: "32", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Rabbit Hide", price: "0$", per: "32", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Cooked Porkchop", price: "0$", per: "32", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Cooked Rabbit", price: "0$", per: "32", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Cooked Chicken", price: "0$", per: "32", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Steak", price: "0$", per: "32", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Cooked Mutton", price: "0$", per: "32", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Ender Pearl", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Spider Eye", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Blaze Rod", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Arrow", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Bone", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "Rotten Flesh", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "Gunpowder", price: "0$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "Dispenser", price: "4500$", per: "16", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Dropper", price: "2000$", per: "16", active: true },
    { x: OriginX-349, y: OriginY-171, name: "Tripwire Hook", price: "500$", per: "16", active: true },
    { x: OriginX-349, y: OriginY-154, name: "Stone Button", price: "750$", per: "16", active: true },
    { x: OriginX-349, y: OriginY-137, name: "Lever", price: "500$", per: "16", active: true },
    { x: OriginX-364, y: OriginY-105, name: "Observer", price: "4000$", per: "16", active: true },
    { x: OriginX-364, y: OriginY-90, name: "Crafter", price: "4000$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Sculk Sensor", price: "4000$", per: "8", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Target", price: "2750$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Daylight Detector", price: "5000$", per: "8", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Stone Pressure Plate", price: "1500$", per: "16", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Comparator", price: "2500$", per: "16", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Repeater", price: "1500$", per: "16", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Redstone Torch", price: "250$", per: "16", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Redstone Block", price: "5000$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Sticky Piston", price: "2500$", per: "16", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Piston", price: "2500$", per: "16", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Hopper", price: "2000$", per: "16", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Chest", price: "1500$", per: "16", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Trapped Chest", price: "1750$", per: "16", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Honey Block", price: "1500$", per: "16", active: true },
    { x: OriginX-315, y: OriginY+222, name: "Slime Block", price: "1500$", per: "16", active: true },
  ],

  [ //Floor 5

    //north
    { x: OriginX-220, y: OriginY-315, name: "Bubble Coral Block", price: "4000$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Tube Coral Block", price: "4000$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Brain Coral Block", price: "4000$", per: "32", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Horn Coral Block", price: "4000$", per: "32", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Fire Coral Block", price: "4000$", per: "32", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Bubble Coral Fan", price: "3000$", per: "32", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Tube Coral Fan", price: "3000$", per: "32", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Brain Coral Fan", price: "3000$", per: "32", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Horn Coral Fan", price: "3000$", per: "32", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Fire Coral Fan", price: "3000$", per: "32", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Bubble Coral", price: "3000$", per: "32", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Tube Coral", price: "3000$", per: "32", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Brain Coral", price: "3000$", per: "32", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Horn Coral", price: "3000$", per: "32", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Fire Coral", price: "3000$", per: "32", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Sea Pickle", price: "3000$", per: "32", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Kelp", price: "1500$", per: "32", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Lily Pad", price: "3000$", per: "32", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Dried Kelp Block", price: "2000$", per: "32", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Prismarine Bricks", price: "2500$", per: "32", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Dark prismarine", price: "2500$", per: "32", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Prismarine", price: "2500$", per: "32", active: true },

    // East
    { x: OriginX+315, y: OriginY-220, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY-202, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-171, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-154, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-137, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-105, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-90, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-55, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-38, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-24, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-8, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+10, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+26, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+40, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+57, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+92, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+107, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+139, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+156, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+173, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+204, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+222, name: " 22", price: "0$", per: "32", active: false },

    // South
    { x: OriginX-222, y: OriginY+315, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-57, y: OriginY+384, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-40, y: OriginY+384, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-26, y: OriginY+384, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-10, y: OriginY+384, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+8, y: OriginY+386, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+24, y: OriginY+386, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+38, y: OriginY+386, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+55, y: OriginY+386, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+90, y: OriginY+368, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY+368, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY+351, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY+351, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY+351, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY+317, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY+317, name: " 22", price: "0$", per: "32", active: false },

    // West
    { x: OriginX-315, y: OriginY-220, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY-202, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-171, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-154, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-137, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-105, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-90, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-55, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-38, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-24, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY-8, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+10, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+26, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+40, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX-384, y: OriginY+57, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+92, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY+107, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+139, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+156, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY+173, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+204, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY+222, name: " 22", price: "0$", per: "32", active: false },
  ],

  [ //Floor 6

    //north
    { x: OriginX-220, y: OriginY-315, name: "Sculk", price: "3000$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Sculk Vein", price: "3500$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Sculk Catalyst", price: "2500$", per: "8", active: true },
    { x: OriginX-154, y: OriginY-349, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-137, y: OriginY-349, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-105, y: OriginY-364, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-90, y: OriginY-364, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-55, y: OriginY-384, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-38, y: OriginY-384, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-24, y: OriginY-384, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-8, y: OriginY-384, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+10, y: OriginY-384, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+26, y: OriginY-384, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+40, y: OriginY-384, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+57, y: OriginY-384, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+92, y: OriginY-364, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY-364, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY-349, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY-349, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+173, y: OriginY-349, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+204, y: OriginY-315, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+222, y: OriginY-315, name: " 22", price: "0$", per: "32", active: false },

    //East
    { x: OriginX+315, y: OriginY-220, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY-202, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-171, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-154, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY-137, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-105, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY-90, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-55, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-38, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-24, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY-8, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+10, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+26, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+40, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+384, y: OriginY+57, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+92, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+364, y: OriginY+107, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+139, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+156, name: " 19", price: "0$", per: "32", active: false },
    { x: OriginX+349, y: OriginY+173, name: " 20", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+204, name: " 21", price: "0$", per: "32", active: false },
    { x: OriginX+315, y: OriginY+222, name: " 22", price: "0$", per: "32", active: false },

    // South
    { x: OriginX-222, y: OriginY+315, name: " 1", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: " 2", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: " 3", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: " 4", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: " 5", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: " 6", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: " 7", price: "0$", per: "32", active: false },
    { x: OriginX-57, y: OriginY+384, name: " 8", price: "0$", per: "32", active: false },
    { x: OriginX-40, y: OriginY+384, name: " 9", price: "0$", per: "32", active: false },
    { x: OriginX-26, y: OriginY+384, name: " 10", price: "0$", per: "32", active: false },
    { x: OriginX-10, y: OriginY+384, name: " 11", price: "0$", per: "32", active: false },
    { x: OriginX+8, y: OriginY+386, name: " 12", price: "0$", per: "32", active: false },
    { x: OriginX+24, y: OriginY+386, name: " 13", price: "0$", per: "32", active: false },
    { x: OriginX+38, y: OriginY+386, name: " 14", price: "0$", per: "32", active: false },
    { x: OriginX+55, y: OriginY+386, name: " 15", price: "0$", per: "32", active: false },
    { x: OriginX+90, y: OriginY+368, name: " 16", price: "0$", per: "32", active: false },
    { x: OriginX+107, y: OriginY+368, name: " 17", price: "0$", per: "32", active: false },
    { x: OriginX+139, y: OriginY+351, name: " 18", price: "0$", per: "32", active: false },
    { x: OriginX+156, y: OriginY+351, name: "Purpur Block", price: "3000$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Purpur Pillar", price: "3000$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "End Stone Bricks", price: "5000$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "End Stone", price: "5000$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "Chiseled Nether Bricks", price: "2500$", per: "32", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Nether Bricks", price: "2500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-171, name: "Nether Gold Ore", price: "2500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-154, name: "Magma Block", price: "2000$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-137, name: "Blackstone", price: "2500$", per: "32", active: true },
    { x: OriginX-364, y: OriginY-105, name: "Obsidian", price: "8000$", per: "16", active: true },
    { x: OriginX-364, y: OriginY-90, name: "Gilded Blackstone", price: "5000$", per: "16", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Polished Basalt", price: "2000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Basalt", price: "2000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Polished Blackstone Bricks", price: "3000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Cracked Polished Blackstone Bricks", price: "3000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Nether Wart Block", price: "3000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Crimson Stem", price: "4000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Warped Wart Block", price: "3000$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Warped Stem", price: "4000$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Shroomlight", price: "5000$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Bone Block", price: "2500$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Warped Nylium", price: "3000$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Crimson Nylium", price: "3000$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Netherrack", price: "1500$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Soul Sand", price: "2000$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+222, name: "Soul Soil", price: "2000$", per: "32", active: true },,
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

    // Apply the scaling factor to the chest position
    div.style.left = OriginX + (chest.x - OriginX) * scaleFactor + "px";
    div.style.top = OriginY + (chest.y - OriginY) * scaleFactor + "px";

    // Fetch power level from stockData
    const key = chest.name.toLowerCase().replace(/ /g, " ");
    const chestData = stockData[key];
    console.log(`Key: ${key}, Data:`, chestData); // Debug log

    if (chestData) {
      if (chestData.power !== undefined) {
        const colors = getOverlayColor(chestData.power);
        div.style.backgroundColor = colors.backgroundColor; // Semi-transparent background
        div.style.borderColor = colors.borderColor; // Fully opaque border
      } else {
        console.warn(`Power level missing for key: ${key}`);
      }
    } else {
      console.warn(`No data found for key: ${key}`);
    }

    // Add click event to show chest info
    div.onclick = () => showInfo(chest);
    grid.appendChild(div);
  });
}

function showInfo(chest) {
  // Highlight the chest
  const grid = document.getElementById("chest-grid");
  const allChests = grid.querySelectorAll(".chest");
  allChests.forEach((div) => div.classList.remove("highlight")); // Remove highlight from all chests

  const chestDiv = Array.from(allChests).find((div) => {
    const left = Math.round(parseFloat(div.style.left)); // Parse and round the left position
    const top = Math.round(parseFloat(div.style.top)); // Parse and round the top position
    const expectedLeft = Math.round(
      OriginX + (chest.x - OriginX) * scaleFactor
    );
    const expectedTop = Math.round(
      OriginY + (chest.y - OriginY) * scaleFactor
    );
    return left === expectedLeft && top === expectedTop;
  });

  if (chestDiv) {
    chestDiv.classList.add("highlight");
  }

  // Fetch power level from stockData
  const key = chest.name.toLowerCase().replace(/ /g, "_");
  const chestData = stockData[key];
  const power = chestData && chestData.power !== undefined ? chestData.power : "N/A";

  // Update the info panel
  document.getElementById("info-name").textContent = chest.name;
  document.getElementById("info-price").textContent = "Price: " + chest.price;
  document.getElementById("info-per").textContent = "Per: " + chest.per;

  // Display the chest image in the info section
  const infoImage = document.getElementById("info-image");
  const imagePath = getChestImage(chest.name);
  infoImage.src = imagePath;
  infoImage.alt = chest.name;
  infoImage.onerror = () => {
    infoImage.src = "Images/default.png"; // Fallback image if the chest image is missing
  };
}

const floorNames = [
  "Nature",
  "Building Blocks",
  "Decoration",
  "Farming and Utility",
  "Ocean",
  "Dimensions and Structures",
];

// Get the floor selector container
const selector = document.getElementById("floor-selector");

// Dynamically create floor buttons
floorNames.forEach((floorName, index) => {
  const button = document.createElement("button");
  button.classList.add("floor-item");

  // Add the image
  const img = document.createElement("img");
  img.src = `floors/floorbutton${index + 1}.png`; // Path to the image
  img.alt = floorName;
  button.appendChild(img);

  // Add the text
  const span = document.createElement("span");
  span.textContent = floorName;
  button.appendChild(span);

  // Add click event to load the floor
  button.onclick = () => {
    loadFloor(index); // Load the selected floor
    highlightFloor(index); // Highlight the selected floor
  };

  // Append the button to the selector
  selector.appendChild(button);
});

// Function to highlight the current floor
function highlightFloor(index) {
  // Remove the 'active' class from all floor buttons
  const allButtons = document.querySelectorAll(".floor-item");
  allButtons.forEach((btn) => btn.classList.remove("active"));

  // Add the 'active' class to the selected floor button
  allButtons[index].classList.add("active");
}

// Load the first floor by default and highlight it
loadFloor(0);
highlightFloor(0);


// Load the first floor by default

// Get references to the search bar and suggestions container
const searchBar = document.getElementById("search-bar");
const suggestions = document.getElementById("suggestions");

// Flatten all chest data into a single array for searching
const allChests = floors.flat();

// Function to filter chests based on the search query
function filterChests(query) {
  return allChests.filter((chest) =>
    chest.name.toLowerCase().includes(query.toLowerCase())
  );
}

// Function to display suggestions
function showSuggestions(matches) {
  suggestions.innerHTML = ""; // Clear previous suggestions

  matches.forEach((chest) => {
    const li = document.createElement("li");
    li.textContent = chest.name;
    li.onclick = () => {
      // Switch to the correct floor if necessary
      const chestFloorIndex = floors.findIndex((floor) =>
        floor.includes(chest)
      );
      if (chestFloorIndex !== currentFloor) {
        loadFloor(chestFloorIndex); // Load the correct floor
        highlightFloor(chestFloorIndex); // Highlight the correct floor
      }

      showInfo(chest); // Show chest info and highlight it
      searchBar.value = chest.name; // Set the search bar value to the selected chest
      suggestions.innerHTML = ""; // Clear suggestions
    };
    suggestions.appendChild(li);
  });
}

// Event listener for the search bar
searchBar.addEventListener("input", (e) => {
  const query = e.target.value.trim();
  if (query === "") {
    suggestions.innerHTML = ""; // Clear suggestions if the query is empty
    return;
  }

  const matches = filterChests(query); // Get matching chests
  showSuggestions(matches); // Display suggestions
});

async function init() {
  await loadStockData(); // Load stock data from the Gist
  loadFloor(0); // Load the first floor
  highlightFloor(0); // Highlight the first floor
}

init();
