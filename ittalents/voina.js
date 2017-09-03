var teste=[];
var playerOne = [];
var playerTwo = [];
var strength = ["2","3","4","5","6","7","8","9","T","J","Q","K","A"];
var suit = ["spatiq","karo","kupa","pika"];
while (teste.length < 52) {
    var random = Math.floor(Math.random() * 52);
    if (teste.indexOf(random) == -1) {
        teste.push(random);
    }
}
playerOne = teste.splice(0, 26);
playerTwo = teste.slice(0);
function play(playerOne, playerTwo) {
    if (playerOne.length <= 0 || playerTwo.length <= 0) {
        return;
    }
    console.log(playerOne.length);
    console.log(playerTwo.length);
    console.log("Player one: " + strength[Math.floor(playerOne[0] / 4)] + " " + suit[playerOne[0] % 4] + " vs Player Two: " + strength[Math.floor(playerTwo[0] / 4)] + " " + suit[playerTwo[0] % 4]);
    if (strength.indexOf(strength[Math.floor(playerOne[0] / 4)]) > strength.indexOf(strength[Math.floor(playerTwo[0] / 4)])) {
        playerOne.push(playerTwo[0]);
        playerOne.push(playerOne[0]);
        playerOne.shift();
        playerTwo.shift();
        return play(playerOne, playerTwo);
    }
    if (strength.indexOf(strength[Math.floor(playerOne[0] / 4)]) < strength.indexOf(strength[Math.floor(playerTwo[0] / 4)])) {
        playerTwo.push(playerOne[0]);
        playerTwo.push(playerTwo[0]);
        playerTwo.shift();
        playerOne.shift();
        return play(playerOne, playerTwo);
    }
    if (strength.indexOf(strength[Math.floor(playerOne[0] / 4)]) == strength.indexOf(strength[Math.floor(playerTwo[0] / 4)])) {
        return voina(playerOne, playerTwo);
    }
}
var count = 1;
function voina(playerOne, playerTwo) {
    if (playerOne.length >= 3 * count + 1 && playerTwo.length >= 3 * count + 1) {
        console.log("Voina: ");
        console.log("PlayerOne: " + strength[Math.floor(playerOne[1 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[1 * count] % 4] + " " + strength[Math.floor(playerOne[2 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[2 * count] % 4] + " " + strength[Math.floor(playerOne[3 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[3 * count] % 4]);
        console.log("PlayerTwo: " + strength[Math.floor(playerTwo[1 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[1 * count] % 4] + " " + strength[Math.floor(playerTwo[2 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[2 * count] % 4] + " " + strength[Math.floor(playerTwo[3 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[3 * count] % 4]);

        if (strength.indexOf(strength[Math.floor(playerOne[3 * count] / 4)]) > strength.indexOf(strength[Math.floor(playerTwo[3 * count] / 4)])) {
            for (var index = 0; index <= 3 * count; index++) {
                playerOne.push(playerOne[index]);
                playerOne.push(playerTwo[index]);
            }
            playerOne.splice(0, 3 * count + 1);
            playerTwo.splice(0, 3 * count + 1);
            count = 1;
            return play(playerOne, playerTwo);
        }
        if (strength.indexOf(strength[Math.floor(playerOne[3 * count] / 4)]) < strength.indexOf(strength[Math.floor(playerTwo[3 * count] / 4)])) {
            for (var index = 0; index <= 3 * count; index++) {
                playerTwo.push(playerOne[index]);
                playerTwo.push(playerTwo[index]);
            }
            playerOne.splice(0, 3 * count + 1);
            playerTwo.splice(0, 3 * count + 1);
            count = 1;
            return play(playerOne, playerTwo);
        }
        if (strength.indexOf(strength[Math.floor(playerOne[3 * count] / 4)]) == strength.indexOf(strength[Math.floor(playerTwo[3 * count] / 4)])) {
            count++;
            var winner = [];
            return voina(playerOne, playerTwo)
        }
    } else {
        if (playerOne.length == 1) {
            playerTwo.push(playerOne[0]);
            playerOne.splice(0, 1);
            return play(playerOne, playerTwo);
        }
        if (playerTwo.length == 1) {
            playerOne.push(playerTwo[0]);
            playerTwo.splice(0, 1);
            return play(playerOne, playerTwo);
        }
        var holder = "";
        if (playerOne.length > playerTwo.length) {
            for (var ind = count * 3 - 2; ind < playerTwo.length; ind++) {
                holder += strength[Math.floor(playerTwo[ind] / 4)] + " " + suit[playerTwo[ind] % 4] + " "
            }
            console.log("Voina: ")
            console.log("PlayerOne: " + strength[Math.floor(playerOne[1 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[1 * count] % 4] + " " + strength[Math.floor(playerOne[2 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[2 * count] % 4] + " " + strength[Math.floor(playerOne[3 + ((count - 1) * 3)] / 4)] + " " + suit[playerOne[3 * count] % 4]);
            console.log("PlayerTwo: " + holder);
            if ((strength.indexOf(strength[Math.floor(playerOne[3 * count] / 4)])) > (strength.indexOf(strength[Math.floor(playerTwo[playerTwo.length - 1] / 4)]))) {
                for (var ind = 0; ind < playerTwo.length; ind++) {
                    playerOne.push(playerTwo[ind]);
                }
                playerTwo.splice(0);
                return play(playerOne, playerTwo);
            } else {
                for (var ind2 = 0; ind2 < 3 * count + 1; ind2++) {
                    playerTwo.push(playerOne[ind2]);
                    playerOne.splice(0, 1);
                }

                return play(playerOne, playerTwo);
            }
        } else {
            for (var ind = count * 3 - 2; ind < playerOne.length; ind++) {
                holder += strength[Math.floor(playerOne[ind] / 4)] + " " + suit[playerOne[ind] % 4] + " "
            }
            console.log("Voina: ")
            console.log("PlayerOne: " + holder);
            console.log("PlayerTwo: " + strength[Math.floor(playerTwo[1 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[1 * count] % 4] + " " + strength[Math.floor(playerTwo[2 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[2 * count] % 4] + " " + strength[Math.floor(playerTwo[3 + ((count - 1) * 3)] / 4)] + " " + suit[playerTwo[3 * count] % 4]);
            if ((strength.indexOf(strength[Math.floor(playerTwo[3 * count] / 4)])) > (strength.indexOf(strength[Math.floor(playerOne[playerOne.length - 1] / 4)]))) {
                for (var ind = 0; ind < playerOne.length; ind++) {
                    playerTwo.push(playerOne[ind]);
                }
                playerOne.splice(0);
                return play(playerOne, playerTwo);
            } else {
                for (var ind2 = 0; ind2 < 3 * count + 1; ind2++) {
                    playerOne.push(playerTwo[ind2]);
                    playerTwo.splice(0, 1);
                }
                return play(playerOne, playerTwo);
            }

        }
    }
}
play(playerOne, playerTwo);
var winner = playerOne.length > playerTwo.length
    ? console.log("The winner is PlayerOne!")
    : console.log("The winner is PlayerTwo!")
