import { mostrarCarrito } from "./cargar_carrito/cargar_carrito.js";
import { mostrarModalUsuario } from "./cargar_usuario/cargar_usuario.js";

function cargar_header(lista_productos, usuario) {
    let section_header = document.querySelector("header");
    section_header.innerHTML = `
        <div class="content">
            <div class="logo">
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/file%20(1).png?raw=true" alt="">
                <h3>Fashion Store</h3>
            </div>
            <div class="entrada_de_texto">
                <input type="text" id="responsive-input" class="buscador" placeholder="  ¿Qué productos buscas?" src="">
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/busqueda%20(1).png?raw=true" alt="" class="lupa">
            </div>
            <div class="div-carrito_ventana">
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/file%20(3).png?raw=true" alt="" class="carrito">
                <div class="ventana-carrito"></div>
            </div>
            <div class="sesion">
                <img id="icono-usuario" src="https://github.com/marelinguzman/img_repositorio/blob/main/bloqueo-de-usuario%20(1).png?raw=true" alt="">
            </div>
        </div>
    `;

    document.getElementById("icono-usuario").addEventListener("click", mostrarModalUsuario);

    mostrarCarrito(lista_productos);
}

export { cargar_header };
