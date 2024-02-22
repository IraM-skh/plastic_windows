import calcValidation from "./calcValidation";

const balconIconsInCalc = [...document.querySelectorAll(".balcon_icons_img")];
const balconBigImgInCalc = [
  ...document.querySelector(".big_img").querySelectorAll("img"),
];
const inputs = [
  document.querySelector("#width"),
  document.querySelector("#height"),
  ...document.querySelectorAll("input[name='user_phone']"),
];
const checkboxs = [
  ...document.querySelectorAll(".popup_calc_profile .checkbox"),
];
const selectWindowMaterial = document.querySelector('select[name = "view"]');

//only numbers for phone and calc
inputs.forEach((input) =>
  input.addEventListener("input", (event) => {
    event.target.value = event.target.value.replace(/\D/g, "");
  })
);

function switchSlideInCalc(img) {
  balconIconsInCalc.forEach((element) =>
    element.classList.remove("do_image_more")
  );
  img.parentElement.classList.add("do_image_more");
  balconBigImgInCalc.forEach((img) => (img.style.display = "none"));
  balconBigImgInCalc.find(
    (img) =>
      img.alt ===
      balconIconsInCalc.find((element) =>
        element.classList.contains("do_image_more")
      ).children[0].alt
  ).style.display = "block";
}

function activeOnlyOneCheckbox(checkbox) {
  if (checkbox.checked) {
    checkboxs.find(
      (checkboxInContainer) => checkboxInContainer != checkbox
    ).checked = false;
  }
}

function calcValidationForm(popup, glazingSliderLinks) {
  return calcValidation(
    popup,
    glazingSliderLinks,
    selectWindowMaterial,
    balconIconsInCalc,
    inputs,
    checkboxs
  );
}

export {
  balconIconsInCalc,
  switchSlideInCalc,
  checkboxs,
  activeOnlyOneCheckbox,
  calcValidationForm,
};
