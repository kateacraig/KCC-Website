function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

function changeMenu() {
  let body = document.querySelector("body");
  if (body.classList.contains("hidden")) {
    body.classList.remove("hidden");
  } else {
    body.classList.add("hidden");
  }
}

let hamburgerButton = document.querySelector(".hamburger-menu");
hamburgerButton.addEventListener("click", changeMenu);
