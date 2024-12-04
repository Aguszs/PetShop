// Registro
document.getElementById('registerButton').addEventListener('click', function () {
    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value.trim();

    if (!username || !email || !password) {
        showNotification('Por favor, completa todos los campos.', 'error');
        return;
    }

    // Guardar datos en LocalStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    showNotification('Registro exitoso. Ahora puedes iniciar sesión.', 'success');
});

// Login
document.getElementById('loginButton').addEventListener('click', function () {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    if (!loginEmail || !loginPassword) {
        showNotification('Por favor, completa todos los campos.', 'error');
        return;
    }

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        showNotification('Inicio de sesión exitoso. Redirigiendo...', 'success');
        setTimeout(() => {
            window.location.href = "/index.html"; // Redirige a la página principal del PetShop
        }, 2000); // Retraso de 2 segundos para que se vea el mensaje
    } else {
        showNotification('Error: Email o contraseña incorrectos.', 'error');
    }
});

// Función para mostrar notificaciones
function showNotification(message, type) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.className = `notification ${type} show`;

    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // La notificación desaparece después de 3 segundos
}