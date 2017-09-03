
// function umnojenie(n) {
//     if (n == 0) {
//         return 1;
//     }
//     if (n % 3 == 0) {
//         return n * umnojenie(n - 3)
//     }
//     return umnojenie(n - 1);
// }
// console.log(umnojenie(6));

// function sum(mas){
// if(mas.length == 1){
//     return mas[0];
// }
// return sum(mas.slice(1)) + mas[0]
// }
// var mas = [1,2,3,4,5];
// console.log(sum(mas))

// function maxRecursive(arr,max){
//     if(arr.length == 1){
//         return max;
//     }
//     if(arr[0] > max){
//         max = arr[0];
//         return maxRecursive(arr.slice(1),max);
//     }
//     return maxRecursive(arr.slice(1),max)
// }
// arr = [1,2,9,2,3];
// console.log(maxRecursive(arr,0))

function prostoChislo(n,istina,index){
    if(index == n - 1){
        return istina;
    }
    if(n % index == 0){
        istina = false;
    }
   return prostoChislo(n,istina,index + 1)
}
function giveMe(n){
    return prostoChislo(n,true,2);
}
console.log(giveMe(8))
