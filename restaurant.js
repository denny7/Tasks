var menu = [
    [], []
]
function Restaurant(name, adress) {
    this.name = name;
    this.adress = adress;
    this.capital = 1000;
    this.waiters = [];
    this.menu = menu;
    this.clients = [];
}
Restaurant.prototype = {
    constructor: Restaurant,
    startWork: function() {
        for (let index = 0; index < this.clients.length; index++) {
            if (this.clients[index].type != "student") {
                this.clients[index].makeOrder(this.clients[index].couldEat, this.clients[index].couldDrink, this);
            } else {
                var randomFood = Math.floor(Math.random() * this.menu[0].length)
                var randomDrink = Math.floor(Math.random() * this.menu[1].length)
                this.clients[index].makeOrder(this.menu[0][randomFood].name, this.menu[1][randomDrink].name, this);
            }
        };
        for (let index = 0; index < this.clients.length; index++) {
            this.clients[index].takeBill();
        };
        for (let index = 0; index < this.clients.length; index++) {
            this.clients[index].payBill();
        };
    },
    revisionCapital : function(){
      console.log("Capital : " + this.capital);
    },
    theBiggestTip : function(){
      this.waiters.sort((a,b)=> b.tips - a.tips);
      console.log(this.waiters[0].name + " " + this.waiters[0].tips)
    },
    theTips : function(){
      this.waiters.sort((a,b)=> b.tips - a.tips);
      this.waiters.forEach(x=> console.log(x.name + " " + x.tips))
    },
    revisionMenu : function(){
      console.log("Meals:")
      this.menu[0].sort((a,b) => b.price - a.price);
      this.menu[0].forEach(x=> console.log(x.name + " " + x.quantity));
      console.log("Drinks:")
      this.menu[1].sort((a,b) => b.price - a.price);
      this.menu[1].forEach(x=> console.log(x.name + " " + x.quantity));
    }
}
function Waiter(name) {
    this.name = name;
    this.tips = 0;
    priPesho.waiters.push(this);
}
function Meal(name) {
    this.name = name;
    this.quantity = 10;
    if (name == "salad") {
        this.price = 5;
        this.weight = Math.round(Math.random()*300 + 300);
    }
    if (name == "mainMeal") {
        this.price = 9;
        this.weight = Math.round(Math.random()*400 + 400);
    }
    if (name == "desert") {
        this.price = 4;
        this.weight = Math.round(Math.random()*100 + 200);
    }
    menu[0].push(this);
}
function Drink(name) {
    this.quantity = 20;
    this.name = name;
    if (name == "alcohol") {
        this.price = 4;
    }
    if (name == "non-alcohol") {
        this.price = 2;
    }
    menu[1].push(this);
}
function Client(name, type) {
    this.name = name;
    this.type = type;
    this.order = [];
    this.orderCost = 0;
    if (this.type == "student") {
        this.money = 10;
    };
    if (this.type == "mutra") {
        this.money = 50;
        this.couldEat = "mainMeal";
        this.couldDrink = "alcohol";
    };
    if (this.type == "vegan") {
        this.money = 30;
        this.couldEat = "salad";
        this.couldDrink = "non-alcohol";
    };
    priPesho.clients.push(this);
}
Client.prototype = {
    constructor: Client,
    makeOrder: function(meal, drink, restaurant) {
        this.restaurant = restaurant
        this.waiter = restaurant.waiters[Math.floor(Math.random() * restaurant.waiters.length)];
        if (this.type != "student" && this.couldEat != meal) {
            console.log("You can not order this food! Sorry!")
        }
        if (this.type != "student" && this.couldDrink != drink) {
            console.log("You can not order this drink! Sorry!")
        }
        if (meal == this.couldEat || this.type == "student") {
            for (let index = 0; index < restaurant.menu[0].length; index++) {
                if (meal == restaurant.menu[0][index].name) {
                    if (0.9 * this.money >= this.orderCost + restaurant.menu[0][index].price) {
                        if (restaurant.menu[0][index].quantity > 0) {
                            this.order.push(restaurant.menu[0][index]);
                            this.orderCost += restaurant.menu[0][index].price;
                            restaurant.menu[0][index].quantity -= 1;
                            console.log(this.name + " porycha " + restaurant.menu[0][index].name);
                        } else {
                            console.log("There is not enough portions of this meal");
                        }
                        break;
                    } else {
                        console.log("You do not have enough money for this food");
                    }
                }
            }
        }
        if (drink == this.couldDrink || this.type == "student") {
            for (let index = 0; index < restaurant.menu[1].length; index++) {
                if (drink == restaurant.menu[1][index].name) {
                    if (0.9 * this.money >= this.orderCost + restaurant.menu[1][index].price) {
                        if (restaurant.menu[1][index].quantity > 0) {
                            this.order.push(restaurant.menu[1][index]);
                            this.orderCost += restaurant.menu[1][index].price;
                            restaurant.menu[1][index].quantity -= 1;

                            console.log(this.name + "  porycha " + restaurant.menu[1][index].name);
                        } else {
                            console.log("There is not enough portions of this meal");
                        }
                        break;
                    } else {
                        console.log("You do not have enough money for this drink")
                    }
                }
            }
        }
    },
    takeBill: function() {
        console.log("The waiter " + this.waiter.name + " gives you the bill. Your bill costs " + this.orderCost + "lv.");
    },
    payBill: function() {
        var randomTip = Math.random();
        var tipCost = 0;
        if (randomTip <= 0.8) {
            tipCost = ((Math.floor(Math.random() * 6 + 5)) * 0.01 * this.orderCost).toFixed(2);
            this.money -= tipCost;
            this.waiter.tips += +tipCost;
        }
        this.money -= this.orderCost;
        this.restaurant.capital += this.orderCost;
        console.log("You pay " + this.orderCost + "lv. and give a tip " + tipCost + "lv. to " + this.waiter.name)
    }
}

