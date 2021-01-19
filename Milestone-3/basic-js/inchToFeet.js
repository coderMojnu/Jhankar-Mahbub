var inch;
function InchToFeet(inch) {
    var feet = inch/12;
    return feet;
}

var ShikhaHeight = InchToFeet(60);
console.log("Shikha Height: ", ShikhaHeight, "feet");

var mimHeight = InchToFeet(65);
mimHeight = mimHeight.toFixed(2);
console.log("Mim Height: ", mimHeight, "feet");
