var masiv = [2,1,1,2,3,3,2,2,2,1,5,5,5,5,5,5];
console.log(masiv)
var sreshtaniq = [];
var count = 1;
var max = 0;
for(var index = 1 ; index < masiv.length; index++){
  if(masiv[index] == masiv[index - 1]){
    count++;
    if(index == masiv.length - 1){
    sreshtaniq.push(count);
    }
  } else {
    sreshtaniq.push(count);
    count = 1;
  }
  if(count > max){
    max = count;
  }
}
console.log(sreshtaniq)
sreshtaniq.sort();
var sumSreshtaniq = 0;
for(var indexDve = 0; indexDve < sreshtaniq.length - 1; indexDve++){
  sumSreshtaniq += sreshtaniq[indexDve];
}
var result = [];
for(var ind = sumSreshtaniq; ind < sumSreshtaniq + max; ind++){
  result.push(masiv[ind])
}
console.log(sreshtaniq)
console.log(result);
