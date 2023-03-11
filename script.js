//Burger menu

//Adding variables that I need
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

//Adding an event listener on the header, targeting burger menu icons
header.addEventListener("click", function(event){
    console.log(event.target);
    //If open menu is clicked, I hide the open menu icon, display the nav and display the close menu icon
  if (event.target.classList[1]==="openMenu"){
    openMenu.style.display ="none";
    closeMenu.style.display ="block";
    nav.style.display="block"
//If close menu is clicked, I hide the close menu icon, hide the nav and display the open menu icon
  } else if (event.target.classList[2]==="closeMenu"){
    openMenu.style.display ="block";
    closeMenu.style.display ="none";
    nav.style.display="none"
  }
})