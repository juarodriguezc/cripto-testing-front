<template>
	<form class="rmascota">
		
		<div class="mascotas_registro">

			<h2 class="intro texto_izquierda">
				Datos De Mascota
			</h2>

			<div class="datos nombre">
				
				<h3 for="name" 
					class="">
					Nombre*
				</h3>

				<input
					type="text"
					class="inscribir mayuscula form-control"
					id="name"
					placeholder="Nombre mascota"
					v-model="this.name">

				<p v-if="msg.name"
					class="info">
					{{msg.name}}
				</p>
			</div>
			
			<div class="datos tipo">
				
				<h3 
					for="type" 
					class="">
					Tipo* 
				</h3>
				
				<select 
					class="seleccion inscribir form-control"
					id="type" 
					v-model="type">
					
					<option 
						selected 
						disabled 
						hidden 
						value="">
						Tipo de Mascota
					</option>
					
					<option value="Canino">Canino</option>
					<option value="Felino">Felino</option>
					<option value="Bovino">Bovino</option>
					<option value="Pez">Pez</option>
					<option value="Roedor">Roedor</option>
					<option value="Ave">Ave</option>
					<option value="Equino">Equino</option>
					<option value="Otro">Otro</option>
				</select>
			</div>

			<div class="datos raza">
				
				<h3 
					for="type" 
					class="">
					Raza
				</h3>

				<input
					type="text"
					v-model="breed"
					class="inscribir mayuscula form-control"
					id="breed"
					placeholder="Raza de la Mascota">
			</div>

			<div class="datos peso">
				
				<h3 for="size" 
					class="">
					Peso*
				</h3>
				
				<select 
					class="seleccion inscribir form-control" 
					id="size" 
					v-model="size">
					<option 
						selected 
						disabled 
						hidden 
						class="opciones" 
						value="">
						Peso de la Mascota
					</option>
					<option value="Chico (menos de 5 Kg)">Chico(-5Kg)</option>
					<option value="Pequeño (de 6 a 14 Kg)">Pequeño(6 a 14Kg)</option>
					<option value="Mediano (de 15 a 25 Kg)">Mediano(15 a 25Kg)</option>
					<option value="Grande (de 26 a 50 kg)">Grande(26 a 50kg)</option>
					<option value="Enorme (mayor a 50 kg)">Enorme(+50 kg)</option>
				</select>
			</div>

			<div class="datos edad">
				
				<h3 for="age" 
					class="">
					Edad* 
				</h3>
				
				<input
					type="number"
					v-model="age"
					class="seleccion inscribir form-control"
					id="age"
					placeholder="Edad de la mascota"/>
				
				<p v-if="msg.age"
					class="offset-md-3 info">
					{{msg.age}}
				</p>
			</div>
			
			<div class="datos esteril">
				
				<h3 class="">
					Esterilizado*
				</h3>
				
				<div 
					@click="esteril"
					class="progress">
					<div class="bar" id="Ebar"></div >
					<h4 class="percent" id="Epercent">No sé</h4>
				</div>

			</div>

			<div class="datos sexo">
				
				<h3 class="col-3">
					Sexo*
				</h3>

				<div 
					@click="Sexo"
					class="progress">
					<div class="bar" id="Sbar"></div >
					<h4 class="percent" id="Spercent">-</h4>
				</div>

			</div>

			<div class="datos vacuna">

				<h3 class="">
					¿Vacunas al día?*
				</h3>
				
				<div 
					@click="Vacuna"
					class="progress">
					<div class="bar" id="Vbar"></div >
					<h4 class="percent" id="Vpercent">No sé</h4>
				</div>

			</div>

			<div class="datos imagen">
			
				<h3 
					for="image" 
					class="">
					Fotografía*
				</h3>

				<div class="dropbox">
					<input 
						type="file" 
						name:="image" 
						:disabled="isSaving"
						@change="filesChange($event.target.files)" 
						accept="image/*"
						class="input-file" 
						id="file">

					<p v-if="isInitial">
						Arrastre la fotografía de la mascota
						<br>
						<span>
							O haga clic para cargar.
						</span>
					</p>
					<p v-if="isSaving">
						Imagen subida. 
						<br>
						<span>
							Arrastre o haga clic para cambiar.
						</span>
					</p>
					
					<p v-if="isLoading">
						Subiendo imagen
					</p>
				</div>

				<img
					src="https://infocusmfg.com/wp-content/uploads/2015/10/brown-basket-400x400.png"
					id="img"
					class=""
					alt="Image">

			</div>

			<div class="datos Mensaje">
				
				<h3 
					for="message" 
					class="">
					Mensaje de adopción*
				</h3>

				<textarea
					v-model="message"
					class="form-control seleccion"
					id="message"
					placeholder="Comportamiento del animal, gustos, es amable con los niños, se adapta a espacios pequeños..."
					rows="8">
				</textarea>
			</div>
			<div class="datos Mensaje texto_centrado">

				<h3 class="texto_centrado" style="font-size:21px; text-align:center;">
					Los campos marcados con astericos (*) son obligatorios
				</h3>
				<br>

				<div class=" container container_completo_sol " v-if="alert">
                        
					<div class="row justify-content-center msg_error_addsol">
						<div class="col-2 content_error" >
							<img class= "error_ico" src="../../assets/img/delete_512px.png">
						</div>
						<div class="col-10 content_error">
							<p class = "no_solicitud">No se ha podido enviar la solicitud.</p>
							<p class = "error_solicitud">Error:   &emsp; {{error}} </p>
						</div>
					</div>
					
				</div>
				
			</div>



			<div class="datos botones">
		
				<button 
					class="btn btn-primary publicar" 
					@click="publicar" 
					type="button" 
					:disabled="isDisable">
					Publicar
				</button>

				<button 
					type="button" 
					class="btn btn-danger cancelar" 
					@click="cancelar">
					Cancelar
				</button>
			</div>
		</div>

		

		<div id="snackbar_addPet">
			
			<div class = "row g-0">
				<div class = "col-2">
					<div class="loader">  </div> 
				</div>
				<div class = "col-auto">
					<p class = "text_sending">Añadiendo mascota</p>
				</div>
			</div>
		</div>
	
	</form>
