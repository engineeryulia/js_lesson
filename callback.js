// const printMessage = function(param){
//   console.log(`You just entered ${param}`);
// }
// const newMesage = printMessage
// console.log(typeof newMessage);


// function sum (num1, num2){
//   return function(){
//     num1 + num2;
//   }
// }
// console.log(sum(20, 10));

//способ борьбы с ассинхроностью
// фу
function first(y){
  console.log(1);
  y()
}
function second(a, b){
  console.log(a * b);
}
first(function(){
  second(5, 7)
})
first(second);
// second();