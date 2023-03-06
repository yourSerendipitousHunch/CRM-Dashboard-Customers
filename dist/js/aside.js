const burger = document.querySelector(".header__burger");
const aside = document.querySelector(".aside");

burger.addEventListener("click", () => {
  // Toggle .active class on the aside
  aside.classList.toggle("active__aside");

  if (aside.classList.contains("active__aside")) {
    // Move the aside 200px to the right
    aside.style.transform = "translateX(200px)";
  } else {
    // Move the aside back to its original position
    aside.style.transform = "translateX(0)";
  }
});

document.addEventListener("click", (event) => {
  // Check if the clicked element is outside the aside
  if (!aside.contains(event.target) && !burger.contains(event.target)) {
    // Hide the aside
    aside.classList.remove("active__aside");
    aside.style.transform = "translateX(0)";
  }
});