var arr = new Array(5);
arr[0] = 10;
arr[1] = 66;
arr[2] = 1;
arr[3] = 66;
arr[4] = 10;
console.log(arr);
var count = arr.length - 1;
var mirror = false;
for (var index = 0; index < 5; index++) {
    if (arr[index] == arr[count]) {
        mirror = true;
    } else {
        mirror = false;
        break;
    }
    count--;
}
if (mirror == true) {
    console.log("Masiva e ogledalen!");
} else {
    console.log("Masiva ne e ogledalen!");
}
