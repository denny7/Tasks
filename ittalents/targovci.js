var names = [
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
var productsNames = [
    "sudjuk",
    "nadenica",
    "mlqko",
    "bira",
    "fystyci",
    "bademi",
    "rakiya",
    "voda",
    "fanta"
];
var dostavchici = [];
var dostavchikType = "";
var obekti = [];
var obektiType = "";

function Tyrgovec(type, name, adress, capital) {
    this.type = type;
    this.plateniDanyci = 0;
    if (type == "ambulanten") {
        this.dostavchici = null;
    }
    if (type == "et") {
        this.dostavchici = [];
        this.obekti = null;
    }
    if (type == "veriga") {
        this.dostavchici = [];
        this.obekti = [];
    }
    this.name = name;
    this.adress = adress;
    this.capital = capital;
    this.prodadeniProdukti = 0;
}
Tyrgovec.prototype = {
    constructor: Tyrgovec,
    addDostavchik: function(dostavchik) {
        if (this.type == "ambulanten" && dostavchik.type == "drebno") {
            this.dostavchici = dostavchik;
        }
        if (this.type == "et" && dostavchik.type == "drebno" && this.dostavchici.length < 5) {
            this.dostavchici.push(dostavchik);
        }
        if (this.type == "veriga" && this.dostavchici.length <= 15) {
            this.dostavchici.push(dostavchik);
        }
    },
    addObekt: function(obekt) {
        if (this.type == "et" && (obekt.type == "budka" || obekt.type == "sergiq")) {
            this.obekti = obekt;
        }
        if (this.type == "veriga" && (obekt.type == "budka" || obekt.type == "magazin")) {
            if (this.obekti.length < 10) {
                this.obekti.push(obekt);
            }
        }
    },
    praviPorychka: function(dostavchik, money, obekt) {
        if (this.capital / 2 >= money) {
            var suma = 0;
            var produkti = [];
            do {
                var pr = new Product(productsNames[Math.floor(Math.random() * productsNames.length)]);
                if (suma + pr.price <= money) {
                    suma += pr.price;
                    obekt.products.push(pr);
                    produkti.push(pr);
                }
            } while (suma < money - 5);
            if (dostavchik.discount != undefined) {
                suma -= suma * dostavchik.discount;
            }
            this.capital -= suma;
            console.log(this.name + " plati " + suma + " lv.")
            produkti.sort((a, b) => a.cena - b.cena).map(x => x.name + x.price);
            obekt.products.sort((a, b) => a.cena - b.cena).map(x => console.log(x.name + x.price));
            suma = 0;
        }
    },
    priberiPechalba: function() {
        var pechalba = 0;
        var suma = 0;
        if (this.type == "et" && this.obekti != null) {
            if (this.obekti.products.length > 0) {
                for (let index = 0; index < this.obekti.products.length; index++) {
                    var randomProdadenaStoka = Math.random();
                    if (randomProdadenaStoka < 0.5) {
                        this.prodadeniProdukti++;
                        pechalba += this.obekti.products[index].price * 1.3 - this.obekti.products[index].price;
                        suma += this.obekti.products[index].price * 1.3
                        this.obekti.products.splice(index, 1);
                        index--;
                    }
                }
            }

        }
        if (this.type == "veriga" && this.obekti.length > 0) {
            for (let index = 0; index < this.obekti.length; index++) {
                if (this.obekti[index].products.length > 0) {
                    for (let ind2 = 0; ind2 < this.obekti[index].products.length; ind2++) {
                        var randomProdadenaStoka = Math.random();
                        if (randomProdadenaStoka < 0.5) {
                            this.prodadeniProdukti++;
                            pechalba += this.obekti[index].products[ind2].price * 1.3 - this.obekti[index].products[ind2].price;
                            suma += this.obekti[index].products[ind2].price * 1.3
                            this.obekti[index].products.splice(ind2, 1);
                            ind2--;
                        }
                    }
                }
            }
        }
        this.capital += suma;
        console.log(this.name + " pribra pechalba na stoinost " + pechalba + "lv.")
        pechalba = 0;
        suma = 0;
    },
    platiDanyk: function(nomer) {
        if (this.type = "et") {
            if (this.capital >= this.obekti.danyk) {
                this.capital -= this.obekti.danyk;
                this.plateniDanyci += this.obekti.danyk
                console.log(this.name + " plati danyk na stoinost " + this.obekti.danyk);
                this.obekti.danyk = 0

            }
        }
        if (this.type = "veriga") {
            if (nomer < this.obekti.length && this.capital >= this.obekti[nomer].danyk) {
                this.capital -= this.obekti[nomer].danyk;
                this.plateniDanyci += this.obekti[nomer].danyk;
                console.log(this.name + " plati danyk na stoinost " + this.obekti[nomer].danyk);
            }
        }
    }
}

function Obekt(type, adress, rabotnoVreme) {
    if (type == "sergiq") {
        this.plosht = Math.floor(Math.random() * 8 + 2);
        this.danyk = 50;
    }
    if (type == "magazin") {
        this.plosht = Math.floor(Math.random() * 90 + 10);
        this.danyk = 150;
    }
    if (type == "budka") {
        this.plosht = Math.floor(Math.random() * 2 + 4);
        this.danyk = 50;
    }
    this.adress = adress;
    this.type = type;
    this.rabotnoVreme = rabotnoVreme;
    this.products = [];

}

function Dostavchik(type, name, adress, rabotnoVreme) {
    this.name = name;
    this.adress = adress;
    this.rabotnoVreme = rabotnoVreme;
    this.type = type;
    if (type == "edro") {
        this.discount = 0.15;
    }
}

function Product(name) {
    this.name = name;
    this.price = Math.floor(Math.random() * 10 + 5);
}

function AllTyrgovci() {
    this.all = [];
}
AllTyrgovci.prototype = {
    constructor: AllTyrgovci,
    dobaviTyrgovec: function(tyrgovec) {
        this.all.push(tyrgovec);
    },
    tyrgovskaDeinost: function() {
        var dostavchik = null;
        for (let index = 0; index < this.all.length; index++) {
            if (this.all[index].type == "ambulanten") {
                dostavchik = this.all[index].dostavchici;
            } else {
                dostavchik = this.all[index].dostavchici[Math.floor(Math.random() * this.all[index].dostavchici.length)];
            }
            if (this.all[index].type == "et") {
                this.all[index].praviPorychka(dostavchik, 50, this.all[index].obekti)
            }
            if (this.all[index].type == "veriga") {
                for (let ind2 = 0; ind2 < this.all[index].obekti.length; ind2++) {
                    this.all[index].praviPorychka(dostavchik, 50, this.all[index].obekti[ind2])
                }
            }
        }
        this.all.forEach(x => x.priberiPechalba());
        for (let index1 = 0; index1 < this.all.length; index1++) {
            if (this.all[index1].type == "et") {
                this.all[index1].platiDanyk();
                continue;
            }
            if (this.all[index1].type == "veriga") {
                this.all[index1].obekti.forEach((x, index) => this.all[index1].platiDanyk(index))
                continue;
            }
        }
        this.all.map(x => console.log(x.name + " - " + x.capital));
        this.all.sort((a, b) => b.prodadeniProdukti - a.prodadeniProdukti);
        console.log(this.all[0].name + " - " + this.all[0].prodadeniProdukti)
        this.all.sort((a, b) => b.plateniDanyci - a.plateniDanyci);
        console.log(this.all[0].name + " - " + this.all[0].plateniDanyci)
    }
}
var vsichkiTyrgovci = new AllTyrgovci()
// Syzdavam 10 dostavchika
for (let index = 0; index < 10; index++) {
    if (Math.random() < 0.5) {
        dostavchikType = "drebno"
    } else {
        dostavchikType = "edro"
    }
    var name = names[Math.floor(Math.random() * names.length)]
    dostavchici.push(new Dostavchik(dostavchikType, name, "Sofia", "Vseki den"))
}
var dost1 = new Dostavchik("drebno", "Kynyo", "Sofia", "Vseki den")
var dost2 = new Dostavchik("edro", "Penyo", "Sofia", "Vseki den")
//Syzdavam 20 tyrgovski obekta
for (let index = 0; index < 20; index++) {
    var obektType = '';
    if (Math.random() < 0.33) {
        obektType = "sergiq"
    }
    if (Math.random() <= 0.66) {
        obektType = "magazin"
    }
    if (Math.random() > 0.66) {
        obektType = "budka"
    }
    obekti.push(new Obekt(obektType, "Sofia", "prez den"))
}
var ambulantenTyrgovec = new Tyrgovec("ambulanten", "Georgi", "Sofia", "100");
var veriga = new Tyrgovec("veriga", "Dimo", "Sofia", "3000");
var et = new Tyrgovec("et", "Misho", "Sofia", "500");
et.addDostavchik(dost1);
veriga.addDostavchik(dost2);
do {
    obekt = obekti[Math.floor(Math.random() * obekti.length)];
    et.addObekt(obekt);
} while (et.obekti == null);

do {
    obekt = obekti[Math.floor(Math.random() * obekti.length)];
    veriga.addObekt(obekt);
} while (veriga.obekti.length < 10);

vsichkiTyrgovci.dobaviTyrgovec(ambulantenTyrgovec);
vsichkiTyrgovci.dobaviTyrgovec(veriga);
vsichkiTyrgovci.dobaviTyrgovec(et);
et.praviPorychka(et.dostavchici, 50, et.obekti)
vsichkiTyrgovci.tyrgovskaDeinost();
