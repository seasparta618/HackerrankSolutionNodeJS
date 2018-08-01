/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function getDayName(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[new Date(dateString).getDay()];
}

function main() {
    rl.setPrompt("Please input a date string with format MM/DD/YYYY:\n ");
    rl.prompt();
    rl.on('line', line => {
        if (line == "EOF") {
            process.exit(0);
        }
        console.log(getDayName(line));
        rl.prompt();
    });
}

main();