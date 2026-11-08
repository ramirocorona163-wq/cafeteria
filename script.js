const botonregistro = document.getElementById("botonregistro");
const formRegistro = document.getElementById("formRegistro");

formRegistro.addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const pass = document.getElementById("pass").value;
  const passConfirm = document.getElementById("pass2").value;

  if (!nombre || !correo || !pass || !passConfirm) {
    alert("Completa todos los campos");
    return;
  }

  if (pass !== passConfirm) {
    alert("Las contraseñas no coinciden");
    return;
  }

  alert("Registro exitoso");
});

const toggle = document.getElementById("togglePass");
const pass2 = document.getElementById("pass2");

toggle.addEventListener("click", () => {
  pass2.type = pass2.type === "password" ? "text" : "password";
});