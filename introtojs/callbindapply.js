const person = {
    firstName: "John",
    lastName: "XYZ",
    getDetail: function(){
        return this.firstName + " " + this.lastName;
    }
}

// function getPersonInfo(){
//     let getPersonName = this.getDetail();
//     console.log(getPersonName);
// }
// getPersonInfo()



// every data for this js is assume to be store in this when we try to access from function
// this

// call, bind, apply

// bind()
// const bindedFunction = getPersonInfo.bind(person);
// bindedFunction();
// console.log(person)


// call()
function getPersonInfo(food, sport){
    let getPersonName = this.getDetail();
    console.log(getPersonName + " fav food: " + food + " fav sport: " + sport);
}

// getPersonInfo.call(person, 'Burger', 'Cricket');

// apply() - only difference here is take the parameters in array.
let dataArr = ['Burger', 'Cricket', 'ABC'];
// getPersonInfo.apply(person, dataArr);

getPersonInfo.call(person, ...dataArr);
