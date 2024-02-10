import "./forms";
let currentOpenPopup = null;
class Popup {
  constructor(
    popupSelectot,
    popupShowBtnSelector,
    popupCloseBtnSelector,
    popupToggleBtn = null
  ) {
    this.popupWindow = document.querySelector(popupSelectot);
    this.popupShowBtns = [...document.querySelectorAll(popupShowBtnSelector)];
    popupToggleBtn
      ? (this.popupCloseBtns = [
          this.popupWindow.querySelector(popupCloseBtnSelector)?.children[0],
          this.popupWindow,
          this.popupWindow.querySelector(popupToggleBtn),
        ])
      : (this.popupCloseBtns = [
          this.popupWindow.querySelector(popupCloseBtnSelector)?.children[0],
          this.popupWindow,
        ]);
    this.popupToggleBtn = popupToggleBtn;
  }

  openPopup() {
    this.popupWindow.style.display = "block";
  }

  closePopup() {
    this.popupWindow.style.display = "none";
  }
  sendDataForm() {}
}

const popupEngineer = new Popup(
  ".popup_engineer",
  ".popup_engineer_btn",
  ".popup_close"
);
const popupCall = new Popup(".popup", ".phone_link", ".popup_close");
const popupCalc = new Popup(
  ".popup_calc",
  ".popup_calc_btn",
  ".popup_calc_close ",
  ".popup_calc_button"
);
const popupCalcProfile = new Popup(
  ".popup_calc_profile",
  ".popup_calc_button",
  ".popup_calc_profile_close",
  ".popup_calc_profile_button"
);
const popupCalcEnd = new Popup(
  ".popup_calc_end",
  ".popup_calc_profile_button",
  ".popup_calc_end_close"
);
const popupsContainer = [
  popupEngineer,
  popupCall,
  popupCalc,
  popupCalcProfile,
  popupCalcEnd,
];

function findPopupOnOpenBtn(btn) {
  let openedPopup = popupsContainer.find((popup) =>
    popup.popupShowBtns.includes(btn)
  );
  if (openedPopup) {
    currentOpenPopup = openedPopup;
  }
  return openedPopup;
}

function findPopupOnCloseBtn(btn) {
  return popupsContainer.find((popup) => popup.popupCloseBtns.includes(btn));
}

export {
  popupsContainer,
  findPopupOnOpenBtn,
  findPopupOnCloseBtn,
  currentOpenPopup,
};
