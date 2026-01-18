


function masonryGallery() {
    const gallery = document.querySelector('.gallery');
    const items = Array.from(gallery.children);
    const columns = 3;
    let colHeights = Array(columns).fill(0);

    items.forEach(item => {
        // encuentra la columna más baja
        const minCol = colHeights.indexOf(Math.min(...colHeights));
        item.style.gridRowStart = colHeights[minCol] + 1;
        colHeights[minCol] += item.offsetHeight / 16 + 1; // 16 es gap
    });
}

window.addEventListener('load', masonryGallery);
window.addEventListener('resize', masonryGallery);