var salad = new Meal("salad");
var mainMeal = new Meal("mainMeal");
var desert = new Meal("desert");
var alcohol = new Drink("alcohol");
var nonAlcohol = new Drink("non-alcohol");
var priPesho = new Restaurant("Pri Pesho Kelnera", "Studentski grad 59");
var waiter1 = new Waiter("Gosho");
var waiter2 = new Waiter("Pesho");
var waiter3 = new Waiter("Misho");
var waiter4 = new Waiter("Jack");
var waiter5 = new Waiter("Anna-Maria");
var denny = new Client("Denny", "student");
var djaro = new Client("Djaro", "mutra");
var client3 = new Client("client3")
var client4 = new Client("client4")
var client5 = new Client("client5")
var client6 = new Client("client6")
var client7 = new Client("client7")
var client8 = new Client("client8")
var client9 = new Client("client9")
var client10 = new Client("client10")
var client11 = new Client("client11")
var client12 = new Client("client12")
var client13 = new Client("client13")
var client14 = new Client("client14")
var client15 = new Client("client15");
for (let index = 0; index < priPesho.clients.length; index++) {
    var randomType = Math.random();
    if (randomType <= 0.2) {
        priPesho.clients[index].type = "vegan";
        priPesho.clients[index].money = 30;
        priPesho.clients[index].couldEat = "salad";
        priPesho.clients[index].couldDrink = "non-alcohol";
    }
    if (randomType > 0.2 && randomType <= 0.5) {
        priPesho.clients[index].type = "student"
        priPesho.clients[index].money = 10;
    }
    if (randomType > 0.5) {
        priPesho.clients[index].type = "mutra";
        priPesho.clients[index].money = 50;
        priPesho.clients[index].couldEat = "mainMeal";
        priPesho.clients[index].couldDrink = "alcohol";
    }
};
priPesho.startWork();
priPesho.theTips();
priPesho.revisionMenu();
priPesho.revisionCapital()
console.log(salad.weight)
