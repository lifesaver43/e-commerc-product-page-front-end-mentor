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
    cover.classList.toggle("basket")
});

// Delete Cart Item
const hide = document.querySelector(".hide")
const basket = document.querySelector(".basket");
const deleteCart = document.getElementById("delete");
const vanishItem = document.querySelector(".item")

deleteCart.addEventListener(("click"), () => {
    if(vanishItem.style.display === "none") {
        vanishItem.style.display = "flex";
    } else {
        vanishItem.style.display = "none";
    }
});

// Quantity + & - 
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
const quantity = document.getElementById("quantity");
let count = 0;

function plusUp() {
    count++
    quantity.innerHTML = count
    console.log(count)
}

plus.addEventListener("click", plusUp)

function minusDown() {
    if(count === 0) {
        quantity.innerHTML = 0
    }else {
        count--
        quantity.innerHTML = count
        console.log(count)
    }
}

minus.addEventListener("click", minusDown);


