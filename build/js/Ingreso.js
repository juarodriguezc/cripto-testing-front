// const { createApp } = Vue;

// Ingreso de los datos
export const ingreso = Vue.createApp({
	data() {
		return {
			Ingreso: 'Ingreso',
			Email: 'Correo',
			Password: 'Contraseña',
			Boton: 'Acceder'
		}
	}
});
// window.vueApp = ingreso;
ingreso.mount('#ingresado');
