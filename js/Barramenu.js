export class GingerNavbar extends HTMLElement {
            constructor() {
                super();
            }
            connectedCallback() {
                this.render();
                this.setupEventListeners();
            }
            getRotationDegrees(element) {
                const style = window.getComputedStyle(element);
                const transform = style.getPropertyValue("transform");

                if (transform === "none") return 0;

                const values = transform.split("(")[1].split(")")[0].split(",");
                const a = values[0];
                const b = values[1];
                let angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));

                return (angle < 0 ? angle + 360 : angle);
            }

            setupEventListeners() {
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
            }
            render() {
                this.innerHTML = `
                     <nav class="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-trasparent p-4 text-white px-5 py-2 flex items-center justify-between">
                        <img src="https://i.ibb.co/rf7kwSsk/Logo-Ginger.png" alt="" class ="w-32">
                        <div class="text-xl font-bold"></div>
                        <button class="md:hidden block text-2xl">☰</button>
                        <ul id="menu" class="hidden flex-col space-y-3 absolute top-17 left-5/8 p-6 m-1.5 w-auto bg-black/60
                        md:flex md:flex-row md:space-x-25 md:space-y-0 md:static md:bg-transparent md:w-auto md:p-0 md:m-0 md:mr-10">
                        <li><a href="#" class="font-slab hover:text-2xl duration-200 ease-in hover:text-orange-300 active:text-orange-300 active:bg-gray-500 active:rounded-full active:p-2">Inicio</a></li>
                        <li><a href="#" class="font-slab hover:text-2xl duration-200 ease-in hover:text-orange-300 active:text-orange-300 active:bg-gray-500 active:rounded-full active:p-2">Conocenos</a></li>
                        <li><a href="#" class="font-slab hover:text-2xl duration-200 ease-in hover:text-orange-300 active:text-orange-300 active:bg-gray-500 active:rounded-full active:p-2">Productos</a></li>
                        <li><a href="#" class="font-slab hover:text-2xl duration-200 ease-in hover:text-orange-300 active:text-orange-300 active:bg-gray-500 active:rounded-full active:p-2">Contacto</a></li>
                        </ul>
                    </nav>
                `;
            }
        }