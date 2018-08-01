/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function sides(literals, ...expressions) {
    let area = expressions[0];
    let perimeter = expressions[1];
    return getSides(area, perimeter);
}

function getSides(area, perimeter){
    let underSqrt = Math.sqrt(Math.pow(perimeter,2) - 16 * area);
    let side1 = (perimeter + underSqrt)/4;
    let side2 = (perimeter - underSqrt)/4;
    return [side1, side2].sort(function(side1, side2){
        return side1 - side2;
    });
}


function main() {
    let s1 = +(readLine());
    let s2 = +(readLine());

    s1 = 10;
    s2 = 14;
    
    [s1, s2] = [s1, s2].sort();
    
    const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
    
    console.log((s1 === x) ? s1 : -1);
    console.log((s2 === y) ? s2 : -1);
}

main();
