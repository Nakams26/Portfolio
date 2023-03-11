//Burger menu

//Adding variables that I need
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

//Adding an event listener on the header, targeting burger menu icons
header.addEventListener("click", function (event) {
  //If open menu is clicked, I hide the open menu icon, display the nav and display the close menu icon
  if (event.target.classList[1] === "openMenu") {
    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    //If close menu is clicked, I hide the close menu icon, hide the nav and display the open menu icon
  } else if (event.target.classList[2] === "closeMenu") {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    nav.style.display = "none";
  }
});

//Displaying phone number and email address when clicking on the related icon

//Adding variables that I need
const contactSection = document.querySelector(".contact");
const emailIcon = document.querySelector(".fa-envelope")
const phoneIcon = document.querySelector(".fa-phone-flip")
const emailAdress = document.querySelector(".emailAdress")
const phoneNumber = document.querySelector(".phoneNumber")

//Adding an event listener on the contact section, targeting mail and phone icons

contactSection.addEventListener("click", function(event){
  //If we click on mail, I display the mail and hide the phone
  if (event.target.classList[1] === "fa-envelope") {
    emailAdress.style.display = "block";
    phoneNumber.style.display = "none";
    //If we click on phone, I display the phone number and hide the mail
  } else if (event.target.classList[1] === "fa-phone-flip") {
    phoneNumber.style.display = "block";
    emailAdress.style.display = "none";
  } 
  //If we click anywhere else, we hide both
  else{
    emailAdress.style.display = "none";
    phoneNumber.style.display = "none";
  }
})