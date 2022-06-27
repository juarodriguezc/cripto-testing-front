<template>
    <navbar/>
    <div class = "container-fliud">
        <div class = "container-fluid" style = "padding-left:8%;">
            <div class = "botones " >
                <button type="button" class="btn  button_volver" v-on:click="volver()">Volver a info mascota</button>
            </div>
        </div>
       
        
        <div class="row g-0 justify-content-center" > 
            
            <div class="col-sm-8">
                <application-form  class="col-sm-12" :idPet="$route.params.idPet"/>
            </div> 
            <div class="justify-content-center col-sm-3 " style="margin-top: 30px">
                <pet-preview  :idPet="$route.params.idPet" /> 
            </div> 
        </div>
    </div>
    
</template>

<script>
import navbar from "@/components/navbar.vue";
import ApplicationForm from '@/components/apliAdopcion/applicationForm.vue';
import petPreview from '@/components/apliAdopcion/mascotaPreview.vue';

export default {
    data() {
        return {
            idPet:0,
        }
    },
    components: {
        navbar,
        ApplicationForm , 
        petPreview,
    },
    methods:{
        volver(){
            this.$router.push('/info-mascota/'+this.idPet);
        },
    },
    mounted:function(){
        this.idPet = this.$route.params.idPet;
    },
    name: "ApliAdopcion"    
}
</script>
