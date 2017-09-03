var arr = [];
var red = 4;
var kolona = 5;
var start = 1;
for(var row = 0; row < red; row++){
  arr[row] = [];
  for(var col = 0; col < kolona; col++){
    arr[row][col] = start;
    start++;
  }
}
console.log(arr);
