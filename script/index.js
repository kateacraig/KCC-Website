function toggleMobileMenu(menu) {
  menu.classList.slideToggle("open");
}

function toggleSidebar(menu) {
  menu.classList.slideToggle("open");
}

$(document).ready(function () {
  // Select the element that will trigger the toggle (e.g., a menu button)
  $("#hamburger").click(function () {
    // Select the navigation menu element to be toggled
    $(".sidebar").toggleClass("active"); // 'fast', 'slow', or a number in milliseconds
  });
});
