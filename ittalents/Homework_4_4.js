var masiv = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
for (var row = 0 ; row < masiv.length; row++){
  for(var col = masiv[row].length - 1; col >= 0; col--){
    process.stdout.write(masiv[col][row] + " ");
  }
  console.log()
}
