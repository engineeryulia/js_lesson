// console.log('1');
// console.log('2');
// console.log('3');
// print();
// declaration

// function print(){
//   console.log('Hello world!');
// }
// print();

//==============================
// expresion
// console.log('1');
// console.log('2');
// console.log('3');

// const print = function(){
//   console.log('Hello world!');
// }
// print();

//===============================

// function checkEven(num){
//   console.log (num % 2 == 0 ? 'even' : 'odd')
//   return num % 2 == 0 ? 'even' : 'odd'
// }
// let arr = [2, 4, 5, 7, 10]
// for(let i=0; i<arr.length; i++){
//   console.log(`${arr[i]} - ${checkEven(arr[i])}`);
// }
//============================================
// let name = 'Serj'
// console.log(name);
// console.log(printMessage());
// console.log(name);
// let name = 'Serj'

// function printMessage(){
//   let name = 'Anna';
//   return name ='Hello,' + name;
// }
// console.log(name);
// console.log(printMessage());

// ==================================================

// function sum(num1 = 1, num2 = 3){
//   return num1 + num2;
//   }
//   console.log(sum(10)+sum(30)) //46
//   console.log(sum(10, 20)) 
   
//  //===========================================
//  function count(num1, num2, operator){
//   switch (operator){
//     case '+':
//       return num1 + num2;
//       //break; //not need
//       case '-':
//         return num1 - num2;
//         //break;
//   }

//  }
//  console.log(count(10, 20, '+')); //30

//========================================
// function sum(){
//   let sum = 0;
//   for(let i =0; i< arguments.length; i++){
//     sum += arguments[i]
//   }
//   return sum;

// }
// //console.log(sum(12, 30, 4, 5, 0));
// let arr = [10, 20, 30, 40, 50]
// let result = sum(...arr)// operator spread разворачивает массив обрабатывает цикл сложив или разверни нас массив в последовательность цикл без []
// result += 1000
// console.log(result);
//========================================
//function arrow (= declaraton)

// const newSum = (num1, num2) => {
// return num1 + num2;
// }

// console.log(sum(10, 20));
// console.log(newSum(10, 20));
