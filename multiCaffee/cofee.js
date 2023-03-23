// const latte = "Latte"
// const icedCoffee = "Iced Coffee"
// const cappuccino = "Cappuccino"

// export default class Coffee {
//   constructor(coffeeName, isSweet){
//     //drinkName
//     this.coffeeName = coffeeName
//     //beans name
//     this.coffeeType = "arabica" //by default
//     this.water = "hot water"
//     this.milk = "whole milk"
//     this.isSweet = isSweet
//   }

//   getCoffeeName(coffeeName){
//     this.coffeeName = coffeeName
//     return coffeeName
//   }

//   getSweet() {
//     this.coffeeName = this.coffeeName
//     return this.coffeeName
//   }

//   getSweet(){
//     if (this.isSweet == 'sweet')
//     return truee
//     else return false
//   }
// }

// //this function will set appropriate coffee recipe
// //coffeeType - to enter the coffeeTypethat customers wants

// setCoffeeRecipe() {
//   let coffeeRecipe = `Coffee order is ${this.coffeeName}, bellow is it's recipe:\n1.
//   Make a shot of ${this.coffeeType} coffee.\n2.Pour ${this.water} in a cup with coffee.
//   \n3.Pour ${this.milk} in a cup of coffee.\n4.Stir well.`
// //cupSize
//   if(this.coffeeName == icedCoffee) {
//     this.water = 'iced water'
//   }
//   else if (this.coffeeName == cappuccino) {
//     this.milk = 'almond milk'
//   }
//   else if (this.setSweet() == true){
//     coffeeRecipe = `Coffee order is ${this.coffeeName}, bellow is it's recipe:\n1.
//     Make a shot of ${this.coffeeType} coffee.\n2.Pour ${this.water} in a cup with coffee.
//     \n3.Pour ${this.milk} in a cup of coffee.\n4.add spoon of suger.\n5.Stir well.`
//   }
//   return coffeeRecipe() {
//     console.log(this.setCoffeeRecipe())
//   }
// }