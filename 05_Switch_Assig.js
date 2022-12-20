console.log(
  "====================================== Month Of Year ================================="
);
var monthOfYear = function (monthNumber) {
  switch (monthNumber) {
    case 1:
      console.log(`1) First month of year is:January`);
      break;

    case 2:
      console.log(`2)Second month of year is:February`);
      break;

    case 3:
      console.log(`3) Third  month of year is:March`);
      break;

    case 4:
      console.log(`4) Forth month of year is:April`);
      break;

    case 5:
      console.log(`5) Fifth month of year is:May`);
      break;

    case 6:
      console.log(`6) Sixth month of year is:June`);
      break;

    case 7:
      console.log(`7) Seventh month of year is:July`);
      break;

    case 8:
      console.log(`8) Eighth month of year is:August`);
      break;

    case 9:
      console.log(`9) Nineth month of year is:September`);
      break;

    case 10:
      console.log(`10) Tenth month of year is:October`);
      break;

    case 11:
      console.log(`11) Eleventh month of year is:November`);
      break;

    case 12:
      console.log(`12) Twelth month of year is:December`);
      break;

    default:
      console.log(
        `Number Of month is ${monthNumber}:  In Indian Calender only 12 month in a Year`
      );
      break;
  }
};
monthOfYear(2);
monthOfYear(5);
monthOfYear(12)
monthOfYear(15);
monthOfYear(100);

