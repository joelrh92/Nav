btnOpen = document.getElementById("btn-open");
btnCloset = document.getElementById("btn-closet");
nav =document.getElementById("nav");

btnOpen.addEventListener("click", ()=> {
  nav.classList.add("visible");
});

btnCloset.addEventListener("click",() =>{
    nav.classList.remove("visible");
  });