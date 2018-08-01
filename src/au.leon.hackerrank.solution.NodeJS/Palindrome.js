/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */


var readline = require('readline');

var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

class Palindrome{
     constructor(string){
         this.string = string;
     }

     palindrome(){
         if(this.string.toLowerCase().replace(/[^a-z]/g,'').split('').reverse().join('') == this.string.toLowerCase().replace(/[^a-z]/g,'')){
             return true;
         }
         return false;
     }
 }

 function main(){
    rl.setPrompt("Please input a string:\n");
    rl.prompt();
    rl.on('line',function(input){
        let palindrome = new Palindrome(input);
        console.log(palindrome.palindrome(input));
        process.exit(0);
    });
 }

 main();