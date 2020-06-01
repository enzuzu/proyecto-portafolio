const nav = document.querySelector("nav");
const yearLink = nav.querySelector(".link");
const submenu = nav.querySelector(".submenu");

yearLink.addEventListener("click", showMenu);

function showMenu(e) {
  e.preventDefault();
  submenu.toggleAttribute("hidden");
  console.log("funciona!");
}
