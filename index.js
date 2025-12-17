let billamount = document.getElementById("billAmount");
let percentagetip = document.getElementById("percentageTip");
let tipamount = document.getElementById("tipAmount");
let totalamount = document.getElementById("totalAmount");
let errormessage = document.getElementById("errorMessage");

function calculateButton() {
    if (billamount.value === "") {
        errormessage.textContent = errormessage;
    } else if (percentagetip.value === "") {
        errormessage.textContent = errormessage;
    } else {
        errormessage.textContent = "";

        let billAmount = parseInt(billamount.value);
        let percentageTip = parseInt(percentagetip.value);

        let tipAmount = ((percentageTip / 100) * billAmount);
        totalamount.value = (billAmount + tipAmount);
        tipamount.value = tipAmount;


    }
}