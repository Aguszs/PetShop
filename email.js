// Incluye la librería de EmailJS
(function() {
    emailjs.init("RDl8sF7yI6nHxx5GP"); // Sustituye "TU_USER_ID" por tu User ID de EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío por defecto del formulario

    // Obtiene los valores del formulario
    const userName = document.getElementById("user-name").value;
    const userEmail = document.getElementById("user-email").value;
    const userMessage = document.getElementById("user-message").value;

    // Datos para EmailJS
    const templateParams = {
        from_name: userName,
        email_id: userEmail,
        message: userMessage,
    };

    // Envía el correo con EmailJS
    emailjs.send("default_service", "template_yzydmef", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("¡Tu mensaje ha sido enviado con éxito!");
        }, function(error) {
            console.error("FAILED...", error);
            alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.");
        });
});
