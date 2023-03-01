let a = 7
let b = 0
let myDivision = a / b
console.log(myDivision)// Infinity
console.log(typeof(myDivision))// number

let myNum = null;
console.log(typeof(myNum)); //object

let login = false;
let pass = false;
let errorPassMsg = "Your password is wrong"

if(login && pass){
  console.log('click submit')
  console.log('hi');
}
else if(pass != true && login){
  console.log(errorPassMsg)
}
else {
  console.log('Please contact suport')
}