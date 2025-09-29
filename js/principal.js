import {GingerNavbar} from "./Barramenu.js";
customElements.define('ginger-navbar', GingerNavbar);
const card = document.getElementById("card");
const logo = card.querySelector(".logo");
const titulo = card.querySelector(".titulo");
const textos = card.querySelectorAll(".texto");

card.addEventListener("click", () => {
  card.classList.toggle("pb-17");
  card.classList.toggle("rounded-t-lg");
  logo.classList.toggle("w-70");
  titulo.classList.toggle("text-[14px]");
  titulo.classList.toggle("opacity-100");
  titulo.classList.toggle("scale-100");

  textos.forEach(texto => {
    texto.classList.toggle("text-[14px]");
    texto.classList.toggle("opacity-100");
    texto.classList.toggle("scale-100");
  });
});