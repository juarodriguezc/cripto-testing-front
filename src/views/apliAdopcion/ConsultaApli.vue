<template >
    <navbar/>
    
    
    <div class="espacio_trabajo" style="width:100%; margin-left:0px; margin-right:0;">
        <div class="subtitulo " style="width:80%; margin: 0 auto;">
            <h2 class="titulo_home texto_centrado mayuscula">
                solicitudes de adopción
            </h2>        
        </div>
        
        <div class = "botones" style="width:80%; margin-left:10%;">
            <button type="button" class="btn button_volver" v-on:click="volver()">Volver al Usuario</button>
        </div>

        <div class = "mostrar">
            <div class="botino">
                <button 
                    id="activo" 
                    class="mayuscula" 
                    :class="color(0)"
                    v-on:click="changeVisFilter('Visibles'); boton=0">
                    visibles 
                </button>
                <button
                    v-on:click="changeVisFilter('Ocultas'); boton=1"
                    id="ocultas"
                    :class="color(1)"
                    class="mayuscula">
                    ocultas
                </button>
            </div>    
        </div>
  
      <div class = "container-fluid bg-light cuerpo_consultaApli">
            <infoApli v-if="popupTriggers.buttonTrigger" :TogglePopup = "()=>TogglePopup('buttonTrigger')" :aplicationInfo = "AplicaInfoEnviar.aplicationInfo" :updateValues = "updateValues"/>

            <br>
            <div class = "container">
                
                <div class = "container_img_notresults" v-if="listSize==0">
                    <img src="../../assets/img/dog_confused.png" >
                    <p class="title_notfound">No se han encontrado resultados</p>
                    <p class="subtitle_notfound">Parece que no tienes solicitudes con esos parámetros</p>
                </div>
                
                <div class="row  g-0 mb-5 container_apli_info border"  v-for="apli in ListaApli" :key = "apli.id" >
                    <p class="text_info_id_apli">Publicación #{{apli.id}}</p>
                    <div class = "lateral_bar_consultasol" v-bind:style="{ background: COLOR_TIPO[apli.publicationVisible] ||  COLOR_TIPO[true] }"></div>
                    <div class = "row g-0 content_consultasol ">
                        <div class="col-5 col_infoapli">
                            <br>
                            <p><mark class="titulo_soli">Nombre: </mark>{{apli.name.substring(0,50)}}</p>
                            <p><mark class="titulo_soli">Email: </mark>{{apli.email.substring(0,40)}}</p>
                            <p><mark class="titulo_soli">Teléfono móvil: </mark>{{apli.movilNumber}}</p>
                            <p v-if=" apli.telNumber != 'No aplica' "><mark class="titulo_soli">Teléfono Fijo: </mark>{{apli.telNumber}}</p>
                            <p><mark class="titulo_soli">Familia de acuerdo: </mark> <img v-bind:src="ICON_TIPO[apli.familyAgreement]"></p>
                        </div>
                        <div class = "col-4 container_extra_info">
                            <br>
                            <p><mark class="titulo_soli">Canal comunicación: </mark>{{apli.communication}}</p>
                            <p><mark class="titulo_soli">Edad:  </mark>{{apli.age}} años</p>
                            <p><mark class="titulo_soli">Ubicación: </mark>{{apli.city}} ({{apli.department}})</p>
                            <p><mark class="titulo_soli">Dirección: </mark>{{apli.address}}</p>
                            <br>
                            <button 
                                type="button" 
                                class="btn button_verinfo_apli" 
                                @click="bloquear"
                                v-on:click="()=>TogglePopup('buttonTrigger',apli)">
                                Información completa
                            </button>
                        </div>
                        <div class = "col-3 ">
                            <img class="card-img-top imagen_apli" v-bind:src="apli.pet.link_foto" v-bind:alt="apli.pet.id">
                        </div>
                    </div>
                </div>
            </div> 
            <br>
            <br>
        </div> 

        <nav  class="paginas" v-if="listSize!=0">
            <ul class="pagination justify-content-center">
                <li class="buttons_pagination" v-on:click="gobackPage()">
                <a class="page-link page-link-back" href="#">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-big-left"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"
                    ></path>
                    </svg>
                </a>
                </li>

                <li
                class="page-item buttons_pagination"
                v-for="page in parseInt(totalPages)"
                :key="page"
                v-on:click="gotoPage(page)">

                <a class="page-link page-link-numbers" href="#">
                    {{ page }}
                </a>
                </li>

                <li class="buttons_pagination" v-on:click="gonextPage()">
                <a class="page-link page-link-next" href="#">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-big-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"
                    ></path>
                    </svg>
                </a>
                </li>
            </ul>
        </nav>
    </div>
    
