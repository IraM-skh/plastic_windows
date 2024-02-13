import { addPortfolioPopup } from "./popups";
const portfoliolink = [
  ...document.querySelector(".works").querySelectorAll("a"),
];
const portfolioPreview = portfoliolink.map((link) => link.children[0]);

function showPorfolioPopup(link) {
  const srcBigImg = portfoliolink[portfolioPreview.indexOf(link)].href;
  const htmlPopupPortfolio = `<div class="popup popup_portfolio" style="display: block"> <img class="portfolio_big_img" src="${srcBigImg}" alt="window" style="position: absolute;top: 50%; left:50%; transform: translate(-50%, -50%); width:100%; max-width:fit-content;"> </div>`;
  document
    .querySelector(".popup_calc_end")
    .insertAdjacentHTML("afterend", htmlPopupPortfolio);
  addPortfolioPopup();
}

export { showPorfolioPopup, portfolioPreview };
