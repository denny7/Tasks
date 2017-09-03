function print(n){
  if(n < 1){
    return "";
  }
  return print(n - 1) + n + " ";
}
console.log(print(100));

// function print2(n){
//   if(n < -10){
//     return "";
//   }
//   if(n % 2 != 0){
//     return print2(n - 2) + n + " "
//   }
//   return print2(n - 1);
// }
// console.log(print2(10));

// function print(n){
//   if(n > 10){
//     return 0;
//   }
//   return print(n +1) + n + " ";
// }
// console.log(print(1));

// function print(n,m){
//   if(n > m){
//     return 0;
//   }
//   return print(n, m - 1) + m + " ";
// }
// console.log(print(2,5))

// function sbor(n){
//   if(n < 1){
//     return 0;
//   }
//   return sbor(n - 1) + n;
// }
// console.log(sbor(7));

// function print(n,index,count){
//   if(count >= n){
//     return 0;
//   }
//   return print(n,index - 3,count +1) + index + ","
// }
// console.log(print(5,5*3,0))

// function print(a,b){
//   if(b < a){
//     return "";
//   }
//   if(b % 3 == 0){
//     return print(a,b-1) + "skip" + b + " ";
//   }
//   return print(a,b-1) + Math.pow(b,2) + " "
// }
// console.log(print(2,10));

// function prosto(n,istina,index){
// if( index == n -1){
//   return istina;
// }
// if(n % index == 0){
//   istina = false;
// }
// return prosto(n,istina,index + 1);
// }
// console.log(prosto(8,true,2))
