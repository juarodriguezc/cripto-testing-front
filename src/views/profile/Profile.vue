<template lang="">
  
	<navbar/>
	
	
	<successPet v-if="msgVisible" />
	<div class = "row g-0">
		<div class = "col-lg-12 col-xl-6">
			<div class="espacio_trabajo">
				<div class ="subtitulo">
					<h1 class="titulo_home texto_centrado">
						Perfil de Usuario
					</h1>
				</div>
			</div>
			<div class="separacion">
				<div class="usuario">
					<div class="nombre datos">
						<h3>Usuario<span>:</span></h3>
						<div v-if="show">
							<h2 class="mayuscula">{{Nombre(json)}}</h2>
						</div>
			
						<div class="cambiar" v-else>
							<input 
								v-on:click="errorNombre"
								type="text" 
								class="form-control mayuscula"
								id="floatingName" 
								placeholder="Nombre" 
								maxlength="50"
								v-model="json.name">
			
							<hr class="vertical" width="3" size="500">
							<hr class="Horizontal">
			
							<input 
								v-on:click="errorApellido"
								type="text" 
								class="form-control mayuscula" 
								id="floatingSurame" 
								placeholder="Nombre" 
								maxlength="50"
								v-model="json.surname">    
						</div>
						<hr>
					</div>
		
					<div class="correo datos">
						<h3>E-mail<span>:</span></h3>
						<h2>{{Email(json)}}</h2>
						<hr>
					</div>
			
					<div class="celular datos">
						<h3>Celular<span>:</span></h3>
						<div v-if="show">
						<h2>{{Cell(json)}}</h2>
						</div>
						<div class="cambiar" v-else>
						<input 
							v-on:click="errorCelular"
							type="number" 
							class="form-control" 
							id="floatingcellPhoneNumber" 
							placeholder="Teléfono" 
							maxlength="10" 
							oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
							v-model="json.cellPhoneNumber">
						</div>
						<hr>
					</div>

					<div class="celular datos">
						<h3>Ultima conexion<span>:</span></h3>
						<h2>{{this.UltimaCon()}}</h2>
					</div>
				</div>
			</div>

			<div class="botones">

				<div class="cambios">
					<button type="button" class ="btn" v-on:click="show = !show; editado()">
						<span v-if="show">Editar Datos</span>
						<span v-else>Actualizar</span>
					</button>
					<button v-if="!show" type="button" class ="btn" v-on:click="show = !show; cancelar()">
						Cancelar
					</button>
				</div>
			</div>


		</div>
		<div class = "col-lg-12 col-xl-6">
			<div class="espacio_trabajo">
				<div class ="subtitulo">
					<h1 class="titulo_home texto_centrado">
						Mis publicaciones
					</h1>
				</div>
			</div>
			<cardPet v-bind:pets="pets"/>
			<br>
			<div class = "center_button ">
				<button type="button" class ="btn" v-on:click="goRegister">Registrar mascota para adopción</button>
				<button type="button" class ="btn" v-on:click="goUserPets">Ver mis publicaciones</button>
			</div>
			<br>
			<br>
			<div class="w-100"></div>
			<div class="espacio_trabajo">
				<div class ="subtitulo">
					<h1 class="titulo_home texto_centrado">
						Solicitudes de adopción
					</h1>
				</div>
			</div>

			<div class = "center_button ">
				<button type="button" class ="btn" v-on:click="goApliAdopcion">Consulta solicitudes de adopción</button>
			</div>


		</div>
	</div>



	<div class="separacion" v-if="false">
		
		<div class="usuario">

		<div class="nombre datos">
			
			<h3>Usuario<span>:</span></h3>
			
			<div v-if="show">
			<h2 class="mayuscula">{{Nombre(json)}}</h2>
			</div>
			
			<div class="cambiar" v-else>
			<input 
				v-on:click="errorNombre"
				type="text" 
				class="form-control mayuscula"
				id="floatingName" 
				placeholder="Nombre" 
				maxlength="50"
				v-model="json.name">
			
			<hr class="vertical" width="3" size="500">
			<hr class="Horizontal">
			
			<input 
				v-on:click="errorApellido"
				type="text" 
				class="form-control mayuscula" 
				id="floatingSurame" 
				placeholder="Nombre" 
				maxlength="50"
				v-model="json.surname">    
			</div>
			<hr>
		</div>
		
		<div class="correo datos">
			<h3>E-mail<span>:</span></h3>
			<h2>{{Email(json)}}</h2>
			<hr>
		</div>
		
		<div class="celular datos">
			<h3>Celular<span>:</span></h3>
			<div v-if="show">
			<h2>{{Cell(json)}}</h2>
			</div>
			<div class="cambiar" v-else>
			<input 
				v-on:click="errorCelular"
				type="number" 
				class="form-control" 
				id="floatingcellPhoneNumber" 
				placeholder="Teléfono" 
				maxlength="10" 
				oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
				v-model="json.cellPhoneNumber">
			</div>
			<hr>
		</div>


		<div class="celular datos">
			<h3>Ultima conexion<span>:</span></h3>
			<h2>{{this.UltimaCon()}}</h2>
		</div>
		</div>

		<div class="botones">

		<button type="button" class ="btn" v-on:click="goRegister">Registrar mascota para adopción</button>

		<button type="button" class ="btn" v-on:click="goApliAdopcion">Consulta solicitudes de adopción</button>

		<button type="button" class ="btn" v-on:click="goUserPets">Ver mis publicaciones</button>

		<div class="cambios">
			<button type="button" class ="btn" v-on:click="show = !show; editado()">
			<span v-if="show">Editar Datos</span>
			<span v-else>Actualizar</span>
			</button>
			<button v-if="!show" type="button" class ="btn" v-on:click="show = !show; cancelar()">
			Cancelar
			</button>
		</div>

		</div>
	</div>
