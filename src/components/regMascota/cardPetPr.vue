<template>

    <li >
        <ul class="cards" >
            <a class="card_n" v-for="pet in pets" :key = "pet" v-on:click="goPet(pet.id)">
                <img class="card__image" v-bind:src="pet.link_foto" v-bind:alt="pet.id" />
                <div class="card__overlay">
                    <div class="card__header ">
                        <img class="card__thumb " v-bind:src="ICON_TIPO[pet.tipo]||ICON_DEFAULT" v-bind:alt="pet.id" />
                        <div class="card__header-text">
                            <h3 class="card__title">{{pet.nombre}}</h3>            
                            <span class="card__status">{{pet.edad}} años</span>
                        </div>
                    </div>
                    
                </div>
            </a>

           
            <a class="card_n" style="background:rgb(40,40,40,0.3); border:0;" v-on:click="goRegister()" >
                <img class="card__image__add" src="../../assets/icons/add_64px.png" />
                <div class="card__overlay">
                    <div class="card__header_add" style= "background:rgb(240,240,240)">
                        <div class="card__header-text" >
                            <p class="card__title " style= "font-size:25px; font-weight:800; text-align:center;">Registrar mascota</p>            
                        </div>
                    </div>
                </div>
            </a>



            


        </ul>
    </li>
     






</template>

<script>
export default {
    data(){
        const ICON_DEFAULT = require('../../assets/icons/other_96px.png')
        const ICON_TIPO = {
            'Canino':require('../../assets/icons/dog_96px.png'),
            'Felino':require('../../assets/icons/cat_96px.png'),
            'Bovino':require('../../assets/icons/cow_96px.png'),
            'Pez':require('../../assets/icons/fish_96px.png'),
            'Ave':require('../../assets/icons/bird_96px.png'),
            'Roedor':require('../../assets/icons/hamster_96px.png'),
            'Equino':require('../../assets/icons/horse_96px.png'),
        }
        return{
            ICON_DEFAULT,
            ICON_TIPO
        }
    },
    props: {
        pets:{},
    },
    methods:{
      goRegister() {
        this.$router.push('animalreg')
      },
      goPet(idPet) {
        this.$router.push('/info-mascota/'+idPet)
      },
    }
}
</script>

<style >
:root {
  --surface-color: #fff;
  --curve: 40;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  gap: 2rem;
  margin: 0 5vw;
  padding: 0;
  list-style-type: none;
  min-height: 200px;
}


.card_n {
  position: relative;
  display: block;
  height: 100%;  
  width:100%;
  border-radius: calc(var(--curve) * 1px);
  overflow: hidden;
  text-decoration: none;
  border:0;
}


.card__image {   
    height: 100%;
    object-fit: cover;
    
}

.card__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;      
  border-radius: calc(var(--curve) * 1px);    
  background-color: var(--surface-color);      
  transform: translateY(100%);
  transition: .2s ease-in-out;
}

.card_n:hover .card__overlay {
  transform: translateY(0);
}

.card__header {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2em;
  padding: 2em;
  border-radius: calc(var(--curve) * 1px) 0 0 0;    
  background-color:rgb(245,245,245);
  transform: translateY(-20%);
  transition: .2s ease-in-out;
}
/**Add mascota */
.card__header_add{
    position: relative;
    display: flex;
    align-items: center;
    gap: 2em;
    padding: 2em;
    border-radius: calc(var(--curve) * 1px) 0 0 0;    
    background-color: var(--surface-color);
    transform: translateY(5%);
    border:0;
    transition: .2s ease-in-out;
}
.card_n:hover .card__header_add {
  transform: translateY(0);
}
.card__image__add{
    
    height: 70%;
    object-fit: cover;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.card__arc {
  width: 60px;
  height: 60px;
  position: absolute;
  bottom: 100%;
  right: 0;      
  z-index: 1;
}

.card__arc path {
  fill: var(--surface-color);
  d: path("M 40 80 c 22 0 40 -22 40 -40 v 40 Z");
}       

.card:hover .card__header {
  transform: translateY(0);
}

.card__thumb {
  flex-shrink: 0;
  width: 50px;
  height: 50px;      
  border-radius: 50%;
  margin:-20px;
  background: #dfdfdf;      
}

.card__title {
  font-size: 1.2em;
  margin: 0 0 .3em;
  font-family: "Merienda", cursive;
  font-weight: 600;
  color: #4B8BDD;
}

.card__status {
  font-size: 1em;
  color: #7a7a7a;
}


</style>