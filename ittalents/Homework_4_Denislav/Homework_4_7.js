var masiv = [[11,12,13,14,15,16],[21,22,23,24,25,26],[31,32,33,34,35,36],[41,42,43,44,45,46],[51,52,53,54,55,56],[61,62,63,64,65,66]];
var count = 0;
var sum = 0;
var sumAll = 0;
var red = [];
for (var row = 0; row < masiv.length; row++) {
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    count++;
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    count++;
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    count++;
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    count++;
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    count++;
    if ((count + row) % 2 == 0) {
        sum += masiv[row][count];
        red.push(masiv[row][count]);
    }
    console.log(red + " Suma na elementite ot red: " + sum);
    sumAll += sum;
    sum = 0;
    count = 0;
    red = [];
}
console.log("Suma na vsichki elementi: " + sumAll);
