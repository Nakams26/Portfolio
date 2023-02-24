// Adding a variable for the div that contain all my slides
const carousselContainer = document.querySelector(".flexProjectUl");
// Adding a variable for every slides
const slide = document.querySelector(".flexLi");
// Adding a variable for the next  button
const next = document.querySelector(".fa-arrow-right-long");
// Adding a variable for the previuos button
const previous = document.querySelector(".fa-arrow-left-long");

//Adding a event listener on the next button
next.addEventListener("click", function () {
  // Adding a variable for the slides width
  const slideWidth = slide.clientWidth;
  // When icon is clicked >>> scroll left of the image width size
  carousselContainer.scrollLeft += slideWidth;
});

//Adding a event listener on the previous button
previous.addEventListener("click", function () {
  const slideWidth = slide.clientWidth;
   // When icon is clicked >>> scroll right of the image width size
  carousselContainer.scrollLeft -= slideWidth;
});