// QUESTION 1: Add a property called "name" to the "myBunny" object below and assign it some value (e.g. "Thumper")

const myBunny = {
  species: 'rabbit',
  message: "I'm a bunny, hear me roar!",
  name: 'Thumper'
}



// Next, assign the "name" property from "myBunny" object to the "bunnyName" variable below

let bunnyName;
bunnyName = myBunny.name

//NO EXAMPLE for Question 1 as the output would give away the answers


// QUESTION 2: Write a method on the "myBunny" object called "speak" that takes no parameters and returns the name and message property values within the following sentence: "My name is (name property value here). (message property value here)"

// EXAMPLE: 
// console.log("testing out my answer for Q2: ", myBunny.speak());
//    should result in the next line appearing in your console...
// My name is Thumper. I'm a bunny, hear me roar!

myBunny.speak = function() {
  return `My name is ${myBunny.name}. ${myBunny.message}`
}
console.log("testing out my answer for Q2: ", myBunny.speak());

// QUESTION 3: Write a function called "isAnimalSpecies" that takes one Object parameter ("animal") and one String parameter ("species") and returns true if the Object's species property is equal to the String parameter, false if not

// EXAMPLES:
// console.log("testing out my function for Q3: ", isAnimalSpecies(myBunny, 'lion');
//    should result in the next line appearing in your console...
// false
//
// OR console.log("testing out my function for Q3: ", isAnimalSpecies(myBunny, 'rabbit'));
// true

const isAnimalSpecies = (animal, species) => {
  return animal.species === species
}
console.log("testing out my function for Q3: ", isAnimalSpecies(myBunny, 'lion'))
console.log("testing out my function for Q3: ", isAnimalSpecies(myBunny, 'rabbit'))

// DO NOT EDIT THIS VARIABLE!! - it is used for the Questions 4 through 6
// Pass this Array as an argument when invoking the functions below
const library = [
  {
    title:  'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254,
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264,
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245,
  },
  {
    title: 'Alchemist',
    author: 'Paulo Coelho',
    libraryID: 4266,
  }
];


// QUESTION 4: Write a function called "sortArray" that takes one Array parameter and returns a new Array that is sorted by "libraryID" in ascending order (low to high)

// EXAMPLE:
// console.log("testing out my function for Q4: ", sortArray(library));
//    should result in the next several lines appearing in your console...
// [
//   { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//   },
//   { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//   { title: 'Alchemist', author: 'Paulo Coelho', libraryID: 4266 }
// ]

const sortArray = (array) => {
 const sortedArray = array.sort((a, b) => a.libraryID - b.libraryID)
  return sortedArray
}
console.log("testing out my function for Q4: ", sortArray(library));


// QUESTION 5: Write a function called "addTypeProperty" that takes one Array parameter and returns a new Array where each Object has a new property called "type" with value "book"
// BONUS: use `map()` method

// EXAMPLE:
// console.log("testing out my function for Q5: ", addTypeProperty(library));
//    should result in the next several lines appearing in your console...
// [
//   { 
//     title:  'The Road Ahead', 
//     author: 'Bill Gates', 
//     libraryID: 1254, 
//     type: 'book' 
//   },
//   { 
//     title: 'Walter Isaacson',
//     author: 'Steve Jobs',
//     libraryID: 4264,
//     type: 'book' 
//   },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245,
//     type: 'book' 
//   },
//   {
//     title: 'Alchemist',
//     author: 'Paulo Coelho',
//     libraryID: 4266,
//     type: 'book' 
//   }
// ]

const addTypeProperty = (arr) => {
  arr.map(function(item) {item.type = "book"})
  return arr
  
}


// QUESTION 6: Write a function called "addNewObject" that takes one Array parameter and one Object parameter and returns a new Array with the new Object inserted at the end

// HINT: The new object should have the following properties: "title", "author", and "libraryID"

// EXAMPLE:
// console.log("testing out my function for Q6: ", addNewObject(library,{title:'The Wizard of Oz',author:'L.Frank Baum',libraryID: 9876}));
//    should result in the next several lines appearing in your console...
// [
//   { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
//   {
//     title: 'Mockingjay: The Final Book of The Hunger Games',
//     author: 'Suzanne Collins',
//     libraryID: 3245
//   },
//   { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
//   { title: 'Alchemist', author: 'Paulo Coelho', libraryID: 4266 }
//   { title: 'The Wizard of Oz', author: 'L. Frank Baum', libraryID: 9876 }
// ]

const addNewObject = (array, object) => {
  array.push(object)
  return array
  
}
console.log("testing out my function for Q6: ", addNewObject(library,{title:'The Wizard of Oz',author:'L.Frank Baum',libraryID: 9876}));


// DO NOT EDIT BELOW THIS LINE

module.exports = {
  myBunny,
  bunnyName,
  isAnimalSpecies,
  sortArray,
  library,
  addTypeProperty,
  addNewObject,
}


