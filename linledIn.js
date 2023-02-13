const fruits =['apple', 'banana', 'orange']
  fruits.forEach((element) => {
    console.log(element);
  })


const pets = ['dog', 'cat', 'rabbit', 'hamster'];
console.log(pets.sort())

const grades = [77, 88, 72, 52, 1]
//sort the following array from highest to lowest
grades.sort((a, b) => b - a)
console.log(grades);

const condiments = ['ketchup', 'mustard', 'relish', 'mayo'];
console.log(condiments.reverse());

const employees = ['Adams', 'Carter', 'David', 'Zappa'];
const reversed = [...employees]
console.log('reversed', reversed.reverse());
console.log('original', employees);

//find the first grade that is less than 80
const underEighty = grades.find((element) => element < 80);
console.log(underEighty);

//find the first grade that is over than 80
const overEighty = grades.findIndex((element) => element > 80);
console.log(overEighty); //index position


const bowlongScpres = [154, 204, 300, 184, 286]

const someScores = bowlongScpres.some((score) => score < 150) 
console.log('Under 150', someScores);

const includesScore = bowlongScpres.includes(300);
console.log('Perfect score', includesScore);

const friends = [
  {firstname: 'Jane', lastname: 'Doe'},
  {firstname: 'John', lastname: 'Smith'},
  {firstname: 'Alex', lastname: 'Trebek'},
];

//Create a new array that includes only the full nsmt (firstname + lastname) of each friend.
// Ex.'Jane Doe' Explisity явный
const fullName = friends.map((friend)=> {
  return friend.firstname + ' ' + friend.lastname
})
console.log(fullName);
//inplicitly
const fullName1 = friends.map((friend)=> {
  return `${friend.firstname} ${friend.lastname}`
})
console.log(fullName1);

const groceries = [
  {item: 'apples', type: 'fruit'},
  {item: 'cereal', type: 'pantry'},
  {item: 'pork chops', type: 'meat'},
  {item: 'bananas', type: 'fruit'},
  {item: 'broccoli', type: 'vegetable'},
]
//Filter the following array to include only thise grissery items
//that are fruits
const fruit = groceries.filter((item)=> {
  return item.type === 'fruit';
})
console.log(fruit);

const bills = [10, 5, 5, 2]
//Determine how much the total bills are
const totalBills = bills.reduce((total, bill) => total + bill)
console.log(totalBills);

const wordJumble = ['shampoo', 'conditioner', 'soap']
const splitWords = wordJumble.flatMap((word) => word.split(''));
console.log(splitWords);




