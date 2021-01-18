var friendAge = [18, 17, 14, 15];
var abulAge = friendAge[2];
console.log(abulAge);

//update a value in array
friendAge[1] = 100;
console.log(friendAge[1]);

//to know array position

var position = friendAge.indexOf(15);
console.log(position);

//array add/push
console.log(friendAge.length);
friendAge.push(111);
console.log(friendAge.length);

//array delete/pop
friendAge.pop();
console.log(friendAge.length);

//array add from the begining

friendAge.unshift('Mojnu');
console.log(friendAge);

//array slice 
var shortList = friendAge.slice(1, 2)
console.log(friendAge);

//array remove from the beggining
friendAge.shift();
console.log(friendAge.length);
