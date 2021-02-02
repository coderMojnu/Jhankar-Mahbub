function getFullName(firstName, LastName){
    let fullNam = '';
    for(var i=0; i < arguments.length; i++){
        const nam = arguments[i];
        fullNam = fullNam + arguments[i] + '\n';
    }
   return fullNam;
}
const fullName = getFullName('Mojnu', 'Miah', 'Morshed', 'Alam', 'Jhankar', 'Mahbub');
console.log(fullName);