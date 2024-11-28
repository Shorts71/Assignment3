const $ = selector => document.querySelector(selector);

const CalculateTax = evt => {
    if ($("#subtotal").value == "" || $("#taxrate").value == "") { 
        alert("One of the required fields is missing.");
    } else {
        const Subtotal = parseFloat($("#subtotal").value);
        const TaxRate = parseFloat($("#taxrate").value);
        const SalesTax = Subtotal * TaxRate;
        $("#salestax").textContent = SalesTax.toFixed(2);
    }
}
document.addEventListener("DOMContentLoaded", ()=>{
    $("#Calculate").addEventListener("click", CalculateTax);
});
