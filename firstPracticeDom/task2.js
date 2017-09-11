// Task 2
var parent = document.getElementsByTagName("input")
var holder = document.createDocumentFragment()
function labels(parentElement){
  let masiv = Array.prototype.slice.call(parentElement);
  masiv.forEach(function(x){
  let el =  document.createElement("p");
  el.innerHTML = x.value;
  holder.appendChild(el);
  })
  document.body.appendChild(holder)
}
 // Task 3
function addDiv(arr){
  let div = document.createElement("div");
   arr.forEach(function(x){
    let el = document.createElement(x);
    div.appendChild(el);
   })
   document.body.appendChild(div);
}

//Task 4
function Person(name,age,imgUrl){
  this.name = name;
  this.age = age;
  this.imgUrl = imgUrl;
}
Person.prototype.constructor = Person;
Person.prototype.print = function(){
  var holder = document.createDocumentFragment();
  let pName = document.createElement("p");
  pName.innerHTML = this.name;
  holder.appendChild(pName);
  let pAge = document.createElement("p");
  pAge.innerHTML = this.name + " is " + this.age + " years old";
  holder.appendChild(pAge);
  let img = document.createElement("img");
  img.src = this.imgUrl;
  img.style.width = "200px"
  holder.appendChild(img);
  document.body.appendChild(holder);
}
var joro = new Person("Joro",25,"https://ryantoquero.files.wordpress.com/2016/03/human1.jpg");


//Task 5
function Products(){
  this.products = [];
  var div = document.createElement("div");
  div.id = "diviya"
  this.products.forEach(function(x){
    let el = document.createElement("p");
    el.innerHTML = x;
    div.appendChild(el);
  })
  document.body.appendChild(div);
}
Products.prototype.constructor = Products;
Products.prototype.add = function(product){
  this.products.push(product);
  let el = document.createElement("p");
  el.innerHTML = product;
  document.getElementById("diviya").appendChild(el)
}
Products.prototype.removeProduct = function(name){
  let index = this.products.findIndex(x => x==name)
  if(index != -1){
  this.products.splice(index,1);
  document.getElementById("diviya").removeChild(document.getElementById("diviya").children[index]);
}
}
var producti = new Products();
producti.add("slivi");
producti.add("kaisii");
producti.add("olio")
