var m = "";
for (var i = 100; i < 1000; i++){
  i = i.toString();
  if (i.charAt(0) != i.charAt(1) && i.charAt(0) != i.charAt(2) && i.charAt(1) != i.charAt(2)){
  m += i + " ";
  }
console.log(m);
}
