document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Hardcoded credentials
            const validUsername = 'Lovin';
            const validPassword = '1234';

            if (username === validUsername && password === validPassword) {
                window.location.href = 'menu_principal.html';
            } else {
                alert('Usuário ou senha incorretos. Tente novamente.');
            }
        });
    }
});
