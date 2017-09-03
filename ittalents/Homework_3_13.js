var number = 99;
var masiv = [];
while(number !== 0){
  if(number % 2 === 0){
    masiv.unshift(0);
  } else {
    masiv.unshift(1);
  }
  number = Math.floor(number/2);
}
console.log(masiv);
