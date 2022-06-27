<template lang="">
	<navbar/>
	<div v-if="!this.errorBool" class="espacio_trabajo">
		
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">
				Mascotas Publicadas
			</h1>
		</div>

		<div class = "botones">

			<button 
				type="button" 
				class="btn  button_volver" 
				v-on:click="volver()">
				Volver al Usuario
			</button>
        </div>

		<div class = "mostrar">
			<div class="botino">
				<button 
					id="activo" 
					class="mayuscula" 
					:class="color(!deleteType)"
					v-on:click="changeVisFilter('Visibles')">
					activado
				</button>
				<button
					v-on:click="changeVisFilter('Eliminadas')"
					id="borrado"
					:class="color(deleteType)"
					class="mayuscula">
					borrado
				</button>
			</div>    
		</div>

		<div class="row tres_mascotas">
			<petCardUser
				v-for="(item, index) in json"
				v-bind:key="index"
				v-bind:item="item"
				v-bind:imageRoute="item.link_foto"
				v-bind:petDescription="item.descripcion"
				v-bind:petName="item.nombre"
				v-bind:idPet="item.id"
				v-bind:edad="item.edad"
				v-bind:tipo="item.tipo"
				v-bind:raza="item.raza"
				v-bind:updateValues="updateValues"
				v-bind:showSnackDelete="showSnackDelete"
				v-bind:hideSnackDelete="hideSnackDelete"
                v-bind:deleteType = this.deleteType
			/>
		</div>
	</div>

	<div v-else class="espacio_trabajo">
		<div class ="subtitulo">
			<h1 class="titulo_home texto_centrado">
				El Usuario no Tiene Mascotas
			</h1>
		</div>

		<div class = "botones">
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver al Usuario</button>
        </div>
        
        <div class = "mostrar">
			<div class="botino">
				<button 
					id="activo" 
					class="mayuscula" 
					:class="color(!deleteType)"
					v-on:click="changeVisFilter('Visibles')">
					activado
				</button>
				<button
					v-on:click="changeVisFilter('Eliminadas')"
					id="borrado"
					:class="color(deleteType)"
					class="mayuscula">
					borrado
				</button>
			</div>    
		</div>

		<div class = "no_mascotas" >
			<img src="../../assets/img/dog_confused.png" >
			<h3 class="title_notfound">
				No se han encontrado resultados.
			</h3>
			<h4 v-if="!deleteType" class="subtitle_notfound">
				No tienes mascotas registradas.
			</h4>
        </div>
	</div>
	<div id="snackbar_delete">{{msgDelete}}</div>
</template>

<script>
import petCardUser from "@/components/regMascota/petCardUser";
import navbar from "@/components/navbar";
import axios from "axios";
import {ref} from 'vue'
import {onClickOutside} from '@vueuse/core'

export default {
	name: "userPetView",
	data() {
        const FIL_VIS = {
            'Visibles':true,
            'Eliminadas':false,
        }
        const FIL_VIS_INV = {
            true:'Visibles',
            false:'Eliminadas',
        }
		return {
            FIL_VIS,
            FIL_VIS_INV,
			json: null,
			errorBool: false,
            deleteType: false,
            listSize:0,
			msgDelete: "Eliminando mascota ...",
            buttonTrigger: false,
            filtroVis:true,
		};
	},
    setup(){
        const dropbtn = ref(null);
        return{
            dropbtn
        }
    },
	components: {
		navbar,
		petCardUser,
	},
	methods: {

		updateValues(){
            var token=localStorage.token;
            if(this.deleteType){
                axios
				.get("https://unpetlife.herokuapp.com/api/pet/getDeletedUserPets", {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				})
				.then((data) => {
					this.json = data.data;
					this.errorBool = false;
					//console.log(this.json);
				})
				.catch((error) => {
					if (error.response.status === 404) {
						this.errorBool = true;
					}
				});
            }else{
                axios
				.get("https://unpetlife.herokuapp.com/api/pet/getUserPets", {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				})
				.then((data) => {
					this.json = data.data;
					this.errorBool = false;
					//console.log(this.json);
				})
				.catch((error) => {
					if (error.response.status === 404) {
						this.errorBool = true;
					}
				});
            }
		},
		volver(){
            this.$router.go(-1);
        },
		showSnackDelete() {
			this.msgDelete = "Eliminando mascota ..." 
			var x = document.getElementById("snackbar_delete");
			x.className = "show";
			
		},
		hideSnackDelete() {
			var x = document.getElementById("snackbar_delete");
			this.msgDelete = "Mascota eliminada"
			setTimeout(function(){ x.className = x.className.replace("show", "");  }, 2000);
		},
        changeVisFilter(filterVis){
            if(filterVis == 'Eliminadas') this.deleteType = true;
            else this.deleteType = false;
            // console.log("click")
            // console.log(this.deleteType);
            this.filtroVis = this.FIL_VIS[filterVis]
            this.updateValues();
            // document.getElementById("myDropdown").classList.remove("show");
        },
		color(a) {
			if(a){
				return "color";
			}
			else{
				return "";
			}
		}
	},
	mounted: function () {
		this.updateValues();
        onClickOutside(this.dropbtn, (event)=>this.closeDrop());
	}
};

</script>

<style>

	#snackbar_delete {
		visibility: hidden;
		min-width: 250px;
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

	#snackbar_delete.show {
		visibility: visible;
		-webkit-animation: fadein 0.5s;
		animation: fadein 0.5s;
	}

	@-webkit-keyframes fadein {
		from {bottom: 0; opacity: 0;} 
		to {bottom: 30px; opacity: 1;}
	}

	@keyframes fadein {
		from {bottom: 0; opacity: 0;}
		to {bottom: 30px; opacity: 1;}
	}

</style>