</template>

<script>
import navbar from "@/components/navbar";
import cardPet from "@/components/regMascota/cardPetPr";

import axios from "axios";
import { useStore } from 'vuex'
import { computed } from 'vue'

import successPet from "@/components/regMascota/msgSuccessPet";


var token = localStorage.token;
var A_nombre = '';
var A_apellido = '';
var A_numero = 0;


export default {
	name: "Profile",
    setup(){
      //VueX config
        const store = useStore()
        //States
        const lastLogin = computed(() => store.getters.lastLogin)
        const msgVisible = computed(() => store.state.addPets.msgVisible)
        //Functions
        function UltimaCon() {
			if (this.lastLogin != null) {
				var date = new Date(this.lastLogin);
				date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
				return `${date.toLocaleString()}`;
			}

		}

        return {lastLogin, UltimaCon, msgVisible}
    },
	data() {
		return {
			show: true,
			json: null,
			errorBool: false,
			e_nombre: false,
			e_apellido: false,
			e_phone: false,
			pets:{},
		};
	},
	components: {
		navbar,
		successPet,
		cardPet,
	},
	methods: {
		errorNombre() {
			this.limpiar('#floatingName');
			this.e_nombre = false;
		},
		errorApellido() {
			this.limpiar('#floatingSurame');
			this.e_apellido = false;
		},
		errorCelular() {
			this.limpiar('#floatingcellPhoneNumber');
			this.e_phone = false;
		},
		limpiar(a) {
			const error_registro = document.querySelector(a);
			error_registro.classList.remove('error');
		},
		goRegister() {
			this.$router.push('animalreg')
		},
		goApliAdopcion() {
			this.$router.push('/profile/consultaapli')
		},
		goUserPets() {
			this.$router.push('/user/userPet')
		},
		cancelar() {
			this.json.name = A_nombre;
			this.json.surname = A_apellido;
			this.json.cellPhoneNumber = A_numero;
		},
		editado() {
			if (this.show) {
				var constante = true;
				const nombre = document.querySelector('#floatingName');
				const apellido = document.querySelector('#floatingSurame');
				const celular = document.querySelector('#floatingcellPhoneNumber');

				var m = nombre.value.split(" ");
				var B_nombre = "";

				for (var i = 0; i < m.length; i++) {
					if (m[i] != "") {
						if (B_nombre != "") B_nombre = B_nombre + " ";
						B_nombre = B_nombre + m[i];
					}
				}
				m = apellido.value.split(" ");
				var B_apellido = "";

				for (i = 0; i < m.length; i++) {
					if (m[i] != "") {
						if (B_apellido != "") B_apellido = B_apellido + " ";
						B_apellido = B_apellido + m[i];
					}
				}
				while (document.querySelector('.error') != null) {
					document.querySelector('.error').classList.remove('error');
				}
				if (B_nombre.length === 0 || /\d/.test(B_nombre)) {
					nombre.classList.add('error');
					this.e_nombre = true
				}
				if (apellido.value.length === 0 || /\d/.test(apellido.value)) {
					apellido.classList.add('error');
					this.e_apellido = true
				}
				if (celular.value.length < 8) {
					celular.classList.add('error');
					this.e_phone = true;
				}

				if (this.e_nombre || this.e_apellido || this.e_phone) {

					this.show = !this.show;
				}
				else if (A_nombre != B_nombre || A_apellido != B_apellido || A_numero != celular.value) {

					const token=localStorage.token;
					let json = {
						"name": B_nombre,
						"surname": B_apellido,
						"cellPhoneNumber": celular.value
					}
					axios({
						//url: "http://localhost:8080/api/user/modifyUserDetails",
						url: "https://unpetlife.herokuapp.com/api/user/modifyUserDetails",
						method: "PUT",
						data: json,
						headers: {
							'Authorization': `Bearer ${token}`
						},
					}).then((data) => {

					}).catch((error) => {
						console.log(error);
					});




				}
				else {
					this.json.name = A_nombre;
					this.json.surname = A_apellido;
					this.json.cellPhoneNumber = A_numero;
				}
			}
		},
		Nombre(js) {
			if (js != null) {
				A_nombre = js.name;
				A_apellido = js.surname;
				return `${js.name} ${js.surname}`;
			}
		},
		Email(js) {
			if (js != null) {
				return `${js.email}`;
			}
		},
		Cell(js) {
			if (js != null) {
				A_numero = js.cellPhoneNumber;
				return `${js.cellPhoneNumber}`;
			}
		},
		Rol(js) {
			if (js != null) {

				return `${js.roles}`;
			}
		},
		getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}
		
	},
	mounted: function () {  
        const token = localStorage.token;
		/*
		axios
			.get("https://unpetlife.herokuapp.com/api/user/getUserDetails", {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
			.then((data) => {
				if (data.data != null) {
					this.json = data.data;
				}
			})
			.catch((error) => {
				if (error.response.status === 404) {
					this.errorBool = true;
				}
			});
		*/
		/*
		//Consulta mis mascotas
		axios
			.get("https://unpetlife.herokuapp.com/api/pet/getUserPets", {
				headers: {
					Authorization: `Bearer ${token}`,
				}
			})
			.then((data) => {
				let pets = data.data;
				if(pets.length > 0){
					let a = (this.getRandomInt(pets.length));
					let b = (this.getRandomInt(pets.length));
					let pet0;
					let pet1;
					if(pets[a] !== undefined) pet0 = pets[a]
					if(pets[b] !== undefined) pet1 = pets[b]
					if(pet0 == pet1){
						this.pets = {pet0}
					}
					else{
						this.pets = {pet0,pet1}
					}
				}
				
			})
			.catch((error) => {
				console.log(error)
				this.pets ={}
		});
		*/

	}
};
</script>
<style >
	
	.center_button{
		display: flex;
		justify-content: center;
	}
	.center_button .btn {
		display: inline-block;
		background-color: white;
		color: #6FABF9;
		margin: 0;
		padding: 1.2rem 2rem;
		border-radius: 5rem;
		font-size: 2.2rem;
		color: #828282;
		font-family: "Merienda", cursive;
		font-weight: 600;
		margin-left: 20px;
	}

	@media (max-width: 767px) {
		.center_button .btn {
			width: -webkit-fill-available;
		}
	}
	

	.center_button .btn:hover {
		border: 5px solid #B6B6B6;
		-webkit-transition: all 0.5s ease-out;
		-moz-transition: all 0.5s ease;
		-ms-transition: all 0.5s ease;
		/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#64b8ff+0,54c8e5+46,64b8ff+100 */
		background: #64b8ff;
		/* Old browsers */
		background: -moz-linear-gradient(-45deg, #64b8ff 0%, #54c8e5 46%, #64b8ff 100%);
		/* FF3.6-15 */
		background: -webkit-linear-gradient(-45deg, #64b8ff 0%, #54c8e5 46%, #64b8ff 100%);
		/* Chrome10-25,Safari5.1-6 */
		background: linear-gradient(135deg, #64b8ff 0%, #54c8e5 46%, #64b8ff 100%);
		/* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
		filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#64b8ff', endColorstr='#64b8ff',GradientType=1 );
		/* IE6-9 fallback on horizontal gradient */
		color: white;
	}

</style>