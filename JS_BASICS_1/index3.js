console.log("hello ji");

let lastName = "Babbar";

let message = 
`Hello Priyanshu,

thanks for the teaching

Regards,
Priyanshu `;

console.log(message);

let firstName = new String("Love");

let date = new Date();

let date2 = new Date("March 10 2003");
console.log(date2); 

console.log(date);

let number =[1,4,5,7];

console.log(number);
//end -> push
//begininnig -> unshift

//middle -> splice

//searching

console.log(number.includes(5));

console.log(number.indexOf(4,2));

// let course =[
//     {no:1, name:"love"},
//     {no:2, name:"Priyanshu"}
// ];

// console.log(course);

// let courses = course.find(course => course.name === 'Kilvish');

// console.log(courses);

// let first =[1,2,3];
// let second =[4,5,6];

// let combined = first.concat(second);
// console.log(combined);

let marks = [10,20,30,40,50,60,70,80];

for(let value of marks){
    console.log(value);
}
// let sliced = marks.slice(2,5);
// console.log(sliced);

let numbers = [1,2,-6,-9];
let filtered = number.filter(value => value >= 0);

let items = filtered.map(function(num) {
      return {value: num};
})

console.log(items);
