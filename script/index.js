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

window.onload = function () {
  const textArray = [
    "Welcome!",
    "A plan for every business.",
    "Contact Kate if you're ready to get started.",
  ];
  const cyclingTextElement = document.getElementById("cycling-text");
  let currentIndex = 0;

  function cycleText() {
    cyclingTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length; // Loop back to start
  }

  // Display the first text immediately
  cycleText();

  // Cycle text every 3 seconds
  setInterval(cycleText, 3000);
};
