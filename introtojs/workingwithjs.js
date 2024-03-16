
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

for(let i=1; i<=5;i++){
    setTimeout(function(){
        console.log(i);
    }, i*1000);
}
// var bool = true;

// const hello = setInterval(function(){
//     let date = new Date().toLocaleTimeString();
//     document.getElementById("print-time").innerHTML = date;
// }, 1000)


// function stp(){
//     clearInterval(hello);
// }

// clear interval needs stop what logic of setinerval
