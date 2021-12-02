const images = () => {
  const worksSection = document.querySelector(".works"),
    imgPopup = document.createElement("div"),
    bigImage = document.createElement("img");

  imgPopup.classList.add("popup");
  imgPopup.style.display = "none";
  imgPopup.style.justifyContent = "center";
  imgPopup.style.alignItems = "center";
  imgPopup.style.width = "100vw";
  imgPopup.style.height = "100vh";

  bigImage.style.maxWidth = "80%";
  bigImage.style.maxHeight = "80%";

  worksSection.appendChild(imgPopup);
  imgPopup.appendChild(bigImage);

  worksSection.addEventListener("click", (e) => {
    e.preventDefault();

    let target = e.target;

    if (target && target.classList.contains("preview")) {
      imgPopup.style.display = "flex";
			document.body.style.marginRight = `${window.innerWidth - document.body.scrollWidth}px`;
      document.body.style.overflow = "hidden";

      const path = target.parentNode.getAttribute("href");
      bigImage.setAttribute("src", path);
    }

    if (target && target.matches("div.popup")) {
      imgPopup.style.display = "none";
			document.body.style.marginRight = `0px`;
      document.body.style.overflow = "";
    }
  });
};

export default images;
