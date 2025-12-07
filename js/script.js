const nombre = document.getElementById("nombre_completo");
const apellido = document.getElementById("apellido");
const direccion = document.getElementById("direccion");
const correo = document.getElementById("correo_electronico");
const telefono = document.getElementById("telefono");
const pais = document.getElementById("pais");
const codigo_postal = document.getElementById("codigo_postal");
const sexo_masculino = document.getElementById("sexo_masculino");
const sexo_femenino = document.getElementById("sexo_femenino");
const comentarios = document.getElementById("comentarios");
const val_nom = document.getElementById("validar_nombre");
const val_ape = document.getElementById("validar_apellido");
const val_dir = document.getElementById("validar_direccion");
const val_cor = document.getElementById("validar_correo");
const val_tel = document.getElementById("validar_telefono");
const val_pais = document.getElementById("validar_pais");
const val_cod = document.getElementById("validar_codigo_postal");
const val_sexo = document.getElementById("validar_sexo");
const val_com = document.getElementById("validar_comentarios");

function validarCorreo(correo) {
  var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return expReg.test(correo) == false;
}

function validarTelefono(telefono) {
  var expReg = /^(\(?(\+54|0054)\)?)?(911)(\d{8})$/;
  return expReg.test(telefono) == false;
}

boton_enviar.addEventListener("click", (e) => {

  if (nombre.value.length < 4) {
    val_nom.innerHTML = "El nombre que ingresaste es muy corto";
    e.preventDefault();
  } else {
    val_nom.innerHTML = " ";
  }

  if (apellido.value.length < 5) {
    val_ape.innerHTML = "El apellido que ingresaste es muy corto";
    e.preventDefault();
  } else {
    val_ape.innerHTML = " ";
  }

  if (direccion.value.length < 8) {
    val_dir.innerHTML = "La direccion que ingresaste es muy corta";
    e.preventDefault();
  } else {
    val_dir.innerHTML = " ";
  }

  if (validarCorreo(correo.value)) {
    val_cor.innerHTML = "El correo electronico que ingresaste no es valido";
    e.preventDefault();
  } else {
    val_cor.innerHTML = " ";
  }

  if (validarTelefono(telefono.value)) {
    val_tel.innerHTML = "El telefono que ingresaste no es valido";
    e.preventDefault();
  } else {
    val_tel.innerHTML = " ";
  }

  if (pais.value == "Elegi tu pais") {
    val_pais.innerHTML = "Por favor ingresa tu pais de nacimiento";
    e.preventDefault();
  } else {
    val_pais.innerHTML = " ";
  }

  if (codigo_postal.value < 1000 || codigo_postal.value > 9420) {
    val_cod.innerHTML = "El codigo postal no es valido";
    e.preventDefault();
  } else {
    val_cod.innerHTML = " ";
  }

  if (sexo_masculino.checked) {
    val_sexo.innerHTML = " ";
  } else if (sexo_femenino.checked) {
    val_sexo.innerHTML = " ";
  } else {
    val_sexo.innerHTML = "Por favor ingresa tu sexo";
    e.preventDefault();
  }

  if (comentarios.value.length < 20) {
    val_com.innerHTML = "El comentario es muy corto";
    e.preventDefault();
  } else if (comentarios.value.length > 400) {
    val_com.innerHTML = "El comentario es muy largo";
    e.preventDefault();
  } else {
    val_com.innerHTML = " ";
  }
})

