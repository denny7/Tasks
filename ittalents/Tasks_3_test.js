// var arr = [-1,3,5,-2,5,-8];
// arr = arr.sort();
// function negative(arr,index){
//   if(arr[index] >= 0){
//     return index;
//   }
//   return negative(arr,index + 1);
// }
// console.log(negative(arr,0));

// var arr = [1,2,3,4,5,6,9];
// function sum3(arr,index){
//   if(index >= arr.length){
//     return 0;
//   }
//   if(arr[index] % 3 == 0){
//     return sum3(arr, index + 1) + arr[index];
//   }
//   return sum3(arr, index + 1);
// }
// console.log(sum3(arr,0));

// var arr = [1,2,3,4,5,7];
// function product(arr,x,index){
//   if(isNaN(x) || x <= 0){
//     return "X trqbva da bade chislo"
//   }
//   if(index >= arr.length){
//   return 1;
//   }
//   if(arr[index] > x && arr[index] % 2 != 0){
//     return product(arr,x,index + 1) * arr[index]
//   }
//   return product(arr,x,index + 1)
// }
// console.log(product(arr,2,0));


var arr = [1,2,3,4,5,6,9,3,107];
function diference(min,max,arr,index){
  if(index >= arr.length){
    return max-min;
  }
  if(min > arr[index]){
    min = arr[index];

  }
  if(max < arr[index]){
    max = arr[index];

  }
  return diference(min,max,arr,index + 1);
}
function result(arr){
  return diference(arr[0],arr[0],arr,0)
}
console.log(result(arr))
