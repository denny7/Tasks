var elements = [];
function fill(arr){
  if(arr.length >= 1000){
    return;
  }
  var randomDice1 = Math.floor(Math.random()*6 + 1);
  var randomDice2 = Math.floor(Math.random()*6 + 1);
  elements.push(randomDice1 + " " + randomDice2);
  return fill(arr);
}
fill(elements);
console.log(elements);
poredni = elements.map(x => x[0]==x[2]);
console.log("Are there two serial duces: " + poredni.some((x,index) => x == true && poredni[index + 1] == true))
console.log("6 6 " + elements.some(x => x[0] == 6 && x[2] == 6));
deuceFive = elements.filter(x => x[0] == 5 && x[2] == 5);
console.log("5 5 count: " + deuceFive.length);
var sortSum = elements.sort((a,b) => (a.split(" ").reduce((x,y) => +x + +y)) - (b.split(" ").reduce((m,n) => +m + +n)))
console.log("Sort sum: " + sortSum);
console.log("Sum devisible by 2: " + elements.filter(x => (+x[0] + +x[2]) % 2 === 0));
console.log("Sum elements greater than 3: " + elements.every(x=> (+x[0] + +x[2]) > 3));
var symbols = ["⚀","⚁","⚂","⚃","⚄","⚅"];
console.log(elements.map(x => x.replace(x,symbols[x[0] - 1] + " " + symbols[x[2] - 1])));
