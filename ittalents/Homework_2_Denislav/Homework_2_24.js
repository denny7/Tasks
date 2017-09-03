var x = 17571;
var palindrom = x.toString();
if((palindrom.charAt(0) == palindrom.charAt(palindrom.length - 1))
 && (palindrom.charAt(1) == palindrom.charAt(palindrom.length - 2))){
console.log("Chisloto " + x + " e palindrom");
}else {
  console.log("Chisloto " + x + " ne e palindrom!")
}
