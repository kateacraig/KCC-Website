function toggleMobileMenu() {
  const checkbox = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  if (checkbox.checked) {
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden"; // Optional: lock scroll
  } else {
    sidebar.classList.remove("active");
    document.body.style.overflow = ""; // Unlock scroll
  }
}
