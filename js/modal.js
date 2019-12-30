
var modal = document.querySelector(".modalz");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".closeButton");

function totalDebts(){
  var total = (planOutput(debt1, rate1)) + ((planOutput(debt2, rate2)) || 0 ) + ((planOutput(debt3, rate3)) || 0 ) + ((planOutput(debt4, rate4)) || 0 );

  console.log(total);
  return total;
}



// pop up modal
function toggleModal() {
   modal.classList.toggle("show-modal");
   console.log(allDebts.debt2.interest.value + " %")
   console.log(totalDebts);
   // nested loop through userInput.js object
   for (var key in allDebts){
      if (allDebts.hasOwnProperty(key)){
         for (var k in allDebts[key]){
            if (allDebts[key].hasOwnProperty(k)){
               console.log(key + " -> " + allDebts[key][k].value + ", " + allDebts[key][k].value)
            
            }
         }
          
      }
  }
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

