function myfunction(msg){
    console.log("Welcome to my new Website.");
    console.log("We are learnig JS :");
    console.log(msg);
}

// myfunction();
// myfunction();
// myfunction("I love Javascript");

// function sum(a,b){
//    s = a +b;
//    return s;
// }

// let arrowMUL = (a,b) => {
//     console.log(a*b);
// };

//  function countVowels(str){
//    let countVowels = 0;
//    for(let i =0;i<str.length;i++){
//     if(str[i] === 'a' || str[i] ==='e'|| str[i]==='o'|| str[i] === 'i' || str[i] === 'u'){
//         countVowels++;
//     }
// }
//    console.log("The no oF vowels in the given sentences is : ",countVowels);
//  }

//  countVowels("hello")

// function countVowels(str) {
//     // Convert the string to lowercase to make the comparison case-insensitiv
  
//     let count=0;
//     for(const char of str){
//         if(char == "a" ||char == "e" ||char == "o" ||
//           char == "u" ||
//           char == "i" )
//     {
//         count++;
//     }
//     return count;
// };
    
// const countVow = (str) => {
//     let count=0;
//     for(const char of str){
//         if(char == "a" ||char == "e" ||char == "o" ||
//           char == "u" ||
//           char == "i" )
//     {
//         count++;
//     }
//     return count;
// };
// }
// }
// console.log(countVowels('Hello World'));


// let nums = [1,2,3,4,5];

// nums.forEach((num) => {
//     console.log(num*num);
// });

let marks = [97,64,32,49,99,86];

 let topper = marks.filter((val) =>{
    return val > 90;
});

console.log(topper);

let n = prompt("enter a number : ")
let arr = []
for(let i = 1;i<n;i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduces((res,curr) => {
    return res + curr;
});

console.log(sum);
