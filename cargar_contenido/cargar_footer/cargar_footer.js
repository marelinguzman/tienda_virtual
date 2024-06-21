function cargar_footer(){
    let footer = document.querySelector("footer");

    footer.innerHTML = `
        <div class="acerca">
            <h1>Acerca de Fashion Store</h1>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/usuarios.png?raw=true" alt="">
                <h2>Quiénes somos</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/crecimiento-profesional%20(1).png?raw=true" alt=""> 
                <h2>Políticas de privacidad</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/auditoria.png?raw=true" alt="">
                <h2>Políticas de garantía</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/corporativo.png?raw=true" alt="">
                <h2>Empleos</h2>
            </div>
        </div>

        <div class="ayuda">
            <h1>Ayuda</h1>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/interrogatorio%20(1).png?raw=true" alt="">
                <h2>Preguntas frecuentes</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/flecha-del-carrito-hacia-abajo.png?raw=true" alt="">
                <h2>Cómo comprar en Fashion Store</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/tienda-del-mercado.png?raw=true" alt="">
                <h2>Envíos a toda Guate</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/comprador-del-carrito-de-compras.png?raw=true" alt="">
                <h2>Mis pedidos</h2>
            </div>
        </div>

        <div class="contacto">

            <h1>Contacto</h1>

            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/puntos-de-comentario%20(1).png?raw=true" alt="">
                <h2>Escribenos en WhatsApp</h2>
            </div>

            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/sobre%20(1).png?raw=true" alt="">
                <h2>Envíanos un E-mail</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/marcador.png?raw=true" alt="">
                <h2>Ubicaciones y horarios</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/llamada-telefonica.png?raw=true" alt="">
                <h2>+502 2300-5678</h2>
            </div>

        </div>
        
        <div class="redes">
            <h1>Redes Sociales</h1>

            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/youtube.png?raw=true" alt="">
                <h2>https:/www.youtube.com</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/instagram.png?raw=true" alt="">
                <h2>https:/www.instagram.com</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/snapchat.png?raw=true" alt="">
                <h2>https:/www.snapchat.com</h2>
            </div>
            <div>
                <img src="https://github.com/marelinguzman/borrador_de_tienda/blob/main/facebook.png?raw=true" alt="">
                <h2>https:/www.facebook.com</h2>
            </div>
        </div>
    `;
}

export{cargar_footer}