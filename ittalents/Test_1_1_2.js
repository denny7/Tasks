var str = "denny denny some more words here denny more more denny more more a";
str = str.split(" ");
var sum = 0;
var secondSum = 0;
var result = '';
for(var index = 0; index < str.length; index++){
  for(var words = 0; words < str.length; words++){
    if(str[index] == str[words]){
      sum++;
    }
    if(secondSum < sum){
      secondSum = sum;
      result = str[index];
    }
  }
  sum = 0;
}
console.log(result);
