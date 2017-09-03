var str = "dennY7 U sdsF \n HH ds" ;
console.log(str)
var str2 = /^([^\s]*)$/.test(str)
var str3 = str.match(/^(?=.*?[a-z]).{4,8}$/)
var str4 = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d])(?=\S+$).{6,7}$/.test(str);
var pattern = /[a-z]/gmi
var str5 = str.match(pattern)
console.log(str2)
console.log(str3)
console.log(str4)
console.log(str5)
