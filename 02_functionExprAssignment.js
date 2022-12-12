console.log("======================================1=================================");
var squar =function(num){
    var result=num*num;
    console.log("squar of ",num,"is =" ,result);
    return result;
}
squar(5);
squar(6);
squar(25);
squar(100);

console.log("======================================2=================================");

console.log( "Type of the squar is =", typeof squar);

console.log("======================================3=================================");

var areaOfRectangle=function(Length , Width){
var result =Length * Width;
console.log("Area of rectangle is =",result);
return result;
}
areaOfRectangle(499,917);

console.log("======================================4=================================");

 var swapValues=function(value1, value2) {
    console.log("Before Swap:", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("after Swap:", value1, value2);
  }
  swapValues("Virat", "Anushka");
  
  swapValues(1000, 2000);

  console.log("======================================5=================================");

var givenString ="JS the most populer language";
    console.log("Given string is =",givenString );
    console.log("Total characters available in the string is =",givenString.length);
    
    console.log("Character at index 6 in the string is =",givenString.charAt(5));
    console.log("Character at index 11 in the string is =",givenString.charAt(10));
    var totalLength=givenString.length;    
    console.log("Total Length of String is :", totalLength);
    console.log("Last character in the string is =",givenString .charAt(totalLength-1));
    console.log("First character in the string is =",givenString .charAt(0));
    var total=totalLength*totalLength;
    console.log("squar of given strig is:",total);



    // var squarOfString = function(totalLengths, totalLengths){
    //     var total=totalLengths*totalLengths;
    //     console.log("Square of the String is :" ,total); 
    //  return total;
    // } 
    // squarOfString("JS the most populer language","JS the most populer language"); 
     



