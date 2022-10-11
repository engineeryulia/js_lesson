// const myDate = new Date();
// console.log(myDate);

function Auto(brand, price, gas){
  this.brand = brand;
  this.price = price;
  this.gas = gas;
  this.drive = function(){
    if(this.gas > 0){
      this.gas = this.gas - 20;
      return this.gas

    }else{
      console.log('Run out of gas');
    }
  }

  console.log('new car');
}
const bmw = new Auto('bmw', '100,00', 100);
console.log(bmw);