import formsData from "./formsData";
import balconIconsInCalc from "./forms";

function messageStatusForm(colorMessage, message) {
  const messageHtml = `<p style = "color = ${colorMessage}">${message}</p>`;
  console.log(message);
}

function validationPopupCalc(balconIconsInCalc, inputs) {
  formsData.dataCalc.balconShape = balconIconsInCalc.find((element) =>
    element.classList.contains("do_image_more")
  )?.children[0].alt;
  inputs.forEach((input) => {
    if (input.id === "width" || input.id === "height") {
      input.id === "width"
        ? (formsData.dataCalc.windowWidth = input.value)
        : (formsData.dataCalc.windowHeight = input.value);
    }
  });
  if (
    !formsData.dataCalc.balconShape ||
    !formsData.dataCalc.windowWidth ||
    !formsData.dataCalc.windowHeight
  ) {
    messageStatusForm("red", "Заполните все поля формы");
    return false;
  }
  return true;
}

function validationPopupCalcProfile(selectWindowMaterial, checkboxs) {
  formsData.dataCalc.windowMaterial = selectWindowMaterial.value;
  formsData.dataCalc.windowTemperatureType = checkboxs.find(
    (checkbox) => checkbox.checked
  )?.nextElementSibling.id;
  if (!formsData.dataCalc.windowTemperatureType) {
    messageStatusForm("red", "Заполните все поля формы");
    return false;
  }
  return true;
}

function calcValidation(
  popup,
  selectWindowMaterial,
  balconIconsInCalc,
  inputs,
  checkboxs
) {
  if (popup.popupToggleBtn === ".popup_calc_button") {
    return validationPopupCalc(balconIconsInCalc, inputs);
  }

  if (popup.popupToggleBtn === ".popup_calc_profile_button") {
    return validationPopupCalcProfile(selectWindowMaterial, checkboxs);
  }
}

export default calcValidation;
