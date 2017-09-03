var a = new Array(4);
var a = [2, 3, -11, 7, 11, 15];
var b = new Array(a.length);
for (var index = 0; index < a.length; index++) {
    if (index == 0) {
        b[0] = a[1];
    } else {
        if (index == a.length - 1) {
            b[b.length - 1] = a[a.length - 2];
        } else {
            b[index] = Number(a[index - 1]) + Number(a[index + 1]);
        }
    }
}
console.log(a);
console.log(b);
