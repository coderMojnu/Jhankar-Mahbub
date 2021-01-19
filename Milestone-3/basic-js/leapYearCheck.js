function checkLeapYear(year) {
    if (year%4 == 0){
        if(year%100 != 0) {
            console.log("leap year");
        }
        else {
            if(year%400 == 0) {
                console.log("leap year");
            }
            else {
                console.log("Not a leap year");
            }
        }

    }
    else {
        console.log("Not a Leap Year");
    }
}
checkLeapYear(1900);