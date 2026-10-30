// Registro e inicio de sesión local para este navegador.
const ACCOUNT_KEY = 'entreAmigosAccount';
const PBKDF2_ITERATIONS = 120000;
let notificationTimer;

const registerForm = document.getElementById('registerForm');
const loginForm = document.getElementById('loginForm');
const notification = document.getElementById('notification');

async function hashPassword(password, salt) {
    const key = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(password),
        'PBKDF2',
        false,
        ['deriveBits']
    );
    const bits = await window.crypto.subtle.deriveBits(
        { name: 'PBKDF2', salt, iterations: PBKDF2_ITERATIONS, hash: 'SHA-256' },
        key,
        256
    );
    return Array.from(new Uint8Array(bits), byte => byte.toString(16).padStart(2, '0')).join('');
}

function bytesToHex(bytes) {
    return Array.from(bytes, byte => byte.toString(16).padStart(2, '0')).join('');
}

document.getElementById('registerButton').addEventListener('click', async () => {
    if (!registerForm.reportValidity()) return;

    const username = document.getElementById('registerUsername').value.trim();
    const email = document.getElementById('registerEmail').value.trim().toLowerCase();
    const password = document.getElementById('registerPassword').value;

    if (!username || !email || !password) {
        showNotification('Completá todos los campos para continuar.', 'error');
        return;
    }

    try {
        const salt = window.crypto.getRandomValues(new Uint8Array(16));
        const account = {
            username,
            email,
            salt: bytesToHex(salt),
            passwordHash: await hashPassword(password, salt)
        };
        window.localStorage.setItem(ACCOUNT_KEY, JSON.stringify(account));
        showNotification('Cuenta creada. Ya podés iniciar sesión.', 'success');
    } catch {
        showNotification('No pudimos guardar tus datos en este navegador.', 'error');
    }
});

document.getElementById('loginButton').addEventListener('click', async () => {
    if (!loginForm.reportValidity()) return;

    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    try {
        const account = JSON.parse(window.localStorage.getItem(ACCOUNT_KEY) || 'null');
        if (!account || email !== account.email) {
            showNotification('Revisá el correo o creá una cuenta para continuar.', 'error');
            return;
        }

        const salt = Uint8Array.from(account.salt.match(/.{2}/g), byte => parseInt(byte, 16));
        const passwordHash = await hashPassword(password, salt);
        if (passwordHash !== account.passwordHash) {
            showNotification('La contraseña no coincide. Revisala e intentá de nuevo.', 'error');
            return;
        }

        showNotification('¡Hola, ' + account.username + '! Iniciaste sesión.', 'success');
        window.setTimeout(() => {
            window.location.href = '/index.html';
        }, 1200);
    } catch {
        showNotification('No pudimos validar tus datos. Intentá de nuevo.', 'error');
    }
});

function showNotification(message, type) {
    notification.textContent = message;
    notification.className = 'notification ' + type + ' show';
    window.clearTimeout(notificationTimer);
    notificationTimer = window.setTimeout(() => {
        notification.classList.remove('show');
    }, 3500);
}