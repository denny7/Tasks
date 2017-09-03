var masiv = [7.13, 0.2, 4.9, 5.1, 6.34, 1.12];
var copy = masiv.slice();
var result = [];
copy.sort();
result.unshift(copy[copy.length - 1]);
result.unshift(copy[copy.length - 2]);
result.unshift(copy[copy.length - 3]);
console.log(masiv);
console.log(result);
