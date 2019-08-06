document.getElementById('amountAndInterest1').style.display = 'none';
document.getElementById('amountAndInterest2').style.display = 'none';
document.getElementById('amountAndInterest3').style.display = 'none';

  document.getElementById("add").onclick = function () {
    // var ok = true;

     if (document.getElementById('amountAndInterest1').style.display == 'none') {
      document.getElementById('amountAndInterest1').style.display = 'block';
      console.log("one");    
     }else if (document.getElementById('amountAndInterest2').style.display == 'none'){
      document.getElementById('amountAndInterest2').style.display = 'block';
      console.log("two");   
     }else {
      document.getElementById('amountAndInterest3').style.display = 'block';
      console.log("one and two");
     }
  };
  

document.getElementById("remove1").onclick = function () {
    // var ok = true;

     if (document.getElementById('amountAndInterest1').style.display == 'block') {
      console.log("clicked minus")
      document.getElementById('amountAndInterest1').style.display = 'none';    
     }
    
};
document.getElementById("remove2").onclick = function () {
    // var ok = true;

     if (document.getElementById('amountAndInterest2').style.display == 'block') {
      document.getElementById('amountAndInterest2').style.display = 'none';    
     }
    
};
document.getElementById("remove3").onclick = function () {
    // var ok = true;

     if (document.getElementById('amountAndInterest3').style.display == 'block') {
      document.getElementById('amountAndInterest3').style.display = 'none';    
     }
    
};


document.getElementById('output').style.visibility = 'hidden';
document.getElementById('startDate').style.visibility = 'hidden';
document.getElementById('startDate').valueAsDate = new Date();



function calc(){
  document.getElementById('output').style.visibility = 'visible';
  let interestRate = document.getElementById('rateInput0').value;
  const rate = ((interestRate / 12) / 100);
  const debt = document.getElementById("debtInput0").value;
  
  const freeDt = new Date(document.getElementById("freedomDate").value);
  const totalDays = parseInt((freeDt - new Date) / (1000 * 60 * 60 * 24));
  
  const months = totalDays / 30.44;

  // This is the loan amortization formula:
  const monthlyPmt = parseFloat((rate * debt) / (1 - (Math.pow((1 + rate), (-months)))));

 
  document.getElementById('monthlyPayOutput').innerHTML = (monthlyPmt).toFixed(2);
  
  // The bottom 3 output divs:
  document.getElementById('numdays').innerHTML = totalDays;
  document.getElementById('numMonths').innerHTML = months.toFixed(2);
  document.getElementById('numYears').innerHTML = (months / 12).toFixed(2);


  function xtraCalc(d, r){

  const xtraIntr = r.value;
  console.log(xtraIntr + " xtraIntr");
  const rt = ((xtraIntr / 12) / 100);
  
  const dbt = d.value;
  console.log(dbt + " dbt");

  const freeDat = new Date(document.getElementById("freedomDate").value);
  const totalDys = parseInt((freeDat - new Date) / (1000 * 60 * 60 * 24));
  console.log(totalDys + " totalDys");
  const months = totalDays / 30.44;
  console.log(months + " months");

  const monthlyPay = parseFloat((rt * dbt) / (1 - (Math.pow((1 + rt), (-months)))));
  
  console.log(d);
  console.log(d.id);
  console.log(d.id.value);


  return (monthlyPay).toFixed(2);

  }

  var para1 = document.createElement("p");
  para1.className = 'card bg-warning mb-2';
  var para2 = document.createElement("p");
  para2.className = 'card bg-warning mb-2';
  var para3 = document.createElement("p");
  para3.className = 'card bg-warning mb-2';
  document.getElementById('monthlyPayOutput').appendChild(para1);
  document.getElementsByClassName('card bg-warning mb-2')[1].innerHTML = "debt 2" + " " + xtraCalc(Debt2, rate2); 
  document.getElementById('monthlyPayOutput').appendChild(para2);
  document.getElementsByClassName('card bg-warning mb-2')[2].innerHTML = "debt 3" + " " + xtraCalc(Debt3, rate3)
  document.getElementById('monthlyPayOutput').appendChild(para3);
  document.getElementsByClassName('card bg-warning mb-2')[3].innerHTML = "debt 4" + " " + xtraCalc(Debt4, rate4)
};



var inputs = document.querySelectorAll('input');
inputs.forEach((inp) => {
  inp.addEventListener('input', calc)
});