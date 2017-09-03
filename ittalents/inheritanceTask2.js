function Restaurant(name) {
    this.name = name;
    this.cookers = [];
    this.waiters = [];
    this.countChef = 0;
    this.countSalatadjii = 0;
    document.write(`
<h1> Welcome to ${this.name} restaurant </h1>
      `);
}
Restaurant.prototype = {
    constructor: Restaurant,
    addWaiter: function(waiter) {
        if (waiter instanceof Waiter && waiter.staj >= 10) {
            this.waiters.push(waiter);
            document.write(`
              <p> Naznachih ${waiter.name} </p>`)
        }
    },
    addCooker: function(cooker) {
        if (cooker instanceof Chef) {
          if(this.countChef > 0){
            console.log("Veche ima glaven gotvach");
            return;
          } else {
            this.cookers.push(cooker);
            this.countChef++
            return;
          }
        }
        if(cooker instanceof Salatadjiya){
          if(this.countSalatadjii >= 5){
            console.log("Veche ima dostatychno salatadjii");
            return;
          } else {
            this.cookers.push(cooker);
            this.countSalatadjii++
            return;
          }
        }
        if(cooker instanceof Cooker){
          this.cookers.push(cooker);
          return;
        }
    },
    order : function(veg){
      var gotvach = this.cookers[Math.floor(Math.random()*this.cookers.length)];
      var servitior = this.waiters[Math.floor(Math.random()*this.waiters.length)];
      document.write(`
        <p> Vashiqt gotvach e ${gotvach.name}
        <p> Vashiqt servitior e ${servitior.name}
        `)
      gotvach.cook(veg);
      servitior.nosi();
    }
}
function Cooker(name) {
    this.name = name;
}
Cooker.prototype = {
  constructor : Cooker,
    cook: function(veg) {
      var yastie = null;
      if(veg){
        yastie = mesni[Math.floor(Math.random()*mesni.length)]
        yastie.lai();
      } else {
        yastie = postni[Math.floor(Math.random()*postni.length)]
        yastie.ostaniGladen();
      }
    }
}
function Chef(name) {
    Cooker.call(this, name)
    this.type = "chef";
}
Chef.prototype = Object.create(Cooker.prototype, {
    constructor: {
        value: Chef
    }
})
Chef.prototype.narejdai = function() {
    console.log("Narejdam az!")
}
function Salatadjiya(name) {
    Cooker.call(this, name);
    this.type = "salatadjiya";
}
Salatadjiya.prototype = Object.create(Cooker.prototype, {
    constructor: {
        value: Salatadjiya
    }
})
Salatadjiya.prototype.beli = function() {
    console.log("Belq kartofi az");
}
Salatadjiya.prototype.reji = function() {
    console.log("Reja kartofi az");
}
function Waiter(name, staj) {
    this.name = name;
    this.staj = staj;
}
Waiter.prototype = {
    constructor: Waiter,
    nosi: function() {
document.write(`<p> ${this.name} vi donese porychkata </p>`)
    }
}
var mesni = [];
var postni = [];
var imgs = ["https://static.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg","https://static.pexels.com/photos/70497/pexels-photo-70497.jpeg","https://eat24hours.com/files/cuisines/v4/thai.jpg?e24v=103?e24v=178?e24v=178"]

function Food(name) {
    this.name = name;
}
function Mesno(name) {
    Food.call(this, name);
    mesni.push(this);
}
Mesno.prototype = Object.create(Food.prototype, {
    constructor: {
        value: Mesno
    }
});
Mesno.prototype.lai = function() {
  var img = imgs[Math.floor(Math.random()*imgs.length)]
  document.write(`<p> Nagotvih pyrjoli </p>
    <img src="${img}" width="200px"> </img>
    `);
};
function Postno(name) {
    Food.call(this, name);
    postni.push(this);
}
Postno.prototype = Object.create(Food.prototype, {
    constructor: {
        value: Postno
    }
});
Postno.prototype.ostaniGladen = function() {
  var img = imgs[Math.floor(Math.random()*imgs.length)]
  document.write(`<p> Nagotvih salata </p>
    <img src="${img}" width="200px"> </img>
    `);
}
var andersen = new Restaurant("H.C.Anderesen");
var andrei = new Chef("Andrei");
var hasan = new Salatadjiya("Hasan");
var mehmed = new Cooker("Mehmed");
var mihail = new Chef("Mihail");
var letio = new Salatadjiya("Letif");
var bobi = new Waiter("Borislava",15);
var vanya = new Waiter("Vanya",11);
var lubo = new Waiter("Lubo",12);
var syrmi = new Mesno("syrmi")
var salata = new Postno("Salata");
andersen.addCooker(andrei);
andersen.addCooker(hasan);
andersen.addCooker(mihail);
andersen.addCooker(mehmed);
andersen.addWaiter(bobi);
andersen.addWaiter(vanya);
andersen.addWaiter(lubo);
andersen.order(false)
