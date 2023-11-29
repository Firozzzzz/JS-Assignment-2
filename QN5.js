var readlinesync = require('readline-sync');


let size = parseInt(readlinesync.question('Enter the size:'));
let array=[];

for(let i=0;i<size;i++){
  array[i]=parseInt(readlinesync.question('Enter the value:'));
}

console.log("The array is",array);
let even=0;

for(i=0;i<=size;i++){

    if(array[i]%2===0){
        even ++ ;
    }

}
console.log("Even Numbers:",even);