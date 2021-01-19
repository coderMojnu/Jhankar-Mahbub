var numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
function findLargeNumber(numbers){
   var larger = numbers[0];
   for(var i=0; i < numbers.length; i++){
   var element = numbers[i];
   if(element > larger) {
    larger = numbers[i];
   }
}
   return larger;
}
var output = findLargeNumber(numbers);
console.log("Output", output);
