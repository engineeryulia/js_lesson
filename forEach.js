const items = ['item1', 'item2', 'item3']
const copy = [];

for(let i = 0; i < items.length; i++){
  copy.push('New' + items[i])
}
console.log(copy);
items.forEach(function(elem, index, array){

})