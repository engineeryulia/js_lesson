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
// const arr = [7, -17, -6, 5, 11, 0]
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
// arr.forEach((el, i) => i % 2 == 0 ? console.log(-el) : console.log (" "))


// .sort();
//const art = ["Anna","Stive", "Jane", "Serge"];
//console.log(art.sort());  //[ 'Anna', 'Jane', 'Serge', 'Stive' ]

//const arrNum = [1, 30, 25, 45, 0];
//console.log(arrNum.sort())  //[ 0, 1, 25, 30, 45 ]
//console.log(arrNum.sort((a, b) => b - a)[0]) //45 первый по убыванию

//.map   возвращает массив
// const arr = ["JavaScript","Java", "SQL", "Paython"];
// console.log(arr.map(el => el.length)); //[ 10, 4, 3, 7 ]
// console.log(arr.map((el, i, arr)=> i == 0|| i == (arr.length -1) ? `*${el}*` : el))
//[ '**JavaScript**', 'Java', 'SQL', '**Paython**' ]

// const arrNum = [1, 3, 6, 8];
// const newArr = arrNum.map(item => item ** 2)
// console.log(newArr); //[ 1, 9, 36, 64 ]

// const numStr = ['1', '3', '6', '8']; //когда сы берем с web страницы
// const newNum = numStr.map(item => +item)
// console.log(newNum); //[ 1, 3, 6, 8 ]

//.reduce() .reduceRight()   посчитать сумму произведение
//.reduce ((accumulator, element, index, array) => {...}, [initial value])
// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const result = arrNum.reduce((sum, el) => sum + el, 0)
// sum = 0;
// el = 1; sum += el : sum += 1
// el = 2            : sum +=2
// console.log(result); //55
// const resProd = arrNum.reduce((prod, el) => prod * el, 1)
// console.log(resProd); //3628800

//EX. ВЫЧИСЛИТЬ СРЕДНЮЮ
// const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let sum = 0;
// for (let i = 0; i < arrNum.length; i++) {
//   sum += arrNum[i]
// }
// console.log(sum / arrNum.length);// 5.5

// console.log(arrNum.reduce((acc, el, i, arr) => acc + el / arr.length, 0))


// Array.from() стaтический метод - создание массива наоснове передаваемого обьекта или значение
//const arr = Array.from(Array(5).fill('str')) //[ 'str', 'str', 'str', 'str', 'str' 
// let n = 5
// const arr = Array.from(Array(n+1).keys()) //[ 0, 1, 2, 3, 4, 5 ]
// console.log(arr);

// let start = 10
// let finish = 15
// const arr = Array.from(Array(finish - start +1).fill(start), (el, i) => el + i) 
// console.log(arr); //[ 10, 11, 12, 13, 14, 15 ]

// console.log([...Array(start + 1).keys()]); //[ 0, 1, 2, 3, 4..... 10 ]

//Array.of()
//const arr = Array.of(10, 15, 34, 76, "Anna", "null", "NaN")
//console.log(arr);
//Array.isArray() вернуть true/false по результ проверки
//arr = [];
//console.log(Array.isArray(arr)); //true




//.toString  or 
// let n = 15.25
// let s = `${n}`;
// console.log(s); // return str  '15.25' [jsbin]
//console.log(n.toFixed(1)); //return str '15.2'[jsbin] округляет
//.parseInt  //return number  работает со строкой в которой в начале идут числа
// console.log(parseInt(n)); //15
// console.log(typeof(1 * "15")) //number

// console.log('Hello world'.toUpperCase()) // HELLO WORLD
// console.log('HELLO WORLD'.toLowerCase()) // hello world

//.includes
// let str = 'Did you notice the notes me?'
//console.log(str.includes('you')); //true
//.indexOf()
// console.log(str.indexOf('you')); //4 возвращает index of el
// console.log(str.indexOf('I')); //-1 if not such el
//.lastIndexOf()
// console.log(str.lastIndexOf('me')); //25 возвращает index of last el

//посчитать элементов в массиве
// let count = 0;
// let position = str.indexOf('e');
//console.log(position); //13
// while (position != -1){   //если элемента нет
//   count++;
//   position = str.indexOf('e', position + 1)   //принудительно заставляем считать 
// }
// console.log(count); //4

//.substring
// let str1 = 'Helloworld'
// console.log(str1.length); //10
// console.log(str1.substring(0, 5)); //Hello
//.slice извлекает часть строки возвращает
//console.log(str1.slice(2, 4)); //ll

//.replace() возвращает новую строку 
// const p = 'The quick brown fox jump over the lazy dog. If the dog reacted, was it really lazy'
// console.log(p.replace('dog', 'monkey')); //заменил только в первом вхождении
// console.log(p.replaceAll('dog', 'monkey')); //заменил все
// console.log(p.replaceAll(/dog/gi,  'monkey')); //поменяй все внутри forward slash g-глобально i не чувств в case

//.split    переводит в массив
// let str = "I do, 2you do, 3they do"
// console.log(str.split('do')); //[ 'I ', ', 2you ', ', 3they ', '' ]
// console.log(str.split(/\d/)); //[ 'I do, ', 'you do, ', 'they do' ]

// .trim()
// const orig = '     *foo*      '
// console.log(orig.trim()); //*foo*

//padStart(length, otherStr)     //padEnd  осуществляет заполнение справа 
// function res(str){
// const a = str.padStart(7, "wood");
// return a;
// }
// console.log(res('Table')) 


