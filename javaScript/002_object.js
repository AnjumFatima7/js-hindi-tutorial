//const User1 = new Object();
const User = {};

// const arr = [11,2,3,];
// const arr1 = new Array(1,2,3,4);

User.name = "soyal"
User.email = "soyalkhan@gmail.com"
User.age = 21

//console.log(User);

const tindderUser = {
    name : {
        fullName : {
            userName : "Soyal Khan"
        }
    },
    email : "soyal@gmail.com"
}

// console.log(tindderUser.name.fullName.userName);
// console.log(tindderUser.email);

const obj1 = {'one': 1, 'Two': 2};
const obj2 = {'name': "Anjum Fatima"};
const obj3 = {obj1, obj2};
const obj4 = Object.assign({}, obj1, obj2);
const obj5 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(obj4);
// console.log(obj5);


// console.log(Object.keys(User));
// console.log(Object.values(User));
// console.log(Object.entries(User));

const Obj = {
    fullName : "Soyal Khan",
    city : "Ajmer",
    location : "Loha Khan"
}

const {fullName : Name } = Obj;
console.log(Name);

