var formSignin = document.querySelector('#signin');
var formSignup = document.querySelector('#signup');
var btnColor = document.querySelector('.btnColor');
var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

  
  
  function validatePassword(){
    if(password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Senhas diferentes!");
    } else {
      confirm_password.setCustomValidity('');
    }
  }
  
  password.onchange = validatePassword;
  confirm_password.onkeyup = validatePassword;

document.querySelector('#btnSignin').addEventListener('click', () => {
    formSignin.style.left = "25px";
    formSignup.style.left = "450px";
    btnColor.style.left = "0px";
});

document.querySelector('#btnSignup').addEventListener('click', () => {
    formSignin.style.left = "-450px";
    formSignup.style.left = "25px";
    btnColor.style.left = "110px";
});


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

