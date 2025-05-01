const NUM_CHESTS = 88;
let currentFloor = 0;
const OriginX =497;
const OriginY = 496;
const scaleFactor = 1.19;
// Example: 2 floors, with positions as pixel coords
const floors = [
  [ //Floor 1

    //north
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
    { x: OriginX-222, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
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

  [ //Floor 2

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

  [ //Floor 4

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

    // Eastd
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

  [ //Floor 5

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

  // Update the info panel
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