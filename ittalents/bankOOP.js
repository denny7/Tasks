function Depozit(name, period, lihva) {
    this.name = name;
    if (!isNaN(period) && period >= 1 && period <= 60) {
        this.period = period;
    } else {
        return console.log("Perioda trqbva da e s prodaljnitelnost mujdu 1 i 60 meseca!");
    }
    this.lihva = 0.01 * lihva;
    this.izplateno = 0;
    this.platenaLihva = false;
}
function Kredit(name, lihva) {
    this.name = name;
    this.lihva = 0.01 * lihva;
}
function Client(name, adress, nalichnost, zaplata) {
    this.name = name;
    this.adress = adress;
    this.nalichnost = nalichnost;
    this.zaplata = zaplata;
    this.bankoviDepoziti = [];
    this.bankoviKrediti = [];
}
Client.prototype = {
    constructor: Client,
    openDepozit: function(depozit, bank, suma) {
        if (depozit instanceof Depozit && bank instanceof Bank) {
            if (!isNaN(suma) && suma <= this.nalichnost) {
                depozit.suma = suma;
            } else {
                return console.log("Sumata trqbva da bade po-golqma ot 0 i po-malko ot nalichnostta na klienta!");
            }
            if (this.nalichnost > depozit.suma) {
                this.bankoviDepoziti.push(depozit);
                bank.depoziti.push(depozit)
                this.nalichnost -= depozit.suma;
                bank.parichnaNalichnost += depozit.suma;
                bank.bankovRezerv += 0.9 * depozit.suma;
            }
        }
    },
    iskaiKredit: function(kredit, bank, suma, period) {
        var oldMesechnaVnoska;
        var mesechnaVnoskaSuma;
        if (kredit instanceof Kredit && bank instanceof Bank) {
            mesechnaVnoska = function() {
                oldMesechnaVnoska = kredit.mesechnaVnoskaSuma;
                mesechnaVnoskaSuma = ((kredit.lihva * suma) + suma) / period;
                return ((kredit.lihva * suma) + suma) / period;
            }
            this.vsichkiMesechniVnoski = 0;
            mesechnaVnoska();
            if (this.bankoviKrediti.length > 0) {
                for (let index = 0; index < this.bankoviKrediti.length; index++) {
                    this.vsichkiMesechniVnoski += + this.bankoviKrediti[index].mesechnaVnoskaSuma;
                }
                this.vsichkiMesechniVnoski += mesechnaVnoskaSuma;
            } else {
                this.vsichkiMesechniVnoski = mesechnaVnoskaSuma;
            }
            if (this.vsichkiMesechniVnoski < 0.5 * this.zaplata) {
                if (bank.parichnaNalichnost - suma > bank.bankovRezerv * 0.1) {
                    kredit.zaVrashtane = (kredit.lihva * suma) + suma;
                    kredit.bank = bank;
                    this.nalichnost += suma;
                    this.bankoviKrediti.push(kredit);
                    bank.krediti.push(kredit);
                    bank.parichnaNalichnost -= + suma;
                    kredit.owner = this;
                    this.bankoviKrediti[this.bankoviKrediti.length - 1].mesechnaVnoskaSuma = mesechnaVnoskaSuma;
                    console.log("Vie uspeshno izteglihte kredit! Uspeh v jivota!")
                } else {
                    this.vsichkiMesechniVnoski -= kredit.mesechnaVnoskaSuma;
                    kredit.mesechnaVnoskaSuma = oldMesechnaVnoska;
                    console.log("Nqma dostatachno pari v bankata!")
                }
            } else {
                this.vsichkiMesechniVnoski -= kredit.mesechnaVnoskaSuma;
                kredit.mesechnaVnoskaSuma = oldMesechnaVnoska;
                console.log("Ne moje da izteglite kredit!")
            }
        }
    },
    platiVnoska: function(kredit) {
        if (kredit instanceof vzemiKredit) {
            if (kredit.zaVrashtane > 0) {
                if (this.nalichnost > kredit.mesechnaVnoskaSuma) {
                    this.nalichnost -= kredit.mesechnaVnoskaSuma;
                    kredit.bank.parichnaNalichnost += kredit.mesechnaVnoskaSuma;
                    kredit.zaVrashtane -= kredit.mesechnaVnoskaSuma;
                    console.log(this.name + " plati " + kredit.mesechnaVnoskaSuma + ". Ostavat mu " + kredit.zaVrashtane)
                    if (kredit.zaVrashtane == 0) {
                        console.log("Izplati kredita nai-posle! Jivei mirno i spokoino!")
                    }
                } else {
                    console.log("Nedostatachna nalichnost za plashtane na mesechna vnoska")
                }
            } else {
                console.log("Kredit e izplaten! Jivei mirno i spokoino!")
            }
        }
    },
    vzemiSumaOtKrediti: function(bank) {
        for (let index = 0; index < this.bankoviDepoziti.length; index++) {
            if (this.bankoviDepoziti[index].platenaLihva) {
                this.nalichnost += this.bankoviDepoziti[index].suma;
                bank.parichnaNalichnost -= this.bankoviDepoziti[index].suma;
                console.log("Uspeshno vzhete sumata ot " + this.bankoviDepoziti[index].name);
                bank.depoziti.splice(index, 1)
                this.bankoviDepoziti.splice(index, 1)
                index--
            } else {
              console.log("Bankata vse oshte ne e izplatila lihvite")
            }
        }
    }
}
function Bank(name, adress, country) {
    this.name = name;
    this.adress = adress;
    this.country = country;
    this.parichnaNalichnost = 0;
    this.bankovRezerv = 0;
    this.depoziti = [];
    this.krediti = [];
}
Bank.prototype = {
    constructor: Bank,
    platiLihvi: function() {
        if (this.depoziti.length > 0) {
            for (let index = 0; index < this.depoziti.length; index++) {
                this.depoziti[index].suma += this.depoziti[index].suma * this.depoziti[index].lihva;
                this.depoziti[index].platenaLihva = true;
            }
        } else {
            console.log("Nqma depoziti!")
        }
    }
}
var dsk = new Bank("dsk", "Madan", "BG");
var denny = new Client("Denislav", "Sofia", 10000, 7000);
var shortDepozit = new Depozit("Short Depozit", 3, 3)
var longDepozit = new Depozit("Long depozit", 12, 5)
var homeCredit = new Kredit("Home Credit", 6)
var consumerCredit = new Kredit("Consumer Credit", 10)
denny.openDepozit(shortDepozit, dsk, 7000);
denny.openDepozit(longDepozit, dsk, 300);

denny.iskaiKredit(homeCredit, dsk, 2000, 10)
denny.iskaiKredit(consumerCredit, dsk, 3000, 12)
dsk.platiLihvi()
// console.log(denny.bankoviDepoziti)
// denny.platiVnoska(shortDepozit)
// denny.platiVnoska(shortDepozit)
// denny.platiVnoska(shortDepozit)
denny.vzemiSumaOtKrediti(dsk)
console.log(denny.nalichnost)
// console.log(denny)
// console.log(dsk.depoziti)
// console.log(denny);
