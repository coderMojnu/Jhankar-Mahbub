// const doubleIt = function(num){
//     return num*2;
// }
const doubleIt = num => num*2;
const add = (x, y) => x + y;

const doMath = (x, y) => {
const sum = x + y;
const diff = x - y;
const result = sum*diff;
return result;
}
console.log(doMath(2, 0));
console.log(doubleIt(5));
console.log(add(5, 6));