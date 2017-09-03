function User(name, egn, phone) {
    this.name = name;
    this.phone = phone;
    this.egn = egn;
    this.account = [];
}
User.prototype.addAccount = function(account) {
    this.account.push(account);
}


function Account(type,money,bank,owner) {
    this.type = type;
    this.interest = 0.03;
    this.money = money;
    this.IBAN = "BG "
    for (let i = 0; i < 8; i++) {
        this.IBAN += Math.floor(Math.random() * 9 + 1)
    }
    this.bank = bank;
    this.owner = owner;
}
Account.prototype = {
    constructor: Account,
    withdraw: function(howMuch) {
        if (this.money >= howMuch) {
            console.log("Vie izteglihte uspeshno " + howMuch + " lv.");
            this.money -= howMuch;
        } else {
            console.log("Neuspeshna tranzakciq!");
        }
    },
    deposit: function(howMuch) {
        this.money += howMuch;
        console.log("Vie depozirahte uspeshno " + howMuch + " lv.");
    },
    payInterest: function() {
        this.money -= this.money * this.interest;
        console.log("Vie platihte uspeshno vashata lihva na stoinost " + this.money * this.interest);
    }
}



function Bank(name) {
    this.name = name;
    this.users = [];
    this.accounts = [];
}
Bank.prototype = {
    constructor: Bank,
    addClient: function(name, egn) {
        if (typeof name == "object" && egn == name.egn) {
            this.users.push(name);
        } else {
            this.users.push(new User(name,egn))
        }
    },
    openAccount: function(egn, sum) {
        var user = this.users.find(u => u.egn == egn)
        if (typeof user == "undefined") {
            console.log("Nqma takav potrebitel!");
        } else {
        var novAccount = new Account("kreditna",sum,this.name,user);
        this.accounts.push(novAccount)
        user.account.push(novAccount);
      }
      return novAccount
    },
  closeAccount : function (IBAN){
    var iban = this.accounts.find(c => c.IBAN == IBAN);
    if(typeof iban == "undefined"){
      console.log("Nqma account s takav IBAN")
    } else {
      this.accounts.splice(this.accounts.indexOf(iban),1);
      iban.owner.account.splice(iban.owner.account.indexOf(iban),1)
    }
  },
  withdraw : function(IBAN,sum){
    var iban = this.accounts.find(c => c.IBAN == IBAN);
    if(typeof iban == "undefined"){
      console.log("Nqma account s takav IBAN")
    } else {
      iban.withdraw(sum)
    }
  },
  depostit : function(IBAN,sum){
    var iban = this.accounts.find(c => c.IBAN == IBAN);
    if(typeof iban == "undefined"){
      console.log("Nqma account s takav IBAN")
    } else {
      iban.deposit(sum)
    }
  },
  showAccounts : function(egn){
    var user = this.users.find(u => u.egn == egn)
    if (typeof user == "undefined") {
        console.log("Nqma takav potrebitel!");
    } else {
    console.log(user.account)
  }

  }
}



var dsk = new Bank("DSK");
var pesho = new User("Pesho", 9000000000,"0893600167");
dsk.addClient("Gosho", 9503166068)
dsk.addClient(pesho,9000000000)
dsk.addClient("Misho",8888888888)
dsk.openAccount(9503166068,50)
dsk.openAccount(9000000000,100)
var mishoAccount = dsk.openAccount(8888888888,70);
console.log(mishoAccount)
console.log(dsk.accounts)
dsk.withdraw(mishoAccount.IBAN, 50)
dsk.showAccounts(8888888888)
// console.log(dsk.users)

// console.log(dsk.accounts)
