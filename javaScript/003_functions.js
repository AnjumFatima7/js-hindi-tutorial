function myName(){
    // console.log("A");
    // console.log("N");
    // console.log("J");
    // console.log("U");
    // console.log("M");
}
myName();

function addTwoNumbers(number1, number2){
    //console.log(number1 + number2);
    
    // let result = 0;
    // result = number1 + number2;
    // console.log(number1 + number2);

    return number1 + number2;
}
const result = addTwoNumbers(9,2);
// console.log(result);

function userLoginMsg(username){  //username = "Sam"
    if(!username){ //if(username === undefined)
        console.log("plzz enter your name...");
        return
    }
    return `${username} just login!!`
}
//console.log(userLoginMsg("Anjum Fatima"));

function calculateItemsPrice(val1, val2, ...num){
    return num
}
//console.log(calculateItemsPrice(2, 3, 78, 900));

function handlePerson(userinfo){
    console.log(`${userinfo.name} live in ${userinfo.city}`);
}

const UserMaloomat ={
    name: "Soyal Khan",
    city: "Ajmer Shareef",
    price: 50000
}
//handlePerson(UserMaloomat);
handlePerson({
    name: "Anjum Moin",
    city: "Madina Shareef"
});

const myArray = [200, 400, 599, "Anjum"]

function getArrayValue(getValue){
    return getValue
}
//console.log(getArrayValue(myArray));
console.log(getArrayValue([800, 366, "Fatima", 900]));

const fun = function(){     // anonymous
        console.log("oye mister");
}
//fun();


function test_fun(){
    console.log(typeof arguments);
    
    console.log(`length of agrguments are: ${arguments.length}`);
    for(index in arguments){
        console.log(`${index} => ${arguments[index]}`);
    }   
}
test_fun(12,3,4,45,6677,78,5);

