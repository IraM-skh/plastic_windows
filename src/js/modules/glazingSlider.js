import { getLinkSellectorsSlider } from "./sliders";
const glazingSliderLinks = getLinkSellectorsSlider(".glazing_slider");
const glazingSlides = [...document.querySelectorAll(".glazing_content")];
glazingSliderLinks
  .find((link) => link.classList.contains("tree_link"))
  .classList.add("active");
function chengeGlazingSlide(link) {
  glazingSliderLinks.forEach((link) => link.classList.remove("active"));
  // change slide
  glazingSlides.forEach((slide) => {
    slide.style.display = "none";
    if (slide.classList.contains(link.classList.value.slice(0, -5))) {
      slide.style.display = "block";
    }
  });
  //show active link
  link.classList.add("active");
}

export { chengeGlazingSlide, glazingSliderLinks };
