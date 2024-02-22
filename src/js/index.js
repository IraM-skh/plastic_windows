("use strict");
import "./slider";

import {
  popupsContainer,
  findPopupOnOpenBtn,
  findPopupOnCloseBtn,
  currentOpenPopup,
} from "./modules/popups";
import {
  balconIconsInCalc,
  switchSlideInCalc,
  checkboxs,
  activeOnlyOneCheckbox,
  calcValidationForm,
} from "./modules/forms";

import {
  chengeGlazingSlide,
  glazingSliderLinks,
} from "./modules/glazingSlider";

import {
  decorationSliderLinks,
  chengeDecorationSlide,
} from "./modules/decorationSlider";
import { showPorfolioPopup, portfolioPreview } from "./modules/portfolio";
import "./modules/saleTimer";
import submitForm from "./modules/submitForm";
const body = document.querySelector("body");
submitForm();
body.addEventListener("click", (event) => {
  if (findPopupOnCloseBtn(event.target)) {
    if (event.target === currentOpenPopup.popupToggleBtn) {
      if (!calcValidationForm(currentOpenPopup, glazingSliderLinks)) {
        return;
      }
    }
    currentOpenPopup.closePopup();
  }
  if (findPopupOnOpenBtn(event.target)) {
    event.preventDefault();
    currentOpenPopup.openPopup();
    return;
  }
  if (balconIconsInCalc.includes(event.target.parentElement)) {
    switchSlideInCalc(event.target);
    return;
  }
  if (checkboxs.includes(event.target)) {
    activeOnlyOneCheckbox(event.target);
    return;
  }
  if (glazingSliderLinks.includes(event.target)) {
    chengeGlazingSlide(event.target);
    return;
  }
  if (decorationSliderLinks.includes(event.target)) {
    chengeDecorationSlide(event.target);
    return;
  }
  if (portfolioPreview.includes(event.target)) {
    event.preventDefault();
    showPorfolioPopup(event.target);
    return;
  }

  return;
});

export default body;
