const add = Symbol("key1");
const User = {
    name: "Anjum",
    email: "anjum@123gmail.com",
    hobbei: ['sketch', 'reaading'],
    [add]: "myKey1"

}

// console.log(User.name);
// console.log(User["name"]);
 console.log(User);

// console.log(Object.isFrozen(User)) // check object is freeze or not
//Object.freeze(User);               // make a object non changable and freeze a object  
//console.log(Object.isFrozen(User))

// User.email = "soyal123@gamil.com";
// console.log(User['email']);
// User.name = "soyal";
// console.log(User.name);

User.city = "Jaisalmer";
// console.log(User.city);

User.greet = function(){
    console.log("AssalamuAlikum");
}

console.log(User.greet());

User.detail = function() {
    console.log(`User name is ${this.name}`);
}
console.log(User.detail());

