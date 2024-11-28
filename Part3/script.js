const $ = selector => document.querySelector(selector);
$("#TaxableIncome").focus();

const processEntry = evt => {
    const TaxableIncome = parseInt($("#TaxableIncome").value);
    if (TaxableIncome < 0) {
        alert("Error: Number must be a valid positive number.")
        return;
    } else {
        calculateTax(TaxableIncome);
    }
}

const calculateTax = function(TaxableIncome) {
    if (TaxableIncome > 0 && TaxableIncome <= 9875) {
        var IncomeTax = parseFloat(TaxableIncome * 0.10);
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 9875 && TaxableIncome <= 40125) {
        var IncomeTax = parseFloat(987.50 + ((TaxableIncome - 9875) * 0.12));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 40125 && TaxableIncome <= 85525) {
        var IncomeTax = parseFloat(4617.50 + ((TaxableIncome - 40125) * 0.22));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 85525 && TaxableIncome <= 163300) {
        var IncomeTax = parseFloat(14605.50 + ((TaxableIncome - 85525) * 0.24));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 163300 && TaxableIncome <= 207350) {
        var IncomeTax = parseFloat(33271.50 + ((TaxableIncome - 163300) * 0.32));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 207350 && TaxableIncome <= 518400) {
        var IncomeTax = parseFloat(47367.50 + ((TaxableIncome - 207350) * 0.35));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    }
    if (TaxableIncome > 518400) {
        var IncomeTax = parseFloat(156235.50 + ((TaxableIncome - 518400) * 0.37));
        $("#IncomeTaxOwed").value = IncomeTax.toFixed(2);
    $("#TaxableIncome").focus();
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    $("#calculate").addEventListener("click", processEntry);
});