<template lang="">
    <navbar/>
    <div id="ingreso" class="texto_centrado">
        <div class="selcion">
            <div class="informacion pingreso">
                <menuLogin v-if="!popupTriggers.menu_recupera" :TogglePopup = "()=>TogglePopup('menu_recupera')"/> 
                <correoRecupera v-else :TogglePopup = "()=>TogglePopup('menu_recupera')"/> 
            </div>
            <img 
                class="flip" 
                src="../../assets/gif/husky_1.gif" 
                alt="perro saludo">
        </div>
    </div>
</template>
<script>
import menuLogin from "@/components/acceso/menuLogin";
import navbar from "@/components/navbar";
import correoRecupera from "@/components/acceso/correoRecupera";
import { ref } from "vue";
export default {
  name: "Login",
  data() {
    return {};
  },
  setup() {
    const popupTriggers = ref({
      menu_recupera: false,
    });
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger];
    };
    return {
      popupTriggers,
      TogglePopup,
    };
  },
  components: {
    navbar,
    menuLogin,
    correoRecupera,
  },
  methods: {},
};
</script>
<style>
</style>