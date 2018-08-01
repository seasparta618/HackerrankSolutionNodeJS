/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */


 class Polygon{
    constructor(lengths){
        this.lengths = lengths;
    }
    perimeter(){
        let total = 0;
        for(let length of this.lengths){
            total = total + length;
        }
        return total;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());