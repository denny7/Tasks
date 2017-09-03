var h = 7;
var spaces = h - 1;
var palnej = " ";
var ball = "@    @       @"
console.log(" ".repeat(h - 1) + "*" + "\n" + " ".repeat(h - 1) + "|");
for (var row = 1; row <= h; row++) {
    for (var space = 1; space <= spaces; space++) {
        process.stdout.write(' ');
    }
    process.stdout.write("*");
    if (row > 1) {
        for (var middle = 1; middle <= row * 2 - 3; middle++) {
            palnej = ball.charAt(Math.floor(Math.random() * ball.length));
            if (row == h) {
                palnej = "*";
            }
            process.stdout.write(palnej);
        }
        process.stdout.write("*");
    }
    spaces--;
    console.log();
}
console.log((" ".repeat(h - 1) + "|" + "\n").repeat(h - 1))
