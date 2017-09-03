var masiv = [[11,12,13,14,15,16],[21,22,23,24,25,26],[31,32,33,34,35,36],[41,42,43,44,45,46],[51,52,53,54,55,56],[61,62,63,64,65,66]];
var sum = 0;
var sumAll = 0;
for (var row = 0; row < masiv.length; row++) {
    for (var col = 0; col < masiv[row].length; col++) {
        if (row % 2 !== 0) {
            sumAll += masiv[row][col];
            sum += masiv[row][col];
        }
    }
    if (row % 2 !== 0) {
        console.log(masiv[row] + " " + "Suma: " + sum);
    }
    sum = 0;
}
console.log("Sumata na elementite e: " + sumAll);
