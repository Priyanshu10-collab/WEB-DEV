// 
// add(8,6);

// function add(x,y){
//     let sum = 0;
//     sum = x + y;
//     console.log(sum);
// }

// let stand = function walk(){
//     console.log("Toh chaliye shuru kartei h");
// }

// // add(5,20);
// stand();

// //function argument
// function sum(a,b){
//     let total = 0;
//     for(let value of arguments)
//      total = total + value;
//     return total;
// }

// let ans = sum(1,2,3,4,5,6);
// console.log(ans);

// function sum(a,b,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6,7,8,9);

//default parameter
function interest(p=1000,r=15,t=2){
    return p*r*t/100;
}

console.log(interest(500,10,8));

//console.log(person);

// function fullName(){
//     FirstName : "Priyanshu";
//     lastname : "Pandey";
//     get fullName(){
//         return`${firstName} ${lastName}`;
//     }
// }

let person = {
    fName : "Priyanshu",
    lName : "Pandey",
    get fullName(){
        return `${this.fName} ${this.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
}

person.fullName = "Priyanshu Pandey";
console.log(person.fullName);
