var number = Math.round(Math.random()*90 + 10);
console.log(number);
var total ="";
while(number != 1){
  if(number % 2 == 0){
    number /= 2;
  } else {
    number = (number * 3) + 1;
  }
  total += number + " ";
}
console.log(total);
