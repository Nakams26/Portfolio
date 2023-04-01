//1.Burger menu

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
    closeMenu.style.color = "white";
    closeMenu.style.display = "block";
    nav.style.display = "block";
    //If close menu is clicked, I hide the close menu icon, hide the nav and display the open menu icon
  } else if (event.target.classList[1] === "closeMenu") {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    nav.style.display = "none";
  }
});

//2.Displaying phone number and email address when clicking on the related icon
//Adding variables that I need
const contactSection = document.querySelector(".contact");
const emailAdress = document.querySelector(".emailAdress");
const phoneNumber = document.querySelector(".phoneNumber");
//Defining x to allow double click on icon to hide/display
let x = 0;

//Adding an event listener on the contact section, targeting mail and phone icons
contactSection.addEventListener("click", function (event) {
  //If we click on mail, I display the mail and hide it if we re-click on it
  if (event.target.classList[1] === "fa-envelope") {
    if (x === 0) {
      emailAdress.style.display = "block";
      phoneNumber.style.display = "none";
      x = 1;
    } else {
      emailAdress.style.display = "none";
      x = 0;
    }
    //If we click on phone, I display the phone and hide it if we re-click on it
  } else if (event.target.classList[1] === "fa-phone-flip") {
    if (x === 0) {
      phoneNumber.style.display = "flex";
      emailAdress.style.display = "none";
      x = 1;
    } else {
      phoneNumber.style.display = "none";
      x = 0;
    }
  }
  //If we click anywhere else, we hide both and reset x
  else {
    emailAdress.style.display = "none";
    phoneNumber.style.display = "none";
    x = 0;
  }
});

//3.Clearing a form after a submission

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

//4.Onscroll effect

//Coming from left
const observerLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showLeft");
    } else {
      entry.target.classList.remove("showLeft");
    }
  });
});

const hiddenElementLeft = document.querySelectorAll(".hiddenLeft");
hiddenElementLeft.forEach((el) => observerLeft.observe(el));

//Coming from right
const observerRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("showRight");
    } else {
      entry.target.classList.remove("showRight");
    }
  });
});

const hiddenElement = document.querySelectorAll(".hiddenRight");
hiddenElement.forEach((el) => observerRight.observe(el));
