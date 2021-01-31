// function fibonacciSeries(number) {
//     var first = 0;
//     var second = 1;
//     console.log(0);
//     console.log(1);
//     for(var count=0; count < number; count++) {
//             fibo = first + second;
//             first = second;
//             second = fibo;
//             console.log(fibo);
//         }
//     }
// fibonacciSeries(7);
function fibonacciSeries(count){
    var fibo = [0,1];
for(var i=2; i < count; i++){
    fibo.push(fibo[i-1] + fibo[i-2]);
}
console.log(fibo);
}
fibonacciSeries(3);