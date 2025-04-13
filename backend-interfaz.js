
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const mensaje = document.getElementById("mensaje");
    const passwordInput = document.getElementById("dato2");
    const showPasswordButton = document.getElementById("showPassword");

    let mostrarContraseña = false; 


    form.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const usuario = document.getElementById("dato1").value;
        const password = passwordInput.value;

        const passwordOculto = "*".repeat(password.length);
        mensaje.textContent = `Bienvenido, ${usuario}. Tu contraseña es: ${passwordOculto}`;
    });

    showPasswordButton.addEventListener("click", () => {
        const password = passwordInput.value;

        if (!mostrarContraseña) {

            mensaje.textContent = mensaje.textContent.replace(/\*+/g, password);
            showPasswordButton.textContent = "Ocultar contraseña";
        } else {
            const passwordOculto = "*".repeat(password.length);
            mensaje.textContent = mensaje.textContent.replace(password, passwordOculto);
            showPasswordButton.textContent = "Mostrar contraseña";
        }

        mostrarContraseña = !mostrarContraseña;
    });
});
