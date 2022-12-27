const groupingByItems = (arr)=>{
 let obj = {}

 for(let item of arr){
  if(item in obj){
    obj[item]++

  }else{
    obj[item]= 1
  }
  
 }
 let newArr = Object.entries(obj).sort().sort(([, a], [, b]) => b - a) 
return newArr.map(el => el.join(' '));

}
console.log(groupingByItems([ 'notebook', 'mouse', 'keyboard', 'notebook','mouse', 'keyboard']));
