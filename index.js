const prevEl = document.getElementById('prev');
const nextEl = document.getElementById('next');
const imgContainer = document.querySelector(".image-container");
let deg = 0

/* if (deg > 360 || deg < 0) {
    deg = 0
} */

prevEl.addEventListener('click', () => {
    deg = deg + 45;
    console.log('You clicked the previous button');
    updateGallery();
})
nextEl.addEventListener('click', () => {
    deg = deg - 45;
    console.log('You clicked the next button');
    updateGallery();
})

function updateGallery() {
    imgContainer.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
    imgContainer.style.transition = "transform 0.3s";
}