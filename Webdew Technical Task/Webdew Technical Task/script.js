// slider

let sliderIndex = 1;
function slideshow() {
  let slides = document.getElementsByClassName("slide");
  for (let index = 0; index < slides.length; index++) {
    slides[sliderIndex - 1].style.display = "none";
  }
  sliderIndex++;
  if (sliderIndex > slides.length) {
    sliderIndex = 1;
  }
  slides[sliderIndex - 1].style.display = "block";
  setTimeout(slideshow, 2000);
}
slideshow();

// responsive menu

let menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  let menuItems = document.getElementById("menu-items");
  if (menuItems.className === "menu-items") {
    menuItems.classList.add("responsive");
  } else {
    menuItems.classList.remove("responsive");
  }
});