</template>
<script>

import navbar from "@/components/navbar"
import infoApli from "@/components/apliAdopcion/infoApli"
import axios from 'axios'
import {ref} from 'vue'
import {onClickOutside} from '@vueuse/core'
export default {
    data(){
        const FIL_VIS = {
            'Visibles':true,
            'Ocultas':false,
            'Todas':"",
        }
        const FIL_VIS_INV = {
            true:'Visibles',
            false:'Ocultas',
            "":'Todas',
        }
        const ICON_TIPO = {
            true:require('../../assets/icons/happy_64px.png'),
            false:require('../../assets/icons/sad_64px.png'),
        }
        const COLOR_TIPO = {
            true:"#4B8BDD",
            false:"#d9534f",
        }
        return{
            ListaApli:null,
            infoApli,
            buttonTrigger:false,
            size:5,
            totalPages:0,
            ICON_TIPO,
            COLOR_TIPO,
            listSize:0,
            FIL_VIS,
            FIL_VIS_INV,
            boton:0,
            QUERY:{},
        }
    },
    setup(){
        const popupTriggers = ref({
            buttonTrigger: false,
        });

        const AplicaInfoEnviar = {
            aplicationInfo:null ,
        };

        const TogglePopup = (trigger, apli) =>{
            popupTriggers.value[trigger] = !popupTriggers.value[trigger]
            AplicaInfoEnviar.aplicationInfo = apli
        };
        const dropbtn = ref(null);

        return{
            popupTriggers,
            AplicaInfoEnviar,
            TogglePopup,
            dropbtn,
        }
    },
    components:{
        navbar,
        infoApli
    },
    watch:{
        
        "$route.query.pag":{
            immediate: true,
            handler(newVal){
                if(!isNaN(newVal) && newVal !== undefined){
                    this.QUERY.pag = newVal
                }else{
                    if(this.$route.path == "/profile/consultaapli"){
                        this.QUERY = {
                            "pag":1,
                            "vis":true,
                        }
                        this.boton = 0;
                        this.$router.push({ path: "/profile/consultaapli"})
                    }
                    
                }
                this.updateValues()
            }
        },
        
        "$route.query.vis":{
            immediate: true,
            handler(newVal){
                if ( newVal == "true" || newVal == "false") {
                    this.QUERY.vis = newVal
                    if(newVal == "true"){
                        this.boton = 0;
                    }else{
                        this.boton = 1;
                    }
                }else{
                    if(this.$route.path == "/profile/consultaapli"){
                        this.QUERY = {
                            "pag":1,
                            "vis":true,
                        }
                        this.boton = 0;
                        this.$router.push({ path: "/profile/consultaapli"})
                    }
                }
                this.updateValues()
                
            }
        },
        
    },
    methods:{
        volver(){
            this.$router.push("/profile")
        },
        gotoPage(idPage){
            this.QUERY.pag = idPage;
            this.$router.push({path:"/profile/consultaapli", query:this.QUERY})
        },
        gobackPage(){
            if(this.QUERY.pag == 1){
                return
            }
            this.QUERY.pag = this.QUERY.pag - 1;
            this.$router.push({path:"/profile/consultaapli", query:this.QUERY})
            
        },
        gonextPage(){
            if(this.QUERY.pag == this.totalPages){
                return
            }
            this.QUERY.pag = this.QUERY.pag - - 1;
            //Escritura javaScript
            this.$router.push({path:"/profile/consultaapli", query:this.QUERY})
        },
        changeVisFilter(filterVis){
            this.QUERY.vis = this.FIL_VIS[filterVis]
            this.$router.push({ path: "/profile/consultaapli",query:this.QUERY})
        },
        color(a) {
            if(a == this.boton){
                return "color";
            }
            else{
                return "";
            }
        },
        bloquear() {
            var tex = document.getElementById('scrollbar');
            tex.classList.add('bloquear');
        },
        updateValues(){
            //Load token
            const token = localStorage.token;
            //Pagination variables Query
            let pag = this.QUERY.pag;
            let vis = this.QUERY.vis;
            axios
            .get("https://unpetlife.herokuapp.com/api/apply/getApplicationUserPage?deleted=false&visible="+(vis)+"&page="+(pag-1)+"&size="+(this.size) ,{
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            })
            .then( data =>{
                //Verificar que no exista desborde en paginacion
                let maxPage = data.data.totalPages;
                if(data.data.totalElements > 0){
                    if(this.QUERY.pag > maxPage){
                        this.QUERY.pag = maxPage;
                        this.$router.push({path:"/profile/consultaapli", query:this.QUERY})
                    }
                    this.ListaApli = data.data.content;
                    this.totalPages = data.data.totalPages;
                    this.listSize = (this.ListaApli == null)?0:this.ListaApli.length;
                }else{
                    this.QUERY.pag = 1;
                    this.$router.push({path:"/profile/consultaapli", query:this.QUERY})
                    this.ListaApli = data.data.content;
                    this.totalPages = data.data.totalPages;
                    this.listSize = (this.ListaApli == null)?0:this.ListaApli.length;
                }
                
            })
            .catch((error) => {
                var msg_back = error.response.data.message
                console.log(msg_back)
            });
            
            
        }
    },
    mounted:function(){
        //Set default values QUERY
        this.QUERY = {
            "pag":this.$route.query.pag||1,
            "vis":this.$route.query.vis||true,
        }
        this.updateValues();
        onClickOutside(this.dropbtn, (event)=>this.closeDrop());
    },
}

