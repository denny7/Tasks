var red = 4;
var kolona = 5;
var start = 1;
var second = []
for (var col = 0; col < kolona; col++) {
    for (var row = 0; row < red; row++) {
        second[row] = [];
    }
}
for (var col = 0; col < kolona; col++) {
    if (col % 2 == 0) {
        for (var row = 0; row < red; row++) {
            second[row][col] = start;
            start++;
        }
    } else {
        for (var row = red - 1; row >= 0; row--) {
            second[row][col] = start;
            start++;
        }
    }
}
console.log(second);
