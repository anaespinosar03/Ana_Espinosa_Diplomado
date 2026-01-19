

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const modalCredits = document.getElementById("imageCredits");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalCredits.textContent = img.dataset.creditos || "";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});
