const modalWindow = document.querySelector(".modal-container");
const btnCloseModal = document.querySelector(".modal-close-button");

btnCloseModal.addEventListener("click", function() {
  modalWindow.style.display = "none";
});
