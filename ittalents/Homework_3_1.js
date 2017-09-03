var masiv = [12, 9, 6, 10, 3, -3, 5, 8, 6, -2, 7];
var devidedBy3 = [];
for(var index = 0; index < masiv.length; index++){
  if(masiv[index] % 3 == 0){
  devidedBy3.push(masiv[index]);
  }
}
console.log(Math.min(...devidedBy3));
