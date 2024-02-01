const arrowBtns = document.querySelectorAll(".wrapper i")
const carousel = document.querySelector(".carousel")
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

arrowBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
        carousel.scrollleft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
});