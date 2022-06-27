<template>
  <main class="form-signup">
    <form v-on:submit.prevent="signup">
      <h1 class="texto_centrado sub">Registro</h1>
      <div class="registrar">
        <div class="datos_contenedor pnombre">
          <label for="floatingName">Nombre</label>
          <input
            v-on:click="errorNombre"
            type="text"
            class="form-control mas"
            id="floatingName"
            placeholder="Nombre"
            maxlength="50"
            v-model="name"
          />

          <p class="error_msg" v-if="e_nombre">Verifica el nombre ingresado</p>
        </div>

        <div class="datos_contenedor papellido">
          <label for="floatingSurame">Apellido</label>
          <input
            v-on:click="errorApellido"
            type="text"
            class="form-control mas"
            id="floatingSurame"
            placeholder="Apellido"
            maxlength="50"
            v-model="surname"
          />
          <p class="error_msg" v-if="e_apellido">
            Verifica el apellido ingresado
          </p>
        </div>

        <div class="datos_contenedor pemail">
          <label for="floatingEmail"> Dirección de correo </label>
          <input
            v-on:click="errorEmail"
            v-on:keyup="errorEmail"
            type="email"
            class="form-control"
            id="floatingEmail"
            placeholder="Dirección de correo"
            maxlength="80"
            v-model="email"
          />
          <p class="error_msg" v-if="e_email">Verifica el email ingresado</p>
        </div>

        <div class="datos_contenedor pcelular">
          <label for="floatingcellPhoneNumber">Teléfono</label>
          <input
            v-on:click="errorCelular"
            type="number"
            class="form-control"
            id="floatingcellPhoneNumber"
            placeholder="Teléfono"
            maxlength="10"
            oninput="if(this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            v-model="cellPhoneNumber"
          />
          <p class="error_msg" v-if="e_phone">Verifica el teléfono ingresado</p>
        </div>

        <div class="datos_contenedor pcontra">
          <label for="floatingPassword">Contraseña</label>
          <input
            v-on:click="errorcontrasena"
            type="password"
            class="form-control"
            id="floatingPassword"
            maxlength="40"
            placeholder="Contraseña"
            v-model="password"
          />
          <p class="error_msg" v-if="e_password">Contraseña muy corta</p>
        </div>

        <div class="datos_contenedor prepit">
          <label for="floatingRpassword">Repetir contraseña</label>
          <input
            v-on:click="errorRepetir"
            type="password"
            class="form-control"
            id="floatingRpassword"
            maxlength="40"
            placeholder="Repetir contraseña"
            v-model="rpassword"
          />
          <p class="error_msg" v-if="e_vpassword">
            Las contraseñas no son iguales
          </p>
        </div>

        <p
          class="alert alert-danger espacio"
          role="alert"
          v-if="error_registro"
        >
          {{ error_msg }}
        </p>

        <p
          class="alert alert-success espacio"
          role="alert"
          v-if="register_success"
        >
          {{ registro_msg }}
        </p>

        <div class="texto_derecha botonf">
          <button class="boton2" id="BURegistro" type="submit" data-paso="1">
            Registrarse
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import axios from "axios";
export default {
  name: "menuSignup",

  data() {
    const domain = process.env.VUE_APP_DOMAIN_BACK;
    return {
      domain,
      //Datos del usuario de registro
      name: "",
      surname: "",
      email: "",
      cellPhoneNumber: "",
      password: "",
      rpassword: "",
      //Variables de control de registro
      error_msg: "Error de conexión con el servidor",
      registro_msg: "Usuario registrado exitosamente",
      register_success: false,
      error_registro: false,
      //Control de mensajes de error_registro de datos ingresados
      e_nombre: false,
      e_apellido: false,
      e_email: false,
      e_phone: false,
      e_password: false,
      e_vpassword: false,
    };
  },
  methods: {
    errorNombre() {
      this.limpiar("#floatingName");
      this.e_nombre = false;
    },
    errorApellido() {
      this.limpiar("#floatingSurame");
      this.e_apellido = false;
    },
    errorCelular() {
      this.limpiar("#floatingcellPhoneNumber");
      this.e_phone = false;
    },
    errorEmail() {
      this.limpiar("#floatingEmail");
      this.e_email = false;
    },
    errorcontrasena() {
      this.limpiar("#floatingPassword");
      this.e_password = false;
    },
    errorRepetir() {
      this.limpiar("#floatingRpassword");
      this.e_password = false;
      this.e_vpassword = false;
    },
    revisarDatosIngresados() {
      const nombre = document.querySelector("#floatingName");
      const apellido = document.querySelector("#floatingSurame");
      const celular = document.querySelector("#floatingcellPhoneNumber");
      const email = document.querySelector("#floatingEmail");
      const contrasena = document.querySelector("#floatingPassword");
      const repetir = document.querySelector("#floatingRpassword");
      //Pasar el correo a minúsculas
      email.value = email.value.toLowerCase();

      while (document.querySelector(".error") != null) {
        document.querySelector(".error").classList.remove("error");
      }
      let list_errors = "";

      if (nombre.value.length === 0 || /\d/.test(nombre.value)) {
        list_errors = list_errors + "Nombre incorrecto\n";
        nombre.classList.add("error");
        this.e_nombre = true;
      }
      if (apellido.value.length === 0 || /\d/.test(apellido.value)) {
        list_errors = list_errors + "Apellido incorrecto\n";
        apellido.classList.add("error");
        this.e_apellido = true;
      }
      if (celular.value.length < 8) {
        list_errors = list_errors + "Numero incorrecto\n";
        celular.classList.add("error");
        this.e_phone = true;
      }

      let fal = 0;
      for (var i = 0; i < email.value.length; i++) {
        if (email.value[i] == "@") {
          fal++;
        }
      }

      if (email.value.length < 5 || fal != 1) {
        list_errors = list_errors + "E-mail mira incorrecto\n";
        email.classList.add("error");
        this.e_email = true;
      } else {
        const al = email.value.split("@");
        if (al[0].length == 0 || al[1].length == 0) {
          list_errors = list_errors + "E-mail incorrecto\n";
          email.classList.add("error");
          this.e_email = true;
        }
      }
      if (contrasena.value.length < 8) {
        list_errors = list_errors + "contrasena minimo de 8 datos\n";
        contrasena.classList.add("error");
        repetir.classList.add("error");
        this.e_password = true;
      } else if (contrasena.value != repetir.value) {
        list_errors = list_errors + "contrasenas no son iguales\n";
        repetir.classList.add("error");
        this.e_vpassword = true;
      }
      if (list_errors.length != 0) {
        return false;
      } else {
        return true;
      }
    },

    limpiar(a) {
      const error_registro = document.querySelector(a);
      error_registro.classList.remove("error");
    },

    signup() {
      this.register_success = false;
      this.error_registro = false;
      if (this.revisarDatosIngresados()) {
        this.error_msg = "Error de conexión con el servidor";
        let json = {
          email: this.email,
          password: this.password,
          name: this.name,
          surname: this.surname,
          cellPhoneNumber: this.cellPhoneNumber,
          roles: [1],
        };
        console.log(json);
        console.log(this.domain);

        axios
          .post(this.domain + "/auth/register", json)
          .then((data) => {
            console.log(data);
            console.log(data?.data?.message);
            if (data.status >= 200 && data.status < 300) {
              //Mensaje de registro exitoso
              this.register_success = true;
              this.registro_msg = data?.data?.message;
              //Eliminar datos guardados del usuario
              this.name = null;
              this.surname = null;
              this.email = null;
              this.cellPhoneNumber = null;
              this.password = null;
              this.rpassword = null;
              this.ciudad = null;
              this.rol = null;
            }
          })
          .catch((error) => {
            console.log(error.response);
            this.error_msg = error.response.data.message;
            this.error_registro = true;
          });
      } else {
        this.error_registro = true;
        this.error_msg = "Algunos datos ingresados son erróneos";
      }
    },
  },
};
</script>


<style>
</style>