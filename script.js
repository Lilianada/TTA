
const menu= document.querySelector (".hamburger");
const nav= document.querySelector (".navlinks");

menu.addEventListener("click", () => {   //this makes the hamburger change from the three lines to the times button,
 nav.classList.toggle("ham")             // when the selector ham is added in front of the lines.
})                                       //toggle means switch from one thing to another
   
