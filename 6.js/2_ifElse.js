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
//Svetlana
let kidsTicket, adultsTicket, age, price, isVeterans, seniors;
kidsTicket = "Hello Kitty";
adultTicket = "Ray";
age = prompt("How old are you?");
let totalPrice;
let guestNum = prompt("How many tickets do you need?")
price = 10;

if(age >= 18){
  totalPrice = guestNum * price;
  alert(`Welcome to ${adultTicket} movie`);
  console.log(`Ticket price for ${guestNum} tickets for  ${adultTicket} movie will be $ ${totalPrice}`);
 }else{
  totalPrice = guestNum * price / 2;
  console.log(`Ticket price for ${guestNum} tickets for  ${kidsTicket} movie will be $ ${totalPrice}`);
   alert(`Go to ${kidsTicket}`);
 }
   //45min

//Nalya
/* «Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
*/   
let a = 3



/*Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
 */


/* Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
*/