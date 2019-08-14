
var modal = document.querySelector(".modalz");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".closeButton");

function toggleModal() {
   modal.classList.toggle("show-modal");
   console.log('show-modal');
}

function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }
   console.log('modalClicked');
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

