const cart = document.querySelector(".cart");
const comtainer = document.querySelector(".container");

const title = document.querySelector(".info h1")
const img = document.querySelector(".sneaker img");
const desc = document.querySelector(".info h2")
const sizes = document.querySelector(".sizes")
const purchase = document.querySelector(".purchase button")
comtainer.addEventListener("mouseover", e => {
    console.log("hey");
    let xaxix = (window.innerWidth / 2 - e.pageX) / 10;
    let yaxis = (window.innerHeight / 2 - e.pageY) / 10;
    cart.style.transform = `rotateY(${yaxis}deg) rotateX(${xaxix}deg)`



})

comtainer.addEventListener("mouseenter", e => {
    cart.style.transition = "none";
    title.style.transform = "translateZ(150px)"
    img.style.transform = "translateZ(150px) rotateZ(-40deg)"
    desc.style.transform = "translateZ(150px)"
    sizes.style.transform = "translateZ(150px)"
    purchase.style.transform = "translateZ(150px)"


})

//animate out

comtainer.addEventListener("mouseleave", e => {
    cart.style.transition = 'all 0.5s ease'
    cart.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    img.style.transform = "translateZ(0px)"
    desc.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"



})

const purchase_but = document.querySelector(".purchase");
purchase_but.addEventListener("mouseover", e => {
    cart.style.transition = 'all 0.5s ease'
    cart.style.transform = `rotateY(0deg) rotateX(0deg)`
    title.style.transform = "translateZ(0px)"
    sizes.style.transform = "translateZ(0px)"
    img.style.transform = "translateZ(0px)"
    desc.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"

})