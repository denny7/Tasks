function AllAnimals() {
    this.animals = [];
}
AllAnimals.prototype = {
    constructor: AllAnimals,
    addAnimal: function(animal) {
        if (animal instanceof Animal) {
            this.animals.push(animal);
        }
    },
    showAnimals: function(how) {
        if (how == "type") {
            this.animals.sort((a, b) => a.type > b.type);
        }
        if (how == "name") {
            this.animals.sort((a, b) => a.name > b.name);
        }
        var x = document.getElementsByClassName('main')
        x[0].innerHTML = '';
        this.animals.forEach(animal => x[0].innerHTML += `
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `)
    },
    sortByName: function() {
        var x = document.getElementsByClassName('main')
        x[0].innerHTML = '';
        this.animals.sort((a, b) => a.name > b.name);
        this.animals.forEach(animal => x[0].innerHTML += `
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `)
    },
    showMammals: function() {
        var mammals = this.animals.filter(animal => animal.type == "mammal");
        mammals.forEach(animal => document.write(`
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `))
    },
    showLizards: function() {
        var mammals = this.animals.filter(animal => animal.type == "lizard");
        mammals.forEach(animal => document.write(`
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `))
    },
    showFishes: function() {
        var mammals = this.animals.filter(animal => animal.type == "fish");
        mammals.forEach(animal => document.write(`
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `))
    },
    showBirds: function() {
        var mammals = this.animals.filter(animal => animal.type == "bird");
        mammals.forEach(animal => document.write(`
      <article>
        <img src="${animal.img}" alt="${animal.name}">
        <div class = "right">
        <h1>${animal.name}</h1>
        <h3>type: ${animal.type}</h3>
        </div>
        <div class="info">
        <p>${animal.info}</p>
        </div>
      </article>
    `))
    }
}
function Animal(name, img, type, info) {
    this.name = name;
    this.img = img;
    this.type = type;
    this.info = info;
}

var tiger = new Animal("Tiger", "http://www.freeiconspng.com/uploads/tiger-png-7.png", "mammal", "The tiger (Panthera tigris) is the largest cat species, most recognizable for their pattern of dark vertical stripes on reddish-orange fur with a lighter underside. The species is classified in the genus Panthera with the lion, leopard, jaguar, and snow leopard. Tigers are apex predators, primarily preying on ungulates such as deer and bovids. They are territorial and generally solitary but social animals, often requiring large contiguous areas of habitat that support their prey requirements. This, coupled with the fact that they are indigenous to some of the more densely populated places on Earth, has caused significant conflicts with humans.");
var snake = new Animal("Snake", "http://pngimg.com/uploads/snake/snake_PNG4079.png", "lizard", "Snakes are elongated, legless, carnivorous reptiles of the suborder Serpentes.[2] Like all squamates, snakes are ectothermic, amniote vertebrates covered in overlapping scales. Many species of snakes have skulls with several more joints than their lizard ancestors, enabling them to swallow prey much larger than their heads with their highly mobile jaws. To accommodate their narrow bodies, snakes' paired organs (such as kidneys) appear one in front of the other instead of side by side, and most have only one functional lung. Some species retain a pelvic girdle with a pair of vestigial claws on either side of the cloaca. Lizards have evolved elongate bodies without limbs or with greatly reduced limbs about twenty five times indepenently via convergent evolution, leading to many lineages of legless lizards.[3] Legless lizards resemble snakes, but several common groups of legless lizards have eyelids and external ears, which snakes lack, although this rule is not universal (see Amphisbaenia, Dibamidae, and Pygopodidae).");
var eagle = new Animal("Eagle", "http://www.pngmart.com/files/1/Flying-Eagle-Transparent-Background.png", "bird", "Eagle is a common name for many large birds of prey of the family Accipitridae; it belongs to several groups of genera that are not necessarily closely related to each other. Most of the 60 species of eagles are from Eurasia and Africa.Outside this area, just 14 species can be found – two in North America, nine in Central and South America, and three in Australia.");
var shark = new Animal("Shark", "http://pngimg.com/uploads/shark/shark_PNG18833.png", "fish", "Sharks are a group of elasmobranch fish characterized by a cartilaginous skeleton, five to seven gill slits on the sides of the head, and pectoral fins that are not fused to the head. Modern sharks are classified within the clade Selachimorpha (or Selachii) and are the sister group to the rays. However, the term 'shark' has also been used for extinct members of the subclass Elasmobranchii outside the Selachimorpha, such as Cladoselache and Xenacanthus, as well as other Chondrichthyes such as the holocephalid eugenedontidans. Under this broader definition, the earliest known sharks date back to more than 420 million years ago. Acanthodians are often referred to as 'spiny sharks'; though they are not part of Chondrichthyes proper, they are a paraphyletic assemblage leading to cartilaginous fish as a whole.");
var wolf = new Animal("Wolf", "http://www.pngall.com/wp-content/uploads/2016/03/Wolf-Transparent.png", "mammal", "The wolf ( Canis lupus ) is the largest predator of the family of dogs (Canidae). Wolves usually live in family associations, called colloquially Rudel . In most regions, medium-sized to large ungulates are the main prey . Since the late Pleistocene, the species has spread throughout Europe , in many parts of Asia , including the Arabian Peninsula and Japan , and in North America .");
var octopus = new Animal("Octopus", "http://www.freepngimg.com/download/octopus/6-2-octopus-free-png-image.png", "fish", "The octopus (/ˈɒktəpəs/ or ~/pʊs/ ) is a soft-bodied, eight-armed mollusc of the order Octopoda. Around 300 species are recognised and the order is grouped within the class Cephalopoda with squids, cuttlefish and nautiloids. Like other cephalopods, the octopus is bilaterally symmetric with two eyes and a beak, with its mouth at the centre point of the arms (which are sometimes mistakenly called 'tentacles'). The soft body can rapidly alter its shape, enabling octopuses to squeeze through small gaps. They trail their eight arms behind them as they swim. The siphon is used both for respiration and for locomotion, by expelling a jet of water. Octopuses have a complex nervous system and excellent sight, and are among the most intelligent and behaviourally diverse of all invertebrates.");
var allAnimals = new AllAnimals;
allAnimals.addAnimal(octopus)
allAnimals.addAnimal(tiger);
allAnimals.addAnimal(snake);
allAnimals.addAnimal(eagle);
allAnimals.addAnimal(shark);
allAnimals.addAnimal(wolf);
