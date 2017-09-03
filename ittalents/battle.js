// pravim Array palen s -
var battleField = new Array(5);
for (var row = 0; row < battleField.length; row++) {
    battleField[row] = new Array(14);
    for (var col = 0; col < battleField[row].length; col++) {
        battleField[row][col] = "-";
    }
}
// dobavqme random * otlqvo i random @ otdqsno
for (var row = 0; row < battleField.length; row++) {
    var leftNumber = Math.floor(Math.random() * 5 + 1);
    var rightNumber = Math.floor(Math.random() * 5 + 1);
    for (var col = 0; col < leftNumber; col++) {
        battleField[row][col] = "*";
    }
    for (var cols = battleField[row].length - 1; cols >= battleField[row].length - rightNumber; cols--) {
        battleField[row][cols] = "@";
    }
}
for (var row = 0; row < battleField.length; row++) {
    for (var col = 0; col < battleField[row].length; col++) {
        process.stdout.write(battleField[row][col] + " ");
    }
    console.log();
}
var n = 1;
var istina = true;
while (istina) {
    console.log("Rund: " + n);
    // izmestvame s 1 otlqvo i s 1 otdqsno
    for (var row = 0; row < battleField.length; row++) {
        var poslednaZvezda = battleField[row].lastIndexOf("*");
        var parvaKliomba = battleField[row].indexOf("@");
        var broiZvezdi = battleField[row].lastIndexOf("*") + 1 - battleField[row].indexOf("*");
        var broiKliombi = battleField[row].lastIndexOf("@") + 1 - battleField[row].indexOf("@");
        // proverqvame za ravenstvo mejdu * i @
        if ((broiZvezdi == broiKliombi) && (battleField[row][battleField[row].lastIndexOf("*") + 1] == "@")) {
            number = Math.random();
            if (number < 0.5) {
                for (var indk = battleField[row].indexOf("@"); indk <= battleField[row].lastIndexOf("@"); indk++) {
                    battleField[row][indk] = "-";
                }
            } else {
                for (var indz = battleField[row].indexOf("*"); indz <= battleField[row].lastIndexOf("*"); indz++) {
                    battleField[row][indz] = "-";
                }
            }
        }
        if (broiZvezdi > broiKliombi) {
            if (battleField[row][poslednaZvezda + 1] == "-") {
                battleField[row][poslednaZvezda + 1] = "*";
                battleField[row][battleField[row].indexOf("*")] = "-";
            }
            if (battleField[row][parvaKliomba - 1] == "-") {
                battleField[row][battleField[row].lastIndexOf("@")] = "-";
                battleField[row][parvaKliomba - 1] = "@";
            }
        } else {
            if (battleField[row][parvaKliomba - 1] == "-") {
                battleField[row][battleField[row].lastIndexOf("@")] = "-";
                battleField[row][parvaKliomba - 1] = "@";
            }
            if (battleField[row][poslednaZvezda + 1] == "-") {
                battleField[row][poslednaZvezda + 1] = "*";
                battleField[row][battleField[row].indexOf("*")] = "-";
            }

        }
        // Ako elementa sled * e @ proverqvame koi sa poveche
        if (battleField[row][battleField[row].lastIndexOf("*") + 1] == "@") {
            if (broiZvezdi > broiKliombi) {
                for (var indk = battleField[row].indexOf("@"); indk <= battleField[row].lastIndexOf("@"); indk++) {
                    battleField[row][indk] = "-";
                }
            } else {
                for (var indz = battleField[row].indexOf("*"); indz <= battleField[row].lastIndexOf("*"); indz++) {
                    battleField[row][indz] = "-";
                }
            }
        }
        if (battleField[row][battleField[row].length - 1] == "*" || battleField[row][0] == "@") {
            istina = false;
        }
    }
    for (var row = 0; row < battleField.length; row++) {
        for (var col = 0; col < battleField[row].length; col++) {
            process.stdout.write(battleField[row][col] + " ");
        }
        console.log();
    }
    n++;
}
var winsKliomba = 0;
var winsZvezda = 0;
for (var row = 0; row < battleField.length; row++) {
    if (battleField[row][0] == "@") {
        winsKliomba++;
    }
    if (battleField[row][battleField[row].length - 1] == "*") {
        winsZvezda++;
    }
}
var result;
if (winsZvezda != winsKliomba) {
    result = winsZvezda > winsKliomba
        ? console.log("The winer is the team of *")
        : console.log("The winer is the team of @");
} else {
    console.log("Rezultata e raven");
}
