import checkNumInputs from "./checkInputs";
import { closeModal } from "./modals";

const forms = (state) => {
  const form = document.querySelectorAll("form"),
    input = document.querySelectorAll("input");

  checkNumInputs("input[name='user_phone']");

  const message = {
    loading: "Загрузка...",
    success: "Спасибо! Скоромы мы с Вами свяжемся",
    failure: "Что-то пошло не так...",
  };

  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;

    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    input.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      if (item.getAttribute("data-calc") === "end") {
        for (let key in state) {
          formData.append(key, state[key]);
        }
      }

      postData("assets/server.php", formData)
        .then((res) => {
          if (!response.ok) {
            statusMessage.textContent = message.failure;
          } else {
            console.log(res);
            statusMessage.textContent = message.success;
          }          
        })
        .catch(() => {
          statusMessage.textContent = message.failure;
        })
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
            closeModal(item.parentNode.parentNode.parentNode.parentNode);
          }, 5000);
        });
    });
  });
};

export default forms;
