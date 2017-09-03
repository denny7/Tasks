var srokVinetka = ["dnevna", "mesechna", "godishna"];
var typeCar = ["car", "truck", "autobus"];
var namesPerson = [
    "Gosho",
    "Pesho",
    "Ivan",
    "Samy",
    "Hristo",
    "Martin",
    "Mehmed",
    "Nikolina",
    "Elena",
    "Dafy",
    "Ismet",
    "Raq",
    "Denny",
    "Ivaylo",
    "Miro",
    "Petyr",
    "Deyan",
    "Rosen",
    "Altay"
];
var people = [];
function Person(name, money, gasStation) {
    this.name = name;
    this.money = money;
    this.gasStation = gasStation
    this.cars = [];
}
Person.prototype = {
    constructor: Person,
    buyVinetka: function(nomer, srok, gasStation) {
        var carModel = this.cars[nomer].model;
        var found = gasStation.vinetki.find(x => x.type == carModel && x.srok == srok);
        var foundIndex = gasStation.vinetki.findIndex(x => x == found)
        if (found != undefined && this.money >= found.price) {
            this.cars[nomer].vinetka = found;
            gasStation.vinetki.splice(foundIndex, 1);
            gasStation.oborotZaDenq += found.price;
            this.money -= found.price;
            console.log("Uspeshan pokupka!")
        } else {
            console.log("Nqma dostatychno pari ili nqma takava vinetka v benzinostanciqta!")
        }
    },
    buyVinetkiZaVsichki: function(srok, gasStation) {
        for (let index = 0; index < this.cars.length; index++) {
            var carModel = this.cars[index].model;
            var found = gasStation.vinetki.find((x, index) => x.type == carModel && x.srok == srok);
            var foundIndex = gasStation.vinetki.findIndex(x => x == found);
            if (found != undefined && this.money >= found.price) {
                this.cars[index].vinetka = found;
                gasStation.vinetki.splice(foundIndex, 1);
                gasStation.oborotZaDenq += found.price;
                this.money -= found.price;
                console.log("Uspeshan pokupka!")

            } else {
                console.log("Nqma dostatychno pari");
                break;
            }
        }
    }
}

function Car(model, vinetka, owner) {
    this.model = model,
    this.vinetka = vinetka;
    this.owner = owner
}

function Vinetka(dataNaIzdavane, srok, type) {
    var colors = ["blue", "red", "green"];
    this.dataNaIzdavane = dataNaIzdavane;
    this.srok = srok;
    this.type = type;
    if (type == "car") {
        var dnevnaCena = 5;
        this.color = colors[0];
    }
    if (type == "truck") {
        var dnevnaCena = 7;
        this.color = colors[1];
    }
    if (type == "autobus") {
        var dnevnaCena = 9;
        this.color = colors[2];
    }
    if (srok == "dnevna") {
        this.price = dnevnaCena;
    }
    if (srok == "mesechna") {
        this.price = dnevnaCena * 10;
    }
    if (srok == "godishna") {
        this.price = dnevnaCena * 60;
    }
}
Vinetka.prototype = {
    constructor: Vinetka,
    zalepi: function() {
        console.log("Zalepvam se za stykloto")
        if (this.type == "car") {
            console.log("Otne 5 secundi")
        }
        if (this.type == "truck") {
            console.log("Otne 10 secundi")
        }
        if (this.type == "autobus") {
            console.log("Otne 20 secundi")
        }
    },
    cena: function() {
        console.log(this.price);
    }
}
function GasStation(oborotZaDenq) {
    this.oborotZaDenq = oborotZaDenq;
    this.vinetki = [];
    for (let index = 0; index < 1000; index++) {
        var type = typeCar[Math.floor(Math.random() * typeCar.length)];
        var srok = srokVinetka[Math.floor(Math.random() * srokVinetka.length)];
        this.vinetki.push(new Vinetka(new Date(), srok, type));
    }
    this.vinetki.sort((a, b) => a.price - b.price);
}
GasStation.prototype = {
    constructor: GasStation,
    sellVinetka: function(type, srok, buyer) {
        var found = this.vinetki.find(x => x.type == type && x.srok == srok);
        var foundIndex = this.vinetki.findIndex(x => x == found);
        if (found != undefined && buyer.money >= found.price) {
            buyer.money -= found.price;
            this.oborotZaDenq += found.price;
            this.vinetki.splice(foundIndex, 1);
            console.log(buyer.name + " si kupi vinetka za " + found.type + ", srok : " + found.srok);
        } else {
            console.log("Neuspeshna prodajba!")
        }
    },
    showAllVinetki : function(){
      this.vinetki.sort((a, b) => a.price - b.price);
      this.vinetki.forEach(x=> console.log(x));
    }
}
var omv = new GasStation(1000);

// Create people
for (let index = 0; index < 20; index++) {
    var personName = namesPerson[Math.floor(Math.random() * namesPerson.length)];
    var personMoney = Math.floor(Math.random() * 50000 + 50);
    people.push(new Person(personName, personMoney, omv));
}

// Create cars
for (let index = 0; index < people.length; index++) {
    for (let ind2 = 0; ind2 < 10; ind2++) {
        var modelCar = typeCar[Math.floor(Math.random() * typeCar.length)];
        people[index].cars.push(new Car(modelCar, null, people[index]))
    }
};

// Buy vinetki for people's car
for (let index = 0; index < people.length; index++) {
    if (index % 3 == 0) {
        for (let ind2 = 0; ind2 < 5; ind2++) {
            var randomCar = Math.floor(Math.random() * people[index].cars.length);
            if (people[index].cars[randomCar].vinetka == null) {
                var randomSrok = srokVinetka[Math.floor(Math.random() * srokVinetka.length)]
                people[index].buyVinetka(randomCar, randomSrok, omv)
            } else {
                ind2--;
            }
        }
    } else {
        var randomSrok = srokVinetka[Math.floor(Math.random() * srokVinetka.length)]
        people[index].buyVinetkiZaVsichki(randomSrok, omv)
    }
};
//Show info about person's cars and their vinetki
for(let index = 0 ; index < people.length; index++){
  console.log(people[index].name + " ima " + people[index].money + " lv." );
  var countKoli = 0;
  var countKoliBezVinetki = 0
  for(let ind2 = 0; ind2 < people[index].cars.length; ind2++){
    if(people[index].cars[ind2].vinetka == null){
      countKoli++;
      countKoliBezVinetki++;
    } else {
      countKoli++;
    }
  }
  console.log("Kara " + countKoli + " avtomobila, ot tqh " + countKoliBezVinetki +  " sa bez vinetki");
  countKoli = 0;
  countKoliBezVinetki = 0;
};

//Show All vinetki in GasStation sorted by Price
// omv.showAllVinetki()

//Show people with trucks without vinetka
for(let index = 0 ; index < people.length; index++){
    for(let ind2 = 0; ind2 < people[index].cars.length; ind2++){
      if(people[index].cars[ind2].model == "truck" && people[index].cars[ind2].vinetka == null){
        console.log(people[index].name + " ima kamion bez vinetka");
      }
    }
}
