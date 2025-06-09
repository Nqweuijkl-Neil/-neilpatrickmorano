/** @format */

window.addEventListener("load", () => {
    document.querySelector(".profile").classList.add("loaded");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
    });
});
