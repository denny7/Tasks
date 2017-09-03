var masiv = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
var sumRow = 0;
var sumBiggestRow = 0;
var sumBiggestCol = 0;
var sumColumn = 0;
var result = "";
for (var row = 0; row < masiv.length; row++) {
    for (var col = 0; col < masiv[row].length; col++) {
        sumRow += masiv[row][col];
        sumColumn += masiv[col][row];
    }
    if (sumRow > sumBiggestRow) {
        sumBiggestRow = sumRow;
    }
    if (sumColumn > sumBiggestCol) {
        sumBiggestCol = sumColumn;
    }
    sumRow = 0;
    sumColumn = 0;
}
console.log("Maksimalna suma na redovete: " + sumBiggestRow);
console.log("Maksimalna suma na kolonite: " + sumBiggestCol);
result = (sumBiggestRow > sumBiggestCol)
    ? result = "Maksimalnata suma na redovete e po-golqma ot tazi na kolonite!"
    : result = "Maksimalnata suma na kolonite e po-golqma ot tazi na redovete!";
console.log(result)
