// const person = {
//   name: "Ivan",
//   surname: "Petrov",
//   age: 33,
//   job: "QA engineer",
//   isAdmin: false
// }

// const person2 = {
//   id: '02',
//   personInfo: {
//     name: {
//       first: 'Jane',
//       last: 'Dow',
//     },
//     dob: '01/01/1990',
//     'contactInfo': {
//       phone: '+123456789', 
//       email: null, 
//       adress: {
//         city: 'Boston',
//         state: 'M'
//       }
//     },
//   },
//   purchases: [null]
// }
// console.log(person2.personInfo);

// console.log(typeof person2);  //object

// let user = {
//   'name': 'Bob',
//   age: 21,
//   'isAdilt': true,
//   'salary': undefined,
//   4: null,
// }
//value of age name change
// user.age = 20;
// user.name = 'John';
// console.log(user); //{ '4': null, name: 'John', age: 20, isAdilt: true, salary: undefined }

// add adress
// user.adress = {
//   city: 'SF',
//   state: 'CA',
//   country: 'USA'
// }
// user.hello = 'hi',
// console.log('added new key - address and hello', user);

// // delete 
// delete user.adress.country;
// console.log('deleted', user);



// Обращение к свойствам используем через  точку ила через []
//person['name'], person['age']
// const person = {
//   name: 'Joey',
//   age: 30,
//   'likes cats': true,
// }
// console.log(person['name']);//Joey
// console.log(person.name);
// console.log(person['likes cats']); //true


// создаем объект
// const o = {};
// console.log(o);

// o.name = 'Jess' //arr[0] = 'Jess'
// console.log(o);

// o['age'] = 28
// console.log(o); // { name: 'Jess', age: 28 }
// let carModel= 'mini cooper'
// o['carModel'] = 1;
// console.log(o); //{ name: 'Jess', age: 28, carModel: 1 }

//обращение к свойствам объекта



// const obj = {apple: 12, plum: 10, grape: 15, orange: 8};
//  key in object
// for(let key in obj){
//   if(key == "plum") {
//     console.log(`${key} - $${obj[key]}`);
//   }
// }

// const obj = {0: 12, 1: 10, 2: 15, 3: 8};
// obj[1]="Nb"
// console.log(obj); 
// delete obj[1]
// console.log(obj); 

// const firstName = 'Anna';
// const lesson = 'JavaScript';

// const obj = {
//   [firstName]: firstName,
//   [lesson]: lesson
// }
// console.log(obj);
//methods
// Object.keys()
// Object.values()
// Object.values()

const subjects = {'1 1': 'JavaScript', 2: 'Java', sql: "SQL", eng: 'English'}
// console.log(Object.keys(subjects).sort());
console.log(Object.entries(subjects));


// let obj ={
//   firstName: 'Sofia',
//   lastName:'I.',
//   age: 35

// }


//================Example
// let userInfo = {
//   name: 'Anna',
//   age: 30,
//   adress: 
// }