


const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".video-thumb").forEach(video => {
    video.addEventListener("click", () => {
        const videoId = video.dataset.videoId;
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove("active");
    iframe.src = "";
}