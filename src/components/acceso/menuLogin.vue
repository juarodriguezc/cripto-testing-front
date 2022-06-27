<template>
  <main class="form-login">
    <form v-on:submit.prevent="login2">
      <h2 class="texto_centrado sub">Ingreso</h2>
      <div class="centrado">
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
          <div class="orden">
            <p class="texto texto_izquierda">Contraseña</p>
            <input
              type="password"
              id="floatingPassword"
              class="form-control"
              maxlength="20"
              placeholder="Contraseña"
              v-model="password"
            />
          </div>
        </div>
        <br />

        <div
          class="alert alert-danger"
          role="alert"
          v-if="this.errorB && !this.loggedIn"
        >
          {{ errorMsg }}
        </div>
        <div
          class="alert alert-success espacio"
          role="alert"
          v-if="passChanged"
        >
          Contraseña actualizada correctamente!
        </div>

        <div class="texto_derecha">
          <button
            @click="IngresaUsuario"
            class="boton2"
            type="submit"
            data-paso="1"
          >
            Acceder
          </button>
        </div>
        <div class="olvidar">
          <button
            @click="TogglePopup()"
            class="boton3"
            type="submit"
            data-paso="4"
          >
            ¿Has olvidado tu contraseña?
          </button>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "menuLogin",
  props: {
    TogglePopup: Function,
  },
  setup() {
    const store = useStore();
    const errorMsg = computed(() => store.getters.authStatus);
    const errorB = computed(() => store.getters.errorBoolean);
    const loggedIn = computed(() => store.getters.isLoggedIn);
    const passChanged = computed(() => store.getters.successChangedPass);
    const domain = process.env.VUE_APP_DOMAIN_BACK;
    store.dispatch("restartVals");
    function login(json) {
      store
        .dispatch("login", { json, domain:this.domain+"/auth/login" })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {});
    }
    return { errorMsg, errorB, loggedIn, login, passChanged, domain };
  },
  data() {
    return {
      //Datos del usuario de ingreso
      email: "",
      password: "",
    };
  },
  methods: {
    IngresaUsuario() {
      let json = {
        username: this.email,
        password: this.password,
      };
      this.login(json);
    },
  },
};
</script>
<style>
.olvidar {
  font-size: 20px;
}
</style>