var number = Math.round(Math.random()* 998 + 1)
var stop = 1;
var first = 1;
var second = 0;
var total = "";
while (stop <= 10) {
    second++;
    if ((second % 2 == 0 || second % 3 == 0 || second % 5 == 0) && second > number) {
        total += first + ":" + second + "; ";
        first++;
        stop++;
    }
}
total = total.replace(/;\s*$/, "")
console.log(number);
console.log(total);
