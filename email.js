(function() {
    emailjs.init("RDl8sF7yI6nHxx5GP");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const userName = document.getElementById("user-name").value;
    const userEmail = document.getElementById("user-email").value;
    const userMessage = document.getElementById("user-message").value;

    const templateParams = {
        from_name: userName,
        email_id: userEmail,
        message: userMessage,
    };

    emailjs.send("default_service", "template_yzydmef", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("¡Tu mensaje ha sido enviado con éxito!");
        }, function(error) {
            console.error("FAILED...", error);
            alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.");
        });
});
