<template lang="">
	<navbar/>
	
	<div id="ingreso" class="texto_centrado">
        <div class="selcion">
            <div class="informacion pingreso">
				<div class="recuperar">
					<h2 class="texto_centrado sub"> Recuperación de contraseña </h2>
					<p class="texto_cambio_contra">Mantén tu cuenta a salvo utilizando contraseñas seguras. Utilizar símbolos, letras y números pueden proteger tu cuenta.</p>
					<br>
					<div class="contraseña texto_Izquierda">
						<p class="texto_izquierda" >Nueva Contraseña</p>
						<input 
							@click="errorcontraseña"
							class="vista" 
							name=""
							type="password" 
							maxlength="20"
							placeholder="Contraseña"
							v-model="password"
							id="pass" 
							>
						<div class="error_msg_change_password" v-if="e_password" >Contraseña muy corta  </div>
					</div>
					<div class="contraseña">
						<p class="texto_izquierda" >Repetir Contraseña</p>
						<input 
							@click="errorRepetir"
							class="vista" 
							name=""
							type="password" 
							maxlength="20"
							placeholder="Repetir contraseña" 
							id="repit" 
							>
						<div class="error_msg_change_password"  v-if="e_repetir" >Las contraseñas no son iguales</div>
					</div>
					<br>
					<br>
					<div class="alert alert-danger" role="alert" v-if="errChangePass">
						Error en la solicitud...
						<br/>
						{{errChangeMessage}}
					</div>


					<div class="boton texto_derecha">
						<button 
							@click="RecuperaContraseña()"
							class="boton2" 
							type="submit"
							data-paso="1">
							{{ Boton }}
						</button>
					</div>
				</div>
            </div>
            <img 
                class="flip" 
                src="../../assets/gif/husky_1.gif" 
                alt="perro saludo">
        </div>
    </div>
</template>

<script>

import navbar from "@/components/navbar"
import axios from 'axios';
import { useStore } from 'vuex'
import { computed } from "vue";

export default {
    name: "Password",
	setup(){
        const store = useStore();

		const errChangePass = computed(() => store.getters.errChangePass);
		const errChangeMessage = computed(() => store.getters.errChangeMessage);

		const domain = process.env.VUE_APP_DOMAIN_BACK;
        function changePassword(json){
            store.dispatch("changePassword", {json,domain:this.domain+"/auth/resetPassword"})
            .then(() => {
                this.$router.push('/login');
            })
            .catch(err => {
                
            })
        }
        return{
            changePassword,
			domain,
			errChangePass,
			errChangeMessage,
        }        
    },
    data(){
        return{
			//Token de recuperacion
			token_r:null,
            // errores_verificacion contraseñas
            Boton: "Enviar",
			e_password:false,
			e_repetir:false,
			//errores con axios
			e_put_password:false,
			password: "",
        }
    },
    components:{
        navbar
    },
	mounted(){
		this.token_r = this.$route.params.id;
		var str = (this.token_r.split("&"))[0];
		this.token_r = str;
	},
    methods:{
		RecuperaContraseña() {
			if (this.paso()) {
				const json ={
					"token" : this.token_r,
					"newPassword" : this.password
				}				
				this.changePassword(json);
			}
		},
		errorcontraseña(){
			this.limpiar('#pass');
			this.e_password = false;
		},
		errorRepetir(){
			this.limpiar('#repit');
			this.e_repetir = false;
		},
		paso(){
			const contra = document.querySelector('#pass');
			const repet = document.querySelector('#repit');
			if (contra.value === repet.value && contra.value.length >= 8) {
				return true;
			}
			else {
				if (contra.value.length < 8) {
					contra.classList.add('error');
					this.e_password = true;
				}
				else if (contra.value != repet.value) {
					repet.classList.add('error');
					this.e_repetir = true;
				}
				return false;
			}
		},
		limpiar(a) {
			const error = document.querySelector(a);
			error.classList.remove('error');
		},
    }
}


</script>
<style>
	.texto_cambio_contra{
		size:20px;
        color:rgb(36, 36, 36);
        font-weight: 400;
        text-align:left;
	}
	.texto_izquierda{
		font-size: 20px;
		color: #2E4E91;
		font-family: "Gloria Hallelujah", cursive;
		font-weight: 600;
		margin: 2rem 1rem;
	}
	.error_msg_change_password{
		
        bottom: -5px;
        left: 15px;
        color: rgb(192, 59, 59);
        font-size: 17px;
        font-weight: 500;
	}
</style>
