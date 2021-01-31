function calculateFactorial(number) {
    if(number == 0) {
        return 1;
    }
    else {
        return number*calculateFactorial(number-1);
    }
}
var result = calculateFactorial(5);
console.log(result);