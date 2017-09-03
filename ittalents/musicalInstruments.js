function Shop(name) {
    this.name = name;
    this.produkti = [];
    this.kasa = 0;
    this.prodadeni = [];
}
Shop.prototype = {
    constructor: Shop,
    addProduct: function(instrument, broi) {
        if (this.produkti.length == 0) {
            this.produkti.push(instrument)
            this.produkti[0].nalichnost = broi;
        } else {
            for (let index = 0; index < this.produkti.length; index++) {
                if (this.produkti[index].name == instrument.name) {
                    this.produkti[index].nalichnost += broi;
                    break;
                }
                if (this.produkti.length - 1 == index) {
                    this.produkti.push(instrument);
                    this.produkti[index + 1].nalichnost += broi;
                    break;
                }
            }
        }
    },
    sellProduct(name, kolichestvo) {
        for (let index = 0; index < this.produkti.length; index++) {
            if (this.produkti[index].name == name) {
                if (kolichestvo <= this.produkti[index].nalichnost) {
                    var cena = kolichestvo * this.produkti[index].cena;
                    this.kasa += cena
                    this.produkti[index].nalichnost -= kolichestvo;
                    console.log("Uspeshno zakupihte produkt " + this.produkti[index].name + " ,kolichestvo " + kolichestvo + ". Shte vi struva " + cena + " lv.")
                    if (this.prodadeni.length == 0) {
                        this.prodadeni.push(this.produkti[index]);
                        this.prodadeni[0].prodajbiKolichestvo = kolichestvo;
                    } else {
                        for (let ind = 0; ind < this.prodadeni.length; ind++) {
                            if (this.prodadeni[ind].name == name) {
                                this.prodadeni[ind].prodajbiKolichestvo += kolichestvo;
                                break;
                            }
                            if (ind == this.prodadeni.length - 1) {
                                this.prodadeni.push(this.produkti[index]);
                                this.prodadeni[ind + 1].prodajbiKolichestvo = kolichestvo;
                                break;
                            }
                        }
                    }
                } else {
                    console.log("Nqma dostatychno broiki ot tozi produkt!")
                }
            }
        }
    },
    katalogVid: function() {
        console.log("Katalog na produktite po vid")
        this.produkti.sort((a, b) => a.vid > b.vid);
        for (let index = 0; index < this.produkti.length; index++) {
            console.log(this.produkti[index].vid + " " + this.produkti[index].name + " " + this.produkti[index].nalichnost)
        }
    },
    katalogName: function() {
        console.log("Katalog na produktite po ime")
        this.produkti.sort((a, b) => a.name > b.name);
        for (let index = 0; index < this.produkti.length; index++) {
            console.log(this.produkti[index].name + " " + this.produkti[index].vid + " " + this.produkti[index].nalichnost)
        }
    },
    katalogCena: function(nachin) {
        if (nachin == "up") {
            console.log("Katalog na produktite po cena vyzhodqshto")
            this.produkti.sort((a, b) => a.cena - b.cena);
            for (let index = 0; index < this.produkti.length; index++) {
                console.log(this.produkti[index].cena + " " + this.produkti[index].name + " " + this.produkti[index].vid + " " + this.produkti[index].nalichnost)
            }
        }
        if (nachin == "down") {
            console.log("Katalog na produktite po cena nizhodqshto")
            this.produkti.sort((a, b) => b.cena - a.cena);
            for (let index = 0; index < this.produkti.length; index++) {
                console.log(this.produkti[index].cena + " " + this.produkti[index].name + " " + this.produkti[index].vid + " " + this.produkti[index].nalichnost)
            }
        }
    },
    prodadeniSpravka: function() {
        this.prodadeni.sort((a, b) => a.prodajbiKolichestvo - b.prodajbiKolichestvo);
        this.prodadeni.forEach(x => console.log(x.name + " " + x.prodajbiKolichestvo))
    },
    naiProdavan: function() {
        var prodavan = this.prodadeni.reduce((a, b) => (a.prodajbiKolichestvo > b.prodajbiKolichestvo)
            ? a.prodajbiKolichestvo
            : b.prodajbiKolichestvo);
        // var dve = Math.max.apply(null, this.prodadeni.map(o=> o.prodajbiKolichestvo))
        var nameProdavan = this.prodadeni.find(x => x.prodajbiKolichestvo == prodavan)
        console.log(nameProdavan.name + " " + prodavan)
    },
    sumaProdajbi: function() {
        console.log(this.kasa)
    },
    naiNeProdavan: function() {
        var neprodavan = this.prodadeni.reduce((a, b) => (a.prodajbiKolichestvo < b.prodajbiKolichestvo)
            ? a.prodajbiKolichestvo
            : b.prodajbiKolichestvo);
        var nameProdavan = this.prodadeni.find(x => x.prodajbiKolichestvo == neprodavan)
        console.log(nameProdavan.name + " " + neprodavan)
    },
    vidProdavani: function() {
        this.vidove = [];
        for (let index = 0; index < this.prodadeni.length; index++) {
            if (this.vidove.length == 0) {
                this.vidove[0] = [];
                this.vidove[0].push(this.prodadeni[index])
            } else {
                for (let ind = 0; ind < this.vidove.length; ind++) {
                    if (this.vidove[ind][0]) {
                        if (this.vidove[ind][0].vid == this.prodadeni[index].vid) {
                            this.vidove[ind].push(this.prodadeni[index]);
                            break;
                        }
                    } else {
                        this.vidove[ind].push(this.prodadeni[index]);
                        break;
                    }
                    if (ind == this.vidove.length - 1) {
                        this.vidove[ind + 1] = [];
                    }
                }
            }
        }
        var kolko = 0;
        var max = 0;
        var vid = ""
        var vid2 = ""
        for (let i = 0; i < this.vidove.length; i++) {
            for (let j = 0; j < this.vidove[i].length; j++) {
                kolko += this.vidove[i][j].prodajbiKolichestvo;
                vid = this.vidove[i][j].vid
            }
            if (max < kolko) {
                max = kolko;
                vid2 = vid
            }
            kolko = 0
            vid = '';
        }
        console.log(vid2 + " " + max)
        console.log(this.vidove)
    },
    prihodi : function(){
      console.log(this.vidove)
      var kolko = 0;
      var max = 0;
      var vid = ""
      var vid2 = ""
      for (let i = 0; i < this.vidove.length; i++) {
          for (let j = 0; j < this.vidove[i].length; j++) {
              kolko += this.vidove[i][j].prodajbiKolichestvo * this.vidove[i][j].cena;
              vid = this.vidove[i][j].vid
          }
          if (max < kolko) {
              max = kolko;
              vid2 = vid
          }
          kolko = 0
          vid = '';
      }
      console.log(vid2 + " " + max)
    }
}
function Instrument(vid, name, cena) {
    this.vid = vid;
    this.name = name;
    this.cena = cena;
    this.nalichnost = 0;
}
var shirokaLyka = new Shop("Shiroka Lyka Shop");
var cigulka = new Instrument("strunen", "cigulka", 100);
var viola = new Instrument("strunen", "viola", 150);
var kontrabas = new Instrument("strunen", "kontrabas", 66);
var arfa = new Instrument("strunen", "arfa", 140);
var kitara = new Instrument("strunen", "kitara", 3389);
var barabani = new Instrument("udaren", "barabani", 250);
var typan = new Instrument("udaren", "typan", 250);
var trompet = new Instrument("duhov", "trompet", 25);
var trombon = new Instrument("duhov", "trombon", 55);
var saksofon = new Instrument("duhov", "saksofon", 25);

shirokaLyka.addProduct(kitara, 15);
shirokaLyka.addProduct(cigulka, 5);
shirokaLyka.addProduct(viola, 15);
shirokaLyka.addProduct(arfa, 5);
shirokaLyka.addProduct(cigulka, 7);
shirokaLyka.addProduct(cigulka, 4);
shirokaLyka.addProduct(barabani, 50);
shirokaLyka.addProduct(kontrabas, 5);
shirokaLyka.addProduct(trompet, 1);
shirokaLyka.addProduct(typan, 4);
shirokaLyka.addProduct(saksofon, 11);
shirokaLyka.addProduct(trombon, 18);
shirokaLyka.sellProduct("kitara", 3)
shirokaLyka.sellProduct("kitara", 6)
shirokaLyka.sellProduct("trombon", 1)
shirokaLyka.sellProduct("typan", 4)
shirokaLyka.sellProduct("barabani", 1)
shirokaLyka.vidProdavani();
shirokaLyka.prihodi();
