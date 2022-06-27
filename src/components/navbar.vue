<template lang="">
    <header class="header">
        <div class="main">
            
            <nav class="centrar">
                <ul class="opcion">
                    <li class="vmenu">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            class="icon icon-tabler icon-tabler-menu"  
                            viewBox="0 0 24 24">

                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </li>
                </ul>
            </nav>
            <h1 class="texto_centrado titulo">
                Pet<span>Life</span>
            </h1>
        </div>

        <nav class="tabs">

            <div class="btn-block btn-inicio">
                <button 
                    class="boton" 
                    type="button" 
                    v-on:click="goHome"
                    data-paso="inicio">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round"
                        stroke-linejoin="round">

                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
                        <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                        <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                    </svg>
                    Inicio
                </button>
            </div>

            <div class="btn-block btn-adopta">
                <button 
                    class="boton" 
                    type="button" 
                    v-on:click="goAdopta"
                    data-paso="adopta">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586"></path>
                        <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586"></path>
                        <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z"></path>
                    </svg>
                    Adopta
                </button>
            </div>

            <div class="btn-block btn-ingreso" v-if="!userToken()"> 
                <button 
                    class="boton" 
                    id="BIngresar" 
                    type="button" 
                    v-on:click="goLogin"
                    data-paso="ingreso">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                    </svg>
                    Ingreso
                </button>
            </div>

            <div class="btn-block btn-registro" v-if="!userToken()" >
                <button 
                    class="boton" 
                    id="BRegistrar" 
                    type="button" 
                    v-on:click="goSignup"
                    data-paso="registro">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <rect x="5" y="3" width="14" height="18" rx="2" />
                        <line x1="9" y1="7" x2="15" y2="7" />
                        <line x1="9" y1="11" x2="15" y2="11" />
                        <line x1="9" y1="15" x2="13" y2="15" />
                    </svg>
                    Registro
                </button>
            </div>

            <div class="btn-block btn-profile" v-if="userToken()">
        
                <button
                    class="boton" 
                    type="button" 
                    v-on:click="goProfile"
                    data-paso="profile">

                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user" 
                        viewBox="0 0 24 24">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="7" r="4" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                    Perfil
                </button>

                
            </div>

            <div class="btn-block btn-profile" v-if="userToken()">
        
                <button
                    class="boton" 
                    type="button" 
                    v-on:click="goLogout"
                    data-paso="logout">
                    
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="icon icon-tabler icon-tabler-user"  
                        viewBox="0 0 24 24" 
                        stroke-width="2" 
                        stroke="currentColor" 
                        fill="none" 
                        stroke-linecap="round" 
                        stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                        <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
                    </svg>
                    Salir
                </button>

                
            </div>

        </nav>
    </header>
</template>


<script>


import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name:"navbar",
    setup(){
        const store = useStore()
        function logOut(data){
            store.dispatch("logout", data)
            .then(() => {
                this.$router.push('/login');
            })
            .catch(err => console.log(err))
        }
        return {logOut}
    },
    components:{

    },
    methods:{
        
        userToken(){
            return localStorage.token;
        },
        goLogout(){
            this.logOut();
        },
        goHome(){
            this.$router.push('/');
        },        
        goAdopta(){
            this.$router.push('/adopta/1');

        },
        goLogin(){
            this.$router.push('/login');
        },
        goSignup(){
            this.$router.push('/signup');
        },
        goUser(){
            this.$router.push('/user');
        },
        goProfile(){
            this.$router.push('/profile');
        },

    }
}
</script>
<style lang="">
    
</style>