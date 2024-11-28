var miles, repeat, gallons;
do{
do{
   miles = parseInt(prompt("Enter numb er of miles"));
   gallons = parseInt(prompt("Enter number of gallons"));
}while(isNaN(miles)|| miles<0 || isNaN(gallons)|| gallons<0)


    var result = miles/gallons;
console.log(result.toFixed(2));

repeat =prompt("Repeat entries Y/N");
}while(repeat =="y");

const text =`<p> You entered Miles: ${miles} </p>`
document.write(text);
alert("you eneterd "+miles);