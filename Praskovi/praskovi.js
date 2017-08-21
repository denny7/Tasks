function Product(name, price, img, city, description) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.city = city;
    this.description = description;
}

function Shop(name) {
    this.name = name;
    this.products = [];
}
Shop.prototype = {
    constructor: Shop,
    addProduct: function(product) {
        if (product instanceof Product) {
            this.products.push(product);
            product.id = this.products.length - 1;
        }
    },
    removeProduct: function(id) {
        if (!isNaN(id) && id < this.products.length) {
            this.products.splice(id, 1)
        }
    },
    sortPraskovi: function(how) {
        if (how == "cena") {
            this.products.sort((a, b) => a.price - b.price);
        }
        if (how == "name") {
            this.products.sort((a, b) => a.name > b.name);
        }
    },
    show: function() {
        document.write("<main>")
        this.products.forEach(product => document.write(`
      <article>
            <img src="${product.img}" alt="praskova">
            <p>
            ${product.name}
            </p>
            <p>
            ${product.price}
            </p>
      </article>
      `), this)
        document.write("</main>")
    },
    filterPraskovi: function(searcha) {
        document.write("<h1> Namereni rezultati </h1>")
        for (let index = 0; index < this.products.length; index++) {
            let found = this.products[index].name.indexOf(searcha)
            if (found == -1) {
                this.products.splice(index, 1);
                index--
            }
            found = -1;
        }
    },
    showDetails: function(id) {
        document.write(`
<div class="zaglavie"> <h2> Detaili za ${this.products[id].name} </h2> </div>
<section class="description">
<article class="left">
<img src="${this.products[id].img}" alt="picture"/>
</article>
<article class="right">
<p>cena: ${this.products[id].price} </p>
<p>Otrasnala v: ${this.products[id].city} </p>
<p>detaili: ${this.products[id].description}</p>
</article>
</section>
        `)
    }
}
var pr1 = new Product("praskova burgaska", 5, "https://naturecomfort.bg/images/content/peaches.jpg", "Burgas", "v spokoini gradini");
var pr2 = new Product("praskova slivenska", 8, "http://gradcontent.com/lib/300x225/praskovi.jpg", "Sliven", "pryskani");
var pr3 = new Product("praskova karnobat", 11, "http://www.gradinata.bg/_images/i008060.jpg", "Karnobat", "leko neuzreli");
var pr4 = new Product("praskova yambol", 2, "http://econ.bg/pictures/85624_300_225.jpg", "Yambol", "vsichko im e 6");
var praskoviShop = new Shop("Peach Shop");
praskoviShop.addProduct(pr1)
praskoviShop.addProduct(pr2)
praskoviShop.addProduct(pr3)
praskoviShop.addProduct(pr4)
praskoviShop.sortPraskovi("cena");
// praskoviShop.removeProduct(2)
praskoviShop.filterPraskovi("ska");
praskoviShop.show();
praskoviShop.showDetails(1);
