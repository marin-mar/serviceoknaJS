import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";
import timer from "./modules/timer";
import images from "./modules/images";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  let modalState = {};

  const remainingTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3),
    deadline = `"${remainingTime.getFullYear()}-${remainingTime.getMonth() + 1}-${remainingTime.getDate()}"`,
    saleDay = document.querySelector("#sale-day");

  timer(".timer1 > .container1", deadline);
  saleDay.textContent = `${remainingTime.toLocaleDateString()}`;

  changeModalState(modalState);
  modals();
  tabs(".glazing_slider ", ".glazing_block", ".glazing_content", "active");
  tabs(".decoration_slider ", ".no_click", ".decoration_content > div > div", "after_click");
  tabs(".balcon_icons ", ".balcon_icons_img", ".big_img > img", "do_image_more", "inline-block");
  forms(modalState);
  images();
});
