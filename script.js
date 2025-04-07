//* references for input elements

const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip-percentage");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-bill-amount")

const calculation = document.getElementById("calculate-tip");
//*function to calculate tip and total bill amount

function calculateTip() {
    let bill = parseFloat(billInput.value);
    let tipPercentage = parseFloat(tipInput.value) / 100;
    //*check if bill and tip percentage are valid numbers

    if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || tipPercentage <= 0 || tipPercentage > 100) {
        alert("Please enter valid numbers for Bill and Tip Percentage");
        location.reload();
        return;
    }
    //*calculate tip amount
    let tip = bill * tipPercentage;
    //*calculate total bill amount
    let totalBill = bill + tip;
    //*display tip and total bill amount
    tipAmount.style.display = 'inline'    //*displays the results hidden by CSS display
    totalAmount.style.display = 'inline'

    tipAmount.innerHTML = `Tip: £${tip.toFixed(2)}`
    totalAmount.innerHTML = `Total Bill: £${totalBill.toFixed(2)}`

}

//*add event listener to calculate-tip button

calculation.addEventListener("click", calculateTip);
