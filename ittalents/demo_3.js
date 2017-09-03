var result = new Array(5);
var rund = 0;

while (rund != 5) {

    result[rund] = (Math.random() > Math.random())
        ? result[1] = "Gosho"
        : result[2] = "Pesho";
    rund++;
}
console.log(result);
var countWins = 0
for (var index = 0; index < result.length; index++) {
    console.log(result[index]);
    if(result[index]== "Gosho"){
      countWins++;
    } else {
      countWinsPesho++;
    }
}
console.log(countWins);