</script>

<style>

    /*Pagina solicitudes de aplicacion*/
    .cuerpo_consultaApli{
        min-height: 600px;
        background-color: initial;
    }

    .titulo_solicitud_adop{
        font-size: 40px;
        text-align: center;
        color: #6FABF9;
        font-family: "Merienda", cursive;
        font-weight: bold;

    }
    .container_img_notresults{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width:70%;
        text-align: center;
        margin-top: 20px;
        border-radius: 25px;
        padding: 0px 0px 20px 0px;
    }
    .container_img_notresults img{
        background: #ffffff;
        display: block;
        width: 450px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 100%;
    }
    .title_notfound{
        font-size: 35px;
        font-weight: 600;
        color:rgb(77, 77, 77);
    }
    .subtitle_notfound{
        font-size: 18px;
    }
    /*Barra de busqueda primera version */
    .container_search{

    }
    .subtitle_dropdown{
        font-weight: 600;
    }
    .arror_drop{
        width:30px;
    }
    .dropbtn {
        background: transparent;
        color: #000000;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
    }

    .dropbtn:hover, .dropbtn:focus {
        background-color: #e0e0e0;
    }

    .dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 100%;
        overflow: auto;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }

    .dropdown-content a {
        background-color: #e0e0e0;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown a:hover {
        background-color: #ddd;
    }

    .show {
        display: block;
    }

    /*Contenedor solicitud*/
    .container_apli_info{
        background:#f0eeee;
        position: relative;
        max-height: 260px;
    }
    .container_apli_info p{
        font-size: 1.9rem;
    }
    /*Barra lateral*/
    .lateral_bar_consultasol{
        width:30px;
        height: 100%;
        position:absolute;
        top:0px;
        left: 0px;
    }
    /*Titulo id */
    .text_info_id_apli{
        position: absolute;
        top: 0px;
        right: 0px;
        padding: 0px 350px 0px 0px;
        font-size: 20px;
        color:#5f5f5f;
        text-align: end;
    }
    /*Contenedor solicitud */
    .content_consultasol{
        
        padding:0px 0px 0px 60px;
        height:100%;
    }

    .imagen_apli{
        object-fit: cover;
        height: 260px;
        width:100%;
    }
    /*Titulo solicitud */
    .titulo_soli{
        background-color: transparent;
        color: #4179c2 ;
        font-weight: 600;
    }
    /*Boton ver info completa */
    .button_verinfo_apli{
        background-color: #535353;
        color:#ffffff;
        font-size: 15px;
        padding: 5px 32px;
        text-align: center;
    }
    .button_verinfo_apli:hover{
        background-color: #313131;
        color:#ffffff;
    }
    /* Botones de paginación */
    .buttons_pagination .page-link-back{
        border-radius: 5px 0px 0px 5px;
    }
    .buttons_pagination .page-link-next{
        border-radius: 0px 5px 5px 0px;
    }
    .buttons_pagination .page-link{
        width:35px;
        text-align: center;
        font-size: 15px;
        align-content: center;
        background-color: #525252;
        color:#FFFFFF;
        font-weight: 500;
    }
    .buttons_pagination .page-link:hover{
        background-color: #363636;
    }
</style>