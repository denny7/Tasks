var n = 6;
var row = " ".repeat(n) + "*" + "\n";
var first = "";
var j;
for (var i = 1; i < n; i++) {
    row += i + 1 == n
        ? " ".repeat(n - i) + "*".repeat(i * 2 + 1)
        : " ".repeat(n - i) + "*".repeat(i * 2 + 1) + "\n";
}
console.log(row);
