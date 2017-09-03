var arr = [7.1,8.5,0.2,3.7,0.99,1.4,-3.5,-110,212,341,1.2]
var result = '';
for (var index = 0; index < arr.length; index++) {
    if (index == arr.length - 1) {
        result += arr[index];
    } else {
        if (arr[index] > -2.99 && arr[index] < 2.99) {
            result += arr[index] + "; ";
        }
    }
}
console.log(result);
