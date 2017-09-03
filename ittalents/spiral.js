var start = 1;
var first = new Array(4);
for (var row = 0; row < first.length; row++) {
    first[row] = new Array(5);
    for (var col = 0; col < first[row].length; col++) {
        first[row][col] = "*";
    }
}
var spiral = first.slice();
for (var row = 0; row < spiral.length; row++) {
    for (var col = 0; col < spiral[row].length; col++) {
        // right
        while (spiral[row][col] == "*") {
            spiral[row][col] = start;
            start++;
            col++;
        }
        var red = row;
        var kolona = col;
        // down
        col--;
        if (row < spiral.length - 1) {
            row++;
        }
        while (spiral[row][col] == "*") {
            spiral[row][col] = start;
            if (row < spiral.length - 1) {
                row++;
            }
            start++;
        }
        // left
        col--;
        console.log( "row" + row);
        console.log("col " + col);
        if (row > col) {
            row--;
        }
        while (spiral[row][col] == "*") {

            spiral[row][col] = start;
            col--;
            start++;
        }
        // Up
        row--;
        col++;
        while (spiral[row][col] == "*") {
            spiral[row][col] = start;
            row--;
            start++;
        }
        row = red;
        col = kolona;
    }
}
console.log(spiral);
