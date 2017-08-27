var grajdani = [
    [], [], []
]
function Sud(name, adress) {
    this.name = name;
    this.adress = adress;
    this.uristi = [
        [], [], [], []
    ];
    this.dela = [];
}
Sud.prototype = {
    constructor: Sud,
    court: function() {
        for (let index = 0; index < this.uristi.length; index++) {
            for (let ind2 = 0; ind2 < this.uristi[index].length; ind2++) {
                console.log(this.uristi[index][ind2].name + " - " + this.uristi[index][ind2].broiDela);
            }
        }
    }
}
function Urist(name, dlyjnost, staj, broiDela) {
    if (dlyjnost == "sydiq" && staj >= 5) {
        this.name = name;
        this.dlyjnost = dlyjnost;
        this.staj = staj;
        this.broiDela = broiDela;
        tyrnovo.uristi[0].push(this);
    }
    if (dlyjnost == "prokuror" && staj >= 10) {
        this.name = name;
        this.dlyjnost = dlyjnost;
        this.staj = staj;
        this.broiDela = broiDela;
        tyrnovo.uristi[1].push(this);
    }
    if (dlyjnost == "advokat" && broiDela >= 10) {
        this.name = name;
        this.dlyjnost = dlyjnost;
        this.staj = staj;
        this.broiDela = broiDela;
        this.zaet = false;
        tyrnovo.uristi[2].push(this);
    }
    if (dlyjnost == "zasedatel") {
        this.name = name;
        this.dlyjnost = dlyjnost;
        this.staj = staj;
        this.broiDela = broiDela;
        tyrnovo.uristi[3].push(this);
    }
}
Urist.prototype = {
    constructor: Urist,
    pitaiVypros: function(kogo) {
        console.log(this.name + " zadade vypros na " + kogo)
    },
    vodiZapiska: function(otKogo) {
        console.log(this.name + " vodi zapiski ot " + Otkogo)
    }
}
function Grajdanin(name, adress, age, type) {
    this.name = name;
    this.adress = adress;
    this.age = age;
    if (type == "obvinqem" || type == "obvinitel") {
        this.advokati = new Array(2);
    }
    if (type == "obvinqem") {
        grajdani[0].push(this);
    }
    if (type == "obvinitel") {
        grajdani[1].push(this);
    }
    if (type == "svidetel") {
        grajdani[2].push(this);
    }
}
function Delo(type, sud) {
    sud.dela.push(this);
    this.type = type;
    this.sydiq = tyrnovo.uristi[0][Math.floor(Math.random() * sud.uristi[0].length)];
    this.sydiq.broiDela++;
    this.obvinqem = grajdani[0][Math.floor(Math.random() * grajdani[0].length)];
    for (let index = 0; index < this.obvinqem.advokati.length; index++) {
        let advokat;
        do {
            advokat = sud.uristi[2][Math.floor(Math.random() * sud.uristi[2].length)]
        } while (advokat.zaet == true);
        if (this.obvinqem.advokati[0] != undefined) {
            if (this.obvinqem.advokati.find(x => x != undefined && x.name == advokat.name)) {
                index--;
            } else {
                this.obvinqem.advokati[index] = advokat;
                this.obvinqem.advokati[index].broiDela++;
                this.obvinqem.advokati[index].zaet = true;
            }
        } else {
            this.obvinqem.advokati[index] = advokat;
            this.obvinqem.advokati[index].broiDela++;
            this.obvinqem.advokati[index].zaet = true;
        }
    }
    if (type == "grajdansko") {
        this.zasedateli = new Array(3);
        for (let index = 0; index < this.zasedateli.length; index++) {
            var zasedatel = sud.uristi[3][Math.floor(Math.random() * sud.uristi[3].length)];
            if (this.zasedateli[0] != undefined) {
                if (this.zasedateli.find(x => x != undefined && x.name == zasedatel.name)) {
                    index--;
                } else {
                    this.zasedateli[index] = zasedatel;
                    this.zasedateli[index].broiDela++;
                }
            } else {
                this.zasedateli[index] = zasedatel;
                this.zasedateli[index].broiDela++;
            }
        }
        this.obvinitel = grajdani[1][Math.floor(Math.random() * grajdani[1].length)];
    }
    if (type == "nakazatelno") {
        this.zasedateli = new Array(13);
        for (let index = 0; index < this.zasedateli.length; index++) {
            var zasedatel = sud.uristi[3][Math.floor(Math.random() * sud.uristi[3].length)];
            if (this.zasedateli[0] != undefined) {
                if (this.zasedateli.find(x => x != undefined && x.name == zasedatel.name)) {
                    index--;
                } else {
                    this.zasedateli[index] = zasedatel;
                    this.zasedateli[index].broiDela++;
                }
            } else {
                this.zasedateli[index] = zasedatel;
                this.zasedateli[index].broiDela++;
            }
        }
        this.obvinitel = sud.uristi[1][Math.floor(Math.random() * sud.uristi[1].length)];
        this.obvinitel.broiDela++;
    }
    this.obvinitel.advokati = new Array(2);
    for (let index = 0; index < this.obvinitel.advokati.length; index++) {
        let advokat = '';
        do {
            advokat = sud.uristi[2][Math.floor(Math.random() * sud.uristi[2].length)]
        } while (advokat.zaet == true);
        if (this.obvinitel.advokati[0] != undefined) {
            if (this.obvinitel.advokati.find(x => x != undefined && x.name == advokat.name)) {
                index--;
            } else {
                this.obvinitel.advokati[index] = advokat;
                this.obvinitel.advokati[index].broiDela++;
                this.obvinitel.advokati[index].zaet = true;
            }
        } else {
            this.obvinitel.advokati[index] = advokat;
            this.obvinitel.advokati[index].broiDela++;
            this.obvinitel.advokati[index].zaet = true;
        }
    }
    this.svideteli = new Array(5);
    for (let index = 0; index < this.svideteli.length; index++) {
        var svidetel = grajdani[2][Math.floor(Math.random() * grajdani[2].length)]
        if (this.svideteli[0] != undefined) {
            if (this.svideteli.find(x => x != undefined && x.name == svidetel.name)) {
                index--;
            } else {
                this.svideteli[index] = svidetel;
            }
        } else {
            this.svideteli[index] = svidetel;
        };
    }
    this.obvinitel.advokati.forEach(x => x.zaet = false);
    this.obvinqem.advokati.forEach(x => x.zaet = false);

}
Delo.prototype = {
    constructor: Delo,
    provedi: function() {
        if (this.type == "grajdansko") {
            for (let index = 0; index < this.obvinitel.advokati.length; index++) {
                this.obvinitel.advokati[index].pitaiVypros(this.obvinqem.name);
                this.obvinitel.advokati[index].pitaiVypros(this.obvinqem.name);
                this.obvinitel.advokati[index].pitaiVypros(this.obvinqem.name);
                for (let ind2 = 0; ind2 < this.svideteli.length; ind2++) {
                    this.obvinitel.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                    this.obvinitel.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                }
            }
        };
        if (this.type == "nakazatelno") {
            this.obvinitel.pitaiVypros(this.obvinqem.name);
            this.obvinitel.pitaiVypros(this.obvinqem.name);
            this.obvinitel.pitaiVypros(this.obvinqem.name);
            this.obvinitel.pitaiVypros(this.obvinqem.name);
            this.obvinitel.pitaiVypros(this.obvinqem.name);
            for (let ind2 = 0; ind2 < this.svideteli.length; ind2++) {
                this.obvinitel.pitaiVypros(this.svideteli[ind2].name);
                this.obvinitel.pitaiVypros(this.svideteli[ind2].name);
                this.obvinitel.pitaiVypros(this.svideteli[ind2].name);
                this.obvinitel.pitaiVypros(this.svideteli[ind2].name);
                this.obvinitel.pitaiVypros(this.svideteli[ind2].name);
            }
        };
        for (let index = 0; index < this.obvinqem.advokati.length; index++) {
            for (let ind2 = 0; ind2 < this.svideteli.length; ind2++) {
                this.obvinqem.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                this.obvinqem.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                this.obvinqem.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                this.obvinqem.advokati[index].pitaiVypros(this.svideteli[ind2].name);
                this.obvinqem.advokati[index].pitaiVypros(this.svideteli[ind2].name);
            }
        };
        var vinoven = [];
        for (let index = 0; index < this.zasedateli.length; index++) {
            var zasedatelMisli = Math.random()
            if (zasedatelMisli >= 0.5) {
                vinoven.push(true);
                console.log("Zasedatel " + this.zasedateli[index].name + " otsyjda vinoven!!!")
            } else {
                vinoven.push(false)
                console.log("Zasedatel " + this.zasedateli[index].name + " otsyjda nevinen!!!")
            }
        };
        var count = 0;
        for (let index = 0; index < vinoven.length; index++) {
            if (vinoven[index]) {
                count++;
            }
        }
        if (count > vinoven.length / 2) {
            this.prisyda = "vinoven";
        } else {
            this.prisyda = "nevinen";
        }
        if (this.prisyda == "vinoven") {
            var randomGodini = Math.floor(Math.random() * 37 + 3);
            console.log("Sydiqta " + this.sydiq.name + " opredeli " + randomGodini + " godini zatvor na obvinqemiq " + this.obvinqem.name);
        } else {
            console.log(this.obvinqem.name + " e nevinen!")
        };
    }
}

