/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */

function smallestAngle(x1, y1, x2, y2, x3, y3) {
    let length1Pow = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    let length2Pow = Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2);
    let length3Pow = Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2);
    let lengths = new Array(length1Pow, length2Pow, length3Pow);

    lengths.sort(function (a, b) {
        return a - b;
    });
    if(Math.sqrt(lengths[2]) >= (Math.sqrt(lengths[1]) + Math.sqrt(lengths[0]))){
        throw new Error('Invalid input, sum of any two sides should be larger than the third side!');
    }else{
        let cosMin = (lengths[2] + lengths[1] - lengths[0]) / (2 * Math.sqrt(lengths[2]) * Math.sqrt(lengths[1]));
        let angleMin = (Math.acos(cosMin) * 180 / Math.PI).toFixed(2);
        return angleMin;
    }
}

function main() {
    try{
        console.log(smallestAngle(0,0,0,1,0,6));
    }catch(e){
        console.log(e.message);
    }
}

main();
