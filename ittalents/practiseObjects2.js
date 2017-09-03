function GSM(model, simMobileNumber) {
  if (simMobileNumber.charAt(0) == "0" && simMobileNumber.charAt(1) == "8" && simMobileNumber.length == 10) {
      this.hasSimCard = true;
      this.simMobileNumber = simMobileNumber;
  } else {
    simMobileNumber = "",
    this.hasSimCard = false;
    console.log("Invalid number!")
  }
    if (arguments.length == 2 && simMobileNumber != "") {
        this.hasSimCard = true;
        this.simMobileNumber = simMobileNumber;
    } else {
        this.hasSimCard = false;
        this.simMobileNumber = "";
    }
    this.obajdane = {
        priceForAMinute: 0.2,
        caller: "",
        receiver: "",
        duration: 0,
        lastCaller : ""
    };
    this.model = model;
    this.outgoingCallsDuration = 0;
    this.lastIncomingCall = 0;
    this.lastOutgoingCall = 0;
    this.insertSimCard = function insertSimCard(simMobileNumber) {

        if (simMobileNumber.charAt(0) == "0" && simMobileNumber.charAt(1) == "8" && simMobileNumber.length == 10) {
            this.hasSimCard = true;
            this.simMobileNumber = simMobileNumber;
        } else {
            console.log("Invalid number!");
        }
    }
    this.removeSimCard = function removeSimCard() {
        this.hasSimCard = false;
        this.simMobileNumber = "";
    }
    this.call = function call(receiver, duration) {
        if (!isNaN(duration) && receiver.simMobileNumber != this.simMobileNumber && this.hasSimCard && receiver.hasSimCard) {
            this.lastOutgoingCall = duration;
            this.duration = duration;
            receiver.lastIncomingCall = duration;
            this.outgoingCallsDuration += duration;
            this.obajdane.caller = this;
            this.obajdane.receiver = receiver;
            this.obajdane.duration = duration
            receiver.obajdane.lastCaller = this;
        } else {
            console.log("Invalid call!")
        }
    }
    this.getSumForCall = function getSumForCall() {
        return "Your bill is: " + (this.outgoingCallsDuration * this.obajdane.priceForAMinute).toFixed(2) + "lv.";
    };
    this.printInfoForTheLastOutgoingCall = function printInfoForTheLastOutgoingCall() {
      if(this.lastOutgoingCall != 0){
        console.log("Last Outgoing Call: duration: " + this.lastOutgoingCall + ", receiver model:  " +
        this.obajdane.receiver.model + ", receiver phone number: " + this.obajdane.receiver.simMobileNumber);
      } else {
        console.log("There is not outgoing call!");
      }
    };
    this.printInfoForTheLastIncomingCall = function printInfoForTheLastIncomingCall() {
      if(this.lastIncomingCall != 0){
        console.log("Last incoming call: duration: " + this.lastIncomingCall + ", caller model " +
        this.obajdane.lastCaller.model + ", caller phone number: " + this.obajdane.lastCaller.simMobileNumber);
      } else {
        console.log("There is not incoming call!");
      }
    };
}
var gsm1 = new GSM("Sony","0893600167");
var gsm2 = new GSM("Iphone", "0898888888")
var gsm3 = new GSM("Nokia", "893111111")
gsm1.call(gsm2,55);
gsm3.call(gsm1,20)
gsm1.printInfoForTheLastIncomingCall();
gsm2.printInfoForTheLastIncomingCall()
gsm1.printInfoForTheLastOutgoingCall();
