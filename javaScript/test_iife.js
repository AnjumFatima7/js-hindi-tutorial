//#1
(function (num){
    if(num %2 == 0){
        //console.log("Even number");
    }else{
        //console.log("Odd number");
    }
})(7);

//#2
// (function(str){
//     let rev = "hsetih";
//     str=rev;
//     console.log(str);
// })("hitesh");
(function(str){
    let rev = str.split("").reverse().join("");
    //console.log(rev);
})("hitesh");


//#3
(function(num){
    let sqr = num*2;
    //console.log(sqr);
    
})(6);

//#4
(function(name){
    if(name===""){
        console.log("Welcome, Guest");
    }else{
        console.log(`Welcome ${name}`);
    }
})("Sam");
(function(name){
    if(name==null){
        console.log("Welcome, Guest");
    }else{
        console.log(`Welcome ${name}`);
    }
})();