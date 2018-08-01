/**
 * @author leon wang
 * @email seasparta618@gmail.com, dev.leon618@gmail.com
 * @url 
 */

 class Rectangle{   
    constructor(width,length) {
        this.width = width;
        this.length = length;
    }

    perimeter(){
        return (this.width + this.length) * 2;
    }

 }

 Rectangle.prototype.areaSize = function(){
     return this.width * this.length;
 }

 class Square extends Rectangle{
     constructor(length){
         super(length,length);
     }
 }

 function main(){
    const rec1 = new Rectangle(100,200);
    console.log(rec1.perimeter());
    console.log(rec1.areaSize());
    const squ1 = new Square(100);
    console.log(squ1.perimeter());
    console.log(squ1.areaSize());
 }

 main(); 
