
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 BlackGrid Elite Site Loaded.");
});

document.addEventListener("DOMContentLoaded", () => {
  const score = document.querySelector(".score-value");
  if (score) {
    let current = 80;
    const target = 94;
    const interval = setInterval(() => {
      if (current >= target) return clearInterval(interval);
      current++;
      score.textContent = current;
    }, 80);
  }
});
