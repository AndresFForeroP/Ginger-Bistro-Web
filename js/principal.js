function getRotationDegrees(element) {
  const style = window.getComputedStyle(element);
  const transform = style.getPropertyValue("transform");

  if (transform === "none") return 0;

  const values = transform.split("(")[1].split(")")[0].split(",");
  const a = values[0];
  const b = values[1];
  let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

  return (angle < 0 ? angle + 360 : angle);
}

const menuBtn = document.querySelector("nav button");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  if (getRotationDegrees(menuBtn) === 90) {
    menuBtn.style.transition = "0.5s";
    menuBtn.style.transform = "rotateZ(0deg)";
    menuBtn.classList.remove("bg-gray-800");
    menuBtn.classList.remove("p-3");
    menuBtn.classList.remove("rounded-4xl");
  } else {
    menuBtn.style.transition = "0.5s";
    menuBtn.style.transform = "rotateZ(90deg)";
    menuBtn.classList.add("bg-gray-800");
    menuBtn.classList.add("p-3");
    menuBtn.classList.add("rounded-4xl");
  }
});

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