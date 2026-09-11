const supportButton = document.querySelector(".support-button");
const supportModal = document.querySelector(".support-modal");
const supportClose = document.querySelector(".support-modal-close");

supportButton.addEventListener("click", () => {
    supportModal.classList.add("open");
});

supportClose.addEventListener("click", () => {
    supportModal.classList.remove("open");
});

supportModal.addEventListener("click", (event) => {
    if (event.target === supportModal) {
        supportModal.classList.remove("open");
    }
});
