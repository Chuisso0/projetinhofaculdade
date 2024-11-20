
const themeToggle = document.getElementById('toggle-theme');

// Verifica se o modo escuro está salvo no localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

themeToggle.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que o link seja seguido
    document.body.classList.toggle('dark-mode');
    
    // Salva ou remove a preferência do modo escuro no localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.removeItem('dark-mode');
    }
});

