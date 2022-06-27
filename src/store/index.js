import { createStore } from 'vuex'
import axios from "axios";
import addFormApli from "./modules/addFormApli";
import addPet from "./modules/addPet";
import filterPet from './modules/filterPet';

export default createStore({
	state: {
		statusMessage: "",
		token: localStorage.getItem("token") || "",
		user: {},
		error: false,
		successRecoverPassword: false,
		passChanged: false,
        lastLogin: null
	},
	mutations: {
		login_request(state) {
			state.statusMessage = "Performing login";
			state.passChanged = false;
		},
		login_success(state, {token, email, lastLogin}) {
			state.token = token;
			state.user = email;
			state.statusMessage = "Success";
			state.error = false;
			state.lastLogin = lastLogin;
		},
		default_error(state, error) {
			state.statusMessage = error;
			state.error = true;
		},
		logout(state) {
			state.status = "";
			state.token = "";
            state.lastLogin = null;
		},
		email_sent_recover(state){
			state.successRecoverPassword = true;
		},
		goback_recover(state){
			state.successRecoverPassword = false;
		},
		change_password(state){
			state.passChanged = true;
		}
	},
	actions: {
		login({ commit }, data) {
			return new Promise((resolve, reject) => {
				commit("login_request");
				axios({
					url: data.domain,
					data: data.json,
					method: "POST",
				})
				.then((response) => {					
					const token = response.data.token;
					const email = response.data.email;
                    const lastLogin = response.data.lastLogin;
					localStorage.setItem("token", token);
					axios.defaults.headers.common["Authorization"] = 'Bearer ' +token;
					commit("login_success", {token, email, lastLogin});
					resolve(response);
				
				})
				.catch((error) => {
					const errorMsg = error.response.data.message.toString();
					commit("default_error",errorMsg);
					localStorage.removeItem("token");
					reject(error);
				})
            });
		},
		logout({ commit }) {
			return new Promise((resolve, reject) => {
				commit("logout");
				localStorage.removeItem("token");
				localStorage.removeItem("horaultima")
				delete axios.defaults.headers.common["Authorization"];
				resolve();
			});
		},
		//Recuperar contraseña
		recoverPassword({ commit }, json){
			//console.log(json)
			return new Promise((resolve, reject)=>{
				axios({
					//url: "http://localhost:8080/api/passrecover/sendLink/"+json.username,
					url: "https://unpetlife.herokuapp.com/api/passrecover/sendLink/"+json.username,
					
					data: json,
					method: "POST",
				})
				.then((response)=>{
					commit("email_sent_recover");
					//console.log("Correo enviado");
					resolve(response);
				})
				.catch((error)=>{
					reject(error);
				})
			})
		},
		goBackRecover({ commit }) {
			return new Promise((resolve, reject) => {
				commit("goback_recover");
				resolve();
			});
		},
		//Cambiar contraseña
		changePassword({ commit }, json){
			//console.log(json)
			return new Promise((resolve, reject)=>{


				axios({
					//url: "http://localhost:8080/api/passrecover/changePassword",
					url: "https://unpetlife.herokuapp.com/api/passrecover/changePassword",
					data: json,
					method: "PUT",
				})
				.then((response)=>{
					commit("change_password");
					//console.log("Contraseña cambiada");
					resolve(response);
				})
				.catch((error)=>{
					reject(error);
				})

			})
		},

	},
	getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.statusMessage,
        errorBoolean: state => state.error,
		recoverStatus: state => state.messageRecover,
		successSentRecover: state => state.successRecoverPassword,
		successChangedPass: state => state.passChanged,
        lastLogin: state => state.lastLogin,
    },
	modules:{
		addFormApl : addFormApli,
		addPets : addPet,
		filterPets : filterPet,
	}
});
