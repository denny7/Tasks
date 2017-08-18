function Library(name) {
    this.name = name;
    this.knigi = [];
    this.spisaniya = [];
    this.uchebnici = [];
}
Library.prototype = {
    constructor: Library,
    dobaviKniga: function(kniga) {
        if (kniga instanceof Book) {
            if (this.knigi.length == 0) {
                this.knigi[0] = [];
                this.knigi[0].push(kniga);
            } else {
                for (let index = 0; index < this.knigi.length; index++) {
                    if (this.knigi[index][0].janr == kniga.janr) {
                        this.knigi[index].push(kniga)
                        break;
                    }
                    if (index == this.knigi.length - 1) {
                        this.knigi[index + 1] = [];
                        this.knigi[index + 1].push(kniga);
                        break;
                    }
                }
            }
        } else {
            console.log("Nqma takava kniga");
        }
    },
    dobaviSpisanie: function(spisanie) {
        if (spisanie instanceof Spisanie) {
            if (this.spisaniya.length == 0) {
                this.spisaniya[0] = [];
                this.spisaniya[0].push(spisanie);
            } else {
                for (let index = 0; index < this.spisaniya.length; index++) {
                    if (this.spisaniya[index][0].kategoriya == spisanie.kategoriya) {
                        this.spisaniya[index].push(spisanie)
                        break;
                    }
                    if (index == this.spisaniya.length - 1) {
                        this.spisaniya[index + 1] = [];
                        this.spisaniya[index + 1].push(spisanie);
                        break;
                    }

                }
            }
        } else {
            console.log("Nqma takova spisanie");
        }
    },

    dobaviUchebnik: function(uchebnik) {
        if (uchebnik instanceof Uchebnik) {
            if (this.uchebnici.length == 0) {
                this.uchebnici[0] = [];
                this.uchebnici[0].push(uchebnik);
            } else {
                for (let index = 0; index < this.uchebnici.length; index++) {
                    if (this.uchebnici[index][0].tema == uchebnik.tema) {
                        this.uchebnici[index].push(uchebnik)
                        break;
                    }
                    if (index == this.uchebnici.length - 1) {
                        this.uchebnici[index + 1] = [];
                        this.uchebnici[index + 1].push(uchebnik);
                        break;
                    }

                }
            }
        } else {
            console.log("Nqma takyv uchebnik");
        }
    },
    pokajiKatalog: function(kakvoDaPokaja) {
        if (kakvoDaPokaja == "knigi") {
            for (let index = 0; index < this.knigi.length; index++) {
                this.knigi[index].sort(function(a, b) {
                    return b.dataNaIzdavane - a.dataNaIzdavane;
                })
            }
            console.log(this.knigi);
        }
        if (kakvoDaPokaja == "spisaniya") {
            for (let index = 0; index < this.spisaniya.length; index++) {
                this.spisaniya[index].sort(function(a, b) {
                    return a.ime > b.ime;
                })
                this.spisaniya[index].sort(function(a, b) {
                    if (a.ime == b.ime) {
                        return a.nomerNaBroi - b.nomerNaBroi;
                    }
                });
            }
            console.log(this.spisaniya)
        }
        if (kakvoDaPokaja == "uchebnici") {
            for (let index = 0; index < this.uchebnici.length; index++) {
                this.uchebnici[index].sort(function(a, b) {
                    return a.ime > b.ime;
                });
            }
            console.log(this.uchebnici);
        }
    },
    reviziya: function() {
      var vzetiChetiva = [];
      console.log("Knigi: ")
        for (let index = 0; index < this.knigi.length; index++) {
            for (let ind2 = 0; ind2 < this.knigi[index].length; ind2++) {
                if (this.knigi[index][ind2].history.vzemane == 0) {
                    console.log(this.knigi[index][ind2].ime)
                } else {
                  vzetiChetiva.push(this.knigi[index][ind2])
                }
            }
        }
        console.log("Uchebnici:");
        for (let index = 0; index < this.uchebnici.length; index++) {
            for (let ind2 = 0; ind2 < this.uchebnici[index].length; ind2++) {
                if (this.uchebnici[index][ind2].history.vzemane == 0) {
                    console.log(this.uchebnici[index][ind2].ime)
                } else {
                  vzetiChetiva.push(this.uchebnici[index][ind2])
                }
            }
        }
        console.log("Spisaniya:")
        for (let index = 0; index < this.spisaniya.length; index++) {
            for (let ind2 = 0; ind2 < this.spisaniya[index].length; ind2++) {
                    console.log(this.spisaniya[index][ind2].ime + ", broi " + this.spisaniya[index][ind2].nomerNaBroi)
            }
        }
        console.log("Vzeti chetiva : ");
        vzetiChetiva.sort(function(a,b){return a.history.vzemane - b.history.vzemane});
        vzetiChetiva.map(x => console.log(x.ime))
    },
}
var biblioteka = new Library("Madanska");
function History() {
    this.vzemane = 0,
    this.vryshtane = 0;
}
function Book(ime, avtor, dataNaIzdavane, izdatelstvo, janr) {
    this.ime = ime;
    this.avtor = avtor;
    this.dataNaIzdavane = dataNaIzdavane;
    this.izdatelstvo = izdatelstvo;
    this.janr = janr;
    this.history = new History();
    this.taksa = 2;
    this.pozvolenoVreme = 5
}
function Spisanie(ime, izdatelstvo, kategoriya, nomerNaBroi, dataNaIzdavane) {
    this.ime = ime;
    this.izdatelstvo = izdatelstvo;
    this.kategoriya = kategoriya;
    this.nomerNaBroi = nomerNaBroi;
    this.dataNaIzdavane = dataNaIzdavane;
}
function Uchebnik(ime, avtor, izdatelstvo, tema) {
    this.ime = ime;
    this.avtor = avtor;
    this.izdatelstvo = izdatelstvo;
    this.tema = tema;
    this.history = new History();
    this.taksa = 3;
    this.pozvolenoVreme = 3

}
function Person(name) {
    this.name = name;
    this.dylji = 0;
    this.vzel = [];
}
Person.prototype = {
    constructor: Person,
    vzemiZaChetene: function(kakvoDaVzema, ot) {
        if (kakvoDaVzema instanceof Spisanie) {
            console.log("Spisanie ama nqma spisanie!")
        }
        if (kakvoDaVzema instanceof Book || kakvoDaVzema instanceof Uchebnik) {
            if (kakvoDaVzema.history.vzemane == 0) {
                this.vzel.push(kakvoDaVzema);
                kakvoDaVzema.history.vzemane = ot;
            } else {
                console.log(kakvoDaVzema + " v momenta ne e nalichno")
            }
        }
    },
    varni: function(kakvoDaVarna, kogaGoVrashtam) {
        var vrashtam = this.vzel.find(index => index = kakvoDaVarna);
        if (vrashtam == undefined) {
            console.log("Ne si vzemal takova neshto");
        } else {
            kakvoDaVarna.history.vryshtane = kogaGoVrashtam;
            if (kakvoDaVarna.history.vryshtane - kakvoDaVarna.history.vzemane <= kakvoDaVarna.pozvolenoVreme) {
                console.log("Plashtammmm " + kakvoDaVarna.taksa)
            } else {
                console.log("Zakysnql sym mamka mu...");
                console.log("Sega plashtam " + (kakvoDaVarna.taksa + ((+ kakvoDaVarna.history.vryshtane - + kakvoDaVarna.history.vzemane - + kakvoDaVarna.pozvolenoVreme) * 0.01 * kakvoDaVarna.taksa)).toFixed(2))
                console.log(((+ kakvoDaVarna.history.vryshtane - + kakvoDaVarna.history.vzemane - + kakvoDaVarna.pozvolenoVreme) * 0.01 * kakvoDaVarna.taksa))
            }
            kakvoDaVarna.history.vzemane = 0;
        }
    }
}
var denny = new Person("Denislav")
var android = new Book('Android', 'Niki', 2015, "web", 'programs')
var js = new Book('JavaScript', 'Niki', 2019, 'NikiProduction', 'programs')
var donKihot = new Book('Don Kihot', 'sancho pansa', 1983, 'Ne sam siguren', 'adventure')
var harryPoter = new Book('Harry Poter', 'onaq', 2011, 'GlobalProduction', 'fantastic')
biblioteka.dobaviKniga(android);
biblioteka.dobaviKniga(js);
biblioteka.dobaviKniga(donKihot);
biblioteka.dobaviKniga(harryPoter);
// biblioteka.pokajiKatalog("knigi")
var english = new Uchebnik("English for for beginers", "Simonova", "Madan Corporation", "lng");
var deutch = new Uchebnik("Deutch", "Hristozova", "Batanci edition", "lng");
var html = new Uchebnik("HTML 5", "Petkov", "W3School", "programming");
var css = new Uchebnik("CSS 3", "Mihaylov", "StachOverflow", "programming");
var math = new Uchebnik("Mathematics", "Kehayov", "Yanovska Masters", "math");
biblioteka.dobaviUchebnik(english);
biblioteka.dobaviUchebnik(deutch);
biblioteka.dobaviUchebnik(html);
biblioteka.dobaviUchebnik(css);
biblioteka.dobaviUchebnik(math);
var natGeo = new Spisanie("Nat Geo", "nz", "nauchni", 5, 2010)
var natGeo2 = new Spisanie("Nat Geo", "nz", "nauchni", 6, 2010)
var natGeo3 = new Spisanie("Nat Geo", "nz", "nauchni", 4, 2010)
var biznes = new Spisanie("Biznes", "nz", "biznes", 1, 2015)
var drugo = new Spisanie("Edno razlichno spisanie", "ne se znae", "biznes", 2, 2010)
biblioteka.dobaviSpisanie(natGeo)
biblioteka.dobaviSpisanie(natGeo2)
biblioteka.dobaviSpisanie(natGeo3)
biblioteka.dobaviSpisanie(biznes)
biblioteka.dobaviSpisanie(drugo)
denny.vzemiZaChetene(html, 1)

denny.vzemiZaChetene(css, 2)
// denny.varni(css, 3);
biblioteka.reviziya()
