import { getLinkSellectorsSlider } from "./sliders";

const decorationSliderLinks = getLinkSellectorsSlider(".decoration_slider");
const decorationSlides = decorationSliderLinks.map((link) => {
  let decorationSlidesClassName = [...link.parentElement.classList]
    .find((el) => el.slice(-5) === "_link")
    .slice(0, -5);
  return document.querySelector(`.${decorationSlidesClassName}`);
});
function chengeDecorationSlide(link) {
  let clickedLinkIndex = decorationSliderLinks.indexOf(link);
  decorationSliderLinks.forEach((link) =>
    link.parentElement.classList.remove("after_click")
  );
  link.parentElement.classList.add("after_click");
  decorationSlides.forEach((slide, index) => {
    slide.style.display = "none";
    if (index === clickedLinkIndex) {
      slide.style.display = "block";
    }
  });
}

export { decorationSliderLinks, chengeDecorationSlide };