var tyrnovo = new Sud("Veliko Tyrnovo", "V.Tyrnovo 69");
var misho = new Urist("Mihail", "sydiq", 7, 10);
var ivan = new Urist("Ivan", "sydiq", 11, 4);
var dragan = new Urist("Dragan", "sydiq", 6, 12);
var zasedatel1 = new Urist("Zasedatel1", "zasedatel", 7, 10)
var zasedatel2 = new Urist("Zasedatel2", "zasedatel", 2, 15)
var zasedatel3 = new Urist("Zasedatel3", "zasedatel", 1, 28)
var zasedatel4 = new Urist("Zasedatel4", "zasedatel", 4, 45)
var zasedatel5 = new Urist("Zasedatel5", "zasedatel", 15, 2)
var zasedatel6 = new Urist("Zasedatel6", "zasedatel", 6, 3)
var zasedatel7 = new Urist("Zasedatel7", "zasedatel", 9, 5)
var zasedatel8 = new Urist("Zasedatel8", "zasedatel", 7, 6)
var zasedatel9 = new Urist("Zasedatel9", "zasedatel", 5, 9)
var zasedatel10 = new Urist("Zasedatel10", "zasedatel", 13, 16)
var zasedatel11 = new Urist("Zasedatel11", "zasedatel", 7, 6)
var zasedatel12 = new Urist("Zasedatel12", "zasedatel", 5, 9)
var zasedatel13 = new Urist("Zasedatel13", "zasedatel", 13, 16)
var zasedatel14 = new Urist("Zasedatel14", "zasedatel", 7, 6)
var zasedatel15 = new Urist("Zasedatel15", "zasedatel", 5, 9)
var zasedatel16 = new Urist("Zasedatel16", "zasedatel", 13, 16)
var kriso = new Urist("Kristiyan", "advokat", 6, 12);
var elena = new Urist("Elena", "advokat", 7, 15);
var roberto = new Urist("Roberto", "advokat", 16, 16);
var ico = new Urist("Hristo", "advokat", 4, 13);
var marto = new Urist("Martin", "advokat", 15, 28);
var denny = new Urist("Denislav", "prokuror", 15, 12);
var samy = new Urist("Samy", "prokuror", 11, 11);
var grajdanin1 = new Grajdanin("grajdanin1", "Sofia", 25, "obvinqem");
var grajdanin2 = new Grajdanin("grajdanin2", "Plovdiv", 43, "obvinqem");
var grajdanin3 = new Grajdanin("grajdanin3", "Burgas", 52, "obvinqem");
var grajdanin4 = new Grajdanin("grajdanin4", "Varna", 28, "obvinqem");
var grajdanin5 = new Grajdanin("grajdanin5", "Smolyan", 23, "obvinitel");
var grajdanin6 = new Grajdanin("grajdanin6", "Dobrich", 33, "obvinitel");
var grajdanin7 = new Grajdanin("grajdanin7", "Madan", 43, "obvinitel");
var grajdanin8 = new Grajdanin("grajdanin8", "Rudozem", 26, "obvinitel");
var grajdanin9 = new Grajdanin("grajdanin9", "Smolyan", 23, "svidetel");
var grajdanin10 = new Grajdanin("grajdanin10", "Madrid", 45, "svidetel");
var grajdanin11 = new Grajdanin("grajdanin11", "Scopie", 24, "svidetel");
var grajdanin12 = new Grajdanin("grajdanin12", "Barcelona", 65, "svidetel");
var grajdanin13 = new Grajdanin("grajdanin13", "London", 59, "svidetel");
tyrnovo.court()
var delo1 = new Delo("grajdansko", tyrnovo);
var delo2 = new Delo("nakazatelno", tyrnovo);
delo1.provedi()
delo2.provedi();
tyrnovo.court()
