document.querySelector("form").addEventListener("submit", (e) => {
e.preventDefault()
    alert("MESSAGE ENVOYE");
})

let images = document.querySelectorAll(".image");
let currentImage = 0;

document.querySelector(".suivant").addEventListener("click", () => {
images[currentImage].style.display = "none";
currentImage = (currentImage + 1) % images.length;
images[currentImage].style.display = "block";
});

document.querySelector(".precedent").addEventListener("click", () => {
images[currentImage].style.display = "none";
currentImage = (currentImage - 1 + images.length) % images.length;
images[currentImage].style.display = "block";
});

images[0].style.display = "block";

