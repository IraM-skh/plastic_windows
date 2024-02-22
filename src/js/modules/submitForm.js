import formsData from "./formsData";
import clearFormsFields from "./clearFormsFields";
function sendData(form) {
  showStatus(form, "Идет отправка...");

  fetch("../../server.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      showStatus(form, "Мы получили Ваши контактные данные. Ожидайте звонка.");
      clearFormsFields(form);
      return response;
    })
    .catch((error) => {
      showStatus(form, "Что-то пошло не так");
      console.error(error);
    });
}
const forms = document.querySelectorAll("form");
let data = null;

function savePersonData(form) {
  formsData.dataPerson.personName = form.querySelector(
    "input[name='user_name']"
  ).value;
  formsData.dataPerson.personTelephoneNumber = form.querySelector(
    "input[name='user_phone']"
  ).value;
  if (
    formsData.dataPerson.personName &&
    formsData.dataPerson.personTelephoneNumber
  ) {
    return true;
  }
  return false;
}

function needToSendCalc() {
  if (formsData.dataCalc.windowTemperatureType) {
    return true;
  }
  return false;
}

function showStatus(form, statusMessage) {
  const status = form.querySelector(".status");
  if (status) {
    status.remove();
  }
  const messageHtml = `<p class="status">${statusMessage}</p>`;
  form
    .querySelector("button[type='submit']")
    .insertAdjacentHTML("beforebegin", messageHtml);
}

function settingSendDada() {
  needToSendCalc()
    ? (data = { ...formsData.dataCalc, ...formsData.dataPerson })
    : (data = formsData.dataPerson);
}

function submitForm() {
  forms.forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (savePersonData(event.target)) {
        settingSendDada();
        sendData(event.target);
      }
    })
  );
}
export default submitForm;
