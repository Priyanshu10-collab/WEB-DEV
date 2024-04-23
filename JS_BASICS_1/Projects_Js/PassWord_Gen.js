const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDispaly = document.querySelector("[data-lengthNumber]");
const passwordDispaly = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]"); 
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck =document.querySelector("#uppercase");
const lowercaseCheck =document.querySelector("#lowercase");
const numberCheck = document.querySelector("#numbers");
const symbolCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateBtn");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");
const symbols ='`!@#$%^&*()_+=-{}|:"<>?/*-+,.][';

let password ="";
let passwordLength = 10;
let checkCount = 0;
handleSlider();
//set strength circle color to grey
setIndicator("#ccc");

//set passwordLength
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDispaly.innerText = passwordLength;
    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundColor = ((passwordLength - min)*100/(max - min)) + "% 100%";

}

function setIndicator(color){
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow ='0px 0px 12px 1px $(color)';
}

function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123));
}

function genrateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91));
}

function generateSymbol(){
    const randNum =getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(numberCheck.checked) hasNum = true;
    if(symbolCheck.checked) hasSym = true;

    if(hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8){
        setIndicator("#0f0");
    }else if(
        (hasLower || hasUpper) &&
        (hasNum || hasSym) &&
        passwordLength >= 6
    ){
        setIndicator("#ff0");
    }else{
        setIndicator("#ff0");
    }
}

async function copyContent(){
    try{
        await navigator.clipboard.writeText(passwordDispaly.value);
        copyMsg.innerText = "Copied";
    }
    catch(e){
        copyMsg.innerText ="Failed to copy";
    }
    copyMsg.classList.add("active");

    setTimeout(() => {
        copyMsg.classList.remove("active");
    },2000);
}

function shufflePassword(array){
    //fisher Yates Method
    for(let i =array.length - 1;i>0;i--){
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str ="";
    array.forEach((el) => (str += el));
    return str;
}

function handleCheckBoxChange(){
    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked)
        checkCount++;
    });

    //special condition
    if(passwordLength < checkCount){
        passwordLength =  checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change',handleCheckBoxChange);
})

inputSlider.addEventListener('input',(e) => {
    passwordLength = e.target.value;
    handleSlider();
})

copyBtn.addEventListener('click',() => {
    if(passwordDispaly.value)
    copyContent();
})

generateBtn.addEventListener('click',() =>{
    //none of the checkbox are selected
    if(checkCount <=0) return;

    if(passwordLength >128){
        passwordLength = checkCount;
        handleSlider();
    }

    // let`s start the journey to find new password
    console.log("Starting the Journey");
    //remove old password
    password ="";

    //let's put the stuff mentioned by checkboxes

    // if(uppercaseCheck.checked){
    //     password +=genrateUpperCase();
    // }

    // if(lowercaseCheck.checked){
    //     password +=generateLowerCase();
    // }

    // if(numberCheck.checked){
    //     password += generateRandomNumber();
    // }

    // if(symbolCheck.checked){
    //     password += generateSymbol();
    // }

    let funcArr = [];

    if(uppercaseCheck.checked)
    funcArr.push(genrateUpperCase);

    if(lowercaseCheck.checked)
    funcArr.push(generateLowerCase);

    if(numberCheck.checked)
    funcArr.push(generateRandomNumber);

    if(symbolCheck.checked)
    funcArr.push(generateSymbol);

    //compulsory addition
    for(let i=0;i<funcArr.length;i++){
        password += funcArr[i]();
    }
    console.log("Compulsory addition done");

    //remaining addition
    for(let i=0;i<passwordLength-funcArr.length;i++){
        let randIndex = getRndInteger(0,funcArr.length);
        password += funcArr[randIndex]();
    }
    console.log("Remaining addition done");
    //shuffle the password
    password = shufflePassword(Array.from(password));
    console.log("Shuffling addition done");
    //show in UI
    passwordDispaly.value = password;
    console.log("UI addition done");
    //calculate strength
    calcStrength();
});
