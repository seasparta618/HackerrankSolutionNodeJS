/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */


 var readline = require('readline');
 var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 });

 function testPhoneNumber(input){
    input = input.replace(/ /g, '');
    console.log("Phone number after remove space: "+input);
    let regPattern = /^[0][4][0-9]{8}$/;
    if(regPattern.test(input)){
        console.log("The number you input is: "+input);
    }else{
        console.log("Invalid number");
    }
 }
 function main(){
     rl.setPrompt("please input your phone number: \n");
     rl.prompt();
     rl.on('line',function(input){
         testPhoneNumber(input);
        process.exit(0);
     });
 }

 main();