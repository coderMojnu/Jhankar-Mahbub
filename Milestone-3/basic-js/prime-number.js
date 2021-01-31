function isPrimeNumber(number) {
    for (var i = 2; i < number/2; i++) {
        if (number % i == 0) {
           return false;
        }
    }
    return true;
}
var result = isPrimeNumber(57);
console.log(result);