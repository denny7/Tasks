function Page(article, text) {
    this.article = article;
    this.text = text;
}
Page.prototype = {
    constructor: Page,
    addText: function(text) {
        this.text += text;
    },
    changeText: function(text) {
        this.text = text;
    },
    deleteText: function() {
        this.text = "";
    },
    searchWord: function(word) {
        var IsThereThisWord = this.text.indexOf(word)
        if (IsThereThisWord != -1) {
            IsThereThisWord = true;
        } else {
            IsThereThisWord = false;
        }
        document.write(`
<p> Dumata ${word} ima li q v teksta na stranicata : ${IsThereThisWord} </p>
      `)
    },
    containsDigits: function() {
        this.digits = /[0-9]/.test(this.text);
    },
    showPage: function() {
        document.write(`
<p> ${this.article} </p>
<p> ${this.text} </p>
      `)
    }
}
function SimpleNotepad(numberOfPages) {
    this.pages = [];
    for (let index = 0; index < numberOfPages; index++) {
        this.pages.push(new Page("article " + index, "text " + index))
    }
}
SimpleNotepad.prototype = {
    constructor: SimpleNotepad,
    addTextToPage: function(number, text) {
        if (!isNaN(number) && number < this.pages.length) {
            this.pages[number].addText(text);
        }
    },
    changeTextToPage: function(number, text) {
        if (!isNaN(number) && number < this.pages.length) {
            this.pages[number].changeText(text);
        }
    },
    deleteTextOnPage: function(number) {
        if (!isNaN(number) && number < this.pages.length) {
            this.pages[number].deleteText();
        }
    },
    showAllPagesInfo: function() {
        this.pages.forEach(x => x.showPage());
    },
    searchWordInPage: function(word,number) {
        if (!isNaN(number) && number <= this.pages.length - 1) {
            this.pages[number].searchWord(word);
        } else {
          console.log("Number should be integer less than pages length!")
        }
    },
    printAllPagesWithDigits: function() {
        this.pages.forEach(function(x) {
            x.containsDigits();
            if (x.digits) {
                x.showPage();
            }
        })
    }
}
function SecuredNotepad(numberOfPages, password) {
  if(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d]).{6,}$/.test(password)){
    SimpleNotepad.call(this, numberOfPages);
    this.password = password;
  } else {
    console.log("Invalid password")
  }
}
SecuredNotepad.prototype = Object.create(SimpleNotepad.prototype);
SecuredNotepad.prototype.constructor = SecuredNotepad;
SecuredNotepad.prototype.addTextToPage = function(number, text, password) {
    if (password == this.password) {
        SimpleNotepad.prototype.addTextToPage.call(this, number, text);
    } else {
      console.log("Invalid password");
    }
}
SecuredNotepad.prototype.changeTextToPage = function(number, text, password) {
    if (password == this.password) {
        SimpleNotepad.prototype.changeTextToPage.call(this, number, text);
    } else {
      console.log("Invalid password");
    }
}
SecuredNotepad.prototype.deleteTextOnPage = function(number, password) {
    if (password == this.password) {
        SimpleNotepad.prototype.deleteTextOnPage.call(this, number);
    } else {
      console.log("Invalid password");
    }
}
SecuredNotepad.prototype.showAllPagesInfo = function(password) {
    if (password == this.password) {
        SimpleNotepad.prototype.showAllPagesInfo.call(this);
    } else {
      console.log("Invalid password");
    }
}
SecuredNotepad.prototype.searchWordInPage = function(word,number, password) {
    if (password == this.password) {
        SimpleNotepad.prototype.searchWordInPage.call(this, word,number, password);
    } else {
      console.log("Invalid password");
    }
}
SecuredNotepad.prototype.printAllPagesWithDigits = function(password) {
    if (password == this.password) {
        SimpleNotepad.prototype.printAllPagesWithDigits.call(this);
    } else {
      console.log("Invalid password");
    }
};

function ElectronicDevice() {
    this.pusnatoLiEUstroistvoto = false;
    this.start = function() {
        if (!this.pusnatoLiEUstroistvoto) {
            this.pusnatoLiEUstroistvoto = true;
        }
    },
    this.stop = function() {
        if (this.pusnatoLiEUstroistvoto) {
            this.pusnatoLiEUstroistvoto = false;
        }
    },
    this.isStarted = function() {
        document.write(`
<p> Pusnato li ustroistvoto ${this.pusnatoLiEUstroistvoto} </p>
        `)
    }
}

function ElectronicSecuredNotepad(numberOfPages, password) {
    SecuredNotepad.call(this, numberOfPages, password);
    ElectronicDevice.call(this);
}
ElectronicSecuredNotepad.prototype = Object.create(SecuredNotepad.prototype);
ElectronicSecuredNotepad.prototype.constructor = ElectronicSecuredNotepad;
ElectronicSecuredNotepad.prototype.addTextToPage = function(number, text, password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.addTextToPage.call(this, number, text, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}

ElectronicSecuredNotepad.prototype.changeTextToPage = function(number, text, password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.changeTextToPage.call(this, number, text, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}
ElectronicSecuredNotepad.prototype.deleteTextOnPage = function(number, password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.deleteTextOnPage.call(this, number, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}
ElectronicSecuredNotepad.prototype.showAllPagesInfo = function(password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.showAllPagesInfo.call(this, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}
ElectronicSecuredNotepad.prototype.searchWordInPage = function(word,number,password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.searchWordInPage.call(this, word, number, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}
ElectronicSecuredNotepad.prototype.printAllPagesWithDigits = function(password) {
    if (this.pusnatoLiEUstroistvoto) {
        SecuredNotepad.prototype.printAllPagesWithDigits.call(this, password)
    } else {
      console.log("Ustroistvoto ne e vklucheno")
    }
}
var simple = new SimpleNotepad(15);
// var secured = new SecuredNotepad(10, "denny");
// secured.showAllPagesInfo("denny")
// secured.deleteTextOnPage(5, "deny");
// secured.printAllPagesWithDigits("denny");
var electronicSecuredNotepad = new ElectronicSecuredNotepad(5, "Denny7");
electronicSecuredNotepad.start()
// electronicSecuredNotepad.showAllPagesInfo("denny")
electronicSecuredNotepad.deleteTextOnPage(4, "Denny7");
electronicSecuredNotepad.searchWordInPage("text",0,"Denny7")
electronicSecuredNotepad.deleteTextOnPage(0,"Denny7")
electronicSecuredNotepad.showAllPagesInfo("Denny7");

// console.log(electronicSecuredNotepad.pages)
// console.log(electronicSecuredNotepad.pusnatoLiEUstroistvoto)
// console.log(electronicSecuredNotepad)
