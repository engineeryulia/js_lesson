let res = []
let str = "Hello world it's me"
let arr = ["a", "Anna", "Stan", "Peter", "Robert", "b", ["dom", "hello", "world", "o"]]
                //   1      2       3       4         5    6[0]     6[1]    6[2]
                //  0123     0123                          012    01234    01234  

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    if (arr[i][j] === 'o') {
      res.push(arr[i]);
    }
  }
}
console.log(res);
