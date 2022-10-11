let a = [1, 2, 3, 4, 5]
let sum = 0;
for (let i = 0; i < a.length; i++){
  sum = sum + a[i]
}
console.log(sum);
//prev - вычисляемое значение
//item - текущий круг перебора
//prev = [0]
let b = a.reduce (function(prev, item, index){
  return prev + item;

}, 0)
console.log(b);

a = [3, 1, 2, 5, 21, 3, 3];
let max = a[0];
for(let i = 0; a.length; i++){
  if (a[i] > max){
    max = a[i]
  }
}
console.log(max);

let c = a.reduce((prev, item) => {
  if (prev < item){
    return item;
  }
  else {
    return prev;
  }
}, a[a])
console.log(c);