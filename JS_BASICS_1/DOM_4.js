// function sync(){
//     console.log("First");
// }
// sync();
// console.log("Second");


// setTimeout(function() {
//     console.log('Third');
// },3000);

// function sync(){
//     console.log('first');
// }
// sync();
// console.log("second");

// let meraPromise1 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise1");
//     },5000);
//     // resolve(2233);
//     reject(new Error("Bhaisahab Error aaye hain"));
// });

// meraPromise1.then((value) => {console.log(value)},(error) => {console.log("Recieved an Error")});

// meraPromise1.catch(});
// let meraPromise2 = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside Promise2");
//     },3000);
//     // resolve(2233);
//     // reject(new Error("Bhaisahab Error aaye hain"));
// });
// console.log('pehla');


// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log('settimeout1 started');
//     },2000);
//     resolve(true);
// })

// let output =  waadaa1.then(() => {
//     let waada2 = new Promise(function(resolve,reject){
//         setTimeout(()=> {
//             // console.log('setimeout started');
//             console.log('setimeout2 started');
//         },3000);
//         resolve("waada 2 resolved");
//     })
//     return waada2;
// })
// output.then((value) => console.log(value));

// async function abcd(){
//     // console.log("Hi");
//     return "Hello Ji";
// }
// abcd();

// async function utility(){

//     let delhiMausam = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("Delhi me bhot garmi hai");
//         },1000);
//     });

//     let hydMausam = new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve("Hyderbad is cool");
//         },5000);
//     });

//     let dM = delhiMausam;
//     let hM = await hydMausam;

//     return [dM,hM];
// }


// async function helper(){

//     let options = {
//       method: 'POST',
//       body: JSON.stringify({
//         title:'Pandey',
//         body:'Muscular',
//         userId: 1033,
//         weight: 85
//       }),
//       headers:{
//         'Content-type': 'application/json;  charset=UTF-8', 
//       },
//     };

//      let content =   await fetch("https://jsonplaceholder.typicode.com/posts",options);
//      let response = content.json();
//      return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();

// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();


// function outer() {
//     const name = "John"; 
//     function inner() {
//       console.log(`Hello, ${name}!`);
//     }
//     return inner;
//   }
  
//   const greeting = outer();
//   greeting(); 
  
// const func = () => {
//     const x = () => {
//       let a = 10;
//       console.log(a);
//       const y = () => {
//         let a = 20;
//         console.log(a);
//         const z = () => {
//           let a = 30;
//           console.log(a);
//         };
//         z();
//       };
//       a = 69;
//       y();
//     };
//     return x;
//   };
  
//   let x = func();
//   x(); // 10 69 69
  