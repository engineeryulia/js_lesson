//1, 1, 2, 3, 5, 8, 13 - щпрю цепочка чисел где каждое последующее число = сумме двух предыдущих чисел.
// f(n) = f(n-1) + f(n-2)
// 1. рекурсивный - функция вызывает сама себя
// function fibonachi(n){
//   if(n < 0) {
//     return 0;
//   }
//   if( n <= 2) {
//     return 1;
//   }
//   return fibonachi(n-1) + fibonachi (n-2)
// }

//console.log(fibonachi(6));

//2. итерационный
function itterationFibonachi(n){
  if (n <= 0){
    return 0;
  }
  if(n <=2){
    return 1;
  }

  let prev = 1;
  let result = 1;

  for (let i = 1; i < n-1; i++){
    let tmp = result;
    result += prev;
    prev = tmp;
  }
  return result;

}
console.log(itterationFibonachi(7));

