const body = document.body;
const burgerIcon = document.querySelector(".menu__burger");
const menuBody = document.querySelector(".menu__body")

let lock = false;

burgerIcon.addEventListener("click", (e) => {
    if (!lock) {
        lock = true
        body.classList.toggle("body_lock");
        burgerIcon.classList.toggle("menu__burger_active");
        menuBody.classList.toggle("menu__body_active");
        setTimeout(() => lock = false, 800);
    }
})
