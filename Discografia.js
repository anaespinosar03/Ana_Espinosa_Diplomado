/* =========================
   ELEMENTOS
========================= */

const albums = document.querySelectorAll(".album");
const slider = document.querySelector(".album-slider");

const title = document.querySelector(".album-title");
const subtitle = document.querySelector(".album-sub");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

/* TRACKLIST */
const tracklistModal = document.getElementById("tracklistModal");
const tracklistEl = document.getElementById("tracklist");
const tracklistTitle = document.getElementById("tracklistTitle");
const closeTracklist = document.querySelector(".close-tracklist");
const spotifyEmbed = document.getElementById("spotifyEmbed");

/* =========================
   DATA
========================= */

const backgrounds = [
    "radial-gradient(circle at center, #cb4883, #1a020e)",
    "radial-gradient(circle at center, #1d3b4f, #050b12)",
    "radial-gradient(circle at center, #c17529, #6a0505)"
];

const albumData = [
    {
        title: "4 CUARTOS",
        subtitle: "(EP · 2022)",
        tracks: [
            "Volvernos a Conocer",
            "Todo Tuyo",
            "Granito de Arroz",
            "Agua Salió"
        ],
        spotifyEmbed: "https://open.spotify.com/embed/album/040O8HARopM8PemELz8jnq"
    },
    {
        title: "EN BUSCA DE AMOR",
        subtitle: "(Álbum · 2023)",
        tracks: [
            "Melody Color",
            "Huaraches",
            "En Busca de Amor",
            "Mi Primera Canción de Amor",
            "Fue Posible",
            "Xochi",
            "Bonus"
        ],
        spotifyEmbed: "https://open.spotify.com/embed/album/7gCTv0BgFwPgGWo6e8ZH8A"
    },
    {
        title: "TODO TUYO",
        subtitle: "(Single · 2024)",
        tracks: ["Todo Tuyo"],
        spotifyEmbed: "https://open.spotify.com/embed/track/1TQTGgTJtnQi6qcBMlS6Zv"
    }
];

/* =========================
   ESTADO
========================= */

let index = 0;

/* =========================
   UPDATE ALBUM
========================= */

function updateAlbum() {
    albums.forEach((album, i) => {
        album.classList.remove("active", "stack-1", "stack-2");

        if (i === index) album.classList.add("active");
        if (i === (index + 1) % albums.length) album.classList.add("stack-1");
        if (i === (index + 2) % albums.length) album.classList.add("stack-2");
    });

    title.childNodes[0].textContent = albumData[index].title;
    subtitle.textContent = albumData[index].subtitle;

    document.querySelector(".discography").style.background =
        backgrounds[index];

    /* 🔥 GLOW DINÁMICO */
    slider.classList.remove("glow-1", "glow-2", "glow-3", "glow-active");
    slider.classList.add(`glow-${index + 1}`, "glow-active");
}

/* =========================
   CONTROLES
========================= */

next.addEventListener("click", () => {
    index = (index + 1) % albums.length;
    updateAlbum();
});

prev.addEventListener("click", () => {
    index = (index - 1 + albums.length) % albums.length;
    updateAlbum();
});

/* =========================
   TRACKLIST MODAL
========================= */

albums.forEach(album => {
    album.addEventListener("click", () => {
        tracklistTitle.textContent = albumData[index].title;
        tracklistEl.innerHTML = "";

        albumData[index].tracks.forEach(track => {
            const li = document.createElement("li");
            li.textContent = track;
            tracklistEl.appendChild(li);
        });

        spotifyEmbed.src = albumData[index].spotifyEmbed;
        tracklistModal.style.display = "flex";
    });
});

closeTracklist.addEventListener("click", () => {
    tracklistModal.style.display = "none";
    spotifyEmbed.src = "";
});

/* =========================
   TECLADO GLOBAL
========================= */

document.addEventListener("keydown", (e) => {
    if (tracklistModal.style.display === "flex") return;

    if (e.key === "ArrowRight") {
        index = (index + 1) % albums.length;
        updateAlbum();
    }

    if (e.key === "ArrowLeft") {
        index = (index - 1 + albums.length) % albums.length;
        updateAlbum();
    }
});

/* =========================
   INIT
========================= */

updateAlbum();
