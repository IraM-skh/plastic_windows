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

//------------------------перенести-----------------------------

console.log(popupsContainer);
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  if (findPopupOnCloseBtn(event.target)) {
    if (
      event.target.classList.contains(
        currentOpenPopup.popupToggleBtn.slice(
          1,
          currentOpenPopup.popupToggleBtn.lengs
        )
      )
    ) {
      if (!calcValidationForm(currentOpenPopup)) {
        return;
      }
    }
    currentOpenPopup.closePopup();
  }
  if (findPopupOnOpenBtn(event.target)) {
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
  if (null) {
  }
  return;
});

export default body;
