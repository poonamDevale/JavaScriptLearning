console.log("============Before String Swap ===========");
var sweety = "Sweety";
var cutie = "Cutie";
console.log(sweety, cutie);
console.log("============After String Swap===========");
var temp ;
temp = sweety;
var sweety = cutie;
var cutie = temp;
console.log(sweety, cutie);

console.log("============Befor Number Swap===========");
var num1 = 100;
var num2 = 200;
var num3=300;
console.log(num1, num2, num3);

console.log("============After Number Swap===========");

var temp=num1;
var num1=num2;
var temp1=num2;
var num2=num3;
var temp2=num3;
var num3=temp;

console.log(num1, num2, num3);