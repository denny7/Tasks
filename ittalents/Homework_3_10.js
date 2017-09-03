var arr = [1,2,3,4,5,6,7,8];
var sum = 0;
var avgArr = [];
for(var index = 0; index < arr.length; index++){
  sum += arr[index];
}
var avg= sum / arr.length;
for(var ind = 0; ind < arr.length; ind++){
  avgArr[ind] = Math.abs(avg - arr[ind]);
}
var kopiran = avgArr.slice();
kopiran.sort();
var naiBlizko = kopiran[0];
var indexNaNaiBlizko = avgArr.indexOf(naiBlizko);
var result = arr[indexNaNaiBlizko];
console.log("Sredna stoinost: "+ avg + ", nai-blizka stoinost: " + result);
