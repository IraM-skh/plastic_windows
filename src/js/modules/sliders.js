function getLinkSellectorsSlider(selectorString) {
  return [...document.querySelector(selectorString).querySelectorAll("a")];
}

export { getLinkSellectorsSlider };
