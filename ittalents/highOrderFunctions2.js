var arr = ["Denny","Nikolina","Samy","Izabela","Denislav"];
var mas = [1,2,3,4,5]
console.log(arr.filter(x => x.startsWith("D")));
console.log(arr.filter(x=> x.endsWith("y") && x.length==8));
console.log(arr.filter(x=> x.length < 5));
console.log(arr.map(x=> x + "---"))
console.log(arr.filter(x => x.startsWith("De") && x.length < 7).map(x => x + "!!!").every(x => x.endsWith("!")));
var sec= arr.map((x,index)=> x = 7);
console.log(sec)
console.log(mas.some(x=> x % 2 ==0));
var primer = (arr.map((x,index) => "index[" + index + "]: " + x ));
console.log(primer)
var primer2 = arr.slice(arr.forEach((x,index)=> arr[index] = "x : " + x));
console.log(primer2)
console.log(primer)
console.log(arr)
console.log(mas.reduce((a,b) => a*b))
mas2 = mas.map(x => Math.pow(x,3)).filter(x => x >= 27).map(x => x + "!").every(x => x.endsWith("!"));
console.log(mas2)
mas.forEach((x,index)=> mas[index] = x * x);
console.log(mas)
