// Given a function as shown below that takes an order amount and splits it into
// Four even installments.
// For example:100.08 = 25.02, 25.02, 25.02, 25.02 or 50.02 = 12.50, 12.50, 12.50, 12.50
// const calculateInstallments = (orderAmount: number) => { ...logic here }
function calculateInstallments(orderAmount) {
  let number = orderAmount * 100;
  if(number % 4 === 0){
  return orderAmount/4
  } else{
    return (number -1) / 4, (number -1) / 4, (number -1) / 4, (number -1) / 4
  }
}
console.log(calculateInstallments(100.08));//25.02




// TestCases
// 1. if (orderAmound === number);
// 2. 100.08


// describe ('If the orderAmound could be splited on 4', () =>{
// it ('check $193.23 is splited on 4', ()=> {
//   expect(helper.calculateInstallments(193.23).eq(25.02)
// })