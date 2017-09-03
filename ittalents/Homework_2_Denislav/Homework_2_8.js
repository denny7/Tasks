var n = 4;
var str = "";
  for (var i = n - 1; i <= (n*3) - 3; i += 2){
    str += i.toString().repeat(n) + "\n";
  }
console.log(str);
