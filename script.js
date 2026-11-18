const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-navigation");
const navigationLinks = document.querySelectorAll(".main-navigation a");
const currentYear = document.querySelector("#current-year");

function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
}

menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
});

navigationLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
        closeMenu();
    }
});

currentYear.textContent = new Date().getFullYear();
