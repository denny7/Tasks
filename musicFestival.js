function Festival(name,koga,kyde) {
    this.name = name;
    this.grupi = [];
    this.nachalo = 0;
    this.krai = 0
    this.koga = koga;
    this.kyde = kyde;
}
Festival.prototype = {
    constructor: Festival,
    addGrupa: function(grupa) {
        if (grupa instanceof Grupa) {
            this.grupi.push(grupa);
            grupa.makePrestoi();
        } else {
            console.log("Nqma takava grupa")
        }
    },
    showProgram: function() {
      console.log(this.name + " shte se provede na " + this.koga + " v " + this.kyde)
        for (let index = 0; index < this.grupi.length; index++) {
            console.log(this.grupi[index].name + " izliza v " +  this.nachalo)
            for (var col = 0; col < this.grupi[index].pesni.length; col++) {
                if (this.grupi[index].vokalist) {
                    console.log("Pesen : " + this.grupi[index].pesni[col].zaglavie)
                    console.log(this.grupi[index].pesni[col].tekst)
                } else {
                    console.log(this.grupi[index].pesni[col].zaglavie)
                    console.log("Muzikantite sa trepach!")
                }
            }
            console.log("Grupata ostava do " + (this.grupi[index].prestoi + this.nachalo));
            this.nachalo = this.grupi[index].prestoi + 1;
            console.log("--------------------------------")
        }
    }
}
var festival = new Festival("Muzikalen Festival Summer 2017","22.08","Sunny Beach");
function Grupa(name) {
    this.name = name;
    this.muzikanti = [];
    this.pesni = [];
    this.prestoi = 2;
    for (var index = 0; index < this.pesni.length; index++) {
        this.prestoi += this.pesni[index].prodyljitelnost;
    }
}
Grupa.prototype = {
    constructor: Grupa,
    makePrestoi: function() {
        for (var index = 0; index < this.pesni.length; index++) {
            this.prestoi += this.pesni[index].prodyljitelnost;
        }
    }
}
function Muzikant(name, type, grupa, instrument) {
    this.name = name;
    this.type = type;
    if (type == "muzikant") {
        this.instrument = instrument
    }
    if (type == "vokalist") {
        grupa.vokalist = true;
    }
    if (grupa instanceof Grupa) {
        grupa.muzikanti.push(this);
    }
}
function Pesen(zaglavie, tekst, grupa, prodyljitelnost) {
    this.zaglavie = zaglavie;
    this.tekst = tekst;
    if (grupa instanceof Grupa) {
        grupa.pesni.push(this);
    }
    this.prodyljitelnost = prodyljitelnost
}

var kukuBend = new Grupa("Ku Ku Bend");
var gymzata = new Muzikant("Gymzata", "muzikant", kukuBend, "saksofon")
var evgeni = new Muzikant("Evgeni Dimitrov-Maistora", "muzikant", kukuBend, "piano")
var godji = new Muzikant("Godji", "muzikant", kukuBend, "kitara")
var slavi = new Muzikant("Slavi Trifonov", "vokalist", kukuBend);
var elaEla = new Pesen("Ela ela", "Ela, ela ne si jena...", kukuBend, 5);
var studioX = new Pesen("Studio X", "Kopeleta gadni bqhme vsichkite do edin", kukuBend, 3);
var trakashtiKokakli = new Grupa("Trakashti kokali");
var ludiya = new Muzikant("Crazy Max","muzikant",trakashtiKokakli,"arfa");
var prekalyavash = new Pesen("Prekalyavash mnogo","Ne i znam teksta",trakashtiKokakli,4)
var ela = new Pesen("Ela i si vzemi","Znam vsichkite ti shemi",trakashtiKokakli,6)
var otivaiSi = new Pesen("Otivai si ","Vednag trygvai si",trakashtiKokakli,3)

festival.addGrupa(kukuBend);
festival.addGrupa(trakashtiKokakli)
festival.showProgram()
// console.log(kukuBend)
