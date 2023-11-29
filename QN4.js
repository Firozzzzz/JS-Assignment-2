var readlineSync = require('readline-sync');

let a= parseInt(readlineSync.question('limit : '));
let sum=0;
let i=1;

for(let i=1;i<=a;i++){
    if(i%2!==0){ 
        sum+=i;
    }
}
console.log("Sum of odd numbers = ",sum);