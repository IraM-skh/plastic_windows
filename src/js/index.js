("use strict");
import "./slider";
import {
  popupsContainer,
  findPopupOnOpenBtn,
  findPopupOnCloseBtn,
  currentOpenPopup,
} from "./modules/popups";

console.log(popupsContainer);
const body = document.querySelector("body");
body.addEventListener("click", (event) => {
  if (findPopupOnCloseBtn(event.target)) {
    currentOpenPopup.closePopup();
  }
  if (findPopupOnOpenBtn(event.target)) {
    currentOpenPopup.openPopup();
    return;
  }

  return;
});
