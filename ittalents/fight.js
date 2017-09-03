var goshoHealth = 100;
var peshoHealth = 100;
var udar = Math.floor((Math.random()*2 + 1));
console.log(udar);

while(goshoHealth > 0 && peshoHealth >0){
  var punch = Math.round(Math.random()*10);
  if(udar % 2 == 0){
  goshoHealth -= punch;
  console.log("Pesho udari Gosho s " + punch + " krav. Na Gosho mu ostavat " + goshoHealth);
}else {
  peshoHealth -= punch;
  console.log("Gosho udari Pesho s " + punch + " krav. Na Pesho mu ostavat " + peshoHealth);
}
udar++;
}
var winner = (goshoHealth > peshoHealth) ? "Gosho e pobeditel!" : "Pesho e pobeditel!";
console.log(winner);
