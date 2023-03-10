const hamburger=document.getElementsByClassName("hamburger")[0];
const body=document.getElementById("body");
const pseudohamburger=document.getElementsByClassName("pseudohamburger")[0];

const headerRight=document.getElementsByClassName("header-right")[0];
const logo=document.getElementsByClassName("logo")[0];
const Headerbutton1=document.getElementsByClassName("Header-button")[0];
const Headerbutton2=document.getElementsByClassName("Header-button")[1];
const Headerbutton3=document.getElementsByClassName("Header-button")[2];
const Headerbutton4=document.getElementsByClassName("Header-button")[3];

const header=document.getElementsByClassName("header")[0];
hamburger.addEventListener("click",function(){this.style.display="none";})
hamburger.addEventListener("click", function(){pseudohamburger.style.display="flex";header.style.backgroundColor="white";logo.style.color="black";});
hamburger.addEventListener("click", function(){headerRight.style.display="flex";});

pseudohamburger.addEventListener("click", function(){this.style.display="none";hamburger.style.display="flex";header.style.backgroundColor="transparent";logo.style.color=" white";});
pseudohamburger.addEventListener("click", function(){headerRight.style.display="none";});


