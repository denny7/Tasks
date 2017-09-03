var first = 1;
var arr = new Array(10);
arr[0] = first;
arr[1] = first;
for(var index = 0; index < 8; index++){
arr[index + 2] = arr[index] + arr[index + 1]
}
console.log(arr);
