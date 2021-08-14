// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
// console.log("Today is " + day);
let num;
switch (Math.floor(Math.random() * 10)) {
    case 0:
        num="Zero";
        break;
    case 1:
        num="One";
        break;
    case 2:
        num="Two";
        break;
    case 3:
        num="Three";
        break;
    case 4:
        num="Four";
        break;
    default:
        num="The number is greater than 4"
}
console.log("The number is "+num);