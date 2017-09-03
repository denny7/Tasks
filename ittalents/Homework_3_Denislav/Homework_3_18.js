var a = [18, 19, 32, 1, 3, 4, 5, 6, 7, 8];
var b = [1, 2, 3, 4, 5, 16, 17, 18, 27, 11];
var c = [];
for(var index = 0; index < a.length; index ++){
    if(a[index] > b[index]){
      c.push(a[index])
    } else {
      c.push(b[index])
    }
}
console.log(a);
console.log(b);
console.log(c);
