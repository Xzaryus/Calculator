// Get references to our input elements
const billInput = document.querySelector("#bill");
const tipPercentageInput = document.querySelector("#tip-percentage");
const tipAmountDisplay = document.querySelector("#tip-amount");
const totalBillAmount = document.querySelector("#total-bill-amount");
// Event listener for the calculate button

const calculateButton = document.querySelector("#calculate-tip");

// Function to calculate and display tip
function calculateTip() {
    // Get the current values from inputs
    const billAmount = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipPercentageInput.value) / 100; // Convert percentage to decimal

    // Check if inputs are valid numbers
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        tipAmountDisplay.textContent = "Please enter valid numbers";
        return;
    }

    // Calculate tip and total
    const tipAmount = billAmount * tipPercentage;
    const totalAmount = billAmount + tipAmount;

    // Display results
    
    tipAmountDisplay.innerHTML = `Tip amount: £${tipAmount.toFixed(2)}`;
    totalBillAmount.innerHTML = `Total amount: £${totalAmount.toFixed(2)}`;
}

// Add event listeners to inputs
calculateButton.addEventListener("click", calculateTip);