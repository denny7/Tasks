var a = [1,2,7];
var b = [1,2,7];
var equal = false;
if(a.length == b.length){
  for(var index = 0; index < a.length; index++){
    if(a[index] == b[index]){
      equal = true;
    } else {
      equal = false;
      break;
    }
  }
  if (equal == true){
    console.log("Masivite sa ednakvi!");
  } else {
    console.log("Masivite ne sa ednakvi!");
  }
  console.log("Masivite imat ednakva daljina.")
} else{
  console.log("Masivite imat razlichna daljina i ne sa ednakvi!");
}
