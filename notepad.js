function Page(title, text) {
    if (typeof title == "string") {
        this.title = title;
    }
    if (typeof text == "string") {
        this.text = text;
    }
}
Page.prototype = {
    constructor: Page,
    addText: function(text) {
        if (typeof text == "string") {
            this.text += text;
        }
    },
    addTitle: function(title) {
        if (typeof title == "string") {
            this.title = title;
        }
    },
    deleteText: function() {
        this.text = "";
    },
    showPage: function() {
        console.log(this.title);
        console.log(this.text);
    },
    searchWord: function(word) {
        var found = this.text.split(' ').find(x => x == word)
        result = found == word
            ? console.log(true)
            : console.log(false)
    },
    containsDigits: function() {
        this.digits = /[0-9]/.test(this.text);
    }
}
function SimpleNotepad(numberOfPages) {
    if (!isNaN(numberOfPages) && numberOfPages >= 1) {
        this.pages = [];
        for (let index = 0; index < numberOfPages; index++) {
            this.pages.push(new Page());
        }
    }
}
SimpleNotepad.prototype = {
    constructor: SimpleNotepad,
    addTextToPage: function(numberOfPage, text) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length) {
            this.pages[numberOfPage].addText(text);
        }
    },
    addTitleToPage: function(numberOfPage, title) {
        if (typeof title == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length) {
            this.pages[numberOfPage].addTitle(title);
        }
    },
    addNewText: function(numberOfPage, text) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length) {
            this.pages[numberOfPage].deleteText();
            this.pages[numberOfPage].addText(text);
        }
    },
    deleteTextFromPage: function(numberOfPage) {
        if (!isNaN(numberOfPage) && numberOfPage < this.pages.length) {
            this.pages[numberOfPage].deleteText();
        }
    },
    printAllPages: function() {
        this.pages.forEach(page => page.showPage());
    },
    searchWord: function(numberOfPage, word) {
        if (typeof word == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length) {
            this.pages[numberOfPage].searchWord(word);
        }
    },
    printAllPagesWithDigits: function() {
        for (let index = 0; index < this.pages.length; index++) {
            this.pages[index].containsDigits()
            if (this.pages[index].digits == true) {
                this.pages[index].showPage();
            }
        }
    }
}
function SecuredNotepad(numberOfPages, password) {
    this.password = password;
    if (!isNaN(numberOfPages) && numberOfPages >= 1) {
        this.pages = [];
        for (let index = 0; index < numberOfPages; index++) {
            this.pages.push(new Page());
        }
    }
}
SecuredNotepad.prototype = {
    constructor: SecuredNotepad,
    addTextToPage: function(numberOfPage, text, password) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password) {
            this.pages[numberOfPage].addText(text);
        }
    },
    addTitleToPage: function(numberOfPage, title, password) {
        if (typeof title == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password) {
            this.pages[numberOfPage].addTitle(title);
        }
    },
    addNewText: function(numberOfPage, text, password) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password) {
            this.pages[numberOfPage].deleteText();
            this.pages[numberOfPage].addText(text);
        }
    },
    deleteTextFromPage: function(numberOfPage, password) {
        if (!isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password) {
            this.pages[numberOfPage].deleteText();
        }
    },
    printAllPages: function(password) {
        if (password == this.password) {
            this.pages.forEach(page => page.showPage());
        }
    },
    searchWord: function(numberOfPage, word, password) {
        if (typeof word == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password) {
            this.pages[numberOfPage].searchWord(word);
        }
    },
    printAllPagesWithDigits: function(password) {
        if (password == this.password) {
            for (let index = 0; index < this.pages.length; index++) {
                this.pages[index].containsDigits()
                if (this.pages[index].digits == true) {
                    this.pages[index].showPage();
                }
            }
        }
    }
}
function ElectronicDevice() {
    this.isStarted = false;
}
ElectronicDevice.prototype = {
    constructor: ElectronicDevice,
    start: function() {
        this.isStarted = true;
    },
    stop: function() {
        this.isStarted = false;
    },
    isOn: function() {
        console.log(isStarted)
    }
}
function ElectronicSecuredNotepad(password, numberOfPages) {
    if (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[\d]).{6,}$/.test(password)) {
        if (!isNaN(numberOfPages) && numberOfPages >= 1) {
            this.pages = [];
            for (let index = 0; index < numberOfPages; index++) {
                this.pages.push(new Page());
            }
        }
        this.password = password;
        this.isStarted = false;
    } else {
        console.log("Invalid password")
    }
}
ElectronicSecuredNotepad.prototype = {
    constructor: ElectronicSecuredNotepad,
    start: function() {
        this.isStarted = true;
    },
    stop: function() {
        this.isStarted = false;
    },
    isOn: function() {
        console.log(isStarted)
    },
    addTextToPage: function(numberOfPage, text, password) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password && this.isStared) {
            this.pages[numberOfPage].addText(text);
        }
    },
    addTitleToPage: function(numberOfPage, title, password) {
        if (typeof title == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password && this.isStared) {
            this.pages[numberOfPage].addTitle(title);
        }
    },
    addNewText: function(numberOfPage, text, password) {
        if (typeof text == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password && this.isStared) {
            this.pages[numberOfPage].deleteText();
            this.pages[numberOfPage].addText(text);
        }
    },
    deleteTextFromPage: function(numberOfPage, password) {
        if (!isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password && this.isStared) {
            this.pages[numberOfPage].deleteText();
        }
    },
    printAllPages: function(password) {
        if (password == this.password && this.isStared) {
            this.pages.forEach(page => page.showPage());
        }
    },
    searchWord: function(numberOfPage, word, password) {
        if (typeof word == "string" && !isNaN(numberOfPage) && numberOfPage < this.pages.length && password == this.password && this.isStared) {
            this.pages[numberOfPage].searchWord(word);
        }
    },
    printAllPagesWithDigits: function(password) {
        if (password == this.password && this.isStared) {
            for (let index = 0; index < this.pages.length; index++) {
                this.pages[index].containsDigits()
                if (this.pages[index].digits == true) {
                    this.pages[index].showPage();
                }
            }
        }
    }
}
var elDevice = new ElectronicSecuredNotepad("ss1D223", 15);
var simpleNotepad = new SimpleNotepad(10);
var securedNotepad = new SecuredNotepad(3, "123456");
securedNotepad.addNewText(2, "some text", "123456")
simpleNotepad.addNewText(2, "ssssss 15 ssssasasa");
simpleNotepad.addTitleToPage(5, "mmm");
