<template >
  <div>
    <h2 class="texto_centrado sub">Recuperación de contraseña</h2>
    <br />
    <br />
    <div class="container">
      <p class="texto_recupera_cont">
        Ingresa tu correo electrónico, enviaremos un email para que puedas
        cambiar tu contraseña.
      </p>
    </div>
    <div class="ingresar">
      <div class="orden">
        <p class="texto texto_izquierda">Email</p>
        <input
          type="email"
          id="floatingInput"
          class="form-control"
          maxlength="60"
          placeholder="name@example.com"
          v-model="email"
        />
      </div>
      <div
        class="alert alert-success espacio"
        role="alert"
        v-if="successSentRecover"
      >
        Revisa tu correo...<br />
        Hemos enviado un link para que recuperes tu contraseña.
      </div>
      <div class="alert alert-danger" role="alert" v-if="e_sent_recover">
        Error en la solicitud... <br />
        Revisa el correo ingresado o intenta más tarde.
      </div>
      <div class="container">
        <div class="row justify-content-end">
          <div class="col-3">
            <button
              @click="recuperaPassword()"
              class="boton_recupera"
              type="submit"
              data-paso="1"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
    <div class="container">
      <div class="row justify-content-start">
        <div class="col-3">
          <button
            @click="TogglePopup()"
            class="boton_volver"
            type="submit"
            data-paso="1"
          >
            Volver
          </button>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  props: {
    TogglePopup: Function,
  },
  setup() {
    const store = useStore();
    const successSentRecover = computed(() => store.getters.successSentRecover);
    function recoverPassword(data) {
      store
        .dispatch("recoverPassword", data)
        .then(() => {
          this.e_sent_recover = false;
        })
        .catch((err) => {
          this.e_sent_recover = true;
        });
    }
    function closeBoxMsg() {
      store.dispatch("goBackRecover");
    }
    return {
      recoverPassword,
      closeBoxMsg,
      successSentRecover,
    };
  },
  mounted() {
    this.closeBoxMsg();
  },
  data() {
    return {
      email: "",
      //Variables error post
      e_sent_recover: false,
    };
  },
  methods: {
    recuperaPassword() {
      let json = {
        username: this.email,
      };
      this.recoverPassword(json);
    },
  },
};
</script>
<style >
.texto_recupera_cont {
  size: 20px;
  color: white;
  font-weight: 400;
  text-align: left;
  margin-left: 10%;
  margin-right: 10%;
}
.boton_recupera {
  margin-top: 0rem;
  margin-right: 2rem;
  padding: 1.3rem;
  font-size: 3rem;
  color: black;
  font-family: "Merienda", cursive;
  font-weight: 300;
  border: none;
  border-radius: 3rem;
  background-color: white;
}
.boton_volver {
  margin-top: 0rem;
  margin-right: 2rem;
  padding: 1.3rem;
  font-size: 15px;
  color: rgb(230, 230, 230);
  font-family: "Merienda", cursive;
  font-weight: 300;
  border: none;
  border-radius: 3rem;
  background-color: rgb(49, 49, 49);
}
</style>