var a = 1;
var b = 1;
var c = 1;
var n = "";
while (a != 10 && b != 10) {
    n += a.toString() + "*" + b + "=" + (a * b) + " ";
    b++;
    if (b == 10) {
        a++;
        n += "\n";
        c++;
        b = c;
    }
}
console.log(n);
