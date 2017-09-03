// task 1
// var countAll = 0;
// var count = 0;
// var diceOne = 0;
// var diceTwo = 0;
// var sum = 0;
// while(count < 7){
//   diceOne = Math.floor(Math.random() * 6 + 1);
//   diceTwo = Math.floor(Math.random() * 6 + 1);
//   if(diceOne + diceTwo == 7){
//     count++;
//   } else {
//     count = 0;
//   }
//   countAll++
// }
// console.log(countAll);

var string = "EDNO 55 dvesd";
var countLower = 0;
var countUpper = 0;
for(var index = 0; index < string.length; index++){
  if(string.charAt(index) == string.charAt(index).toLowerCase() && string.charAt(index)!= " " && isNaN(string.charAt(index))){
    countLower++;
  }
  if(string.charAt(index) == string.charAt(index).toUpperCase() && string.charAt(index)!= " " && isNaN(string.charAt(index))){
    countUpper++;
  }
}
if(countLower == countUpper){
  var ratio = "1:1"
} else{
var bigger = countLower > countUpper ? countLower : countUpper;
var smaller = countLower > countUpper ? countUpper : countLower;
var ratio = (bigger / smaller) + " : 1"
}
console.log(ratio)
console.log(countLower);
console.log(countUpper);
