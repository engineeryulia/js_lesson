// let a = 7
// let b = 0
// let myDivision = a / b
// console.log(myDivision)// Infinity
// console.log(typeof(myDivision))// number

// let myNum = null;
// console.log(typeof(myNum)); //object

// let login = false;
// let pass = false;
// let errorPassMsg = "Your password is wrong"

// if(login && pass){
//   console.log('click submit')
//   console.log('hi');
// }
// else if(pass != true && login){
//   console.log(errorPassMsg)
// }
// else {
//   console.log('Please contact suport')
// }
// //Svetlana
// let kidsTicket, adultsTicket, age, price, isVeterans, seniors;
// kidsTicket = "Hello Kitty";
// adultTicket = "Ray";
// age = prompt("How old are you?");
// let totalPrice;
// let guestNum = prompt("How many tickets do you need?")
// price = 10;

// if(age >= 18){
//   totalPrice = guestNum * price;
//   alert(`Welcome to ${adultTicket} movie`);
//   console.log(`Ticket price for ${guestNum} tickets for  ${adultTicket} movie will be $ ${totalPrice}`);
//  }else{
//   totalPrice = guestNum * price / 2;
//   console.log(`Ticket price for ${guestNum} tickets for  ${kidsTicket} movie will be $ ${totalPrice}`);
//    alert(`Go to ${kidsTicket}`);
//  }
   //45min

//Nalya
/* «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
*/   
let dayDistance  = 3;
let nightDown = -2;
let distance = 0;
let days = 0;
//first day
if ((distance += dayDistance) <= 5) {
  days++
  console.log(`- current distance at the end of the day for the day ${days} is ${distance} meter(s)`);
  distance += nightDown
}
//second day
if ((distance += dayDistance) <= 5) {
  days++
  console.log(`- current distance at the end of the day for the day ${days} is ${distance} meter(s)`);
  distance += nightDown
}
//third day
if ((distance += dayDistance) <= 5) {
  days++
  console.log(`- current distance at the end of the day for the day ${days} is ${distance} meter(s)`);
  distance += nightDown
}
//forth day
if ((distance += dayDistance) <= 5) {
  days++
  console.log(`- current distance at the end of the day for the day ${days} is ${distance} meter(s)`);
  distance += nightDown
}
else console.log('Finish');
//



/*Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, 
то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
 */
let myMonth = 'July';
if (myMonth == 'July' || myMonth == 'August') {
  console.log('aproved');
}
else console.log('denied');

/* Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
*/
let num1 = 5;
let num2 = 3;
let operator = '/';

if(operator == "+") {
  console.log(num1 + num2);
}
else if(operator == "-") {
  console.log(num1 - num2);
}
else if(operator == "*") {
  console.log(num1 * num2);
}
else if(operator == "/") {
  console.log(num1 / num2);
}
else console.log('Please, enter correct number');

