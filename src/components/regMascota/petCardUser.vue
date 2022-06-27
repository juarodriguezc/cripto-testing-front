<template>
	<div class="col-lg-4 col-md-6 col-sm-12 vista">
		<div class="card mb-4 box-shadow" :class="mascotas()">
			<img
				class="card-img-top imagen_catalogo"
				v-bind:src="imageRoute"
				v-bind:alt="idPet"
			/>

			<div class="borrar" v-if=!deleteType>
				<button class="boton_borrar" v-on:click="Borrar(idPet)">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon-borrar"
						width="28"
						height="28"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path
							stroke="none"
							d="M0 0h24v24H0z"
							fill="none"
						></path>
						<line x1="18" y1="6" x2="6" y2="18"></line>
						<line x1="6" y1="6" x2="18" y2="18"></line>
					</svg>
				</button>
			</div>

			<div class="card-body carta_mascota datos_mascota">
				<div class="col-9 titulo_masc mayuscula">
					<h2 :class="nombre(petName)">
						{{ tamanio(petName) }}
						<span :class="completo(petName.length)">
							{{ adicion(petName) }}
						</span>
					</h2>
					<p>{{ tipo }} - {{ edad }} años</p>
					<p>{{ raza }}</p>
				</div>

				<div class="col-3 icono">
					<img
						v-if="tipo == 'Felino'"
						class="animal imgmascota"
						src="../../assets/img/cat_96px.png"
					/>
					<img
						v-else-if="tipo == 'Canino'"
						class="animal imgmascota"
						src="../../assets/img/dog_96px.png"
					/>
					<img
						v-else-if="tipo == 'Roedor'"
						class="animal imgmascota"
						src="../../assets/img/hamster_96px.png"
					/>
					<img
						v-else-if="tipo == 'Pez'"
						class="animal imgmascota"
						src="../../assets/img/fish_96px.png"
					/>
					<img
						v-else-if="tipo == 'Bovino'"
						class="animal imgmascota"
						src="../../assets/img/cow_96px.png"
					/>
					<img
						v-else-if="tipo == 'Ave'"
						class="animal imgmascota"
						src="../../assets/img/bird_96px.png"
					/>
					<img
						v-else-if="tipo == 'Equino'"
						class="animal imgmascota"
						src="../../assets/img/horse_96px.png"
					/>
					<img
						v-else
						class="animal imgmascota"
						src="../../assets/img/other_96px.png"
					/>
				</div>
			</div>

			<div class="cboton">
				<button
					v-if=!deleteType
					class="btn btn-lg button_adopta"
					v-on:click="verInfo(idPet)">
					Ver más
				</button>
				<button
					v-else
					class="btn btn-lg button_adopta"
					v-on:click="Recuperar(idPet)">
					Recuperar
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
var datos = '';
var valor = 1;
export default {
	name: "petCardUser",
	props: ['imageRoute', 'petName', 'petDescription', 'idPet', 'edad', 'tipo', 'raza', 'updateValues','showSnackDelete','hideSnackDelete','deleteType'],
	methods: {
		verInfo(id) {
			this.$router.push("/info-mascota/" + id)
		},
		goPet() {
			this.$router.push("/info-mascota/" + this.idPet)
		},
		mascotas() {
			if (valor % 2 == 0) {
				valor++;
				return {
					'izquierda': true
				}
			}
			else {
				valor++;
				return {
					'derecha': true
				}
			}
		},
		nombre(name) {
			if (name.length > 9) {
				return "max-9 name"
			}
			else {
				return "min-9 name"
			}
		},
		tamanio(nombre) {
			if (nombre.length < 18) {
				return nombre
			}
			else {
				datos = nombre.split(" ");
				return `${datos[0]} ${datos[1]}`
			}
		},
		completo(e) {
			if (e >= 18) {
				return 'mirar'
			}
		},
		adicion(nombre) {
			if (nombre.length > 18) {
				let aux = '';
				for (var i = 2; i < datos.length; i++) {
					aux = aux + ' ' + datos[i];
				}
				return aux
			}
		},
		Borrar(idPet) {
			this.showSnackDelete();
			const token=localStorage.token;
			axios({
				//url: "http://localhost:8080/api/pet/deletePet?id=" +idPet",
				url: "https://unpetlife.herokuapp.com/api/pet/deletePet?id=" +idPet,
				method: "PUT",
				headers: {
					'Authorization': `Bearer ${token}`
				},
			}).then((data) => {
				this.hideSnackDelete();
				this.updateValues();
				
            }).catch((error) => {
				console.log(error);
			});
		},
        Recuperar(idPet){
            const token=localStorage.token;
			axios({
				url: "https://unpetlife.herokuapp.com/api/pet/restorePet?id=" +idPet,
				method: "PUT",
				headers: {
					'Authorization': `Bearer ${token}`
				},
			}).then((data) => {
				this.updateValues();
            }).catch((error) => {
				console.log(error);
			});
        }
		// fuente(event){
		// 	return "--rotateX:-12.5deg; --rotateY:19.6044deg; transform: rotateX(var(--rotateX))rotateY(var(--rotateY));";
		// },
	}
}

</script>

<style scoped>
.btn-lg {
	margin-left: 5px;
	margin-right: 5px;
}
</style>