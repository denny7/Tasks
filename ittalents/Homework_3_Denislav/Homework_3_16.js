var masiv = [-1.12, -2.43, 3.1, 4.2, 0, 6.4, - 7.5, 8.6, 9.1, -4];
console.log(masiv);
for(var index = 0; index < masiv.length; index++){
  if(masiv[index] < -0.231){
    masiv[index] = (Math.pow(index + 1, 2) + 41.25).toFixed(2);
  } else {
    masiv[index] = (masiv[index] *(index + 1)).toFixed(2);
  }
}
console.log(masiv);
