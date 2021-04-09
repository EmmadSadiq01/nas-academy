document.getElementById("drop-1").addEventListener("click", ()=> {
  let element = document.getElementById("menu-1");
    element.classList.toggle("show-menu");
});
document.getElementById("drop-2").addEventListener("click", ()=> {
  let element = document.getElementById("menu-2");
  element.classList.toggle("show-menu");
});
document.getElementById("togle-menu").addEventListener("click", (e)=> {
  let element = document.getElementById("mobile-menu");
  element.classList.toggle("show-menu");
  let icon = document.getElementById("togle-menu")
  if(icon.className!="fas fa-bars"){
    icon.className="fas fa-bars"
  }else{
    icon.className="fas fa-times"

  }
});