</template>

<script>

import axios from "axios";
//VueX
import { useStore } from 'vuex'

var url = document.getElementById("url");
const STATUS_INITIAL = 0,
	STATUS_SAVING = 1,
	STATUS_LOADING = 2;
export default {
	name: "animalRegForm",
	setup(props) {
        //VueX config
        const store = useStore()
        //States
        //Functions
        function addPetSol(){
            store.dispatch("addPets/addPet");
        }
        return{
            addPetSol,
        }
    },
	data() {
		return {
			currentStatus: STATUS_INITIAL,
			name: "",
			age: "",
			sterile: "Desconozco",
			type: "",
			sex: "",
			breed: "",
			size: "",
			vaccines: "false",
			message: "",
			url: "",
			active: false,
			msg: [],
			msgAdd: "Añadiendo mascota",
			error:"Error de conexión con el servidor",
			alert:false,
		};
	},
	computed: {
		isInitial() {
			return this.currentStatus === STATUS_INITIAL;
		},
		isSaving() {
			return this.currentStatus === STATUS_SAVING;
		},
		isLoading(){
			return this.currentStatus === STATUS_LOADING;
		},
		isDisable(){
			return this.checkData();
		}
	},
	methods: {
		reset() {
			this.currentStatus = STATUS_INITIAL;
		},
		filesChange(fileList) {
			this.currentStatus = STATUS_LOADING;
			const img2 = document.getElementById("img");
			img2.src =require("../../assets/img/loading_add.gif");
			var formdata = new FormData();
			url = document.getElementById("url");
			formdata.append("image", fileList[0]);

			fetch("https://api.imgur.com/3/image", {
				method: "POST",
				headers: {
					Authorization: "Client-ID 396329b896dcfdd",
				},
				body: formdata,
			})
				.then((data) => data.json())
				.then((data) => {
					//url.innerText =  data.data.link;
					this.url = data.data.link;
					img2.src = data.data.link;
					this.currentStatus = STATUS_SAVING;
				});
		},
		esteril() {
			const a1 = document.querySelector('#Ebar');
			const a2 = document.querySelector('#Epercent');
			switch (a2.innerHTML) {
				case "No sé":
					this.sterile="No";
					a2.innerHTML = "No";
					a1.style.width = "0%";
					break;
				case "No":
					this.sterile="Si"
					a2.innerHTML = "Sí";
					a1.style.width = "100%";
					break;
				case "Sí":
					this.sterile="No"
					a2.innerHTML = "No sé";
					a1.style.width = "50%";
					break;
			}
		},
		Sexo() {
			const a1 = document.querySelector('#Sbar');
			const a2 = document.querySelector('#Spercent');
			// console.log(this.sterile);
			switch (a2.innerHTML) {
				case "Macho":
					this.sex="Hembra"
					a2.innerHTML = "Hembra";
					a1.style.width = "100%";
					break;
				default:
					this.sex="Macho";
					a2.innerHTML = "Macho";
					a1.style.width = "0%";
					break;
			}
		},
		Vacuna() {
			const a1 = document.querySelector('#Vbar');
			const a2 = document.querySelector('#Vpercent');
			// console.log(this.sterile);
			switch (a2.innerHTML) {
				case "No sé":
					this.vaccines="false";
					a2.innerHTML = "No";
					a1.style.width = "0%";
					break;
				case "No":
					this.vaccines="true"
					a2.innerHTML = "Sí";
					a1.style.width = "100%";
					break;
				case "Sí":
					this.vaccines="false"
					a2.innerHTML = "No sé";
					a1.style.width = "50%";
					break;
			}
		},
		publicar() {
			this.showSnackAddPet()
			let json = {
				"nombre": this.name,
				"edad": this.age,
				"esteril": this.sterile,
				"tipo": this.type,
				"sexo": this.sex,
				"raza": this.breed,
				"tamano": this.size,
				"vacunada": this.vaccines,
				"descripcion": this.message,
				"link_foto": this.url,
			};
			// console.log(json);
			const token = localStorage.token;
			axios
				//.post("http://localhost:8080/api/publish/new-publish", json, {
				.post("https://unpetlife.herokuapp.com/api/publish/new-publish", json, {
					headers: {
						'Authorization': `Bearer ${token}`
					},
				})
				.then((data) => {
					if (data.status == 200) {
						// console.log("correcto");
						this.currentStatus= STATUS_INITIAL;
						this.name = "";
						this.age = "";
						this.sterile= "Desconozco",
						this.type = "";
						this.sex = "";
						this.breed = "";
						this.size = "";
						this.vaccines = "false";
						this.message = "";
						this.url = ""; 
						this.alert = false;
						this.error = "Error de conexión con el servidor";
						this.addPetSol();
						this.$router.push('profile');
					}
				})
				.catch((error) => {
					this.alert = true;
					console.log(error)
					this.error = error.response.data.message;
				});
		},
		cancelar(){
			this.$router.push('profile');
		},
		checkData(){
				return (this.msg['age'] !== '' || this.sterile === ""  || this.type === ""  || this.sex === ""   || this.size === ""  || this.vaccines === ""  || this.message === ""  || this.url === "")
		},
		mounted() {
			this.reset();
		},
		nameVal(value){
			if(value === ""){
				this.msg['name'] = 'Si no se asigna un nombre, el nuevo dueño lo hara';
			}else{
				this.msg['name'] = '';
			}
		},
		ageVal(value){
			if(value < 0 || value > 99){
				this.msg['age'] = 'Por favor verifique la edad ingresada' 
			}else{
				this.msg['age'] = '';
			}
		},
		showSnackAddPet() {
			var x = document.getElementById("snackbar_addPet");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10500);
			
		},
		
	},
	watch:{
		name(value){
			this.name = value;
			this.nameVal(value);
		},
		age(value){
			this.age = value;
			this.ageVal(value);
		}
	}
};
</script>

