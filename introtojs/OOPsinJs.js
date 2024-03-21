// const CNStudent = {
//     name: String,
//     contact: Number,
//     getName: function(){
//         return this.name;
//     },
//     setName: function(name){
//         this.name = name
//     }
// }
// constructor of class - variables/properties
// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;  
// }
// methods - older way was to link your contructor to its method by prototype mechanism
// Person.prototype.getDetail = function(){
//     return this.firstName + " " + this.lastName;
// }

// class Person{
//     constructor(firstName, lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;  
//     }
//     getDetail(){
//             return this.firstName + " " + this.lastName;
//     }
// }
// let person1 = new Person('XYZ', 'ABC');
// let person2 = new Person('PQR', 'STU');

// console.log(person1);
// console.log(person2)

// console.log(person1.getDetail())
// console.log(person2.getDetail());

// OOPs
// Polymorphism, Abstraction, Encapsulation and Inheritance

// inheritance means parent child relationship
// Vehicle -> Bike -> Maruti -> bikename
// Car -> Maruti -> Wagon R
// Vehicle -> Car -> Tata -> Nexon
// single => parent -> child
// Multilevel => grandparent -> parent -> child
// hierarchical => parent -> child1
//                        -> child2


// multiple => 1 child -> parent1
//                     -> parent2


// class Vehicle{
//     constructor(color, model){
//         this.color = color;
//         this.model = model;
//     }
//     getColor(){
//         return this.color;
//     }
//     getModel(){
//         return this.model;
//     }
//     setModel(model){
//         this.model = model;
//     }
//     setColor(color){
//         this.color =color;
//     }
// }

// class Car extends Vehicle{
//     constructor(speed, wheels){
//         super();
//         this.speed = speed;
//         this.wheels = wheels;
//     }
//     getSpeed(){
//         return this.speed;
//     }
//     getWheels(){
//         return this.wheels;
//     }
//     setSpeed(speed){
//         this.speed = speed;
//     }
//     setWheels(wheels){
//         this.wheels =wheels;
//     }
// }

// class MarutiCars extends Car{
//     constructor(brand, mileage){
//         super();
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     getBrand(){
//         return this.brand;
//     }
//     getMileage(){
//         return this.mileage;
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
//     setMileage(mileage){
//         this.mileage =mileage;
//     }
// }

// class childName extends Parent {
//     constructor(){
//         super();
//     }
// }
// const vechicle1 = new Vehicle();

// console.log(vechicle1);

// let mynewCar = new Car(180, 4);

// let wagonR = new MarutiCars();
// wagonR.setMileage(20);
// wagonR.setBrand("Maruti Suzuki");

// mynewCar.setColor("gray");
// mynewCar.setModel("Top Model");
// console.log(mynewCar.getColor());
// console.log(mynewCar);
// mynewCar.setColor("blue");
// console.log(mynewCar)
// console.log(wagonR);

// Polymorphism - many forms
// 1. compile time polymorphism - method overloading
// 2. Run time polyporphism - method overriding

class Food{
    constructor(vitamins){
        this.vitamins = vitamins;
    }
    getVitamins(){
        return this.vitamins;
    }
    setVitamins(vitamins){
        this.vitamins = "VItaD";
    }
}
 let food2 = new Food("1", "2", "3", "4")
class Fruits extends Food{
    constructor(protien, calories, weight, vitamins){
        super(vitamins);
        this.protien = protien;
        this.calories = calories;
        this.weight = weight;
    }
   
    // getVitamins(){
    //     return this.vitamins;
    // }
    // setVitamins(vitamins){
    //     this.vitamins = vitamins;
    // }
    setProtein(protien){
        this.protien = protien;
    }
    setCalories(calories){
        this.calories = calories;
    }
    setCalories(calories, weight){
        this.calories = calories + weight;
    }
    setWeight(weight){
        this.weight = weight;
    }
}

// const food1 = new Food();
// console.log(food1);
const apple = new Fruits("");
apple.setVitamins("VitaB");
apple.setProtein("Protien1");
apple.setWeight("30");
apple.setCalories("100g");
apple.setCalories(200, 30);
apple.setCalories()
console.log(apple);

const food1 = new Food();
console.log(food1);
food1.setVitamins();

// compile time poly - same function name but your parameters are different
// run time poly - same funtion name but using child function instead of parent function

// Encapsulation- means keeping your properties as private and your methods public
// to make a variable private initial it with underscore ('_')
class BankAccount{
    constructor(accNo, accName, balance){
        this._accNo = accNo;
        this._accName = accName;
        this._balance = balance;
    }
    showDetails(){
        console.log(this._accName);
        console.log(this._accNo);
        console.log(this._balance);
    }
    deposit(amount){
        this._balance = this._balance + amount;
        this.showDetails();
    }
    withdraw(amount){
        if(amount <= this._balance){
            this._balance = this._balance - amount;
            this.showDetails();
        } else {
            console.log("Insuffient funds");
        }
    }
}

let newAcc = new BankAccount("123", "xyz", 100);
console.log(newAcc.showDetails())
newAcc.deposit(300);
newAcc.withdraw(500);


// Abstraction - 

// class Shape{
//     constructor(shapeName){
//         this.shapeName = shapeName;
//     }

//     getShapeName(){
//         return this.shapeName;
//     }
// }

// Note - you cannot create an instance of abstract
// constructor of shape
function Shape(){
    this.shapeName = "shapeName";
    throw new Error(`You cannot make an instance of Abstract class`);
}

Shape.prototype.display = function(){
    return this.shapeName;
}

let shape1 = new Shape();
// constructor of triangle
function Triangle(shapeName){
    this.shapeName = shapeName;
}

// Triangle triangle = new Shape();
Triangle.prototype = Object.create(Shape.prototype);
let triangle = new Triangle("Square");
console.log(triangle.display());