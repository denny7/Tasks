var red = 4;
var kolona = 5;
var start = 1;
var second = []
var startDve = 0;
for (var row = 0; row  < red; row++){
  second[row] = new Array(kolona);
}
for(var row = 0; row < red; row++){
  for(var col = 0; col <= row; col++){
    second[row - col][col] = start;
    start++;
  }
  startDve = start;
}
for(var index = 0; index < kolona - 1; index++){
  for(var row = red - 1, col = index + 1; row >= 0, col <= kolona - 1; row--, col++){
    second[row][col] = startDve;
    console.log(second[row][col]);
    startDve++
  }
}
console.log(second)
