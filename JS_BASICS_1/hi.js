

// document.addEventListener('click', function(){
//     console.log('I have clicked on the document');
// });

// function eventFunction(){
//     console.log("I have clicked on the document");
// }
// document.addEventListener('click',eventFunction);

let myDiv = document.createElement("div");

// function paraStatus(event){
//         console.log("Para " + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is a para ' + i;

    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event) {
    if(event.target.nodeName === 'SPAN'){
    console.log('span pr click kia hai ' + event.target.textContent);
    }
});