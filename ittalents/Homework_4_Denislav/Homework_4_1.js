var masiv = [[48,72,13,14,15],[21,22,53,24,75],[31,57,33,34,35],[41,95,43,44,45],[59,52,53,54,55],[61,69,63,64,65]];
var min = 10000;
var max = 0;
for (var row = 0; row < masiv.length; row++){
  for(var col = 0; col < masiv[row].length; col++){
    if(masiv[row][col] < min){
      min = masiv[row][col];
    }
    if(masiv[row][col] > max){
      max = masiv[row][col];
    }
  }
}
console.log("Nai malko: " + min);
console.log("Nai-golqmo: " + max);
