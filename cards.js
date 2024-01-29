
const cards = document.querySelectorAll(".card");
const overlays = document.querySelectorAll(".overlay");
const movieTitles = document.querySelectorAll(".movie-title");
const imgs = document.querySelectorAll(".img-movie");

cards.forEach((card) => {
    card.addEventListener("mouseenter",() => {
        card.children[0].style.opacity = 0;
        card.children[1].children[0].style.scale = 1.07;
        card.children[2].style.transform = "translateY(0px)";
        card.children[2].style.opacity = 1;
        // console.log(card.children[0])
    }) 
    card.addEventListener("mouseleave", () => {
        // console.log(card.children[1].children[0])
        card.children[0].style.opacity = 1;
        card.children[1].children[0].style.scale = 1;
        card.children[2].style.transform = "translateY(20px)";
        card.children[2].style.opacity = 0;
    })
})




// let compMovieTitle = window.getComputedStyle(movieTitle);
// let transformValue = compMovieTitle.getPropertyValue("transform");
// let matrix = new DOMMatrix(transformValue);
// let translateY = matrix.m42;
// console.log("translateY: ", translateY)

