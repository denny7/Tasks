var a = Math.round(Math.random()*5545 + 10);
var b = Math.round(Math.random()*5545 + 10);
x = "";
if (a > b){
  m = a;
  n = b;
} else {
  m = b;
  n = a;
}
console.log(n);
console.log(m);
for(var i = m ; i >= n; i--){
  if(i % 50 == 0){
    x += i + " ";
  }
}
console.log(x);
