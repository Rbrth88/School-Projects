function totalPrice(sqEdge, pricePerSqFt) {
let c = sqEdge** 2 * pricePerSqFt;
console.log(c)
}
totalPrice(10,100)

let day = "10";
let month = "August";
let year = "1988";

let myBirthday = [month, day, year];
console.log(myBirthday)

let age = 15;

if(age <= 10){
alert("Not Permitted")
}
else if(age <= 15) {
  alert("Permitted With Parent")
}
else if(age < 18) {
alert("Permitted With Anyone Over 18")
}
else if(age >= 18) {
  alert("Permitted To Attend Alone")
}
