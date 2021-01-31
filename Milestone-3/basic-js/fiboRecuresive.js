function fiboseries(count){

    if(count==0){
        return [0];
    }
    else if(count==1){
        return [0,1];
    }
    else{
        var fiboelement = fiboseries[count-1];
        var result = fiboelement[n-1] + fiboelement[n-2];
        fiboelement.push(result);
        return fiboelement;
    }
}
var series = fiboelement;
console.log(series);