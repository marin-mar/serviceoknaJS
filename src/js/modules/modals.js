const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
    const trigger = document.querySelectorAll(triggerSelector),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll("[data-modal]");

    trigger.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (e.target) {
          e.preventDefault();
        }

        hideElems(windows);
        showModal(modal);
      });
    });

    close.addEventListener("click", (e) => {
      hideElems(windows);
      closeModal(modal);
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal && closeClickOverlay) {
        hideElems(windows);
        closeModal(modal);
      }
    });
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", ".popup", ".popup .popup_close");
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close");
  bindModal(".popup_calc_button", ".popup_calc_profile", ".popup_calc_profile_close", false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false);

  // showModalByTime(".popup", 60000);
};

function hideElems(elems) {
  elems.forEach((item) => {
    item.style.display = "none";
  });
}

function showModal(elem) {
  elem.style.display = "block";
  document.body.style.marginRight = `${window.innerWidth - document.body.scrollWidth}px`;
  document.body.style.overflow = "hidden";
}

function closeModal(elem) {
  elem.style.display = "none";
  document.body.style.marginRight = `0px`;
  document.body.style.overflow = "";
}

function showModalByTime(selector, time) {
  setTimeout(function () {
    const elem = document.querySelector(selector);
    showModal(elem);
  }, time);
}

export default modals;
export { hideElems, showModal, closeModal, showModalByTime };
