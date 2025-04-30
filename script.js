function generateCircularLayout() {
  const side = [];

  // 8 on the wall
  for (let i = 0; i < 8; i++) {
    side.push({ x: i * 32, y: 0 });
  }

  // extensions (2 → 3 → 2 pattern)
  const extOffsets = [
    { offset: -1, depth: 1 },
    { offset: -1, depth: 2 },
    { offset: -2, depth: 1 },
    { offset: 0, depth: 3 },
    { offset: 6, depth: 1 },
    { offset: 7, depth: 2 },
    { offset: 8, depth: 1 },
  ];
  extOffsets.forEach((e) => {
    side.push({ x: e.offset * 32, y: e.depth * 32 });
  });

  // Now rotate side 90° for each wall
  const full = [];
  for (let sideIndex = 0; sideIndex < 4; sideIndex++) {
    const angle = sideIndex * (Math.PI / 2);
    side.forEach((chest) => {
      const cx = chest.x;
      const cy = chest.y;
      const rx = Math.round(cx * Math.cos(angle) - cy * Math.sin(angle));
      const ry = Math.round(cx * Math.sin(angle) + cy * Math.cos(angle));
      full.push({
        x: rx + 256,
        y: ry + 256,
        name: `Chest`,
        price: `100 coins`,
        per: `20%`,
        active: true
      });
    });
  }

  return full;
}

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
