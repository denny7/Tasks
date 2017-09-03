var masiv = [5,2,5,8,3];
var noComma = [];
var backwards = [];
for(var index = masiv.length - 1; index >= 0; index --){
  backwards+= masiv[index] + " ";
}
for(var index2 = 0; index2 < masiv.length; index2 ++){
  noComma += masiv[index2] + " ";
}
var result = noComma + backwards;
console.log(result);
