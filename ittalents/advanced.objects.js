function CarShop(capacity) {
    this.carsHolder = new Array(capacity);
    this.index = 0;
    this.addCar = function addCar(car) {
        if (this.index < this.carsHolder.length) {
            this.carsHolder[this.index] = car;
            this.index++;
        } else {
            console.log("Capacity of the Car Shop is full!");
        }
    };
    this.count = 0;
    this.getNextCar = function getNextCar() {
        this.count++;
        return this.carsHolder[this.count - 1].model;
    };
    this.sellNextCar = function sellNextCar(buyer) {
        buyer.car = this.carsHolder[this.count - 1];
    };
    this.removeCar = function removeCar(car) {
        this.carsHolder.splice(this.carsHolder[this.count - 1], 1);
        this.carsHolder.push("");
        this.index--
    };
    this.showAllCarsInTheShop = function showAllCarsInTheShop() {
        for (let index = 0; index < this.carsHolder.length; index++) {
            if (typeof this.carsHolder[index] == "object") {
                console.log("Model " + this.carsHolder[index].model + " cena: " + this.carsHolder[index].price + ".");
            }
        }
    }
    this.priceMax = 0;
    this.mostExpensiveCar = function mostExpensiveCar() {
        for (var index = 0; index < this.carsHolder.length; index++) {
            if (typeof this.carsHolder[index] == "object") {
                if (this.carsHolder[index].price > this.priceMax) {
                    this.priceMax = this.carsHolder[index].price
                    this.car = this.carsHolder[index]
                }
            }
        }
        return "The most expensive car costs " + this.car.price + ". The model is " + this.car.model;
    }
}
function Buyer(name, age) {
    this.name = name;
    this.age = age;
    this.car = null;
}
function Car(model, price, color) {
    this.model = model;
    this.price = price;
    this.color = color;
}
var car1 = new Car("Audi", 10000, "black");
var car2 = new Car("BMW", 7000, "silver");
var car3 = new Car("Mercedes", 7500, "blue");
var shop = new CarShop(3);
var pesho = new Buyer("Pesho", 22);
shop.addCar(car1);
shop.addCar(car2);
shop.addCar(car3);
console.log(shop.carsHolder);
console.log(shop.getNextCar());
shop.sellNextCar(pesho);
shop.removeCar()
console.log(shop.carsHolder);
shop.showAllCarsInTheShop()
shop.addCar(car1);
console.log(shop.carsHolder.length);
console.log(shop.carsHolder)
console.log(shop.mostExpensiveCar())
