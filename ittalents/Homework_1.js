// Task 1
console.log('Task 1');
var aa = (Math.random()*10).toFixed(2);
var bb = (Math.random()*10).toFixed(2);
var cc = (Math.random()*10).toFixed(2);
console.log("Number a: " + aa);
console.log("Number b: " + bb);
console.log("Number c: " + cc);
if((aa < cc && cc > bb) || (bb < cc && aa > bb)) {
console.log("Number "+ cc + " is between "+ aa + " and " + bb);
}else{
console.log("Number "+ cc + " is not between " + aa + " and " + bb);
}

// Task 2
console.log('Task 2');
var a = (Math.random()*10).toFixed();
var b = (Math.random()*10).toFixed();
var suma = +a + +b;
var razlika = a - b;
var proizvedenie = a * b;
var delenie = a / b;
var ostatak = a % b;
console.log("Chisloto a: " + a);
console.log("Chisloto b: " + b);
console.log("Suma: " + suma);
console.log("Razlika: " + razlika);
console.log("Proizvedenie: " + proizvedenie);
console.log("Delenie: " + delenie);
console.log("Ostatak: " + ostatak);
var c = (Math.random()*10).toFixed(2);
var d = (Math.random()*10).toFixed(2);
var sumaDrob = +c + +d;
var razlikaDrob = c - d;
var proizvedenieDrob = c * d;
var delenieDrob = c / d;
var ostatakDrob = c % d;
console.log("Chisloto c: " + c);
console.log("Chisloto d: " + d);
console.log("Suma drobni chisla: " + sumaDrob);
console.log("Razlika drobni chisla: " + razlikaDrob);
console.log("Proizvedenie drobni chisla: " + proizvedenieDrob);
console.log("Delenie drobni chisla: " + delenieDrob);
console.log("Ostatak drobni chisla: " + ostatakDrob);

// Task 3
console.log("Task 3");
var parvaPromenliva = 7;
var vtoraPromenliva = 23;
console.log('Parva promenliva: ' + parvaPromenliva);
console.log('Vtora promenliva: ' + vtoraPromenliva);
var promenliva = parvaPromenliva;
parvaPromenliva = vtoraPromenliva;
vtoraPromenliva = promenliva;
console.log('Parva promenliva: ' + parvaPromenliva + ", " + 'Vtora promenliva: ' + vtoraPromenliva);

// Task 4
console.log("Task 4");
var parvaStoinost = (Math.random()*10).toFixed();
var vtoraStoinost = (Math.random()*10).toFixed();
console.log("Parva stoinost: " + parvaStoinost);
console.log("Vtora stoinost: " + vtoraStoinost);
if (+parvaStoinost < +vtoraStoinost) {
  console.log(parvaStoinost + ' ' + vtoraStoinost);
} else {
  console.log(vtoraStoinost + ' ' + parvaStoinost)
}

// Task 5
console.log('Task 5');
var first = Math.random().toFixed(2);
var second = Math.random().toFixed(2);
var third = Math.random().toFixed(2);
console.log("First: " + first);
console.log("Second: " + second);
console.log("Third: " + third);
if (first > second && first > third) {
  if (second > third) {
console.log(first + ' ' + second + ' ' + third);
  } else {
    console.log(first + ' ' + third + ' ' + second);
  }
}
if (second > first && second > third) {
  if (first > third) {
      console.log(second + ' ' + first + ' ' + third);
  } else {
      console.log(second + ' ' + third + ' ' + first);
  }
}
if (third > first && third > second) {
  if (first > second) {
      console.log(third + ' ' + first + ' ' + second);
  } else {
    console.log(third + ' ' + second + ' ' + first);
  }
}

// Task 6
console.log('Task 6');
var a1 = Math.round((Math.random()*10));
var a2 = Math.round((Math.random()*10));
var a3 = Math.round((Math.random()*10));
console.log('a1: ' + a1);
console.log('a2: ' + a2);
console.log('a3: ' + a3);
var b1 = a1;
var b2 = a2;
var b3 = a3;
a1 = b2;
a2 = b3;
a3 = b1;
console.log('a1 change: ' + a1);
console.log('a2 change: ' + a2);
console.log('a3 change: ' + a3);

// Task 7
console.log('Task 7');
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var suma = (Math.random()*100).toFixed(2);
var zdrav = true;
console.log("Chasat e: " + hours + ':' + minutes + ':' + seconds);
console.log("Imam tochno: " + suma + "lv.");
if (zdrav == false) {
  if (suma >= 20) {
    console.log("Shte si kupq lekarstva, zashtoto sam bolen i imam pari!");
  } else {
    console.log("Shte si stoq vkashti i shte piq chai, zashtoto sam bolen, a nqmam pari za lekarstva. :( ");
  }
} else {
  if (suma < 10) {
    console.log("Shte hodq na kafe, zashtoto sam zdrav i imam po-malko ot 10lv.");
  } else {
    console.log("Shte hodq na mol, zashtoto sam zdrav i imam pari!");
  }
}
