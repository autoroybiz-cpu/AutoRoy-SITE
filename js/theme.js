document.querySelectorAll(".theme-toggle button").forEach(btn => {
btn.addEventListener("click", () => {
document.body.classList.remove("dark","cyber");
if (btn.dataset.mode !== "light") {
document.body.classList.add(btn.dataset.mode);
}
});
});
