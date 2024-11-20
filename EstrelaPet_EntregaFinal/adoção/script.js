function validadeForm() {
    const cpf = document.getElementById("cpf").value;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    const cellPhone = document.getElementById("cellPhone").value;
    const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    if (!cpfRegex.test(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return false;
    }

    if (!phoneRegex.test(cellPhone)) {
        alert("Por favor, insira um telefone celular válido no formato (00) 00000-0000.");
        return false;
    }

    return true;
}


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

