var str = "asd-12sdf45-56asdf100";
var numbers = "";
var chisla = [];
for (var index = 0; index < str.length; index++) {
    if ((str.charAt(index) == "-" || !isNaN(str.charAt(index)))) {
        numbers += str.charAt(index);
        if (isNaN(str.charAt(index + 1)) || index == str.length - 1) {
            chisla.push(numbers);
            numbers = "";
        }
    }
}
var sum = 0;
for (var index = 0; index < chisla.length; index++) {
    console.log(chisla[index]);
    sum += Number(chisla[index]);
}
console.log("Suma: " + sum)
