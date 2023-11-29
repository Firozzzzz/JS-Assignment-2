var readlineSync = require('readline-sync');

let number = parseInt(readlineSync.question('Enter number :'));

let limit = parseInt(readlineSync.question('limit:'));

console.log('Multiplication table',number);

for(let i = 1; i<=limit; i=i+1){

    console.log(i,' * ',number,' = ',i*number);

}