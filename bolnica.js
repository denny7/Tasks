var otdeleniya = [];
var sestri = [];
var doktori = [];
var diagnozi = [];
var pacienti = [];
function Bolnica(name) {
    this.name = name;
}
Bolnica.prototype = {
    constructor: Bolnica,
    priem: function(pacient) {
        if (pacient instanceof Pacient) {
            for (let index = 0; index < doktori.length; index++) {
                if (doktori[index].free == true) {
                    pacient.lekuvashtLekar = doktori[index];
                    doktori[index].free = false;
                    doktori[index].praviDiagnoza(pacient);
                    doktori[index].pacienti.push(pacient)
                    break;
                }
            }
            if (pacient.lekuvashtLekar !== null) {
                var istina = false;
                for (let first = 0; first < otdeleniya.length; first++) {
                    if (!istina) {
                        if (otdeleniya[first].bolest == null || otdeleniya[first].bolest == pacient.diagnoza) {
                            for (let second = 0; second < otdeleniya[first].stai.length; second++) {
                                if (!istina) {
                                    for (let third = 0; third < otdeleniya[first].stai[second].length; third++) {
                                        if (!istina) {
                                            if (otdeleniya[first].stai[second][third] == true) {
                                                if (!otdeleniya[first].stai[second].gender || otdeleniya[first].stai[second].gender == pacient.pol) {
                                                    pacient.staya = second;
                                                    pacient.leglo = third;
                                                    pacient.nastanen = "Otdelenie :" + otdeleniya[first].name + ", staya nomer " + (second + 1) + ", leglo: " + (third + 1);
                                                    otdeleniya[first].stai[second][third] = pacient.name;
                                                    pacient.otdelenie = otdeleniya[first]
                                                    pacienti.push(pacient)
                                                    if (otdeleniya[first].bolest == null) {
                                                        otdeleniya[first].bolest = pacient.diagnoza;
                                                    }
                                                    istina = true;
                                                    otdeleniya[first].stai[second].gender = pacient.pol;
                                                    break;
                                                } else {
                                                    continue;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                console.log("Karton:" +
                    "\n" + pacient.name + " e priet v bolnicata. Godini: " + pacient.age + ", telefon :" + pacient.telefon + ". Lekuvasht lekar: " + pacient.lekuvashtLekar.name + ", diagnoza: " + pacient.diagnoza.name)
            }
        } else {
            console.log("Nqma takav pacient!")
        }
    },
    anotherDay: function() {
        for (let index = 0; index < pacienti.length; index++) {
            pacienti[index].brDni--;
            console.log(pacienti[index].otdelenie.sestra.name + " dade lekarstva na " + pacienti[index].name)
            if (pacienti[index].brDni > 0) {
                console.log(pacienti[index].lekuvashtLekar.name + " otide na vizitaciq pri " + pacienti[index].name + " v " + pacienti[index].nastanen + ". Ostavat oshte " + pacienti[index].brDni + " dni do izpisvane.");
            } else {
                console.log(pacienti[index].name + " se izlekuva!");
                console.log(pacienti[index].name + " e izpisan\\a ot " + pacienti[index].nastanen);
                pacienti[index].otdelenie.stai[pacienti[index].staya][pacienti[index].leglo] = true;
                pacienti[index].lekuvashtLekar.free = true;
                pacienti[index].nastanen = true;
                pacienti[index].diagnoza = null;
                pacienti[index].nastanen = "";
                pacienti[index].lekuvashtLekar = null;
                pacienti[index].brDni = Math.floor(Math.random() * 3 + 3);
                pacienti.splice([index], 1)
                index--;
            }
        }
    },
    svobodniLegla: function() {
        var count = 0;
        for (let first = 0; first < otdeleniya.length; first++) {
            for (let second = 0; second < otdeleniya[first].stai.length; second++) {
                for (let third = 0; third < otdeleniya[first].stai[second].length; third++) {
                    if (otdeleniya[first].stai[second][third] == true) {
                        count++;
                    }
                }
            }
            console.log(otdeleniya[first].name + " ima " + count + " svobodni legla");
            count = 0;
        }
    },
    pacientiUtre: function() {
        var zaUtre = false;
        for (let index = 0; index < pacienti.length; index++) {
            if (pacienti[index].brDni == 1) {
                console.log("Pacient " + pacienti[index].name + " shte bade izpisan\\a utre.")
                zaUtre = true;
            }
        }
        if (!zaUtre) {
            console.log("Nqma pacienti za izpisvane utre.")
        }
    }
}
function Otdelenie(name) {
    this.name = name;
    this.stai = new Array(10);
    for (let index = 0; index < this.stai.length; index++) {
        this.stai[index] = new Array(3);
        for (let ind = 0; ind < this.stai[index].length; ind++) {
            this.stai[index][ind] = true;
        }
    }
    otdeleniya.push(this);
    this.bolest = null;
    this.sestra = null;
}
function Sestra(name, age, staj, telefon) {
    this.name = name;
    this.age = age;
    this.staj = staj;
    this.telefon = telefon;
    this.free = true;
    sestri.push(this);
    var otdelenie;
    for (let index = 0; index < otdeleniya.length; index++) {
        if (otdeleniya[index].sestra == null) {
            otdeleniya[index].sestra = this;
            otdelenie = otdeleniya[index];
            this.free = false;
            break;
        }
    }
}
function Doktor(name, telefon, specializaciya) {
    this.name = name;
    this.telefon = telefon;
    this.specializaciya = specializaciya;
    this.free = true;
    doktori.push(this);
    this.pacienti = [];
}
Doktor.prototype = {
    constructor: Doktor,
    praviDiagnoza: function(pacient) {
        pacient.diagnoza = diagnozi[Math.floor(Math.random() * diagnozi.length)];
    },
    broiPacienti : function(){
      console.log(this.name + " ima " + this.pacienti.length + " pacienti.");
    }
}
function Pacient(name, age, telefon, pol, diagnoza) {
    this.name = name;
    this.age = age;
    this.telefon = telefon;
    this.pol = pol;
    this.diagnoza = null;
    this.brDni = Math.floor(Math.random() * 3 + 3);
    this.lekuvashtLekar = null;
    this.nastanen = "";
    this.otdelenie = null;
}
function Diagnoza(name, lekarstvo1, lekarstvo2, lekarstvo3) {
    this.name = name;
    this.lekarstvo1 = lekarstvo1;
    this.lekarstvo2 = lekarstvo2;
    this.lekarstvo3 = lekarstvo3;
    diagnozi.push(this);
}

var pirogov = new Bolnica("Pirogov");
var ortopediya = new Otdelenie("Ortopediya");
var kardiologiya = new Otdelenie("Kardiologiya");
var virusologiya = new Otdelenie("Virusologiya");
var sestra1 = new Sestra("Emanuela", 25, 2, 0889909090);
var sestra2 = new Sestra("Masha", 48, 17, 0899808080);
var sestra3 = new Sestra("Kristiyana", 28, 4, 0889003311);
var sestra4 = new Sestra("Sofiya", 35, 11, 0888664455);
var sestra5 = new Sestra("Emiliya", 29, 7, 0878787878);
var doktor1 = new Doktor("Kasperski", 0888888888, "Ortopediya");
var doktor2 = new Doktor("Mihov", 0895123456, "Kardiologiya");
var doktor3 = new Doktor("Ognyanov", 0893600123, "Virusologiya");
var grip = new Diagnoza("Grip", "Coldrex", "Paracetamol", "Kapki za nos");
var pnevmoniya = new Diagnoza("Pnevmoniya", "Ospamox 100", "sirop za kashlica", "analgin");
var schupvane = new Diagnoza("Schupvane", "led", "uspokoitelni", "sirene");
var misho = new Pacient("Mihail", 25, 0897899889, "male");
var pesho = new Pacient("Peshomir", 23, 0897000000, "male");
var radost = new Pacient("Radostina", 25, 0897794545, "female");
var penka = new Pacient("Penka", 49, 0897333333, "female");
pirogov.priem(misho);
pirogov.priem(radost);
pirogov.priem(penka)
doktor1.broiPacienti()
console.log(kardiologiya);
console.log(ortopediya);
console.log(virusologiya)
pirogov.anotherDay()
pirogov.anotherDay()
pirogov.anotherDay()
pirogov.svobodniLegla()
pirogov.pacientiUtre()
// single line comment
