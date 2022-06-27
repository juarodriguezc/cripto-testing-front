<template>
    <div class = "popup-infoApli" >
        <div class ="popup-inner px-0" ref="popup_info">
            
            <img 
                class="button_exit_solicitud" 
                v-on:click="exitApli()"
                src="../../assets/icons/exit_64px.png" 
                alt="perro saludo">
            <div class ="row content_solicitud">
                <div class = "col-5  bg-light g-0">
                    <img class = "img_envio" src="../../assets/img/mail_dog.jpg"> 
                </div>
                <div class = "col-7 content_info_solicitud ">
  
                    <p class="titulo_info_envio_sol">¡Tu solicitud ha sido enviada!</p>
                    <img class = "ico_success" src = "../../assets/icons/ok_250px.png">
                    <br>
                    <p style = "font-size:21px;">En los próximos días los cuidadores de <mark style="background:transparent; font-weight: 600;">{{petName}}</mark> se estarán comunicando para realizar el proceso adopción.</p>
                    <br>
                    <hr class="new1" style="color:#4B8BDD;">
                    <p style = "font-size:18px;">Recuerda que te pueden contactar por los siguientes medios:</p>
                    <br>
                    
                    <div class = "container_contact">
                        <div class = "info_contacto">
                            <div class = "row">
                                <div class = "col-auto ico_contact">
                                    <img src="../../assets/icons/android_126px.png">
                                </div>
                                <div class = "col-auto info_contact">
                                    <span class = "info_title">Teléfono celular:</span>
                                    <p class = "info_detalle">{{soli.telCell}}</p>
                                </div>
                            </div>
                        </div>
                        <div class = "info_contacto" v-if="soli.telPhone != '' ">
                            <div class = "row">
                                <div class = "col-auto ico_contact">
                                    <img src="../../assets/icons/phone_126px.png">
                                </div>
                                <div class = "col-auto info_contact">
                                    <span class = "info_title">Teléfono Fijo:</span>
                                    <p class = "info_detalle">{{soli.telPhone}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p></p>
                    <div class = "container_email">
                        <div class = "info_contacto">
                            <div class = "row">
                                <div class = "col-auto ico_contact">
                                    <img src="../../assets/icons/email_126px.png">
                                </div>
                                <div class = "col-auto info_contact">
                                    <span class = "info_title">Email:</span>
                                    <p class = "info_detalle"><a href>{{soli.email}}</a></p>
                                </div>
                                <div class="w-100"></div>
                            </div>
                        </div>
                    </div>
                   

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import {onClickOutside} from '@vueuse/core'


import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    data(){
        return {
            
        }
    },
    props: {
        TogglePopup:Function,
        aplicationInfo:Object,
        updateValues:Function,
    },
    setup(props) {
        const popup_info = ref(null)

        //VueX config
        const store = useStore()
        //States
        const soli = computed(() => store.state.addFormApl.contactSol)
        const petName = computed(() => store.state.addFormApl.petName)
        //Functions
        

        function exitSolicitud(){
            store.dispatch("addFormApl/exitSol");
        }


        
        return{
            popup_info,
            soli,
            petName,
            exitSolicitud,
        }
    },
    methods:{
        exitApli(){
            
            
            this.exitSolicitud();
        }
    },
    mounted:function(){
        onClickOutside(this.popup_info, (event)=>this.exitApli());
    },

}
</script>

<style scoped>
    .popup-infoApli{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
        background-color: rgba(0, 0, 0, 0.5);
        display:flex;
        align-items:center;
        justify-content: center;

    }
    .popup-infoApli .popup-inner{
        position:relative;
        background-color:white;
        width:1000px;
        height: 550px;
        
    }
    .button_exit_solicitud{
        width:40px;
        height:40px;
        position:absolute;
        right:10px;
        top:10px;
        z-index: 99;
    }
    .button_exit_solicitud:hover{
        width:41px;
        height:41px;
    }
    /*Bloque de contenido*/
    .content_solicitud{
        height:100%;
    }
    /*Lateral izquierdo info mascota */
    .img_envio{
        height: 100%;
        object-fit: cover;
    }
    /*Lateral derecho información solicitud */
    .content_info_solicitud{
        position: relative;
        background: white;
        padding: 20px 30px 10px 30px;
        height: 100%;
    }
    .contact_info_span{
        width: 400px;
        background: #4B8BDD;
    }
    /*Titulo solicitudes */
    .titulo_info_envio_sol{
        font-size: 30px;
        font-weight: 500;
        color:#3a3a3a;
        text-align:center;
        margin-right: 50px;
    }
    /*Ico success */
    .ico_success{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 20%;
    }
    /*Card icons contact */
    .container_contact{
        display: flex;
    }
    .info_contacto{
        width:300px;
        display: inline-block;
    }
    .info_contacto img{
        position: absolute;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        width:90%;
        height:90%;
    }
    .info_contacto .ico_contact{
        height: 60px;
        width: 60px;
        background: #4B8BDD;
        border-radius: 50%;
        position: relative;
    }
    .info_contacto .info_contact{
        padding: 5px 0px 0px 10px;
    }
    .info_contacto .info_title{
        color: #0f0f0f;
        font-size: 20px;
        font-weight: 600;
    }
    .info_contacto .info_detalle{
        font-size: 15px;
        font-weight: 400;
    }
</style>