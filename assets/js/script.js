
// const home = document.querySelector(".box-home")
// home.addEventListener("click" , function(){
//   const link = document.createElement("a")
//   // link.target = "_blank"
//   link.href = "https://google.com"
//   link.click()
// })



const menu = document.querySelector(".icon-menu")
const menuRespons = document.querySelector(".menu-respons")
let flagMenu = 0
menu.addEventListener("click" , function(){
 if (flagMenu == 0) {
  menuRespons.style.right = "0"
  
  menu.innerHTML = "close"
  flagMenu = 1
 }else if (flagMenu == 1) {
  menuRespons.style.right = "100%"
  menu.innerHTML = "menu"
  flagMenu = 0
 }
})
document.body.style.width= window.innerWidth