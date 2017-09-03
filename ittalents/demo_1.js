function f(){
  var a = 7;
  console.log("a: " + a);
  return function(){
    console.log("b " + a++)
  }
}
a = f();
// a();
// a();
// a();
// f();
