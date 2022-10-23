/.../
//const regexp = new RegExp("template", "flags")

let str = "Hello World!"

//.match(regexp)

//const regexp = new RegExp("l", "gi");

let regexp = /"World"/gi;
let result = str.match(regexp) || [];

console.log(result.length);
console.log(result);
//.replace()
// \d  \w  \s