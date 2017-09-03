var rund = 0;
var result = new Array(5);
var number1 = Math.round(Math.random() * 100 + 1);
while (rund != 5) {
    var goshoHealth = 100;
    var peshoHealth = 100;
    var areTheySick = false;
    while ((goshoHealth > 0) && (peshoHealth > 0)) {
        var randomGosho = Math.random();
        var randomPesho = Math.random();

        // Pesho hit by boar
        if (randomPesho < 0.005) { // 5% chance
            console.log('Pesho go trqsna gligana!');
            console.log('Gosho pecheli slujebno!');
            peshoHealth = 0;
            break;
        }
        // Gosho hit by boar
        if (randomGosho < 0.005) { // 5% chance
            console.log('Gosho go trqsna gligana!');
            console.log('Pesho pecheli slujebno!');
            goshoHealth = 0;
            break;
        }

        if ((!areTheySick) && (Math.random() < 0.2)) { // 20% chance
            areTheySick = true;
            console.log('Udari gi sharkata!');
            goshoHealth = Math.round(goshoHealth / 2);
            peshoHealth = Math.round(peshoHealth / 2);
        }

        var peshoDamage = Math.round((Math.random() * 9) + 1);

        if (areTheySick) {
            peshoDamage = Math.round(peshoDamage / 2);
        }

        if (Math.random() < 0.333) {
            console.log('Pesho nameri rakiqta!');
            peshoDamage *= 2;
        }

        console.log('Pesho prasna Gosho sys sila ' + peshoDamage);
        goshoHealth = peshoDamage > goshoHealth
            ? 0
            : goshoHealth - peshoDamage;
        console.log('Na Gosho mu ostana ' + goshoHealth + " zdrave");
        var lechenie = (Math.round(Math.random() * 100 + 1));
        if ((number1 & (1 << 2)) == (lechenie & (1 << 2)) && (number1 & (1 << 3)) == (lechenie & (1 << 3))) {
            goshoHealth = (goshoHealth >= 80)
                ? goshoHealth = 100
                : goshoHealth += 20;
            console.log("Gosho se izlekuva. Sega toi ima " + goshoHealth + " zdrave");
        }

        if (goshoHealth > 0) {
            var goshoDamage = Math.round((Math.random() * 9) + 1);
            if (areTheySick) {
                goshoDamage = Math.round(goshoDamage / 2);
            }

            if (Math.random() < 0.333) {
                console.log('Gosho nameri rakiqta!');
                goshoDamage *= 2;
            }

            console.log('Gosho prasna Pesho  sys sila ' + goshoDamage);
            peshoHealth = goshoDamage > peshoHealth
                ? 0
                : peshoHealth - goshoDamage;
            console.log('Na Pesho mu ostana ' + peshoHealth + " zdrave");
            var chanceDve = goshoDamage.toString(2);
            if ((number1 & (1 << 3)) == (lechenie & (1 << 3)) && (number1 & (1 << 4)) == (lechenie & (1 << 4))) {
                peshoHealth = (peshoHealth >= 80)
                    ? peshoHealth = 100
                    : peshoHealth += 20;
                console.log("Pesho se izlekuva. Sega toi ima " + peshoHealth + " zdrave");
            }
        }
        if (peshoHealth <= 0) {
            console.log('Gosho oshte myrda!');
            break;
        }
        if (goshoHealth <= 0) {
            console.log('Pesho oshte myrda');
            break;
        }

    }
    result[rund] = (goshoHealth > peshoHealth)
        ? result[rund] = "Gosho"
        : result[rund] = "Pesho";
    var countWinsGosho = 0;
    var countWinsPesho = 0;
    var winner = "";
    for (var index = 0; index < result.length; index++) {
        if (result[index] == "Gosho") {
            countWinsGosho++;
        } else {
            countWinsPesho++;
        }
        winner = (countWinsGosho > countWinsPesho)
            ? "Pobeditel e Gosho!!!"
            : "Pobeditel e Pesho!!!";
    }
    rund++;
}
console.log(result);
console.log(winner);
