//thumbnails
const sa = document.getElementById("sa")
const se = document.getElementById("se")
const si = document.getElementById("si")
const so = document.getElementById("so")

// product-img
const sad = document.getElementById("sad")
const sed = document.getElementById("sed")
const sid = document.getElementById("sid")
const sod = document.getElementById("sod")


// Due to swiper.js, there is a different pattern i used to work the slider
// TAKE NOTE
// The thumbnail slider is now working fine

sa.addEventListener("click", (e) => {
    e.preventDefault();
    sad.classList.add("active");
    sed.style.display = "none";
    sid.style.display = "none";
    sod.style.display = "none";
})

se.addEventListener("click", (e) => {
    e.preventDefault();
    sed.classList.add("active");
    sad.style.display = "none";
    sid.style.display = "none";
    sod.style.display = "none";
})

si.addEventListener("click", (e) => {
    e.preventDefault();
    sid.classList.add("active");
    sad.style.display = "none";
    sed.style.display = "none";
    sod.style.display = "none";
})

so.addEventListener("click", (e) => {
    e.preventDefault();
    sod.classList.add("active");
    sad.style.display = "none";
    sed.style.display = "none";
    sid.style.display = "none";
})


// Menu
const menu = document.getElementById("menu")
const exit = document.getElementById("exit")
const nav = document.querySelector("nav")

menu.addEventListener("click", () => {
    nav.classList.add("active")
})

exit.addEventListener("click", () => {
    nav.classList.remove("active")
})



// Nav-Bar Cart

const cover = document.querySelector(".cover-basket")
const cart = document.querySelector(".cart")


cart.addEventListener("click", () => {
    if(cover.style.display === "none") {
        cover.style.display = "flex";
    } else {
        cover.style.display = "none";
    }
});

// https://www.namecheap.com/logo-maker/app/share?c=font&l=6cc0a620-0e0a-11ed-a8e8-2301b6b34a9b