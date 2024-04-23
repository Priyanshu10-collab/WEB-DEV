const modal =document.querySelector(".modal");
const overlay =document.querySelector(".overlay");

//Modal open Function
const openModal =() =>{
    console.log("Modal is Open");
    modal.classList.add("active");
    overlay.classList.add("overLayactive");
};

//Modal close function
const  closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
};