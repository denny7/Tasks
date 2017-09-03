var people = [];
function Person(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
    this.showPersonInfo = function() {
        console.log("Name : " + this.name + "\n age : " + this.age + "\n is Male : " + this.isMale)
    }
    people.push(this);
}
function Student(name, age, isMale, score) {
    Person.call(this, name, age, isMale);
    this.score = score;
    this.showStudentInfo = function() {
        this.showPersonInfo();
        console.log("Score : " + this.score);
    }
}
function Employee(name, age, isMale, daySalary) {
    Person.call(this, name, age, isMale);
    this.daySalary = daySalary;
}
Employee.prototype = Object.create(Person.prototype, {
    constructor: {
        value: Person;
    }
});
Employee.prototype.overtime = function(broiChasove) {
    if (broiChasove > 8) {
        this.overtimeChasove = broiChasove - 8;
        if (this.age >= 18) {
            let oneHourOvertime = (this.daySalary / 8) * 1.5;
            this.overtimePrice = this.overtimeChasove * oneHourOvertime;
        } else {
            this.overtimePrice = 0;
        }
    }
}
Employee.prototype.showInfo = function() {
    this.showPersonInfo();
    console.log("Salary : " + this.daySalary);
    console.log("Overtime Hours : " + this.overtimeChasove);
    console.log("Overtime Cost : " + this.overtimePrice);
}
var tedy = new Employee("Teodora", 18, false, 40);
var rosen = new Employee("Rosen", 35, true, 60);
var misho = new Person("Mihail", 23, true);
var snejana = new Person("Snejana", 33, false);
var denny = new Student("Denislav", 22, true, 5)
var samy = new Student("Samy", 22, true, 4.5)
// misho.showPersonInfo();
// tedy.overtime(10);
// rosen.overtime(15);
// tedy.showInfo();
// denny.showStudentInfo();
// console.log(people);
// for(let index = 0; index < people.length; index++){
//   if(people[index] instanceof Student){
//     people[index].showStudentInfo();
//   } else {
//     if(people[index] instanceof Employee){
//       people[index].showInfo();
//   } else {
//       people[index].showPersonInfo();
//     }
//   }
// };
for (let index = 0; index < people.length; index++) {
  // Search if key in people[index] == "overtime"
    for (var key in people[index]) {
        if (key == "overtime") {
            people[index].overtime(10)
            people[index].showInfo();
            break;
        }
    }
}
