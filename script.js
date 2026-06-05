
document.addEventListener("DOMContentLoaded", () => {
  const themes = ["light", "sepia", "dark"];
  const labels = ["护眼模式", "暗黑模式", "浅色模式"];
  const root = document.documentElement;
  const themeBtn = document.getElementById("themeToggle");
  let themeIndex = Number(localStorage.getItem("themeIndex") || "0");
  let fontSize = Number(localStorage.getItem("readerFontSize") || "18");
  const content = document.querySelector(".serif-content");

  function applyTheme() {
    const theme = themes[themeIndex % themes.length];
    if (theme === "light") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", theme);
    }
    if (themeBtn) themeBtn.textContent = labels[themeIndex % labels.length];
    localStorage.setItem("themeIndex", String(themeIndex));
  }

  function applyFontSize() {
    if (content) content.style.fontSize = fontSize + "px";
    localStorage.setItem("readerFontSize", String(fontSize));
  }

  themeBtn?.addEventListener("click", () => {
    themeIndex = (themeIndex + 1) % themes.length;
    applyTheme();
  });

  document.getElementById("fontIncrease")?.addEventListener("click", () => {
    fontSize = Math.min(28, fontSize + 2);
    applyFontSize();
  });

  document.getElementById("fontDecrease")?.addEventListener("click", () => {
    fontSize = Math.max(14, fontSize - 2);
    applyFontSize();
  });

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    if (!backToTop) return;
    backToTop.style.display = window.scrollY > 420 ? "block" : "none";
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  applyTheme();
  applyFontSize();
});
