// Create a decorative pixel activity grid.
const pixelGrid = document.getElementById("pixelGrid");
if (pixelGrid) {
  for (let i = 0; i < 192; i++) {
    const pixel = document.createElement("span");
    pixel.className = "pixel";
    // A repeatable pattern keeps the grid visually consistent on refresh.
    const value = (i * 17 + Math.floor(i / 7) * 11) % 23;
    const level = value < 10 ? 0 : value < 13 ? 1 : value < 16 ? 2 : value < 19 ? 3 : value < 21 ? 4 : value < 22 ? 5 : 6;
    if (level) pixel.classList.add(`level-${level}`);
    pixel.title = "A little progress every day";
    pixelGrid.appendChild(pixel);
  }
}

// The companion gently turns its head and eyes toward the pointer.
const allay = document.getElementById("allay");
const petStage = document.querySelector(".pet-stage");

if (allay && petStage) {
  const moveCompanion = (event) => {
    const rect = petStage.getBoundingClientRect();
    const x = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const y = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    const clampedX = Math.max(-1, Math.min(1, x));
    const clampedY = Math.max(-1, Math.min(1, y));
    allay.style.setProperty("--look-y", `${clampedX * 15}deg`);
    allay.style.setProperty("--look-x", `${-clampedY * 10}deg`);
  };

  petStage.addEventListener("pointermove", moveCompanion);
  petStage.addEventListener("pointerleave", () => {
    allay.style.setProperty("--look-y", "0deg");
    allay.style.setProperty("--look-x", "0deg");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
