// let login = true
// let course1 = 'JS'
// let course2 = 'Java'
// let course = course1;
// let region = 'Russia'

// if(login == true) {
//   if (course == course1) {
//     console.log('Welcome!');

//     if (region!= 'USA') console.log('Wake up early!');

//   }
//   else console.log('Go to Java');
// }
// else {
//   console.log('HELLO');
// }
//=================SWITCH===============================
let num = 5;
switch (num) {
  case 1:
    console.log("Two");
    break;
  case 2:
    console.log("Three");
    break;
  case 3:
    console.log("Four");
    break;
  case 4:
    console.log("Five");
    break;
  default: 
    console.log("Nothing");

}

//===================STRING============================

let phrase = "Hello world!";
let space = ".9%"
console.log(phrase.length);
console.log(space.length);

//index:
console.log(phrase[11]);
console.log(space[0]);

//
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase());

console.log(typeof(space));

// ======================ARRAYs==========================

const myArr = [];
const arr = new Array();

const arr1 = ['a', 'b']
// console.log(arr1);

// const diffTypes = [null, 'One', 2, true, undefined, five, seven, [1, 2, 3]];

// const letter = ['a', 's', 'd', 'f', 't']
// console.log(letter.length);
// console.log(letter[0]);
// console.log(letter.length-1);
// console.log(letter.at(-2));


let one = [3, 'hello', 5, 14, '', false, [2, 'two', -5]];
let count = 0;
let sum = 0;
// console.log(one.length);
for (let i = 0; i < one.length; i++) {
  // console.log(one[i]);                //one[i]-текущий элемент массива
  // console.log(i);                    // i - индекс элемент массива
  console.log(typeof one[i]);
  if (typeof one[i] == 'number') {
    count += 1                          //count++   считаем валидные 
    sum += one[i]
  }                   
  console.log(count, sum);
}

let two = [2, 'hello', 10, 14, 8, false, [2, 'two', -5]];

for (let i = 0; i < two.length; i++) {
  if(i % 2 === 0) {
    console.log(two[i]);
  }
  else {
    console.log('index = ' + i);
  }
}

let three = [3, 'hello', 5, 14, 'red', 'school', [2, 'two', -5]];
let text = ''
for (let i = 0; i < three.length; i++) {
  if (typeof three[i] === 'string') {
    text += three[i] + ' ';
    if(typeof three[i] == 'string' && three[i].length % 2 != 0) {
      console.log(three[i]);
    }
    
  }
}
console.log(text);

let four = [3, 'hello', 5, 14, 'red', 'school', [2, 'two', -5]];
for (let i = four.length -1; i >= 0; i--) {
  console.log(four[i]);
}