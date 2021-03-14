let t0 = performance.now();



let modal = document.querySelector(".modalz");
let trigger = document.querySelector(".trigger"); // 'generate' btn
let closeButton = document.querySelector(".closeButton"); // red 'x' btn

function totalDebts(){
  let total = (planOutput(debt1, rate1)) + 
  ((planOutput(debt2, rate2)) || 0 ) + 
  ((planOutput(debt3, rate3)) || 0 ) + 
  ((planOutput(debt4, rate4)) || 0 );
  return total;
}
let totalAllDebts = 0;


// pop up modal
function toggleModal() {
   modal.classList.toggle("show-modal");
   totalAllDebts = 0; // reset the total to zero 

   // loop through user debt inputs
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
  document.getElementById('totalDebt').innerHTML = "To pay off all " + totalAllDebts + " by " + setUpDates(document.getElementById("freedomDate").value)[0].toLocaleDateString() + ": ";
  document.getElementById('plan1Amt').innerHTML = ` monthly payment is ${adviceArr[0][0]}` 
  document.getElementById('plan1Gigs').innerHTML = `Possible gigs ${adviceArr[0][1]}, ${adviceArr[0][2]}, ${adviceArr[0][3]}`

  document.getElementById('plan2Amt').innerHTML = ` monthly payment is ${adviceArr[0][0]}` 
  document.getElementById('plan2Gigs').innerHTML = `Possible gigs ${adviceArr[1][1]}, ${adviceArr[1][2]}, ${adviceArr[1][3]}`

  document.getElementById('plan3Amt').innerHTML = ` monthly payment is ${adviceArr[0][0]}` 
  document.getElementById('plan3Gigs').innerHTML = `Possible gigs ${adviceArr[2][1]}, ${adviceArr[2][2]}, ${adviceArr[2][3]}`
  
  document.getElementById('plan4Amt').innerHTML = ` monthly payment is ${adviceArr[0][0]}` 
  document.getElementById('plan4Gigs').innerHTML = `Possible gigs ${adviceArr[3][1]}, ${adviceArr[3][2]}, ${adviceArr[3][3]}`
  // Maybe a pie chart divided evenly with each radio checked
   // maybe add more planDetail  
   var t1 = performance.now();
console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to complete calcs');

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

