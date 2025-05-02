const NUM_CHESTS = 88;
let currentFloor = 0;
const OriginX =458;
const OriginY = 460;
const scaleFactor = 1.10;
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
    { x: OriginX+92, y: OriginY-364, name: "Cherry Leaves", price: "0$", per: "32", active: true },
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
    { x: OriginX-220, y: OriginY-315, name: "Grass Block", price: "0$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Podzol", price: "0$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Mycelium", price: "0$", per: "32", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Coarse Dirt", price: "0$", per: "32", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Dirt", price: "0$", per: "32", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Moss Block", price: "0$", per: "32", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Mud", price: "0$", per: "32", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Sand", price: "0$", per: "32", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Sandstone", price: "0$", per: "32", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Red Sand", price: "0$", per: "32", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Red Sandstone", price: "0$", per: "32", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Gravel", price: "0$", per: "32", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Clay", price: "0$", per: "32", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Mossy Cobblestone", price: "0$", per: "32", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Cobblestone", price: "0$", per: "32", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Deepslate", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Cobbled Deepslate", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Granite", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Diorite", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Andesite", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Dripstone Block", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Tuff", price: "0$", per: "32", active: true },

    // East
    { x: OriginX+315, y: OriginY-220, name: "Stone", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY-202, name: "Stone Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-171, name: "Mossy Stone Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Deepslate Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Deepslate Tiles", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: "Tuff Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-90, name: "Mud Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-55, name: "Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-38, name: "Smooth Stone", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-24, name: "Polished Granite", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-8, name: "Polished Diorite", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+10, name: "Polished Andesite", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+26, name: "Polished Deepslate", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+40, name: "Polished Tuff", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+57, name: "Chiseled Stone Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+92, name: "Chiseled Deepslate", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+107, name: "Chiseled Tuff", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+139, name: "Chiseled Tuff Bricks", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+156, name: "Chiseled Sandstone", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+173, name: "Chiseled Red Sandstone", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+204, name: "Calcite", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+222, name: "Smooth Basalt", price: "0$", per: "32", active: true },

    // South
    { x: OriginX-222, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-156, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-139, y: OriginY+349, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-106, y: OriginY+364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: "Pink Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Magenta Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Purple Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Light Blue Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Cyan Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Green Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Lime Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Yellow Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Orange Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Red Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Brown Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Black Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Gray Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Light Gray Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "White Terracotta", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "Terracotta", price: "0$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-315, y: OriginY-202, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-171, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-154, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-349, y: OriginY-137, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-105, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-364, y: OriginY-90, name: "Pink Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Magenta Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Purple Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Blue Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Light Blue Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Cyan Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Green Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Lime Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Yellow Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Orange Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Red Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Brown Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Black Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Gray Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Light Gray Concrete Powder", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+222, name: "White Concrete Powder", price: "0$", per: "32", active: true },
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
    { x: OriginX+315, y: OriginY-220, name: "Lantern", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY-202, name: "Soul Lantern", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-171, name: "Ochre Froglight", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-154, name: "Verdant Froglight", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY-137, name: "Pearlescent Froglight", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-105, name: "Redstone Lamp", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY-90, name: "Shroomlight", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-55, name: "End Rod", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-38, name: "Chain", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-24, name: "Painting", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY-8, name: "Flower Pot", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+10, name: "Decorated Pot", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+26, name: "Ladder", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+40, name: "Scaffolding", price: "0$", per: "32", active: true },
    { x: OriginX+384, y: OriginY+57, name: "Beehive", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+92, name: "Lodestone", price: "0$", per: "32", active: true },
    { x: OriginX+364, y: OriginY+107, name: "Copper Bulb", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+139, name: "Beacon", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+156, name: "Glowstone", price: "0$", per: "32", active: true },
    { x: OriginX+349, y: OriginY+173, name: "Sea Lantern", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+204, name: "Cartography Table", price: "0$", per: "32", active: true },
    { x: OriginX+315, y: OriginY+222, name: "Loom", price: "0$", per: "32", active: true },

    // South
    // South
    { x: OriginX-222, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-204, y: OriginY+315, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-173, y: OriginY+349, name: "Glass", price: "0$", per: "32", active: true },
    { x: OriginX-156, y: OriginY+349, name: "White Wool", price: "0$", per: "32", active: true },
    { x: OriginX-139, y: OriginY+349, name: "Candle", price: "0$", per: "32", active: true },
    { x: OriginX-106, y: OriginY+364, name: "", price: "0$", per: "32", active: false },
    { x: OriginX-92, y: OriginY+364, name: "Pink Dye", price: "0$", per: "32", active: true },
    { x: OriginX-57, y: OriginY+384, name: "Magenta Dye", price: "0$", per: "32", active: true },
    { x: OriginX-40, y: OriginY+384, name: "Purple Dye", price: "0$", per: "32", active: true },
    { x: OriginX-26, y: OriginY+384, name: "Blue Dye", price: "0$", per: "32", active: true },
    { x: OriginX-10, y: OriginY+384, name: "Light Blue Dye", price: "0$", per: "32", active: true },
    { x: OriginX+8, y: OriginY+386, name: "Cyan Dye", price: "0$", per: "32", active: true },
    { x: OriginX+24, y: OriginY+386, name: "Green Dye", price: "0$", per: "32", active: true },
    { x: OriginX+38, y: OriginY+386, name: "Lime Dye", price: "0$", per: "32", active: true },
    { x: OriginX+55, y: OriginY+386, name: "Yellow Dye", price: "0$", per: "32", active: true },
    { x: OriginX+90, y: OriginY+368, name: "Orange Dye", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY+368, name: "Red Dye", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY+351, name: "Brown Dye", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY+351, name: "Black Dye", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY+351, name: "Gray Dye", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY+317, name: "Light Gray Dye", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY+317, name: "White Dye", price: "0$", per: "32", active: true },

    // West
    { x: OriginX-315, y: OriginY-220, name: "Bell", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Ender Chest", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-171, name: "Chiseled Bookshelf", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-154, name: "Bookshelf", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-137, name: "Lectern", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY-105, name: "Jukebox", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY-90, name: "Note Block", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Soul Campfire", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Campfire", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Cauldron", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Brewing Stand", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Enchanting Table", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Netherite Upgrade Smithing Template", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Smithing Table", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Anvil", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Grindstone", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Stonecutter", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Blast Furnace", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Smoker", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Furnace", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Barrel", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+222, name: "Chest", price: "0$", per: "32", active: true },
  ],

  [ //Floor 4

    //north
    { x: OriginX-220, y: OriginY-315, name: "Chorus Fruit", price: "0$", per: "32", active: true },
    { x: OriginX-202, y: OriginY-315, name: "Chorus Flower", price: "0$", per: "32", active: true },
    { x: OriginX-171, y: OriginY-349, name: "Cookie", price: "0$", per: "32", active: true },
    { x: OriginX-154, y: OriginY-349, name: "Cake", price: "0$", per: "32", active: true },
    { x: OriginX-137, y: OriginY-349, name: "Pumpkin Pie", price: "0$", per: "32", active: true },
    { x: OriginX-105, y: OriginY-364, name: "Bread", price: "0$", per: "32", active: true },
    { x: OriginX-90, y: OriginY-364, name: "Golden Carrot", price: "0$", per: "32", active: true },
    { x: OriginX-55, y: OriginY-384, name: "Bamboo", price: "0$", per: "32", active: true },
    { x: OriginX-38, y: OriginY-384, name: "Sugar Cane", price: "0$", per: "32", active: true },
    { x: OriginX-24, y: OriginY-384, name: "Cactus", price: "0$", per: "32", active: true },
    { x: OriginX-8, y: OriginY-384, name: "Carrot", price: "0$", per: "32", active: true },
    { x: OriginX+10, y: OriginY-384, name: "Potato", price: "0$", per: "32", active: true },
    { x: OriginX+26, y: OriginY-384, name: "Melon Slice", price: "0$", per: "32", active: true },
    { x: OriginX+40, y: OriginY-384, name: "Pumpkin", price: "0$", per: "32", active: true },
    { x: OriginX+57, y: OriginY-384, name: "Melon", price: "0$", per: "32", active: true },
    { x: OriginX+92, y: OriginY-364, name: "Glow Berries", price: "0$", per: "32", active: true },
    { x: OriginX+107, y: OriginY-364, name: "Sweet Berries", price: "0$", per: "32", active: true },
    { x: OriginX+139, y: OriginY-349, name: "Beetroot Seeds", price: "0$", per: "32", active: true },
    { x: OriginX+156, y: OriginY-349, name: "Melon Seeds", price: "0$", per: "32", active: true },
    { x: OriginX+173, y: OriginY-349, name: "Pumpkin Seeds", price: "0$", per: "32", active: true },
    { x: OriginX+204, y: OriginY-315, name: "Cocoa Beans", price: "0$", per: "32", active: true },
    { x: OriginX+222, y: OriginY-315, name: "Wheat Seeds", price: "0$", per: "32", active: true },

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
    { x: OriginX-315, y: OriginY-220, name: "Dispenser", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY-202, name: "Dropper", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-171, name: "Tripwire Hook", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-154, name: "Stone Button", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY-137, name: "Lever", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY-105, name: "Observer", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY-90, name: "Crafter", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-55, name: "Sculk Sensor", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-38, name: "Target", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-24, name: "Daylight Detector", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY-8, name: "Stone Pressure Plate", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+10, name: "Comparator", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+26, name: "Repeater", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+40, name: "Redstone Torch", price: "0$", per: "32", active: true },
    { x: OriginX-384, y: OriginY+57, name: "Redstone Block", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+92, name: "Sticky Piston", price: "0$", per: "32", active: true },
    { x: OriginX-364, y: OriginY+107, name: "Piston", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+139, name: "Hopper", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+156, name: "Chest", price: "0$", per: "32", active: true },
    { x: OriginX-349, y: OriginY+173, name: "Trapped Chest", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+204, name: "Honey Block", price: "0$", per: "32", active: true },
    { x: OriginX-315, y: OriginY+222, name: "Slime Block", price: "0$", per: "32", active: true },
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

const floorNames = [
  "Nature",
  "Building Blocks",
  "Decoration",
  "Farming and Utility",
  "Ocean",
  "Nether",
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

