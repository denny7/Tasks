function Player(name) {
    this.name = name;
    this.health = 100;
    this.sick = false;
    this.isAlive = true;
    this.battle = function(koiDaUdari) {
        this.sila = Math.floor(Math.random() * 10 + 1);
        if (this.isAlive && koiDaUdari.isAlive) {
            koiDaUdari.health -= this.sila;
            if (koiDaUdari.health < 0) {
                koiDaUdari.health = 0;
                koiDaUdari.isAlive = false;
            }
        }
        console.log(this.name + " udari " + koiDaUdari.name + " sas sila " + this.sila + ". Na " + koiDaUdari.name + " mu ostavat " + koiDaUdari.health + " krav.");
        if (this.isAlive && koiDaUdari.isAlive) {
            var randomGligan = Math.random();
            if (randomGligan < 0.005) {
                this.health = 0;
                this.isAlive = false;
                console.log(this.name + " go udari gligana! " + koiDaUdari.name + " pecheli slujebno!");
            }
        }
        if (this.isAlive && koiDaUdari.isAlive) {
            var randomSharka = Math.random();
            if (randomSharka < 0.2 && !this.sick) {
                this.sick = true;
                koiDaUdari.sick = true;
                this.sila /= 2;
                koiDaUdari.punch /= 2;
                this.health /= 2;
                koiDaUdari.health /= 2;
                console.log("I dvamate se zaraziha sas sharka!")
            }
        }
        if (this.isAlive && koiDaUdari.isAlive) {
            var randomHeal = Math.random();
            if (randomHeal < 0.2) {
                if (this.health >= 80) {
                    this.health = 100;
                } else {
                    this.health += 20;
                }
                console.log(this.name + " se izlekuva. Sega toi ima " + this.health + " krav.")
            }
        }
        if (this.isAlive && koiDaUdari.isAlive) {
            var randomRakiya = Math.random();
            if (randomRakiya < 0.33) {
                this.sila *= 2;
                console.log(this.name + " nameri rakiyata. Sega toi udrq dva pati po-silno!")
            }
        }
    }
}
var count = 0;
var winner = [];
var rund = 0;
while (winner.length < 5) {
    var player1 = new Player("Pulev");
    var player2 = new Player("Klitchko");
    while (player1.health > 0 && player2.health > 0) {
        if (count % 2 == 0) {
            player1.battle(player2);
        } else {
            player2.battle(player1);
        }
        count++;
    }
    if (player1.health < player2.health) {
        winner[rund] = player2.name;
    } else {
        winner[rund] = player1.name;
    }
    rund++
}
console.log(winner)
var countPlayer1Wins = winner.filter(x => x == player1.name);
var matchWinner = countPlayer1Wins.length >= Math.ceil(winner.length / 2) ? player1.name + " is winner!": player2.name + " is winner!";
console.log(matchWinner);
