
// we can enter or read the function only when it is called
// function abc(){
//     console.log("abc");
//     function xyz(){
//         console.log("xyz");
//         function pqr(){
//             console.log("pqr");
//         }
//         pqr()
//     }
//     xyz();
// }
// abc();



// function pqr(xyz){
//     console.log("pqr");
//     xyz()
// }
// pqr();
// nested function create lexical scoping/lexical environment
// not only one parent there can multiple nested parents in function
// b parent is a ?

// check for local scope -> lexical scope -> global scope
// let i=15;
// function a(){
//     let i =10;
//     return function b(){
//         console.log(i);
//     }
//     // b()
//     // return b;
//     // i=20;
//     // b();
//     // i=20;
// }
// var z = a() // -> // function b now is z
// console.log(z);
// z();

// function a(){
//     var i=10;
//     function b(){
//         console.log(i);
//     }
//     b()
// }
// a();
// local scope -> lexical scope  -> global scope
// functions bundled/ nested around lexical scope forms a closure.

// function x(){
//     let a = 1;
//     function y(){
//         let b = 3;
//         function z(){
//             console.log(a, b);
//         }
//         z();
//     }
//     y();
// }
// x();

// callback function y here is a callback function
// function x(callback){ // parameter is a function
//     console.log("x")
//     callback();
// }
// x(y);
// function y(){
//     console.log("y");
// }
// javascript you can pass function as a parameter also
// time is in ms.
// 1 sec = 1000 ms


// console.log("printing")
// setTimeout(abc, 3000);

// function abc(){
//     console.log("abc");
// }
// setTimeout(function(){

// }, 2000);

// setInterval(function(){
//     console.log("interval")
// }, 2000)
// console.log("hello")
// clearInterval();
// let i=1;
// setInterval(function(){

//     console.log(i)
//     if(i== 5){
//         clearInterval(-1);
//     }
//     i+=1;
// }, 2000);

// clearInterval()

// I want to print 1 after 1 sec 2 after 2 sec 3 after 3 sec 4 after 4 sec 5 after 5sec

// for(var i=1; i<=5;i++){
//     function a(index){
//         setTimeout(function(){
//             console.log(index);
//         }, index*1000);
//     }
//     a(i)
// }
// for (var i = 1; i <= 5; i++) {
//     (function (index) {
//         setTimeout(function () {
//             console.log(index);
//         }, index * 1000);
//     })(i);
// }

// for(var a=1;a<=5;a++){
//     let b =a;
//     setTimeout(function(){
//         console.log(b);
//     },a*1000)
// }



// 1, 1000
// 2, 2000
// 3, 3000
// 4, 4000
// 5, 5000

// global value of i = 6 ?
// var bool = true;

// const hello = setInterval(function(){
//     let date = new Date().toLocaleTimeString();
//     document.getElementById("print-time").innerHTML = date;
// }, 1000)


// function stp(){
//     clearInterval(hello);
// }

// clear interval needs stop what logic of setinerval

// remember - that all sync code will execute before async
// function xyz(){
//     console.log(10);
//     setTimeout(function(){
//         console.log("timer")
//     }, 3000)
// }
// xyz();

// timer , 10 - a
// 1, timer - b

// let abc = function(){
//     console.log("abc");
// }

// abc();


// IIFE - Immediately invoked functional expression

// (function(){
//         console.log("printing iife");
// })()


// arrow functions

// const pqr = () => {
//     console.log("before returning 10")
//     return 10;
// }

// let abc = pqr();
// console.log(abc);

// If the code statement inside arrow function is a single line then no return keyword needed

// const xyz = () => 10;

// let number = xyz();
// console.log(number);

// const obj = {
//     name: "xyz",
//     age: 20,
//     thisFunc: function(){
//         console.log("actual function: ", this.name + " " + this.age);
//     },
//     thisArrow: () => {
//         console.log("arrow: ", this)
//     },
//     a: 10
// }

// obj.thisFunc();
// obj.thisArrow();

// the arrow function is not having this (means not having it's own this)
// actual function has it's own this
// 'use strict'
// function abc(){
//     console.log(this);// window object consists all inbuild things in js
// }

// abc()

// function xyz(){
//     console.log(this);
// }
// xyz();


// function sum(){

// }

// if you think that your function won't need this to be used so implement arrow function otherwise normal function.


// let arr = [2, 4, 5, 8];
// let ans  = arr.every(function(a){
//     return a % 2 == 0;
// })

// arr. fill(10); [10, 10, 10, 10]
// arr.fill(10, 1, 3); // [2, 10, 10, 8]
// console.log(arr);
// console.log(ans)

// function xyz(a){
//     return function(b){
//         return function(c){
//             return a*b*c;
//         }
//     }
// }

// let ans = xyz(2)(3)(4);
// console.log(ans);

