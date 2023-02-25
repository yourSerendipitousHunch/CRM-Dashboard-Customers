const burgerButton = document.querySelector(".header__burger");
const sidebar = document.querySelector(".sidebar");

burgerButton.addEventListener("click", () => {
  // Toggle .active class on the button
  burgerButton.classList.toggle("active");

  // Toggle .active class on the sidebar
  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
    // Move the sidebar 300px to the right
    sidebar.style.transform = "translateX(300px)";
  } else {
    // Move the sidebar back to its original position
    sidebar.style.transform = "translateX(0)";
  }
});

// dropdown menu

const squareItems = document.querySelectorAll('.square-item');
squareItems.forEach(squareItem => {
  squareItem.addEventListener('click', () => {
    const dropdown = squareItem.parentElement.nextElementSibling;
    dropdown.classList.toggle('visible');
  });
});

function toggleDropdown() {
  const dropdown = this.parentNode.nextElementSibling;
  const squareItem = this;

  dropdown.classList.toggle("active");
  squareItem.classList.toggle("rotate");
}

squareItems.forEach((squareItem) => {
  squareItem.addEventListener("click", toggleDropdown);
});


