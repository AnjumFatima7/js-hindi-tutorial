const tinderUser = {}
tinderUser.name = "Soyali Khan"
tinderUser.age = 34
tinderUser.email = "soyal@gmil.com"
//console.log(tinderUser)

const regular={
    email: "amil@email.com",
    fullName : {
        userFullName: {
            name: "Anjum",
            age: 56
        }
    }
}
//console.log(regular.fullName.userFullName.age);

// const target = {a:1, b: 2}
// const source = {c:3, d: 4}
// const obj = {e:5, f:6}
// const obj4 = {target, source, obj}
// console.log(obj4);
// const onj5 = Object.assign({},target, source, obj)
// console.log(onj5);
// const obj6 = {...target, ...source, ...obj}
// console.log(obj6)

// console.log(tinderUser);
// console.log(tinderUser.hasOwnProperty("1"))
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const users = [
    {
        id: 1,
        email: "anjum@gmail.com"
    },
    {
        id: 2,
        email: "anjum@gmail.com"
    },
    {
        id: 3,
        email: "anjum@gmail.com"
    }
]
//console.log(users[0].id)

const course = {
    courseName : "BCA",
    coursePrice : 5678,
    courceInstructor : "Soyal Ali"
}
//console.log(course.courceInstructor);

const {courceInstructor : instructor} = course;
console.log(instructor);




