/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url https://www.hackerrank.com/challenges/js10-arrows/problem
 */

 'use strict';

var readline = require('readline');
var rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});


function modifyArray(numbers){
    return numbers.map( number => number = (number % 2 == 0)?number * 2 : number * 3);
}

function main() {
    rl.on('line',(line)=>{
        if(line == "EOF"){
            process.exit(0);
        }
        var a = line.split(' ').map(Number);
        console.log(modifyArray(a).toString().split(',').join(' '));
        
    });
    
    
}

main();