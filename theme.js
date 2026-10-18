const btn = document.getElementById("theme-toggle");

function syncTheme() {
    const dark = document.documentElement.classList.contains("dark");
    if (btn) btn.setAttribute("aria-pressed", dark ? "true" : "false");
}

syncTheme();

btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    syncTheme();
});
