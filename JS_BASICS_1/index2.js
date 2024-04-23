// console.log("Toh chaliye suru krtei h");

//object creation
let rectangle = {
    length :5,
    breadth :6,

    draw:function() {
        console.log ("drawing rectangle")
    }
};

//factory function

function createRectangle(x,y){

    return rectangle = {
        length :x,
        breadth :y,
    
        draw:function() {
            console.log ("drawing rectangle")
        }
    };
}

let rectangleObj12 = createRectangle(8,9);
let rectangleObj14 = createRectangle(7,5);
let rectangleObj13 = createRectangle(2,3);

// constructor function
function Rectangle(len,bread){
    this.length =len;
    this.bradth =bread;
    this.draw= function(){
        console.log('drawing');
    }
}
//object creation using constructor fumction
let rectangleObject = new Rectangle(8,4);

rectangleObject.color="yellow";
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);


let Rectangle1 = new Function(
    'length', 'breadth',
    'this.length = length; ' +
    'this.breadth = breadth; ' +
    'this.draw = function() { ' +
    '    console.log("drawing"); ' +
    '}'
);

// //object creation using Rectangle1
// let rect = new Rectangle(2,3);

// rect.length;

// console.log(rect);

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// let d ={value:10};

// function inc(a){
//     a.value++;
//     return a;
// }

// inc(d);
// console.log(d);

let Rectangle12 = {
    length:2,
    breadth:4
};

//for-in loop
for(let key in Rectangle12){
    console.log(key,rectangle[key]);
}