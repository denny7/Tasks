var matrix = [
  [1,25,35,4],
  [5,65,75,8],
  [9,10,11,12],
  [13,140,15,16],
  [17,18,190,20]
];
var array = new Array(2);
for(var row=0; row < array.length; row++){
  array[row] = new Array(2);
}
var sum = 0;
var max = 0;
var red;
var kolona;
for (var row = 0; row < matrix.length - 1; row++) {
    for (var col = 0; col < matrix[row].length - 1; col++) {
        sum = matrix[row][col] + matrix[row][col + 1] + matrix[row + 1][col] + matrix[row + 1][col + 1];
        if (max < sum) {
            max = sum;
            red = row;
            kolona = col;
        }
        sum = 0;
    }
}
console.log(max);
for(var row = 0; row < array.length; row++){
  for(var col = 0; col < array[row].length; col++){
    array[row][col] = matrix[red + row][kolona + col];
  }
}
console.log(array);
