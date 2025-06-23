function toggleMobileMenu(menu) {
  menu.classList.slideToggle("open");
}

function toggleSidebar(menu) {
  menu.classList.slideToggle("open");
}

$(document).ready(function () {
  $("#hamburger").click(function () {
    $(".sidebar").toggleClass("active"); // 'fast', 'slow', or a number in milliseconds
  });
});
