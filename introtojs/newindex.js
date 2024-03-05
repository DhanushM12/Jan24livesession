// console.log("29th feb")
console.log(abc)
// comparison operators

// ==, ===

// == -> value comparision
// === -> data type then for value

// != -> not equal
// !== -> strict not equal

// > , >=
// <, <=

// logical operators
// 0 - false, 1- true
// && - and
// when both the elements are true then only the condition is true otherwise false
//  a   b   c
//  0   0   0
//  0   1   0
//  1   0   0   
//  1   1   1


// || - or
// when atleast one element is true then the condition is true otherwise false
//  a   b   c
//  0   0   0
//  0   1   1
//  1   0   1   
//  1   1   1


// ! - not
// make the opposite of current condition
// a    b
// 0    1
// 1    0

// if(!name){ 
//     console.error("name is not found")}
// else {
//     console.log(name)
// }

// // if(condition) {
//      if(condition){

// }    else {

// }
// }
// else if(condition) {

// }
// // else {
//
// }

// condition ternary operator
// condition ? true : false
// nested ternary
// condition ? (condition1 ? true : false ) : (condition2 ? true : false)



// ??
// let strname = "newname";
// let nullname;
// let result = nullname ?? strname
// console.log(result)


// The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
// ?? - null or undefined checker
// let nnullname = null;
// let firstvar;
// let secondvar = "name";
// let res = firstvar ?? secondvar;
// console.log(res);



// let age;


// let dataage;

// let finalage = age ?? dataage
// console.log(finalage)
// if the first variable is null or undefined then it will take from second value otherwise not


// ?. - chaining operation

// let obj = {
//     id: 123,
//     age: 25,
//     name: {
//         first: "cn",
//         last: "hello",
//         mid: undefined,
//     },
//     batch: "jan24batch"
// }

// console.log(obj?.name?.last)
// if(obj?.name?.mid)
// {
//     console.log(obj.name.mid)
// } else {
//     console.error("name is null/undefined")
// }

// let a =2;
// let b=4;

// let operator = "+"
// let dayNumber = new Date().getDay();
// switch (dayNumber) {
//     case 1:
//         console.log("Sunday")
//         break;
//     case 2:
//     case 4:
//         console.log("Monday");
//         console.log("Thursday")
//         break;
//     default:
//         console.log("Hello")
//         break;
// }

// let i=0;
// do {
//     console.log("Hello people")
// } while (i<=1) {
//     console.log(i);
//     i++;
// }


// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3; j++){
//         console.log(i + " + " + j +" = " + (i+j))
//     }
// }

// let student = {
//     first: "new",
//     last: "lastName"
// }

// for (let a in student) {
//     console.log(student[a]);
// }


let arr = ["hello", true,{name: "name", age: "age"}, 25 ]
// let newarr = [];
// let abcarr = [1, 2, 3]
// for(let b in abcarr){
//    console.log(b*2);
// }

// console.log(newarr)
// console.log(arr[arr.length-1])
// console.log(arr.at(-1))
// console.log(arr.at(-2))
// console.log(arr.at[-1])

// let numarr = [1, 2, 3]

// console.log(typeof numarr)

// console.log(typeof arr[1]);

// const abc = null
// console.log(typeof abc)

// console.log(typeof arr);

// let a = 10;

// let b = BigInt(10);
// console.log(b)
// interview question
// in what datatype of arr typeof returns object.


// methods of arr
let strarr = ["hello", "purple", "welcome", "to", "people", "session"]
// console.log(strarr)
// let arrtostr = strarr.toString();
// console.log(arrtostr)

// let abc = strarr.join(" : ")
// console.log(abc);
// let lastElement = strarr.pop();
// console.log(lastElement)
// console.log(strarr)

// let newArr = strarr.push("newsession");
// console.log(newArr)
// console.log(strarr)
// console.log(strarr)
// let removeArrEle = strarr.shift()
// console.log(removeArrEle)
// console.log(strarr)
// console.log(strarr)

// let addArrEle = strarr.unshift("new", "ldsmls");

// console.log(addArrEle);
// console.log(strarr)

// replaces with empty and index remains same for other elements
// delete strarr[1];
// console.log(strarr)


// console.log(strarr.join(" "))


// strarr[1] = "newvalue"
// console.log(strarr)

// search

// let peopleIndex = delete strarr.indexOf("people");
// delete strarr[peopleIndex];
// console.log(peopleIndex)

// let peopleLastIndex = strarr.lastIndexOf("people")
// console.log(peopleLastIndex)


// let studentPresent = strarr.includes("welcome")
// console.log(studentPresent)

const age = [10, 40, 20, 30, 50, 45]

// value, index, arr
// let somePeopleAbove30 = age.find(function(value, index, arr){
//     if(value > 30){
//         return value
//     }
//     // return value > 30
// })

// function getAgeAbove30(value, index){
   
//         // return value;
//     return value > 30;

// }

// console.log(somePeopleAbove30)

// function sum(){
//     return 2+4;
// }

// console.log(sum);

// let findLastValue = age.find(function(value, index, arr){
//        return value > 100;
// })

// console.log(findLastValue)

// let FindLastIndex = age.findLastIndex(function(val){
//     return val > 30;
// });

// console.log(FindLastIndex);

// console.log(age)
// age.sort()
// console.log(age)
// age.reverse()
// console.log(age);


// console.log(strarr)
// strarr.sort()
// console.log(strarr);
// strarr.reverse()
// console.log(strarr)


// age.sort()
// console.log(age)
// console.log(Math.min.apply(null, age));

// console.log(Math.max.apply(null, age));


// let strnum = ["1", "5", "3"]
// strnum.sort()
// console.log(strnum)
// .com

// let email = "dm@gmail.com"
// let emailArr = email.split('');
// console.log(emailArr)
// let len= emailArr.length;
// let val = emailArr.slice(len-4, len)
// console.log(val)
// console.log(emailArr)

// let spliceVal = emailArr.splice(len-4)
// console.log(spliceVal)
// console.log(emailArr)
console.log(pqr)

var abc;

let pqr;


