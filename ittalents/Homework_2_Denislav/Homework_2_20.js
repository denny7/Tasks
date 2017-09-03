var x = 1;
var matrix = '';
for(var i = 1; i <= 10; i++) {
  for(var j = 1; j <= 10; j++){
    if(x > 9){
      x = 0;
    }
    matrix += x + " ";
    x++;
  }
  matrix += "\n";
  x++;
}
console.log(matrix);
