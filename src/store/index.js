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
		errorSentRecover: false,
		eSentRecoverMessage: "",
		passChanged: false,
		errChangePass: false,
		errChangeMessage: "",
		lastLogin: null
	},
	mutations: {
		restart(state) {
			state.statusMessage = "";
			state.error = false;
			state.successRecoverPassword = false;
			state.errorSentRecover = false;
			state.eSentRecoverMessage = "";
			state.passChanged= false,
			state.errChangePass = false;
			state.errChangeMessage = "";
		},
		restart_change(state){
			state.passChanged= false;
		},
		login_request(state) {
			state.statusMessage = "Performing login...";
		},
		login_success(state, { token, email, lastLogin }) {
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
		email_sent_recover(state) {
			state.successRecoverPassword = true;
		},
		error_email_sent_recover(state, { msg }) {
			state.errorSentRecover = true;
			state.eSentRecoverMessage = msg;
		},
		goback_recover(state) {
			state.successRecoverPassword = false;
		},
		change_password(state){
			state.passChanged = true;
			alert("Contraseña actualizada exitosamente")
		},
		error_change_password(state, { msg }) {
			state.errChangePass = true;
			state.errChangeMessage = msg;
		},
	},
	actions: {
		restartVals({ commit }) {
			commit("restart");
		},
		login({ commit }, data) {
			return new Promise((resolve, reject) => {
				if (data.json.username === "" && data.json.password === "") {
					const errorMsg = "Ingresa el correo y la contraseña";
					commit("default_error", errorMsg);
					localStorage.removeItem("token");
				}
				else {
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
							axios.defaults.headers.common["Authorization"] = 'Bearer ' + token;
							commit("login_success", { token, email, lastLogin });
							resolve(response);

						})
						.catch((error) => {
							const errorMsg = error.response.data.message.toString();
							commit("default_error", errorMsg);
							localStorage.removeItem("token");
							reject(error);
						})
				}
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
		recoverPassword({ commit }, data) {
			//console.log(json)
			return new Promise((resolve, reject) => {
				commit("restart");
				axios({
					url: data.domain,
					data: data.json,
					method: "POST",
				})
					.then((response) => {
						commit("email_sent_recover");
						//console.log("Correo enviado");
						resolve(response);
					})
					.catch((error) => {
						commit("error_email_sent_recover", { msg: error.response.data.message.toString() });
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
		changePassword({ commit }, data) {
			//console.log(json)
			return new Promise((resolve, reject) => {
				commit("restart");
				axios({
					//url: "http://localhost:8080/api/passrecover/changePassword",
					url: data.domain,
					data: data.json,
					method: "PUT",
				})
				.then((response) => {
					commit("change_password");
					resolve(response);
				})
				.catch((error) => {
					commit("error_change_password", { msg: error.response.data.message.toString() });
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
		errorSentRecover: state => state.errorSentRecover,
		eSentRecoverMessage: state => state.eSentRecoverMessage,
		passChanged: state => state.passChanged,
		errChangePass: state => state.errChangePass,
		errChangeMessage: state => state.errChangeMessage,
		lastLogin: state => state.lastLogin,
	},
	modules: {
		addFormApl: addFormApli,
		addPets: addPet,
		filterPets: filterPet,
	}
});
