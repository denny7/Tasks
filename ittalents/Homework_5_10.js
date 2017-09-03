var niz = "Hello";
var ascii = "";
var result = "";
var mainResult = "";
for(var index = 0; index < niz.length; index++){
ascii = niz.charCodeAt(index) + 5;
result = String.fromCharCode(ascii);
mainResult += result;
}
console.log(niz);
console.log(mainResult);
