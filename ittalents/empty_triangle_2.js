var h = 6;
console.log("*");
for (var row = 2; row <= h; row++) {
    process.stdout.write("*");
    var pylnej = " ";
    if (row == h) {
        pylnej = "*";
    }
    for (star = 1; star <= row - 2; star++) {
        process.stdout.write(pylnej);
    }
    process.stdout.write("*" +"\n");
}
