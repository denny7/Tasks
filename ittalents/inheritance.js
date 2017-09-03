function Person(name,age,proffesion){
  this.name = name;
  this.age = age;
  this.jump = function(){
    console.log(this.name + " jump!")
  }
  this.proffesion = proffesion;
}
Person.prototype = {
  constructor : Person,
  sayHello : function(){
    console.log(this.name + " says Hello to you!")
  }
}
function Student(name,age,proffesion,grade){
  Person.apply(this,[name,age,proffesion]);
  this.grade = grade
}
Student.prototype = Object.create(Person.prototype,{
  constructor : {
  value:Student
}
})
Student.prototype.sayBye = function(){
  console.log(this.name + " said Bye bye")
}
var james = new Person("James",19)
james.sayHello();
var denny = new Student("Denny",22,"programmer",5)
denny.sayHello()
denny.jump()
function ManagementStudent(name,age,proffesion,grade,specialnost){
  Student.call(this,name,age,proffesion,grade);
  this.specialnost = specialnost;
}
Management.prototype = Object.create(Student.prototype, {
  constructor : {
    value : ManagementStudent
  }
});
// Managament student is Student. Student is Person.
// ManagementStudent inherits methods from Student.prototype and from Person.prototype
// With call(this,prop1,prop2)/apply(this,[prop1,pro2]) ManagementStudent inherits props from Student, and Student from Person
var sinan = new ManagementStudent("Sinan",22,"builder",3,"IM");
sinan.sayHello();
console.log(sinan.specialnost)
sinan.jump()
console.log(sinan.proffesion)
