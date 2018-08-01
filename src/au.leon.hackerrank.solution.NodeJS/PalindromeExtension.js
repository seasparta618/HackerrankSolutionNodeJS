/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */

let readline = require('readline');

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



class Palindrome {
    constructor(string) {
        this.string = string;
    }

    isPalindrome() {
        if (this.string.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('') == this.string.toLowerCase().replace(/[^a-z]/g, '')) {
            return true;
        }
        return false;
    }
    //overload
    isPalindrome(string) {
        {
            if (string.toLowerCase().replace(/[^a-z]/g, '').split('').reverse().join('') == string.toLowerCase().replace(/[^a-z]/g, '')) {
                return true;
            }
            return false;
        }
    }

}

class LongestPalindrome extends Palindrome {
    constructor(string) {
        super(string);
    }

    findLongestPalindrome() {
        //console.log("The method which has been called is findLongestPalindrome()");
        let length = this.string.length;
        let string = this.string;
        let resultArray = new Array();
        for (let index1 = 0; index1 < length - 1; index1++) {
            for (let index2 = index1 + 1; index2 < length; index2++) {
                if (string.charAt(index1) == string.charAt(index2)) {
                    if (super.isPalindrome(string.substring(index1, index2 + 1))) {
                        let result = new Array();
                        result.push(index2 + 1 - index1);
                        result.push(index1);
                        result.push(index2);
                        resultArray.push(result);
                    }
                }
            }
        }
        return resultArray;
    }

    //overload
    findLongestPalindrome(string) {
        //console.log("The method which has been called is findLongestPalindrome(string)");
        let length = string.length;
        let resultArray = new Array();
        for (let index1 = 0; index1 < length - 1; index1++) {
            for (let index2 = index1 + 1; index2 < length; index2++) {
                if (string.charAt(index1) == string.charAt(index2)) {
                    if (super.isPalindrome(string.substring(index1, index2 + 1))) {
                        let result = new Array();
                        result.push(index2 + 1 - index1);
                        result.push(index1);
                        result.push(index2);
                        resultArray.push(result);
                    }
                }
            }
        }
        return resultArray;
    }

    printPalindrome(resultArray){
        console.log("The longest palindrome is from index of " + resultArray[0][1] + " to " + resultArray[0][2] + "\n" +
            "which is "+this.string.substring(resultArray[0][1],resultArray[0][2]+1)+", with length of "+resultArray[0][0]);
    }
}

function main() {
    rl.setPrompt("Please input a string:\n");
    rl.prompt();
    rl.on('line', function (input) {
        input = input.replace(/[^a-zA-Z0-9]/g,'');
        console.log("Remove all the chars which are not number or letter, the input string is: "+input);
        let longestPalindrome = new LongestPalindrome(input);
        let resultArray = longestPalindrome.findLongestPalindrome(input);
        resultArray.sort(function (result1, result2) {
            return result2[0] - result1[0];
        });
        longestPalindrome.printPalindrome(resultArray);
        process.exit(0);
    });
}

main();