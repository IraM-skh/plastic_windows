import { currentOpenPopup, openPopupCallForTimer } from "./popups";
let timer60sec = 0;
let endDateOfSale = "2024-02-13T21:32:00.000Z";
const [
  timerNumbersDays,
  timerNumbersHours,
  timerNumbersMinutes,
  timerNumbersSeconds,
] = [...document.querySelectorAll(".numbers1")].map((numbersContainer) =>
  numbersContainer.querySelector("span")
);
function twoDigitMode(time) {
  return ("0" + time).slice(-2);
}
function getTimeRemaining(endTimeStr) {
  let total =
    Date.parse(endTimeStr) -
    Date.parse(new Date()) +
    new Date().getTimezoneOffset() * 60 * 1000;
  let seconds = Math.floor((total / 1000) % 60);
  let minutes = Math.floor((total / 1000 / 60) % 60);
  let hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  return {
    total: total,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}
const saleTimer = setInterval(() => {
  const timeData = getTimeRemaining(endDateOfSale);
  timerNumbersDays.textContent = twoDigitMode(timeData.days);
  timerNumbersHours.textContent = twoDigitMode(timeData.hours);
  timerNumbersMinutes.textContent = twoDigitMode(timeData.minutes);
  timerNumbersSeconds.textContent = twoDigitMode(timeData.seconds);

  if (timeData.total === 0) {
    clearInterval(saleTimer);
  }
  //for open popup after 60s
  if (timer60sec <= 60) {
    if (timer60sec === 60 && !currentOpenPopup) {
      openPopupCallForTimer();
      return;
    }
    timer60sec += 1;
  }
}, 1000);
