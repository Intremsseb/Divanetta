const navMenu = document.querySelector(".nav-menu")
const navMenuContainer = document.querySelector(".nav-menu-container")
const button = document.querySelector(".menu-button")

button.addEventListener("click", event => {
    if(navMenuContainer.classList.contains("disp")){
        navMenuContainer.classList.remove("disp")
        navMenuContainer.style.height = `${navMenu.clientHeight}px`
    } else {
        navMenuContainer.classList.add("disp")
        navMenuContainer.style.height = `0px`
    }
});

//----------------------------------------------------------------------
const portfolioItems = document.querySelectorAll(".portfolio-list-item")
const body = document.querySelector(".body")

portfolioItems.forEach(item => {
    item.addEventListener("click", event => {
        const itemIMG = item.querySelector(".portfolio-list-item-image");
        if(itemIMG.classList.contains("open-image")) {
            item.style.overflow = "hidden"
            itemIMG.classList.remove("open-image")
        } else {
            item.style.overflow = "unset"
            itemIMG.classList.add("open-image")
        }
    })
})

//----------------------------------------------------------------------
const mainSection = document.querySelector(".main-section") 
let reImage = true

setInterval(() => {
    if(reImage === true) {
        mainSection.style.backgroundImage = "url('./images/SlomaniyDIvan.jpg')";
    } else {
        mainSection.style.backgroundImage = "url('./images/CeliyDivan.jpg')";
    }
    reImage = !reImage
}, 6000);

//-----------------------------------------------------------------------
const ansverBlocks = document.querySelectorAll(".ansver-block")
const faqItems = document.querySelectorAll(".faq-section-list-item")

faqItems.forEach(item => {
    item.querySelector(".open-item-button").addEventListener("click", event => {
        const ansver = item.querySelector(".ansver-block")
        if(ansver.classList.contains("disp")) {
            ansver.classList.remove("disp")
            item.querySelector(".open-item-button").style.backgroundImage = "url('./images/arrow-upp-svgrepo-com.svg')";
            const newHeight = item.querySelector(".ansver-text").clientHeight
            ansver.style.height = `${newHeight}px`
        } else {
            ansver.classList.add("disp")
            item.querySelector(".open-item-button").style.backgroundImage = "url('./images/arrow-down-svgrepo-com.svg')";
            ansver.style.height = `${0}px`
        }
    })
})