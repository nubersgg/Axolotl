const floors = [
  generateCircularLayout().map((chest, i) => ({
    ...chest,
    name: `F1 Chest ${i + 1}`,
    price: `${i * 5} coins`,
    per: `${i % 10}%`,
    active: i % 6 !== 0
  })),
  generateCircularLayout().map((chest, i) => ({
    ...chest,
    name: `F2 Chest ${i + 1}`,
    price: `${i * 7} coins`,
    per: `${(i + 5) % 15}%`,
    active: i % 5 !== 0
  }))
];

function generateCircularLayout() {
  const sideChests = [];

  const spacing = 32;

  // 8 chests on the wall
  for (let i = 0; i < 8; i++) {
    sideChests.push({ x: i * spacing, y: 0 });
  }

  // pattern: 2 out, 3 out, 2 out
  const extensions = [
    { x: -1, y: 1 },
    { x: -2, y: 2 },
    { x: -1, y: 3 },
    { x: 2, y: 1 },
    { x: 3, y: 2 },
    { x: 2, y: 3 },
    { x: 4, y: 1 },
    { x: 5, y: 2 },
    { x: 4, y: 3 },
    { x: 7, y: 1 },
    { x: 8, y: 2 },
    { x: 7, y: 3 },
    { x: 6, y: 1 },
    { x: 5, y: 2 },
    { x: 6, y: 3 }
  ];

  extensions.forEach(pos => {
    sideChests.push({ x: pos.x * spacing, y: pos.y * spacing });
  });

  // Now rotate and mirror to make all 4 walls
  const allChests = [];

  for (let side = 0; side < 4; side++) {
    const angle = (Math.PI / 2) * side;

    sideChests.forEach(({ x, y }) => {
      const rotatedX = Math.round(x * Math.cos(angle) - y * Math.sin(angle));
      const rotatedY = Math.round(x * Math.sin(angle) + y * Math.cos(angle));
      allChests.push({
        x: rotatedX + 256,
        y: rotatedY + 256,
        name: "Chest",
        price: "100 coins",
        per: "10%",
        active: true
      });
    });
  }

  return allChests;
}


