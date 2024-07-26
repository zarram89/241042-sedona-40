const modalWindow = document.querySelector(".modal-container");
const btnCloseModal = modalWindow.querySelector(".modal-close-button");
const btnOpenModal = document.querySelector(".button-search");

btnCloseModal.addEventListener("click", function() {
  modalWindow.classList.add("modal-container-close");
});

btnOpenModal.addEventListener("click", function() {
  modalWindow.classList.remove("modal-container-close");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modalWindow.classList.add("modal-container-close");
  }
});
