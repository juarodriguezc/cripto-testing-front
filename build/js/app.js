console.log('hola mundo');

// // Sistema logico de la aplicacion
document.addEventListener('DOMContentLoaded', function(){
	iniciarApp();
});

function iniciarApp() {
	// mostrarServicios();

	// // Cambio de tamaño de la pagina
	// tamañoPagina();

	// // Resalta el Div actual segun el tab que se preciones
	// mostrarSeccion();

	// Oculta el una seccion el tab que se precione
	// console.log('mundo');
	cambiarSeccion();
	
	// // Paginacion siguiente, anterior
	// paginaSig();
	// paginaAnt();
	// Ocultar();
	
	// // Muestra el resumen de la cita (o mensaje de error)
	// mostrarResumen();

	// // Reconocer los datos de la cita escritos
	// nombreCita();
	// fechaCita();
	// horaCita();
}

function cambiarSeccion() {
	// const siguiente = document.querySelector('#BIngresar');
	// siguiente.addEventListener('click', () => {
	// 	// llamada a la funvion de mostrar secciones
	// 	console.log('hola mis amigos');
		// console.log(pagina);
	// });
}

// function funMostrar(e) {

// 	// Eliminar el tab anterior
// 	const a1 = document.querySelector(`#${e}`);
// 	// const a2 = document.querySelector(`#${f}`);

// 	// Quitar Mostrar seccion
// 	document.querySelector('.mostrar-seccion').classList.remove('mostrar-seccion');

// 	// Agregar mostrar-seccion en la pocision del click
// 	// const seccion =document.querySelector(`#parte-${pagina}`);
// 	a1.classList.add('mostrar-seccion');
// 	// Resaltar boton
// 	// tab = document.querySelector(`[data-paso="${pagina}"]`);
// 	// tab.classList.add('actual');
// }

// function revisarContraseña() {
// 	const nombre = document.querySelector('#Nombre');
// 	const apellido = document.querySelector('#Apellido');
// 	const celular = document.querySelector('#Celular');
// 	const estado = document.querySelector('#Estado');
// 	const ciudad = document.querySelector('#Ciudad');
// 	const email = document.querySelector('#Email');
// 	const contraseña = document.querySelector('#Contraseña');
// 	const repetir = document.querySelector('#Repetir');

// 	while (document.querySelector('.error') != null) {
// 		document.querySelector('.error').classList.remove('error');
// 		// statement
// 	}
// 	let spring = '';
// 	// console.log(document.querySelector('.error'));
// 	if (nombre.value.length < 5) {
// 		spring = spring + 'Nombre incorrecto\n';
// 		nombre.classList.add('error');
// 	}
// 	if (apellido.value.length < 5) {
// 		spring = spring + 'Apellido incorrecto\n';
// 		apellido.classList.add('error');
// 	}
// 	if (celular.value.length < 8) {
// 		spring = spring + 'Numero incorrecto\n';
// 		celular.classList.add('error');
// 	}
// 	if (email.value.length < 5) {
// 		spring = spring + 'E-mail incorrecto\n';
// 		email.classList.add('error');
// 	}
// 	if (contraseña.value.length < 8) {
// 		spring = spring + 'Contraseña minimo de 8 datos\n';
// 		contraseña.classList.add('error');
// 	}
// 	else if (contraseña.value != repetir.value) {
// 		spring = spring + 'Contraseñas no son iguales\n';
// 		repetir.classList.add('error');
// 	}
// 	if (spring.length != 0) {
// 		window.alert(spring);
// 	}
// 	else{
// 		window.alert('Datos aceptados');
// 		RegistroUsuario(nombre.value, 
// 						apellido.value, 
// 						celular.value,
// 						estado.value,
// 						ciudad.value,
// 						email.value,
// 						contraseña.value,
// 						repetir.value);

// 		nombre.value = '';
// 		apellido.value = '';
// 		celular.value = '';
// 		estado.value = '';
// 		ciudad.value = '';
// 		email.value = '';
// 		contraseña.value = '';
// 		repetir.value = '';
// 	}
// 	// console.log(contraseña.value);
// }	

// function limpiar(a) {
// 	const error = document.querySelector(a);
// 	error.classList.remove('error');
// }

// function RegistroUsuario(nombre, 
// 						apellido, 
// 						celular,
// 						estado,
// 						ciudad,
// 						email,
// 						contraseña,
// 						repetir){
// 	console.log('Hola mundo');
// }
