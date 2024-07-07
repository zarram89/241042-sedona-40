const modalWindow = document.querySelector(".modal-container");
const btnCloseModal = document.querySelector(".modal-close-button");
const btnOpenModal = document.querySelector(".button-search");

btnCloseModal.addEventListener("click", function() {
  modalWindow.classList.add("modal-container-close");
});

btnOpenModal.addEventListener("click", function() {
  modalWindow.classList.remove("modal-container-close");
});
