document.getElementById("amountAndInterest1").style.display = "none"
document.getElementById("amountAndInterest2").style.display = "none"
document.getElementById("amountAndInterest3").style.display = "none"

// event of clicking yellow plus sign to add up to 3 other debt inputs
document.getElementById("plus-sign").onclick = function() {
  if (document.getElementById("amountAndInterest1").style.display == "none") {
    document.getElementById("amountAndInterest1").style.display = "block"
  } else if (
    document.getElementById("amountAndInterest2").style.display == "none"
  ) {
    document.getElementById("amountAndInterest2").style.display = "block"
  } else {
    document.getElementById("amountAndInterest3").style.display = "block"
  }
}

// event of clicking yellow minus sign to remove 3 other debt inputs
document.getElementById("minus-sign1").onclick = function minus1() {
  if (document.getElementById("amountAndInterest1").style.display == "block") {
    document.getElementById("amountAndInterest1").style.display = "none"
  }
}

document.getElementById("minus-sign2").onclick = function minus2() {
  if (document.getElementById("amountAndInterest2").style.display == "block") {
    document.getElementById("amountAndInterest2").style.display = "none"
  }
}

document.getElementById("minus-sign3").onclick = function minus3() {
  if (document.getElementById("amountAndInterest3").style.display == "block") {
    document.getElementById("amountAndInterest3").style.display = "none"
  }
}

// output div is hidden at first, starting date (today) is also hidden, although this should be adjustable in v2.0
document.getElementById("output").style.visibility = "hidden"
document.getElementById("startDate").style.visibility = "hidden"
document.getElementById("startDate").valueAsDate = new Date()

function calc() {
  // reveal the output divs
  document.getElementById("output").style.visibility = "visible"

  // set up the date variables
  const freeDat = new Date(document.getElementById("freedomDate").value)
  const totalDys = parseInt((freeDat - new Date()) / (1000 * 60 * 60 * 24))
  const months = totalDys / 30.44

  // The calculation of any additional debts -- '|| 0' avoids displaying "NaN" before the user can enter both values
  function xtraCalc(d, r) {
    const xtraIntr = r.value || 0
    const rt = xtraIntr / 12 / 100

    const dbt = d.value || 0

    const monthlyPay =
      parseFloat((rt * dbt) / (1 - Math.pow(1 + rt, -months))) || 0

    return monthlyPay.toFixed(2)
  }

  // output the first debt payment
  document.getElementById("monthlyPayOutput").innerHTML =
    xtraCalc(debtInput0, rateInput0) +
    "  " +
    "- That's about " +
    (xtraCalc(debtInput0, rateInput0) / 5).toFixed(2) +
    " hrs of online surveys, " +
    (xtraCalc(debtInput0, rateInput0) / 10).toFixed(2) +
    " hrs of teaching english, or " +
    (xtraCalc(debtInput0, rateInput0) / 16).toFixed(2) +
    " hours of Lyft driving."

  // The bottom three days/months/years output divs:
  document.getElementById("numdays").innerHTML = totalDys
  document.getElementById("numMonths").innerHTML = months.toFixed(2)
  document.getElementById("numYears").innerHTML = (months / 12).toFixed(2)

  // if any additional debts are added (made visible,) append to results div with the calculation
  // make this into a reusable function
  // add modal with grand total, payoff plan 
  if (document.getElementById("amountAndInterest1").style.display == "block") {
    var para1 = document.createElement("p")
    para1.className = "card bg-warning mb-2"
    document.getElementById("monthlyPayOutput").appendChild(para1)
    document.getElementsByClassName("card bg-warning mb-2")[1].innerHTML =
      "debt 2:" +
      " " +
      xtraCalc(Debt2, rate2) +
      "  " +
      "- That's about " +
      (xtraCalc(Debt2, rate2) / 5).toFixed(2) +
      " hrs of online surveys, " +
      (xtraCalc(Debt2, rate2) / 10).toFixed(2) +
      " hrs of teaching english, or " +
      (xtraCalc(Debt2, rate2) / 16).toFixed(2) +
      " hours of Lyft driving."
  } else {
    var para1 = document.createElement("p")
    para1.className = "card bg-warning mb-2"
    document.getElementById("monthlyPayOutput").appendChild(para1)
    document.getElementsByClassName("card bg-warning mb-2")[1].innerHTML =
      "click + / - to enter/remove more debts"
  }

  if (document.getElementById("amountAndInterest2").style.display == "block") {
    var para1 = document.createElement("p")
    para1.className = "card bg-warning mb-2"
    document.getElementById("monthlyPayOutput").appendChild(para1)
    document.getElementsByClassName("card bg-warning mb-2")[2].innerHTML =
      "debt 3:" +
      " " +
      xtraCalc(Debt3, rate3) +
      "  " +
      "- That's about " +
      (xtraCalc(Debt3, rate3) / 5).toFixed(2) +
      " hrs of online surveys, " +
      (xtraCalc(Debt3, rate3) / 10).toFixed(2) +
      " hrs of teaching english, or " +
      (xtraCalc(Debt3, rate3) / 16).toFixed(2) +
      " hours of Lyft driving."
  }

  if (document.getElementById("amountAndInterest3").style.display == "block") {
    var para1 = document.createElement("p")
    para1.className = "card bg-warning mb-2"
    document.getElementById("monthlyPayOutput").appendChild(para1)
    document.getElementsByClassName("card bg-warning mb-2")[3].innerHTML =
      "debt 4:" +
      " " +
      xtraCalc(Debt4, rate4) +
      "  " +
      "- That's about " +
      (xtraCalc(Debt4, rate4) / 5).toFixed(2) +
      " hrs of online surveys, " +
      (xtraCalc(Debt4, rate4) / 10).toFixed(2) +
      " hrs of teaching english, or " +
      (xtraCalc(Debt4, rate4) / 16).toFixed(2) +
      " hours of Lyft driving."
  }

}

// listen for any inputs and recalculate
var inputs = document.querySelectorAll("input")
inputs.forEach(inp => {
  inp.addEventListener("input", calc)
})

// listen for minus sign clicks
var minus = document.getElementsByClassName("minus-sign")
for (var i = 0; i < minus.length; i++) {
  minus[i].addEventListener("click", calc)
}

// listen for plus sign clicks
var plus = document.getElementById("plus-sign")
plus.addEventListener("click", calc)