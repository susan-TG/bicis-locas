function validateForm(){
	/* Escribe tú código aquí */
	var name = document.forms["myForm"]["name"].value;
	var lastname = document.forms["myForm"]["lastname"].value;
	var email = document.forms["myForm"]["input-email"].value;
	var password = document.forms["myForm"]["input-password"].value;
	var bicis = document.forms["myForm"]["bicis"].value;

	var exp = /^[a-zA-Z]+$/;
	var expEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	// Nombre
	if (name == null || name == "") {
        alert("El nombre no puede quedar vacio");
        return false;
    }
	if (!name.match(exp)) {
		alert('Solo se permiten caracteres de la A a la Z en el nombre');
		return false;
	}
	if (name[0]!=name[0].toUpperCase()) {
		alert('El nombre tiene que empezar en mayuscula');
		return false;
	}
	// Apellido
	if (lastname == null || lastname == "") {
        alert("El apellido no puede quedar vacio");
        return false;
    }
	if (!lastname.match(exp)) {
		alert('Solo se permiten caracteres de la A a la Z en el nombre');
		return false;
	}
	if (lastname[0]!=lastname[0].toUpperCase()) {
		alert('El apellido tiene que empezar en mayuscula');
		return false;
	}
	// Email
	if (email == null || email == "") {
        alert("El Correo no puede quedar vacio");
        return false;
    }
	if (!email.match(expEmail)) {
		alert('Debes ingresar un email valido');
		return false;
	}
	// Password
	if (password == null || password == "") {
        alert("El password no puede quedar vacio");
        return false;
    }
	if (password.length < 6) {
		alert("El password debe tener al menos 6 caracteres");
		return false;
	}
	if (password == "password" || password == "123456" || password == "098754") {
		alert('El password no puede ser "password" o "123456" o "098754"');
		return false;
	}
	// Bicis
	if (bicis == 0) {
		alert('Debes elegir algún tipo de bici');
		return false;
	}
}
