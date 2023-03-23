let arr = ['Tom', 'green', 55, 'apple', 42, 88, 'pear', 'red', 1]
let arrNew = [];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] == 'number') {
    arrNew.push(arr[i])
  }
}
console.log(arrNew)