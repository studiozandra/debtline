
var modal = document.querySelector(".modalz");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".closeButton");

function totalDebts(){
  var total = (planOutput(debt1, rate1)) + ((planOutput(debt2, rate2)) || 0 ) + ((planOutput(debt3, rate3)) || 0 ) + ((planOutput(debt4, rate4)) || 0 );

  console.log(total);
  return total;
}
var totalAllDebts = 0;


// pop up modal
function toggleModal() {
   modal.classList.toggle("show-modal");
   totalAllDebts = 0; // reset the total to zero

   // loop through inputs -- next step: COMBINE this for loop WITH ABOVE "total" FUNCTION
   for (i = 0; i < debtArray.length; i++){
      if (debtArray[i][0]){
         var debt = parseInt(debtArray[i][0]);
         console.log(debt + " debt!")
         totalAllDebts += debt;
      }else{
         totalAllDebts += 0
         console.log('nada')
      }
  }
  console.log(totalAllDebts + " totalAllDebts")
  document.getElementById('totalDebt').innerHTML = "To pay off all " + totalAllDebts + " by " + setUpDates(document.getElementById("freedomDate").value)[0].toLocaleDateString() + " " + calc();
   // Maybe a pie chart divided evenly with each radio checked
   // maybe add more planDetail  
   
}

// close when user clicks anywhere outside of the modal 
function windowOnClick(event) {
   if (event.target === modal) {
       toggleModal();
   }
   
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

