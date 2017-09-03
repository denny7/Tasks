// // Task 1
// function Task(name,workingHours){
//   this.name = name;
//   this.workingHours = workingHours;
// }
// function Employee(name,currentTask,hoursLeft){
//   this.name = name;
//   this.currentTask = currentTask;
//   this.hoursLeft = hoursLeft;
//   this.work = function work(){
//     if(this.currentTask.workingHours > this.hoursLeft){
//       this.currentTask.workingHours -= this.hoursLeft;
//       this.hoursLeft = 0;
//     } else {
//       this.hoursLeft -= this.currentTask.workingHours;
//       this.currentTask.workingHours = 0;
//     }
//   }
//   this.report = function report(){
//     console.log("Report za " + this.name + ". Toi raboti po " + this.currentTask.name +
//     " zadacha. Na rabotnika mu ostavat " + this.hoursLeft + " chasa. Na zadachata ostavat " + this.currentTask.workingHours + " chasa.")
//   }
// }
// var kopane = new Task("kopane",3);
// var rabornik1 = new Employee("Ivan", kopane, 5);
// rabornik1.work();
// rabornik1.report()

// //Task 2
// function Computer(year, price, isNotebook, hardDiskMemory, freeMemory, operationSystem){
//   this.year = year;
//   this.price = price;
//   this.isNotebook = isNotebook;
//   this.hardDiskMemory = hardDiskMemory;
//   this.freeMemory = freeMemory;
//   this.operationSystem = operationSystem;
//   this.comparePrice = function comparePrice(computer){
//     if(this.price > computer.price){
//       console.log("Cenata na tozi komputer e po-golqma ot cenata na vavedeniq.")
//       return 1;
//     }
//     if(this.price < computer.price){
//       console.log("Cenata na tozi komputer e po-malka ot cenata na vavedeniq.")
//       return -1;
//     } else {
//       console.log("Cenata na tozi komputer e ravna na cenata na vavedeniq.")
//       return 0;
//     }
//   }
// }
// var pc1 = new Computer(1995,100,false,4000,800,"Windows 95");
// var pc2 = new Computer(2017,5000,true,50000, 40000, "Windows 10");
// var pc3 = new Computer(2016,6000,false,60000, 40000, "Windows 10");
//
// console.log(pc1.comparePrice(pc2))
// console.log(pc3.comparePrice(pc2))

// Task 3
function Student(name, subject, grade, yearInCollege, age, hasDegree, money) {
    this.name = name;
    this.subject = subject;
    this.grade = grade;
    this.yearInCollege = yearInCollege;
    this.age = age;
    this.hasDegree = hasDegree;
    this.money = money;
    this.upYear = function upYear() {
        if (!hasDegree) {
            if (this.yearInCollege < 4) {
                this.yearInCollege += 1;
            } else {
                this.hasDegree = true;
                console.log("Studentat " + this.name + " veche e zavarshil!")
            }
        } else
            console.log("Studentat " + this.name + " veche e zavarshil!")
    }
    this.receiveScholarship = function receiveScholarship(min, amount) {
        if (this.age < 30 && this.grade >= min) {
            this.money += amount;
        }
        console.log("Studentat " + this.name + " ima " + this.money + " pari.")
    }
}
function StudentGroup(groupSubject) {
    this.groupSubject = groupSubject;
    this.students = new Array(5);
    this.freePlaces = 5;
    this.index = 0;
    this.addStudent = function addStudent(student) {
        if (student.subject == this.groupSubject && this.freePlaces > 0) {
            this.students[this.index] = student;
            this.index++;
            this.freePlaces--;
        } else {
            if (this.freePlaces == 0) {
                console.log("No free places!");
            }
            if (student.subject != this.groupSubject) {
                console.log("Subject not match!")
            }
        }
    }
    this.emptyGroup = function emptyGroup() {
        this.freePlaces = 5;
        this.students = new Array(5);
    }
    this.best = 0;
    this.theBestStudentName = function theBestStudentName() {
        for (var index = 0; index < this.students.length; index++) {
            if (typeof this.students[index] == "object") {
                if (this.students[index].grade > this.best) {
                    this.best = this.students[index].grade;
                    this.bestStudent = this.students[index];
                }
            }
        }
        console.log("The best student is " + this.bestStudent.name + ". He has " + this.best + " degree");
    }
    this.printStudentsInGroup = function printStudentsInGroup() {
        for (var index = 0; index < this.students.length; index++) {
            if (typeof this.students[index] == "object") {
                console.log(this.students[index].name + " ima uspeh " + this.students[index].grade + ". Toi e " + this.students[index].yearInCollege + " godina v koleja.")
            }
        }
    }
}
var st1 = new Student("Gosho", "IM", 5.4, 2, 25, false, 10);
var st2 = new Student("Pesho", "IM", 4, 1, 21, false, 2);
var st3 = new Student("Misho", "IM", 2.8, 2, 22, false, 100);
var st4 = new Student("Spiro", "IM", 3.5, 3, 43, false, 50);
var st5 = new Student("Ramon", "IM", 3, 3, 20, false, 20);
var st6 = new Student("Rambo", "IMa", 4.9, 3, 29, false, 1);

st1.upYear();
var im = new StudentGroup("IM");
im.addStudent(st1);
im.addStudent(st2);
im.addStudent(st3);
im.addStudent(st4);
// im.addStudent(st5);
im.addStudent(st6);

im.printStudentsInGroup()
im.theBestStudentName()
st1.receiveScholarship(4.8, 500);
