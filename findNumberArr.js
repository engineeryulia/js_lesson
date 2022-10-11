let arr = [1, 'mamamama', 'my', [1,2,'abcc', 15, -20,5, 'b', 'c'], 'papac', 'abc', 10];
var vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
const pets = ['cat', 'dog', 'bat'];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']; 

function findNumbers (arg){
 
 for(let i = 0; i < arg.length; i++){
   if(typeof(arg[i]) == 'number')
   console.log(arg[i]);
   for(let j = 0; j < arg[i].length; j++){
   if(typeof(arg[i][j]) == 'number'){
   console.log(arg[i][j]);
   }
   }
 }
}
findNumbers(arr);