//line below is used to print on the console with
// console.log("Namaste Dunia version");

// let a = true;
// console.log(a);

// const num = 12;
// //num = 13;

// let lastName = 'Babbar';
// console.log(lastName);

// lastName = 3;
// console.log(lastName);

// for(let i =1;i<=5;i++){
//     console.log("Hello Ji");
// }

// let sum = 0;
// let n =prompt("Enter the Value:- ")
// for(i=0;i<=n;i++){
//     sum += i;
// }
// console.log(sum);

// for(i=2;i<=100;i+=2){
//     console.log(i);
// }

//practice Qno.2
// let gameNum = 25;

// let UserNum = prompt("Guess the number:-");
// if(UserNum < gameNum){
//     console.log("Enter the Bigger Number:- ");
//     UserNum = prompt("Guess it again")
// }else if(UserNum > gameNum){
//     console.log("Enter the smaller Number:")
//     UserNum = prompt("Guess it again")
// }else{
//     console.log("Congrats You Guessed it Right!!");
// }

// Fullname = prompt("Enter your fullname without spaces:- ");
// let Username = "@" + Fullname + Fullname.length;
// console.log(Username);

// let marks =[56,85,45,23];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["Iron Man","Thor","Captain America","Hulk","Spiderman"];
// console.log(heroes);

// for(let i=0;i<5;i++){
//     console.log(marks[i]);
// }
// for(let i = 0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }
// let cities =[Delhi,Bombay,Kolkata,Chennai];
// for(let city of cities){
//     console.log(city.toUpperCase());
// }


//practices 1
//  let marks = [85,97,47,37,76,60];

// let sum = 0;
// for(let i = 0;i<marks.length;i++){
//     sum += marks[i];
// }

// let avg = sum/marks.length;

//     console.log(avg);

//prctices 2

// let initalPrice =[250,645,300,900,50]

// for(let i= 0;i<initalPrice.length;i++){
//     let price = initalPrice[i]*0.1;
//     let finalPrice = initalPrice[i]-price;
//     console.log(`The Final Price after ${finalPrice} discount is :${price}`);
// }

//Practices 3

let Company = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
Company.shift();
console.log(Company);
Company.splice(1,1,"ola");
Company.push("Amazon");
console.log(Company);