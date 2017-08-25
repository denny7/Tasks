function Shop(name, adress, money) {
    this.name = name;
    this.adress = adress;
    this.money = money;
    this.products = [
        [], []
    ];
}
Shop.prototype = {
    constructor: Shop,
    addProduct: function(product) {
        if (product instanceof Product) {
            if (product.type == "kg") {
                this.products[0].push(product)
            }
            if (product.type == "number") {
                this.products[1].push(product)
            }
        } else {
            console.log("There is not such a product")
        }
    },
    showRevision : function(){
      for(let index = 0; index < this.products[0].length; index++){
        console.log(this.products[0][index].name + " - " + this.products[0][index].quantity )
      }
      for(let index = 0; index < this.products[1].length; index++){
        console.log(this.products[1][index].name + " - " + this.products[1][index].quantity )
      }
    }
}
function Product(name, price, quantity, type) {
    this.name = name;
    this.price = price;
    if (type == "number") {
        this.quantity = quantity.toFixed(0)
    } else {
        this.quantity = quantity;
    }
    this.type = type;
}
function Person(shop, name, money, max) {
    if (shop instanceof Shop) {
        this.shop = shop;
    } else {
        console.log("There is not such a shop!")
    }
    this.name = name;
    if (!isNaN(money) && money > 0) {
        this.money = money
    } else {
        console.log("Money should be number greater than 0!")
    }
    if (!isNaN(max) && max > 0) {
        this.max = max
    } else {
        console.log("Max products should be number greater than 0!")
    }
    this.cart = [];
}
Person.prototype = {
    constructor: Person,
    addToCartKg: function(product, quantity) {
        if (this.cart.length < this.max) {
            for (let index = 0; index < this.shop.products[0].length; index++) {
                if (this.shop.products[0][index].name == product) {
                    if (quantity <= this.shop.products[0][index].quantity) {
                        this.shop.products[0][index].quantity -= quantity;
                        this.cart.push(this.shop.products[0][index]);
                        this.cart[this.cart.length - 1].cartQuantity = quantity;

                    } else {
                      this.cart.push(this.shop.products[0][index]);
                      this.cart[this.cart.length - 1].cartQuantity = this.shop.products[0][index].quantity;
                      this.shop.products[0][index].quantity = 0
                      console.log("Not enough products in the shop! You take " + this.cart[this.cart.length - 1].cartQuantity);
                    }
                }
            }
        } else {
            console.log("Max products!!")
        }
    },
    addToCartNumber: function(product, quantity) {
        if (this.cart.length < this.max) {
            for (let index = 0; index < this.shop.products[1].length; index++) {
                if (this.shop.products[1][index].name == product) {
                    if (quantity <= this.shop.products[1][index].quantity) {
                        this.shop.products[1][index].quantity -= quantity;
                        this.cart.push(this.shop.products[1][index]);
                        this.cart[this.cart.length - 1].cartQuantity = quantity;
                    } else {
                      this.cart.push(this.shop.products[1][index]);
                      this.cart[this.cart.length - 1].cartQuantity = this.shop.products[1][index].quantity;
                      this.shop.products[1][index].quantity = 0
                      console.log("Not enough products in the shop! You take " + this.cart[this.cart.length - 1].cartQuantity);
                    }
                }
            }
        } else {
            console.log("Max products!!")
        }
    },
    removeKg: function(product, quantity) {
        for (let index = 0; index < this.cart.length; index++) {
            if (this.cart[index].name == product) {
                if (quantity == "all" || quantity >= this.cart[index].quantity) {
                    for (let index2 = 0; index2 < this.shop.products[0].length; index2++) {
                        if (this.shop.products[0][index2].name == product) {
                            this.shop.products[0][index2].quantity += this.cart[index].cartQuantity
                        }
                        this.cart.splice(index, 1)
                    }
                } else {
                    for (let index2 = 0; index2 < this.shop.products[0].length; index2++) {
                        if (this.shop.products[0][index2].name == product) {
                            this.shop.products[0][index2].quantity += quantity;
                        }
                    }
                    this.cart[index].cartQuantity -= quantity;
                }
            }
        }
    },
    removeNumber: function(product, quantity) {
        for (let index = 0; index < this.cart.length; index++) {
            if (this.cart[index].name == product) {
                if (quantity == "all" || quantity >= this.cart[index].quantity) {
                  for (let index2 = 0; index2 < this.shop.products[1].length; index2++) {
                      if (this.shop.products[1][index2].name == product) {
                          this.shop.products[1][index2].quantity += this.cart[index].cartQuantity
                      }
                      this.cart.splice(index, 1)
                  }
                } else {
                  for (let index2 = 0; index2 < this.shop.products[0].length; index2++) {
                      if (this.shop.products[1][index2].name == product) {
                          this.shop.products[1][index2].quantity += quantity;
                      }
                  }
                    this.cart[index].cartQuantity -= quantity;
                }
            }
        }
    },
    payAll: function() {
        var sum = 0;
        for (let index = 0; index < this.cart.length; index++) {
            sum += this.cart[index].cartQuantity * this.cart[index].price;
        }
        if (this.money < sum) {
            console.log("Not enough money!")
        } else {
            this.money -= sum;
            this.shop.money += sum;
            this.cart = [];
            console.log(this.name + " paid " + sum)
        }
    }
}

var cheese = new Product("cheese", 5.8, 25, "kg");
var fish = new Product("fish", 11, 33, "kg");
var beer = new Product("beer", 2, 10, "number");
var snacks = new Product("snacks", 1.5, 15, "number");
var kaufland = new Shop("kaufland", "Student region Sofia", 500);
kaufland.addProduct(cheese);
kaufland.addProduct(fish);
kaufland.addProduct(beer);
kaufland.addProduct(snacks);
kaufland.showRevision()
var denny = new Person(kaufland, "Denny", 1550, 15)
denny.addToCartKg('cheese', 9.5)
denny.addToCartKg('fish', 4.5)
denny.addToCartNumber('beer', 9);
denny.addToCartNumber('snacks', 111);
denny.payAll();
kaufland.showRevision()
