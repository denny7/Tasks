function Shop(name) {
    this.name = name;
    this.products = [];
    this.prodadeni = [];
}
Shop.prototype = {
    constructor: Shop,
    reviziq: function() {
        for (let index in this.prodadeni) {
            console.log(this.prodadeni[index].cena.name + " " + this.prodadeni[index].kolichestvo + "*" + this.prodadeni[index].cena.cena)
        }
        console.log(+kasa1.cashOborot + +kasa1.cardsOborot + +kasa2.cashOborot + +kasa2.cardsOborot + +kasa3.cashOborot + +kasa3.cardsOborot)
    },
    reviziqKasi : function(){
      console.log(kasa1);
      console.log(kasa2);
      console.log(kasa3)
    }
}

function Product(name, cena, kolichestvo) {
    this.name = name;
    this.cena = cena;
    this.kolichestvo = kolichestvo;
    billa.products.push(this)
}
function BundleProduct(name, pr1, pr2, pr3) {
    this.name = name;
    this.kombinaciq = [];
    var istina = true;
    this.cena = 0;
    for (let index = 1; index < arguments.length; index++) {
        if (!(arguments[index]instanceof Product)) {
            istina = false;
        }
    }
    if (istina) {
        for (let index = 1; index < arguments.length; index++) {
            this.cena += arguments[index].cena
            this.kombinaciq.push(arguments[index]);
        }

    }
}
function Kasa(nomer) {
    this.nomer = nomer;
    this.cashOborot = 0;
    this.cardsOborot = 0;
}
function Clients(type, money) {
    this.type = type
    if (type == "drebno") {
        this.money = money;
    }
}
Clients.prototype = {
    constructor: Clients,
    payAll: function(cart, kasa) {
        var cena = 0;
        if (cart instanceof Cart && kasa instanceof Kasa && cart.products.length >= 1) {
            if (this.type == "drebno") {
                for (let index in cart.products) {
                    cena += + cart.products[index].cena.cena * cart.products[index].kolichestvo;
                }
                if (this.money >= cena) {
                    kasa.cashOborot += + cena;
                    this.money -= + cena;
                    for (let index in cart.products) {
                        billa.prodadeni.push(cart.products[index])
                    }
                }
                cart.products = []
            } else {
                for (let index in cart.products) {
                  cena += + cart.products[index].cena.cena * cart.products[index].kolichestvo;
                }
                for (let index in cart.products) {
                    billa.prodadeni.push(cart.products[index])
                }
                kasa.cardsOborot += +cena;
                cart.products = []
            }
        }
    }
}
function Cart() {
    this.products = [];
}
Cart.prototype = {
    constructor: Cart,
    takeProduct: function(nameOfProduct, kolko) {
        if (nameOfProduct instanceof Product) {
            this.products.push({cena: nameOfProduct, kolichestvo: kolko})
            nameOfProduct.kolichestvo -= kolko;
        }
        if (nameOfProduct instanceof BundleProduct) {
            this.products.push({cena: nameOfProduct, kolichestvo: kolko})
            for (let index in nameOfProduct.kombinaciq) {
                nameOfProduct.kombinaciq[index].kolichestvo -= kolko
            }
        }
    }
}
var kasa1 = new Kasa(1);
var kasa2 = new Kasa(2);
var kasa3 = new Kasa(3);
var denny = new Clients("drebno", 10050)
var samy = new Clients("edro")
var cart = new Cart()
var billa = new Shop("Billa");
var banani = new Product("banani", 58, 100);
var sirene = new Product("sirene", 7, 58);
var kashkaval = new Product("kashkaval", 8, 600);
var bundle1 = new BundleProduct("Boundel1", banani, sirene, kashkaval)
cart.takeProduct(banani, 5)
cart.takeProduct(sirene, 1)
cart.takeProduct(bundle1, 2)
denny.payAll(cart, kasa1)
cart.takeProduct(banani,3);
cart.takeProduct(bundle1,2);
samy.payAll(cart,kasa2)
// console.log(billa.prodadeni)
billa.reviziq()
// billa.reviziqKasi()
// console.log(banani.kolichestvo)

// console.log(billa.prodadeni)
// console.log(banani.kolichestvo)
// console.log(banani.kolichestvo)
// samy.payAll(cart, kasa1)
// console.log(kasa1)
// console.log(billa.products)
// console.log(billa.prodadeni)
// console.log(cart)
// billa.reviziq();
// console.log(bundle1)
