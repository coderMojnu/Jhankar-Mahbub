function calculateFactorial(number) {
    let factorial = 1;
    for(let i=1; i <= number; i++) {
        factorial = factorial*i;
    }
    console.log(factorial);
}
calculateFactorial(5);