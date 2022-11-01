// let log = console.log;
// let obj = {};
// obj.name = "Anna"
// obj.occupation = "Student";
// obj.introduce = function () {
//     log(`HEllo, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`);
//     }

//  obj.introduce();

//  let o = {
//   name: "Anna",
//   occupation: "Student",
//   introduce: function () {
//     log(`HEllo, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`);
//     },
//  }
//  o.introduce();

// function Person(name, occupation){
//   this.name = name;
//   this.occupation = occupation;
//   this.introduce = function(){
//     log(`HEllo, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`);
//   };
//    Person.count++
// }
//  Person.count = 0;
// let p1 = new Person("Anastasia", "student");
// p1.introduce()

// let p2 = new Person("Sergey", "teacher") //true with constructor
// let p3 = {name: "Ivan", occupation: "principal"} //false not constructor

// log(p3 instanceof Person)
// log(Person.count); //2

//45 =================================================================================
// let log = console.log;
// let obj = {};
// obj.name = "Anna"
// obj.occupation = "Student";
// obj.introduce = function () {
//     log(`HEllo, I'm ${this.name}`);
//     log(`I'm a ${this.occupation}`);
//     }

// let descriptor;
// descriptor = Object.getOwnPropertyDescriptor(obj, "name")
// log(descriptor) //{ value: 'Anna', writable: true, enumerable: true, configurable: true }
// Object.defineProperty(obj, "age", {value: 20, writable: true, enumerable: true, configurable: true})
// Object.defineProperty(obj, "sex", {value: "F", writable: true, enumerable: true, configurable: false})

// log(Object.keys(obj));
// obj.sex = "M";
// log(obj);
// delete obj.age;
// log(obj)


//55 ===================call/apply=========================================
// let log = console.log;
// function Person(name, age){
//   this.name = name;
//   this.age = age;

//   this.print = function () {
//     log("Hello, I'm "+ this.name);
//     log("I'm "+ this.age);
//   }
// }

// function Worker(name, age, occupation){
  
//   Person.call(this, name, age); // == Person.apply(this, arguments);
//   this.occupation = occupation;


//   this.printOfficial = function () {
//     log("Let me introduce myself, I'm "+ this.name);
//     log("I'm working as a "+ this.occupation);
//   }
// }
// let p1 = new Person('Anna', 17);
// p1.print()

// let w1 = new Worker("Sergey", 45, "principal")
// w1.print()
// w1.printOfficial();
//====================super==========================
class Animal{
  constractor(name, eyes){
    this.name = name;
    this.eyes = eyes;
    this.brain = 'brain';
    this.spine = 'spain';
  }
  getName(){
    return(`The name of the animal is ${this.name}.`)
  }
  isBreath(){
    return true
  }

  isReproduce(){
    return true
  }
}
//==============================
class Mammals extends Animal {
  super(name, eyes)
  this.skin = 'fur'
  this.legs = 4
  this.lungs = 'lungs'
}
setSkin(skin) {
  this.skin = skin
  return this.skin
}
showBodyParts() {
  console.log(`${this.name} has${this.legs} legs, ${this.skin}`)
}