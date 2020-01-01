
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
  document.getElementById('totalDebt').innerHTML = "Total debt is: " + totalAllDebts + ". " + "Debt 1: " + planOutput(debt1, rate1);
   // next steps: total up the debts, if more than 1 (maybe value || 0), in the modal. Maybe a pie chart divided evenly with each radio checked
   // totalDebts = ( debt0 || 0) + ( debt1 || 0) + (debt2 || 0) + (debt3 || 0)
   // payoffPlan innerHTML = "To pay off " (totalDebts) + " by " + (user's chosen date) + ":"
   // planDetail  
   
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