<style>

	#snackbar_addPet {
		visibility: hidden;
		width: 300px;
		margin-left: -125px;
		background-color: #fff;
		border-style: solid;
		border-color: rgb(77, 77, 77);
		color: #333;
		text-align: center;
		border-radius: 20px;
		padding: 16px;
		position: fixed;
		z-index: 1;
		left: 50%;
		bottom: 30px;
		font-size: 17px;
	}

	#snackbar_addPet.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s, fadeout 0.5s 10s;
		animation: fadein 0.5s, fadeout 0.5s 10s;
	}

	.text_sending{
		margin: 0;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		padding-left: 30px;
	}
	/* Animations to fade the snackbar in and out */
	@-webkit-keyframes fadein {
	from {bottom: 0; opacity: 0;}
	to {bottom: 30px; opacity: 1;}
	}

	@keyframes fadein {
	from {bottom: 0; opacity: 0;}
	to {bottom: 30px; opacity: 1;}
	}

	@-webkit-keyframes fadeout {
	from {bottom: 30px; opacity: 1;}
	to {bottom: 0; opacity: 0;}
	}

	@keyframes fadeout {
	from {bottom: 30px; opacity: 1;}
	to {bottom: 0; opacity: 0;}
	}

	/**Loader */
	.loader {
		border: 7px solid #d4d4d4;
		animation: spin 1s linear infinite;
		border-top: 7px solid #6FABF9;
		border-radius: 50%;
		width: 50px;
		height: 50px;
	}

	@keyframes spin {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
	}

	/*Container alerta */
	.container_completo_sol{
		width:100%;
		display: flex;
		justify-content: center;
	}

	.msg_error_addsol{
		width:400px;
		border-style: solid;
		border-color: rgb(109, 109, 109);
		background: rgb(112, 112, 112);
		color: rgb(233, 233, 233);
		text-align: center;
		border-radius: 20px;
		padding: 16px;
		font-size: 17px;
	}
	.msg_error_addsol p{
		color: rgb(233, 233, 233);
	}
	.error_ico{
		width:80px;
	}
	.no_solicitud{
		font-size: 17px;
		font-weight: 500;
	}
	.error_solicitud{
		font-size: 11px;
		text-align: left;
		padding-left: 10px;
	}
</style>