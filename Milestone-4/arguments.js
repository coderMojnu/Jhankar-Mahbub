function getFullName(firstName, LastName){
    console.log(arguments);
   return firstName + ' ' + LastName;
}
const fullName = getFullName('Mojnu', 'Miah', 'Morshed', 'Alam', 'Jhankar', 'Mahbub');
console.log(fullName);