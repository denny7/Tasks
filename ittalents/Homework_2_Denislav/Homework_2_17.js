var n = 7;
var row = "";
var col = "";
var f = "*";
var g;
var total = "";
row += f.repeat(n) + "\n";
for (var j = 1; j <= n - 2; j++) {
    g = j;
    g = "+";
    col += f + g.toString().repeat(n - 2) + f + "\n";
}
total += row + col + row;
total = total.replace(/\n*$/,"")
console.log(total);
