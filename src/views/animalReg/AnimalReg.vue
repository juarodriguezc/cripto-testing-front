<template>
    
    <navbar/>
    
    <div class="espacio_trabajo">
        <div class="subtitulo">
            <h2 class="titulo_home texto_centrado">
                Registro de Mascota para Adopción
            </h2>        
        </div>
        
        <div class = "botones">
            <button type="button" class="btn  button_volver" v-on:click="volver()">Volver al Usuario</button>
        </div>
    </div>
    <animalRegForm/> 
</template>

<script>
import navbar from "@/components/navbar.vue";
import animalRegForm from '@/components/regMascota/animalRegForm.vue' 
export default {
    components: { 
      navbar, animalRegForm 
    },
    methods:{
        volver(){
            this.$router.go(-1);
        }
    },
    name:"animalreg",
}
</script>

<style scoped>
</style>
