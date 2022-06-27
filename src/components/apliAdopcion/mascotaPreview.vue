<template>
  <div class="cardPre ">
    <p style="text-align:center; color:white; font-size:30px; font-weight:500;"> Información de mascota: </p>
    <p></p>
    <div class = "row">
      <img class="card-img-top imagen_apli" v-bind:src="this.link" alt="Fotografia de la mascota">
      <br>
      <div class="row">
        <div class = "col-9">
          <p></p>
          <span class = "titulo_name_mascote">{{pet.nombre}}</span>
          <p class="subtitulo_name_mascote">{{pet.tipo}} - {{pet.edad}} años</p>
        </div>
        <div class = "col-3">
          <p></p>
          <img class = "ico_pet_sol" v-bind:src="ICON_TIPO[pet.tipo]||ICON_DEFAULT" alt="ImgPet">
        </div>
        <br>
        <div class="w-100"></div>
        <br>
        <div class = "col-6">
          <p class="info_siguiente_mascote"><mark class = "sub_info_especifica">Vacunas al día: </mark> {{(pet.vacunada == true)?"Sí":"No"}}</p>
          <p class="info_siguiente_mascote"><mark class = "sub_info_especifica">Sexo: </mark> {{pet.sexo}}</p>
        </div>
        <div class = "col-6">
          <p class="info_siguiente_mascote"><mark class = "sub_info_especifica">Raza: </mark>{{pet.raza}}</p>
          <p class="info_siguiente_mascote"><mark class = "sub_info_especifica">Estéril: </mark>{{(pet.esteril == true)?"Sí":"No"}}</p>
        </div>
      </div>
    </div>
    <hr class="new1">
    <p style=" text-align: center; color:white; font-size:15px;">¿No es la mascota deseada? Vuelva atrás <button @click="goBack" class="btn btn-dark"><em class="fa fa-chevron-circle-left"></em></button></p>
  </div>
</template>

<script>
import axios from "axios";

//VueX
import { useStore } from 'vuex'

export default {
  setup(props) {
    //VueX config
    const store = useStore()
    //Functions
    function changePetName(petName){
        store.dispatch("addFormApl/changePetName",petName);
    }
    return{
      changePetName,
    }
},
  data() {
    const ICON_DEFAULT = require('../../assets/icons/white_other_96px.png')
    const ICON_TIPO = {
        'Canino':require('../../assets/icons/white_dog_96px.png'),
        'Felino':require('../../assets/icons/white_cat_96px.png'),
        'Bovino':require('../../assets/icons/white_cow_96px.png'),
        'Pez':require('../../assets/icons/white_fish_96px.png'),
        'Ave':require('../../assets/icons/white_bird_96px.png'),
        'Roedor':require('../../assets/icons/white_hamster_96px.png'),
        'Equino':require('../../assets/icons/white_horse_96px.png'),
    }
    return {
      pet : "",
      link: "",
      name: "",
      age: "",
      type: "",
      sex: "",
      ICON_TIPO,
      ICON_DEFAULT,
    };
  },
  name: "petPreview",
  props: {
    idPet: {
      Type: Number,
      required: true,
    },
  },
  mounted: function ()  {
    axios
        //.get("http://localhost:8080/api/pet/consultaPet?idPet="+this.idPet)
        .get("https://unpetlife.herokuapp.com/api/pet/consultaPet?idPet=" + this.idPet)
        .then((data) => {
          this.pet = data.data;
          this.link = data.data.links_foto;
          this.age = data.data.edad;
          this.type = data.data.tipo;
          this.sex = (data.data.sexo === "female")? "Hembra":"Macho";
          this.name = data.data.nombre;
          this.changePetName(this.name)
        });
    },
    methods:{
      goBack(){
        this.$router.push('/adopta/1');
      }
    }
};
</script>

<style>
.cardPre{
  display: grid;
  background: #525252;
  color:white;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  padding: 2rem;
  border-radius: 5rem;
  margin-bottom: 5rem;
  -webkit-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
  -moz-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
  box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
}
.img-fluid{
  border-radius: 1rem;
}
.infor{
  margin-left: 1rem;
  margin-right: 1rem;
  padding-bottom: 2rem;
  padding-top: 2rem;
  margin-top: 1rem;
}
.imgVie{
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 10px;
}

/***** */
.titulo_name_mascote{
    font-size: 40px;
    text-align:left;
    font-weight: 600;
    color:#ffffff;
}
.subtitulo_name_mascote{
    font-size: 25px;
    text-align:left;
    font-weight: 400;
    color:#ffffff;
}
.info_siguiente_mascote{
    font-size: 18px;
    text-align:left;
    font-weight: 400;
    color:#ffffff;
}
.ico_pet_sol{
    width:80px;
}
.sub_info_especifica{
  background: transparent;
  color:white;
  font-size: 22px;
  font-weight: 600;
}

/**Linea */
hr.new1 {
  border-top: 1px solid rgb(255, 255, 255);
}
</style>