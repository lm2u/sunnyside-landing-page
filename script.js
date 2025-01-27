const menu = document.querySelector(".hamburger")
const nav = document.querySelector(".nav__list")
function toggleMenu(e){
  nav.classList.toggle("active")
  console.log(nav)
}

menu.addEventListener("click", toggleMenu)