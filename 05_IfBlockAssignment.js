
 console.log("======================================voting Eligibility=================================");

function eligible(age,candidateName){
    if(age>=18){
    return `Congratulation!${candidateName}, you are Eligible for Voting `;
 }
    if(age<=18){
    return `Sorry!${candidateName}, you are not Eligible for Voting `;
 }
    if(age<=0 && age>=120){
    return `Sorry!In valid data `;
 }
 }
 var result=eligible(45, "Poonam");
 console.log(`1)Age of condidate is 45:${result}`);

 var result=eligible(17, "Vidya");
 console.log(`2)Age of condidate is 17:${result}`);

 var result=eligible(8, "Rupali");
 console.log(`3)Age of condidate is 8:${result}`);

 var result=eligible(20, "Rutuja");
 console.log(`4)Age of condidate is 20:${result}`);

 var result=eligible(-10, "Payal");
 console.log(`5)Age of condidate is -10:${result}`);

 var result=eligible(200, "Chaitali");
 console.log(`6)Age of condidate is 200:${result}`);

 var result=eligible(0, "Preeti");
 console.log(`7)Age of condidate is 0:${result}`);

 
 console.log("======================================2=================================");

 function gradeCalculation(marks,candidateName){
    if(marks>=90){
    return `Fantastic Marks, ${candidateName}, you got ${marks}%, your grade is A+`;
 }
    if(marks>=75 && marks<=90){
    return `Excellent Marks, ${candidateName},you got ${marks}%, your grade is A`;
 }
     if(marks>=50 && marks<=75){
    return `Good Marks, ${candidateName},you got ${marks}%, your grade is B`;
}
if(marks>=35 && marks<=50){
    return ` Average Mark, ${candidateName}, you got ${marks}%,your grade is C ,Need to improvement`;
}
    if(marks<=0 || marks>=100 || (marks>=1 && marks<=34)){
    return ` ${candidateName},Please provide the valid data`;
}
 }
 var result=gradeCalculation(98, "Poonam");
 console.log(`1):${result}`);

 var result=gradeCalculation(80, "Vidya");
  console.log(`2):${result}`);

 var result=gradeCalculation(90, "Rupali");
 console.log(`3):${result}`);

 var result=gradeCalculation(0, "Sarita");
 console.log(`4):${result}`);

 var result=gradeCalculation(150, "Rutuja");
 console.log(`5):${result}`);

 var result=gradeCalculation(-7, "Payal");
 console.log(`6):${result}`);

 var result=gradeCalculation(35, "Chaitali");
 console.log(`7):${result}`);

 var result=gradeCalculation(29, "Renuka");
 console.log(`8):${result}`);

 var result=gradeCalculation(64, "Shobna");
 console.log(`9):${result}`);

 var result=gradeCalculation(49, "Aishwarya");
 console.log(`10):${result}`);
