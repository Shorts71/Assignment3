const $ = selector => document.querySelector(selector);

const processEntry = evt => {
    const Change = parseInt($("#change").value);
    if (isNaN(Change) || 0 > Change || 99 < Change) {
        alert("Please enter a number between 0 and 99.");
        return;
    }
    const Quarters = parseInt(Change / 25);
    const quartersremainder = Change % 25;
    const Dimes = parseInt(quartersremainder / 10);
    const dimesremainder = quartersremainder % 10;
    const Nickels = parseInt(dimesremainder / 5);
    const Pennies = dimesremainder % 5;
    $("#quarter").value = Quarters;
    $("#dime").value = Dimes;
    $("#nickel").value = Nickels;
    $("#penny").value = Pennies;
};
document.addEventListener("DOMContentLoaded", ()=>{
    $("#calculate").addEventListener("click", processEntry);
});