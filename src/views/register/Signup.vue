<template lang="">
    <navbar/>

    <div id="registro" class="texto_centrado">
        <div class="selcion">
            
            <img 
                src="../../assets/gif/husky_1.gif" 
                alt="perro saludo">
            
            <div class="informacion pregistro">
                <menuSignup/>
            </div>
        </div>
    </div>

</template>
<script>

import navbar from "@/components/navbar"
import menuSignup from "@/components/acceso/menuSignup"
export default {
    name: "Signup",
    components:{
        navbar,
        menuSignup
    }
}
</script>
<style>
    
</style>