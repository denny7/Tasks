// var computer = {
//   year : 2016,
//   price : 900,
//   isNotebook : false,
//   hardDiscMemory : 1024,
//   freeMemomry : 400,
//   operationSystem : "windows",
//   changeOperationSystem(newOperationSystem){
//     this.operationSystem = newOperationSystem;
//   },
//   useMemory(memory){
//     if(this.freeMemomry > memory){
//     this.freeMemomry -= memory
//   } else {
//     console.log("Not enough free memory!");
//   }
//   }
// }
// computer.useMemory(4001);
// console.log(computer.freeMemomry)
// computer.changeOperationSystem("Linux");
// console.log(computer.operationSystem)


var gsm = {
  obajdane : {
    priceForAMinute : 0.2,
    caller : null,
    receiver : null,
    duration : 0
  },
  model : "Sony",
  hasSimCard : true,
  simMobileNumber : "0893600167",
  outgoingCallsDuration : 0,
  lastIncomingCall : 0,
  lastOutgoingCall : 0,
  insertSimCard(simMobileNumber){
    if(simMobileNumber.charAt(0) == "0" && simMobileNumber.charAt(1) == "8" && simMobileNumber.length == 10){
      this.hasSimCard = true;
      this.simMobileNumber = simMobileNumber;
    } else {
      console.log("Invalid number!");
    }
  },
  removeSimCard(){
    this.hasSimCard = false;
    this.simMobileNumber = "";
  },
  call(receiver,duration){
    if(!isNaN(duration) && receiver.simMobileNumber != this.simMobileNumber && this.hasSimCard && receiver.hasSimCard){
      this.lastOutgoingCall = duration;
      this.duration = duration;
      receiver.lastIncomingCall= duration;
      this.outgoingCallsDuration += duration;
      this.obajdane.caller = this;
      this.obajdane.receiver = receiver;
      this.obajdane.duration = duration
    } else {
      console.log("Invalid call!")
    }
  },
  getSumForCall(){
    return "Your bill is: " + (this.outgoingCallsDuration * this.obajdane.priceForAMinute).toFixed(2) + "lv.";
  },
  printInfoForTheLastOutgoingCall(){
    console.log("Last Outgoing Call: duration: " + this.lastOutgoingCall + ", receiver model:  " + this.obajdane.receiver.model + ", receiver phone number: " + this.obajdane.receiver.simMobileNumber)
  },
 printInfoForTheLastIncomingCall(){
   console.log("Last incoming call: duration: " + this.lastIncomingCall + ", caller model " + this.obajdane.receiver.model + ", caller phone number: " + this.obajdane.receiver.simMobileNumber);
 }
}
// var gsm2 = {
//     obajdane : {
//       priceForAMinute : 0.2,
//       caller : null,
//       receiver : null,
//       duration : 0
//     },
//   model : "Iphone",
//   hasSimCard : true,
//   simMobileNumber : "0894444444",
//   outgoingCallsDuration : 0,
//   lastIncomingCall : 0,
//   lastOutgoingCall : 0,
//   insertSimCard(simMobileNumber){
//     if(simMobileNumber.charAt(0) == "0" && simMobileNumber.charAt(1) == "8" && simMobileNumber.length == 10){
//       this.hasSimCard = true;
//       this.simMobileNumber = simMobileNumber;
//     } else {
//       console.log("Invalid number!")
//     }
//   },
//   removeSimCard(){
//     this.hasSimCard = false;
//     this.simMobileNumber = "";
//   },
//   call(receiver,duration){
//     if(!isNaN(duration) && receiver.simMobileNumber != this.simMobileNumber && this.hasSimCard && receiver.hasSimCard){
//       this.lastOutgoingCall = duration;
//       this.duration = duration;
//       receiver.lastIncomingCall = duration;
//       this.outgoingCallsDuration += duration;
//       this.obajdane.caller = this;
//       this.obajdane.receiver = receiver;
//       this.obajdane.duration = duration
//     } else{
//       console.log("Invalid call!")
//     }
//   },
//   getSumForCall(){
//     return "Your bill is: " + (this.outgoingCallsDuration * this.obajdane.priceForAMinute).toFixed(2) + "lv.";
//   },
//   printInfoForTheLastOutgoingCall(){
//     console.log("Last Outgoing Call: duration: " + this.lastOutgoingCall + ", receiver model:  " + this.obajdane.receiver.model + ", receiver phone number: " + this.obajdane.receiver.simMobileNumber)
//   },
//  printInfoForTheLastIncomingCall(){
//    console.log("Last incoming call: duration: " + this.lastIncomingCall + ", caller model " + this.obajdane.receiver.model + ", caller phone number: " + this.obajdane.receiver.simMobileNumber);
//  }
// }

var gsm2 = Object.create(gsm)
gsm2.insertSimCard("0888888888")

Object.freeze(gsm2)

gsm2.call(gsm,55)
gsm.call(gsm2,25)
gsm2.printInfoForTheLastOutgoingCall()
gsm2.printInfoForTheLastIncomingCall()
gsm.printInfoForTheLastOutgoingCall()
gsm.printInfoForTheLastIncomingCall()
gsm.call(gsm2,44)
gsm2.printInfoForTheLastIncomingCall()
gsm2.call(gsm,33);
gsm2.printInfoForTheLastOutgoingCall()
gsm.printInfoForTheLastIncomingCall()
gsm.removeSimCard();
gsm.insertSimCard("0899999999")
gsm2.call(gsm,20)
console.log(gsm2)
gsm.getSumForCall()
console.log(gsm2.getSumForCall())
console.log(Object.isSealed(gsm))
console.log(Object.isExtensible(gsm))
gsm.name = "Name"
console.log(Object.keys(gsm))
Object.defineProperty(gsm,"model",{
  value : "Motorola",
  writable : false,
  configurable : false,
  enumerable : true
})
gsm.model = "Samsung"
console.log(Object.keys(gsm))
console.log(Object.getOwnPropertyNames(gsm))
