const $ = selector => document.querySelector(selector);
$("#subtotal").focus();

const Calculate = evt => {
        const Subtotal = parseFloat($("#subtotal").value);
        const TaxRate = parseFloat($("#taxrate").value / 100);
        if (isNaN(Subtotal) || isNaN(TaxRate)) { 
            alert("One of the required fields is missing.");
            return;
        }
        if (0 > Subtotal || 10000 < Subtotal) {
            alert("Please enter a subtotal between $0 and $10000.");
            return;
        } 
        if (0 > TaxRate || 0.12 < TaxRate) {
            alert("Please enter a tax rate between 0 and 12 percent.");
            return;
        }  
        const SalesTax = Subtotal * TaxRate;
        const Total = Subtotal + SalesTax;
        $("#salestax").value = SalesTax.toFixed(2);
        $("#total").value = Total.toFixed(2);
        $("#subtotal").focus();
}
document.addEventListener("DOMContentLoaded", ()=>{
    $("#Calculate").addEventListener("click", Calculate);
});

const Clear = evt => {
    $("#subtotal").value = "";
    $("#taxrate").value = "";
    $("#salestax").value = "";
    $("#total").value = "";
}
document.addEventListener("DOMContentLoaded", ()=>{
    $("#Clear").addEventListener("click", Clear)
});