const menuButton = document.querySelector(".nav__menu-btn");
const menuElement = document.querySelector(".nav__links");

function handleOpenMenu() {
  menuButton.setAttribute("style", "visibility: hidden");
  console.log(menuButton);
  menuElement.classList.add("nav__links_opened");
}

function handleCloseMenu() {
  menuButton.setAttribute("style", "visibility: visible");
  menuElement.classList.remove("nav__links_opened");
}

menuButton.addEventListener("click", handleOpenMenu);
