var readlineSync = require('readline-sync');

let mark= parseInt(readlineSync.question('Enter Your Mark :'));

if(mark>90){
    console.log("A grade");
}else if(mark>80){
    console.log("B grade");
}else if(mark>70){
    console.log("C grade");
}else if(mark>60){
    console.log("D grade");
}else if(mark>=50){
    console.log("E grade");
}else if(mark<=50 && mark>=0){
    console.log("Failed");
}else{
    console.log("Invalid");
}