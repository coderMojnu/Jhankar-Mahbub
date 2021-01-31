let factorial = 1;
let i=1;
function calculateFactorial(number) {
    while(i <= number) {
        factorial = factorial*i;
        i++;
    }
    console.log(factorial);
}
calculateFactorial(4);