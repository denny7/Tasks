var allPeople = {
    vsichkiBerachi: [],
    vsichkiRakidjii: [],
    showVsichkiBerachi: function showVsichkiBerachi() {
        this.berachi = "";
        for (let index in this.vsichkiBerachi) {
            this.berachi += this.vsichkiBerachi[index].name + ",";
        }
        console.log(this.berachi)
    },
    showBestRakidjiq : function showBestRakidjiq(){
      this.best = 0;
      for (let index in this.vsichkiRakidjii) {
        if(+this.best < +this.vsichkiRakidjii[index].svarenoKolichestvo){
          this.best = this.vsichkiRakidjii[index].svarenoKolichestvo;
          this.person = this.vsichkiRakidjii[index].name
        }
      }
      console.log(this.best + " by " + this.person)
    }
}

function Person(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
    if (this.type == "berach") {
        allPeople.vsichkiBerachi.push(this)
    }
    if (this.type == "rakidjiya") {
        allPeople.vsichkiRakidjii.push(this);
    }
}
Person.prototype = {
    constructor: Person,
    beri: function(fruit, kolko, kazan) {
        if (this.type == "berach") {
            if ((fruit instanceof Fruits) && (!isNaN(kolko)) && (kolko > 0) && (kazan instanceof Kazani) && (kazan.fill == null || kazan.fill == fruit.type)) {
                kazan.fill = fruit.type;
                kazan.kolichestvo += kolko;
                this.kakvoBere = fruit;
                kazan.berach.push(this.name);
                console.log(this.name + " nabra " + kolko + " kg " + fruit.type + " v kazan " + kazan.nomer + ". Sega v kazan " + kazan.nomer + " ima " + kazan.kolichestvo + " kg.");
            } else {
                console.log("Ne otgovarq na usloviqta!")
            }
        }
    },
    vari: function(kazan) {
        if (this.type == "rakidjiya" && kazan.kolichestvo >= 10) {
            this.kakvoVari = kazan.fill;
            this.svarenoKolichestvo = (kazan.kolichestvo * Math.random()).toFixed(2);
            if (kazan.fill == "slivi") {
                rakiya.slivova += + this.svarenoKolichestvo;
            }
            if (kazan.fill == "kaisii") {
                rakiya.kaisieva += + this.svarenoKolichestvo;
            }
            if (kazan.fill == "grozde") {
                rakiya.grozdova += + this.svarenoKolichestvo;
            }
            this.allSvareno += + this.svarenoKolichestvo;
            this.allSvareno.toFixed(2)
            kazan.fill = null;
            kazan.kolichestvo = 0;
            kazan.berach = [];
            console.log(this.name + " svari " + this.svarenoKolichestvo + "l rakiya ot " + this.kakvoVari);
        } else {
            console.log(this.name + " ili ne e rakidjiya ili kazana ne e gotov za varene!")
        }
    }
}
function Kazani(nomer) {
    this.allSvareno = 0;
    this.nomer = nomer
    this.fill = null;
    this.kolichestvo = 0;
    this.berach = [];
}
Kazani.prototype.statistic = function() {
    if (this.fill !== null) {
        console.log("Kazan " + this.nomer + " ima " + this.kolichestvo + "kg " + this.fill + " nabrani ot " + this.berach)
    } else {
        console.log("Kazan " + this.nomer + " e prazen!")
    }
}
function Fruits(type) {
    this.type = type;
}
var rakiya = {
    slivova: 0,
    grozdova: 0,
    kaisieva: 0
}
var denny = new Person("Denislav", 22, "berach");
var ico = new Person("Hristo", 23, "berach");
var ivo = new Person("Ivaylo", 23, "berach");
var niki = new Person("Nikolina", 22, "rakidjiya")
var samy = new Person("Samy", 22, "rakidjiya")
var kazan1 = new Kazani(1);
var kazan2 = new Kazani(2);
var kazan3 = new Kazani(3);
var kazan4 = new Kazani(4);
var kazan5 = new Kazani(5);
var kaisii = new Fruits("kaisii");
var slivi = new Fruits("slivi");
var grozde = new Fruits("grozde");
denny.beri(slivi, 20, kazan1)
ivo.beri(grozde, 1, kazan5)
denny.beri(kaisii, 15, kazan2);
ico.beri(slivi, 10, kazan1);
ivo.beri(kaisii, 50, kazan1);
kazan1.statistic();
kazan2.statistic();
kazan3.statistic();
kazan4.statistic();
kazan5.statistic();
niki.vari(kazan1);
niki.vari(kazan2)
denny.vari(kazan1)
denny.beri(grozde, 20, kazan1)
samy.vari(kazan1)
console.log(kazan1.allSvareno)
allPeople.showVsichkiBerachi()
console.log(allPeople.vsichkiRakidjii)
allPeople.showBestRakidjiq()
console.log(rakiya);
