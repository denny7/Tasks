var str1 = "Simple sentence that is firstd d d d d d.";
var str2 = "Simple one that is second d d d d d.";
var str3 = "sentence that is last d d d d d d dd d  dd Simple .";
str1 = str1.split(" ");
str2 = str2.split(" ");
str3 = str3.split(" ");
var bigger = 0;
function result(str1,str2,str3){
for (var index = 0; index < str1.length; index++) {
    for (var ind2 = 0; ind2 < str2.length; ind2++) {
        for (var ind3 = 0; ind3 < str3.length; ind3++) {
            if (str1[index] == str2[ind2] && str1[index] == str3[ind3]) {
                if (str1[index].length > bigger) {
                    bigger = str1[index]
                }
            }
        }
    }
}
return bigger;
}
console.log(result(str1,str2,str3))
