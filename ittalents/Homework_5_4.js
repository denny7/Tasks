var names = "Anna Dosewa Asenowa, Iwo Peew Peew";
var first = names.slice(0, names.indexOf(","));
var second = names.slice(names.indexOf(", ") + 2);
var sumFirst = 0;
var sumSecond = 0;
for(var index = 0; index < first.length; index++){
  sumFirst += first.charCodeAt();
}
for(var index = 0; index < second.length; index++){
  sumSecond += second.charCodeAt();
}
var result = sumFirst > sumSecond ? console.log(first): console.log(second)
