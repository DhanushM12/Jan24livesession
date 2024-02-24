// console.log("hello world")
// console.warn("hello my warning")
// console.error("hello this is an error")
// alert("hello")
// console.log("a")
// console.log(a)
// var a;
// console.log(a)
// var facebookrating = null;
// console.log(a)
// String -"HELLO"
// Number - 12
// BigInt - 99908080390380380380 -BigInt(980009090)
// Boolean - true/false
// undefined - variable is declared or not but you are trying to use it
// Null - nothing value assigned to variable
// Symbol - hidden unique property like student id
// Object - 
// var obj =
// {
//     "key": "value",
//     "name": "myname",
//     "batch": "jan2024",
//     "students": 10,
//     id: 1273903
// }

// console.log(obj.key)


// var newobj = {
//     "name": "newname",
//     "batch": "jan2023"
// }
// access a object
// objectName.keyname

// objectName["keyname"]

// var xyz = {
//     abc: "xyz",
// }

// console.log(xyz)
// xyz.hello = "helloworld"

// xyz["pqr"] = "prq"

// console.log(xyz)

// var abc = ["abc", "xyz", "something", {abc: "abc", xyz: "xyz"}];

// console.log(typeof(abc[0]));


// var, let, const

// a = 10
// console.log(a)
// var a; // global scoping, hoisting
// console.log(a)

// a=15;
// console.log(a)

// console.log(abc);
// let abc;
// console.log(abc);
// abc = "abc";
// console.log(abc);


// if(true) {
//     let fkncxknck = "xyz"
//     console.log(fkncxknck);
// }

// console.log(fkncxknck);
// const myconstant;
// myconstant = "lldlmdlmdl";
// console.log(myconstant)

// myconstant = "klndknfknkf";
// console.log(myconstant)


// const a = "hello";
// a= "ksnknsknskns";
// console.log(a)


// const obj = {
//     a: "abc",
//     b: "pqr",
//     c: "xyz",
//     d: 12,
//     e: true
// }

// console.log(obj);

// obj.f = "batch";
// console.log(obj);

// Object.freeze(obj);

// obj.h = "hard";
// console.log(obj);

// function

// function functionName(parameters){

// }


// all the parameters of the function are locally scoped cannot be accessed outside the function
var ax = "a"
function sum(a, b){
    let ax;
    // console.log(c);
    let result = a+b;
    console.log(result)
    ax = "lldldm"
    console.log(ax)
}
ax = "b"
sum(3, 4, ax);
console.log(ax);

