<template>
	<home/>
    <div class = "popup-activate" >
        <div class ="popup-inner" ref="popup_info">
            <div class = "row content-activation g-0">
                <div class = "col-4 col_img_activacion" >
                    <div class ="row h-25 ">
                        <img 
                        class="img_activation" 
                        src="../../assets/img/petlife_title.png" 
                        alt="perro saludo">
                        
                    </div>
                    <div class = "row h-75">
                        
                        <img 
                        class="img_activation" 
                        src="../../assets/gif/husky_1.gif" 
                        alt="perro saludo">
                    </div>
                    
                </div>
                <div class = "col-8 bg-light contenido_activacion">
                    <img 
                        class="exit_button_activacion" 
                        v-on:click="exit()"
                        src="../../assets/icons/exit_64px.png" 
                        alt="perro saludo">

                    <div class = "Container ">
                        <br>
                        <br>
                        <h1 class="titulo_activacion">Activación de la cuenta</h1>
                    </div>
                    <div class = "Container cont_interno_act ">
                        <br>
                        <p>¡Ya casi terminamos! En este momento vamos a iniciar el proceso de activación de tu cuenta, por favor espera.</p>
                        <div class ="images_process">
                            <img 
                            class="image_loading" 
                            v-if="!success_activacion & !e_activacion"
                            src="../../assets/gif/loading-304px.gif" 
                            alt="loading">

                            <img 
                            class="image_result"
                            v-else-if="success_activacion" 
                            src="../../assets/icons/ok_250px.png" 
                            alt="success">

                            <img 
                            class="image_result" 
                            v-else
                            src="../../assets/icons/cancel_250px.png" 
                            alt="error">
                        </div>
                        <div class ="Success_activacion" v-if="success_activacion">
                            <p>Tu cuenta ha sido activada exitosamente.</p>
                            <h3>¡Te damos la Bienvenida a PetLife!</h3>
                        </div>
                        <div class ="Success_activacion" v-if="e_activacion">
                            <p>¡Error de activación!</p>
                            <p>{{e_message}}</p>
                        </div>
                        <br>
                        <div class = "container container_but_salir">
                                <button type="button" class="btn button_salir_inicio" @click="exit()">Ir a inicio</button>
                            </div>
                    </div>
                    
                    
                </div>
            </div>
            
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import home from "@/views/home/Home"
export default {
    name: "Activate",
    data(){
        return{
            result: null,
            token : null,
            e_activacion:false,
            success_activacion: false,
            e_message:"",
        }
    },
    components:{
        home
    },
    mounted:function(){
        this.token = this.$route.params.token
		var str = (this.token.split("&"))[0];
		this.token = str;
        axios({
            //url: "http://localhost:8080/api/auth/activate/"+this.token,
            url: "https://unpetlife.herokuapp.com/api/auth/activate/"+this.token,
            method: "POST",
        })
        .then((response)=>{
            //console.log(response);
            this.success_activacion=true;
            this.e_activacion=false;
        })
        .catch((error)=>{
            //console.log(error);
            this.e_activacion=true;
            this.success_activacion=false;
            this.e_message=error.response.data.message;
        })
    },
    methods:{
        exit(){
            this.$router.push('/');
        },
    }
}
</script>

<style >
    .popup-activate{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.308);
        display:flex;
        align-items:center;
        justify-content: center;

    }
    .popup-activate .popup-inner{
        background-color:white;
        
        width:1200px;
        height: 600px;
        
    }
    .content-activation{
        height:100%;
        padding:0;
    }
    .img_activation{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .col_img_activacion{
        background-color: #4B8BDD;
    }
    .contenido_activacion{
        position: relative;
    }
    .exit_button_activacion{
        width:40px;
        height:40px;
        position:absolute;
        right:10px;
        top:10px;
    }
    .titulo_activacion{
        text-align: center;
        color: #4B8BDD;
    }
    .cont_interno_act{
        text-align: left;
        margin-left: 60px;
        margin-right: 60px;
    }
    .cont_interno_act p{
        font-size: 20px;
    }
    
    .images_process{
        width:100%;
        height:200px;
        position:relative;
    }
    .image_loading{
        position:absolute;
        width:200px;
        height:210px;
        right:240px;

        
    }
    .image_result{
        position:absolute;
        width:100px;
        height:100px;
        right:290px;
        top:50px;
        
    }
    .Success_activacion{
        text-align: center;
    }
    .container_but_salir {
        text-align: center;
    }
    .button_salir_inicio{
        background-color: #4B8BDD;
        color:#ffffff;
        font-size: 25px;
        padding: 5px 32px;
        text-align: center;
    }
    .button_salir_inicio:hover{
        background-color: #427ac4;
        color:#ffffff;
    }
    
</style>