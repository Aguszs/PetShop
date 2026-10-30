// Acceso de demostración: los datos viven solo en memoria durante esta visita.
let demoAccount = null;
let notificationTimer;

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');

document.getElementById('registerButton').addEventListener('click', () => {
    if (!registerForm.reportValidity()) return;

    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;

    if (!username || !email || !password) {
        showNotification('Completá todos los campos para continuar.', 'error');
        return;
    }

    demoAccount = { email, password };
    showNotification('Cuenta de prueba creada. Ya podés iniciar sesión.', 'success');
});

document.getElementById('loginButton').addEventListener('click', () => {
    if (!loginForm.reportValidity()) return;

    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    if (demoAccount && email === demoAccount.email && password === demoAccount.password) {
        showNotification('Acceso de prueba correcto. Volviendo a la tienda…', 'success');
        window.setTimeout(() => {
            window.location.href = '/index.html';
        }, 1200);
        return;
    }

    showNotification(
        demoAccount
            ? 'Los datos no coinciden con la cuenta creada en esta visita.'
            : 'Creá una cuenta de prueba antes de iniciar sesión.',
        'error'
    );
});

function showNotification(message, type) {
    notification.textContent = message;
    notification.className = `notification ${type} show`;
    window.clearTimeout(notificationTimer);
    notificationTimer = window.setTimeout(() => {
        notification.classList.remove('show');
    }, 3500);
}