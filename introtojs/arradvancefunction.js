// map, filter

// let arr = [10, 20, 30, 50, 40]

// [1, 2, 0, 2, 1]

// halfarr = [10, 20, 30, 25,40]

// let halfarr = arr.map(mapFunction)

// function mapFunction(num, i){
//     if(i == 3){
//         return num/2;
//     } else if(i==2){
//         return num*2;
//     } else {  // i=0, 1, 4
//         return num;
//     }

// }

// [10, 20, undefined, 25, 40]

// console.log(halfarr);

// let filterarr = arr.filter(filterFunction);

// function filterFunction(val, index, arr){
//     if(val % 3 == 1){
//         return val;
//     }
// }

// console.log(filterarr);


// let arrofstr = ["helo", "knaknsk", "kanknskns", "kdnkndlsnk", "mnknw"];

// let strlen7 = arrofstr.filter(function(val){
//     let len = val.length;
//     if(len >= 7){
//         return val;
//     }
// });

// console.log(strlen7);
let arr = [10, 20, 30, 50, 40]
// prev = 110,
// curr = 40
// reduce
// let sumOfArr = arr.reduce(function(prev, curr){
//     return prev+ curr;
// })

// console.log(sumOfArr);
// similar functionality written in loop way
// let sum =0;
// for(let i=0;i<arr.length;i++){
//     sum = sum+arr[i];
// }
// console.log(sum);

// function abc(arr){




//     sum(arr);
// }

// function pqr(arr){





//     sum(arr);
// }


// function xyz(a= true){
//     console.log(a);
// }

// xyz();

// diff between continue and break
// console.log("continue")
// for(let i=0;i<arr.length;i++){
//     if(i!=3){
//         console.log(arr[i]); // skip the iteration
//     } else {
//         continue;
//     }
    
// }
// console.log("break")
// for(let i=0;i<arr.length;i++){
//     if(i==3){
//         break; // end the loop here
//     }
//     console.log(arr[i]);
// }

// rest and spread operators (...)

// rest
// function arrAbc(...arr){
//     console.log(arr.length);
// }


// arrAbc(4, 6, 8, 2, 10);


// arrAbc(7, 8);
// spread
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// console.log(...arr2);
// let arr3 = [...arr2, ...arr1];
// console.log(arr3);

// shallow copy
// let copyarr1 = [...arr1];
// console.log(copyarr1);

// arr1.push(10);
// console.log(arr1);

// console.log(copyarr1);


let abc = {
    1: "one",
    2:"two"
}


let pqr= abc;
console.log(pqr)
abc[3] = "three";
console.log(abc);
console.log(pqr);

pqr[4] = "four";
console.log(abc);
console.log(pqr);

