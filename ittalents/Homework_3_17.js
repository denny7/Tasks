var masiv = [1,3,2,4,3,7,4,5];
var istina = false;
for (var index = 1; index < masiv.length - 1; index++) {
    if (index % 2 != 0) {
        if (masiv[index - 1] < masiv[index] && masiv[index] > masiv[index + 1]) {
            istina = true;
        } else {
            istina = false;
            break;
        }
    }
    if (index % 2 == 0) {
        if (masiv[index - 1] > masiv[index] && masiv[index] < masiv[index + 1]) {
            istina = true;
        } else {
            istina = false;
            break;
        }
    }
}
if (istina) {
    console.log("Izpalnqva iziskvaniqta na zigzagoobrazna redica");
} else {
    console.log("Ne izpalnqva iziskvaniqta za zigzagoobrazna redica");
}
