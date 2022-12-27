// FANCTIONS
//let name ="Serj";


// console.log(name);
// console.log(printMessage());
// console.log(name);

// function printMessage(){
//   let name = "Anna";
//   return name = "Hello, " + name;
// }
// let num = 10;
// function count(){
//   //let num = 10;
//   num++;
//   console.log(num);
//   }
// count();
// count();
// count();

// function count(num1, num2, operator) {
//   switch(operator) {
//     case "+":
//       return num1 + num2;
//       break;
//     case "-":
//       return num1 - num2;
//       break;  
//   }
// }
// console.log(count(10, 20, "-"))

// function sum (num1, num2) {  //параметры
//   return num1 + num2;
// }
// console.log(sum(10)); //NaN //аргументы

// function sum (arr) {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++){
//     sum += arguments[i]
//   }
//   return sum;
// }
// //console.log(sum(10,  20, 30, 40, 50));
// let arr = [10, 20, 30, 40, 40]
// let result = sum(...arr) // spred operator
// //разворачивает массив в последовательность чисел 
// console.log(result);


// const newSum = (num1, num2) => {
//   return num1 + num2;
// }
// // const newSum = (num1, num2) => num1 + num2
// console.log(newSum(10, 20));

//METHODS literals []

// let arr =  new Array(10); //let arr = [];
// const arr1 = [1, 2, 3,]
// //console.log(arr1.length); //3
// console.log(arr); //[]   [ <10 empty items> ] массив из 10 пустых элементов

//et arr = new Array(10, 3, 5,  "str", null, false);
//arr.length = 0;
// console.log(arr[arr.length - 1]); //false
// console.log(arr[0]); // 10
// console.log(arr.at( -1)); // false

// arr.push('string', {1: "re", 2: "yt"});  //добавляет в конец
// console.log(arr.push(100));
// console.log(arr);
// arr.pop(); //поп удаляет последний элемент [arr.length -1]
// arr.unshift(1, 2, 3,)
// console.log(arr); //добавляет в начало
// console.log(arr.shift())// удаляет первую с начала [0]

// let arrStr = ['kj', 'rt']
// let newArr = arrStr.concat(arr) //присоединил два массива arrStr + arr
// console.log(newArr);

// let arr1 =  [2, 3, 4, 5, 6,]
// arr1.reverse();
// console.log(arr1);  //[ 6, 5, 4, 3, 2 ]

//let str = 'Hello world!' 
//  const arrSplit = str.split('') //рассекает по пробелу [ 'Hello', 'world!' ]
//  console.log(arrSplit);  // элементы строки

// let arrJoin = arrSplit.join('');
// console.log(arrJoin); //Hello world!  склеивает


//.slice([start],[end])  end not includ
// let str = 'Hello world!';
// const arr = str.split('')
// console.log(arr);
// const newArr = arr.slice(2, 5)//[ 'l', 'l', 'o' ]
// console.log(newArr);

//.splice(index, deliteCount, el1, .. elN)  
// let str = 'Hello world!';
// const arr = str.split('')
// console.log(arr);
// arr.splice(1, 3, 'E', 'L', 'L') //переменную не надо создавать только в текущем массиве
// console.log(arr);//'H', 'E', 'L', 'L', 'o', ' ', 'w', 'o','r', 'l', 'd', '!'

// let numArr = [1, 2, 3, 4];
// numArr.splice(3, 0, 10,20, 30) //начиная с третьего элем, удаляя 0, доб 10, 20, 30
// console.log(numArr); //[1,  2, 3, 10, 20, 30, 4]


//.indexOf()  .lastIndexOf()  .includes()
//.indexOf(item, fromIndex)
// если не находит то возвращает -1
// const arr = "Hello World!".split('');
// console.log(arr);
// let index = arr.indexOf('l'); //находит l индекс №2
// console.log(index);
// let index = arr.indexOf('l', 4); //находит l под №9 начиная с 4 эл
// console.log(index);

//.find() .findIndex()
//.find(function(item, index, array) {...}));
//находит первый найденный массив
//const arr = [2, 4, 6, 8, 11];
//console.log(arr.find(el => el % 2 != 0)); //11 return el
//метод find будет перебирать arr по элементам пока условие не будет выполнено
//console.log(arr.findIndex(el => el % 2 != 0)); // return index, 4

//.filter()
//.filter(function(el, index, arr) => {....}));
// const arr = [7, 17, 6, 5, 11] 
// const arrOdd = arr.filter(el => el %2 != 0)
// console.log(arrOdd); //[ 7, 17, 5, 11 ] отфильтравали и получили новый массив с нечетными числами

//.every() -все соответс true
//.some() -какие-то соот true
// const arr = [7, -17, -6, 5, 11]
//console.log(arr.every(el => el > 0)); //false
//console.log(arr.some(el => el > 0)); //true

//forEach() -callback function принимает три элемента число(элемент), index, array
//передается как элемент в др ф-ю
//этот метод позв применить коллбэк ф-ю ко всем элементам массива, ничего не возвращает
const arr = [7, -17, -6, 5, 11, 0]
// const changeSign = function (el){
//   console.log(-el);
// }
// or const changeSign = el => concole.log(-el)
//changeSign(arr[1])
//arr.forEach(changeSign)
//or the same безымянная ф-я
// arr.forEach(function (el){
//   console.log(-el);
// })
//or arr.forEach(el => concole.log(-el)
arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log (" "))
// 

