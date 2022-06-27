<template>
    <div class="confetti" v-if="true">
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
        <div class="confetti-piece"></div>
    </div>
    <div class = "popup-infoApli" >
        <div class ="popup-inner px-0" ref="popup_info">
            
            <img 
                class="button_exit_solicitud" 
                v-on:click="exitApli()"
                src="../../assets/icons/exit_64px.png" 
                alt="perro saludo">
            <div class ="row content_solicitud">
                <div class = "col-5  bg-light g-0">
                    <img class = "img_envio" src="../../assets/img/pet_publication.jpg"> 
                </div>
                <div class = "col-7 content_info_solicitud ">
  
                    <p class="titulo_info_envio_sol">¡La mascota ha sido publicada!</p>
                    <br>
                    <img class = "ico_success" src = "../../assets/icons/ok_250px.png">
                    <br>
                    <hr class="new1" style="color:#4B8BDD;">
                    <br>
                    <p style = "font-size:22px;">Cada vez que esta mascota reciba una solicitud de adopción, se te enviará un correo electrónico. </p>
                    <img class = "adop_img" src = "../../assets/img/blue_logo.png">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
import { ref } from 'vue'
import {onClickOutside} from '@vueuse/core'

//VueX
import { useStore } from 'vuex'

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
        //Functions
        function exitSolicitud(){
            store.dispatch("addPets/exitMsg");
        }
        return{
            popup_info,
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
        color:#555555;
        text-align:center;
        margin-right: 50px;
    }
    /*Ico success */
    .ico_success{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 25%;
    }
    /**imagen adopcion */
    .adop_img{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
    }
    /**Celebration */
    .confetti {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1000;
    }
    .confetti-piece {
        position: absolute;
        width: 10px;
        height: 30px;
        background: #ffd300;
        top: 0;
        opacity: 0;
    }
    .confetti-piece:nth-child(1) {
        left: 7%;
        -webkit-transform: rotate(-40deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 182ms;
        -webkit-animation-duration: 1116ms;
    }
    .confetti-piece:nth-child(2) {
        left: 14%;
        -webkit-transform: rotate(4deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 161ms;
        -webkit-animation-duration: 1076ms;
    }
    .confetti-piece:nth-child(3) {
        left: 21%;
        -webkit-transform: rotate(-51deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 481ms;
        -webkit-animation-duration: 1103ms;
    }
    .confetti-piece:nth-child(4) {
        left: 28%;
        -webkit-transform: rotate(61deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 334ms;
        -webkit-animation-duration: 708ms;
    }
    .confetti-piece:nth-child(5) {
        left: 35%;
        -webkit-transform: rotate(-52deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 302ms;
        -webkit-animation-duration: 776ms;
    }
    .confetti-piece:nth-child(6) {
        left: 42%;
        -webkit-transform: rotate(38deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 180ms;
        -webkit-animation-duration: 1168ms;
    }
    .confetti-piece:nth-child(7) {
        left: 49%;
        -webkit-transform: rotate(11deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 395ms;
        -webkit-animation-duration: 1200ms;
    }
    .confetti-piece:nth-child(8) {
        left: 56%;
        -webkit-transform: rotate(49deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 14ms;
        -webkit-animation-duration: 887ms;
    }
    .confetti-piece:nth-child(9) {
        left: 63%;
        -webkit-transform: rotate(-72deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 149ms;
        -webkit-animation-duration: 805ms;
    }
    .confetti-piece:nth-child(10) {
        left: 70%;
        -webkit-transform: rotate(10deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 351ms;
        -webkit-animation-duration: 1059ms;
    }
    .confetti-piece:nth-child(11) {
        left: 77%;
        -webkit-transform: rotate(4deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 307ms;
        -webkit-animation-duration: 1132ms;
    }
    .confetti-piece:nth-child(12) {
        left: 84%;
        -webkit-transform: rotate(42deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 464ms;
        -webkit-animation-duration: 776ms;
    }
    .confetti-piece:nth-child(13) {
        left: 91%;
        -webkit-transform: rotate(-72deg);
        -webkit-animation: makeItRain 1000ms infinite ease-out;
        -webkit-animation-delay: 429ms;
        -webkit-animation-duration: 818ms;
    }
    .confetti-piece:nth-child(odd) {
        background: #7431e8;
    }
    .confetti-piece:nth-child(even) {
        z-index: 1;
    }
    .confetti-piece:nth-child(4n) {
        width: 5px;
        height: 12px;
        -webkit-animation-duration: 2000ms;
    }
    .confetti-piece:nth-child(3n) {
        width: 3px;
        height: 10px;
        -webkit-animation-duration: 2500ms;
        -webkit-animation-delay: 1000ms;
    }
    .confetti-piece:nth-child(4n-7) {
    background: red;
    }
    @-webkit-keyframes makeItRain {
        from {opacity: 0;}
        50% {opacity: 1;}
        to {-webkit-transform: translateY(350px);}
    }
</style>