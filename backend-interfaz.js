// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");
    const passwordInput = document.getElementById("dato2");
    const showPasswordButton = document.getElementById("showPassword");

    let mostrarContraseña = false; // Estado para alternar la visibilidad de la contraseña

    // Evento para manejar el envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

        const usuario = document.getElementById("dato1").value;
        const password = passwordInput.value;

        // Mostrar el mensaje de bienvenida con la contraseña oculta inicialmente
        const passwordOculto = "*".repeat(password.length);
        mensaje.textContent = `Bienvenido, ${usuario}. Tu contraseña es: ${passwordOculto}`;
    });

    // Evento para mostrar/ocultar la contraseña en el mensaje
    showPasswordButton.addEventListener("click", () => {
        const password = passwordInput.value;

        if (!mostrarContraseña) {
            // Mostrar la contraseña real en el mensaje
            mensaje.textContent = mensaje.textContent.replace(/\*+/g, password);
            showPasswordButton.textContent = "Ocultar contraseña";
        } else {
            // Ocultar la contraseña en el mensaje
            const passwordOculto = "*".repeat(password.length);
            mensaje.textContent = mensaje.textContent.replace(password, passwordOculto);
            showPasswordButton.textContent = "Mostrar contraseña";
        }

        mostrarContraseña = !mostrarContraseña; // Alternar el estado
    });
});