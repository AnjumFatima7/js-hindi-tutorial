const mySym = Symbol("key1")
const JsUser = {
    name : "Anjum",
    "full name" : "Anjum Moin",
    [mySym] : "Soyal",
    age : 21,
    location : "Ajmer",
    email : "anjum@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
//JsUser.name = "Soyal Ali"

console.log(JsUser.name)
console.log(JsUser[mySym]);
console.log(JsUser["lastLoginDays"][0]);

//Object.freeze(JsUser)
JsUser.age = 22
console.log(JsUser.age)

JsUser.greeting = function(){
    console.log("hello world")
}
JsUser.greeting2 = function(){
    console.log(`${this[mySym]} pgl heeeeeeeeeeeeeeeeeeeeee`)
}

//console.log(JsUser)
console.log(JsUser.greeting2())

JsUser.emaail = "fatima@gmail.com"
//Object.freeze(JsUser)
console.log(JsUser)


 