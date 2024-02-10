import "./forms";
let currentOpenPopup = null;
class Popup {
  constructor(
    popupSelectot,
    popupShowBtnSelector,
    popupCloseBtnSelector,
    additionalPopupCloseBtnSelector = null
  ) {
    this.popupWindow = document.querySelector(popupSelectot);
    this.popupShowBtns = [...document.querySelectorAll(popupShowBtnSelector)];
    additionalPopupCloseBtnSelector
      ? (this.popupCloseBtns = [
          this.popupWindow.querySelector(popupCloseBtnSelector)?.children[0],
          this.popupWindow,
          this.popupWindow.querySelector(additionalPopupCloseBtnSelector),
        ])
      : (this.popupCloseBtns = [
          this.popupWindow.querySelector(popupCloseBtnSelector)?.children[0],
          this.popupWindow,
        ]);
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
// const popupEngineer = {
//     popupWindow: document.querySelector(".popup_engineer"),
//     popupShowBtns: [document.querySelector(".popup_engineer_btn")],
//   };
//   const popupCall = {
//     popupWindow: document.querySelector(".popup"),
//     popupShowBtns: [...document.querySelectorAll(".phone_link")],
//   };
//   const popupCalc = {
//     popupWindow: document.querySelector(".popup_calc"),
//     popupShowBtns: [...document.querySelectorAll(".popup_calc_btn")],
//   };
//   const popupCalcProfile = {
//     popupWindow: document.querySelector(".popup_calc_profile"),
//     popupShowBtns: [document.querySelector(".popup_calc_button")],
//   };
//   const popupCalcEnd = {
//     popupWindow: document.querySelector(".popup_calc_end"),
//     popupShowBtns: [document.querySelector(".popup_calc_profile_button")],
//   };
//   const popups = [
//     popupEngineer,
//     popupCall,
//     popupCalc,
//     popupCalcProfile,
//     popupCalcEnd,
//   ];
//   const popupCloseBtns = [
//     ...document.querySelectorAll(
//       ".popup_close, .popup_calc_close, .popup_calc_profile_close, .popup_calc_end_close"
//     ),
//   ];
