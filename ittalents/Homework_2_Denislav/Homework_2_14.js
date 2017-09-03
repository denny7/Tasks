var number = Math.round(Math.random()*180 + 20);
var m= "";
console.log(number);
for (var i = number; i >= 1; i--) {
  if ((i % 7 == 0) && (i < number)) {
  m += i + " ";
  }
}
console.log(m);
