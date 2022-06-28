<template>
  <div>
    <navbar />

    <div class="espacio_trabajo">
      <div class="subtitulo">
        <h2 class="titulo_home texto_centrado">Información de la Mascota</h2>
      </div>

      <div class="botones">
        <button
          type="button"
          class="btn button_volver"
          v-on:click="volverMascotas()"
        >
          Volver a Mascotas
        </button>
      </div>
    </div>

    <div class="info_mascota">
      <div class="imagen">
        <img
          class="imageninfoMascota"
          v-bind:src="pet.links_foto"
          v-bind:alt="pet.id"
        />
      </div>

      <div class="informacion">
        <div class="logo">
          <img class="icono" src="../../assets/img/icono.png" />

          <h1 class="titulo texto_centrado texto">
            Pet
            <span>Life</span>
          </h1>
        </div>

        <div class="primera datos">
          <h3 class="nombre izquierda">
            Nombre.
            <span class="mayuscula">{{ pet.nombre }}</span>
          </h3>

          <h3 class="especie derecha">
            Especie.
            <span class="mayuscula">{{ pet.tipo }}</span>
          </h3>
        </div>

        <div class="segunda datos">
          <h3 class="edad izquierda">
            Edad
            <span class="anios">{{ pet.edad }}</span>
            años
          </h3>

          <h3 class="raza derecha">
            Raza.
            <span class="mayuscula">{{ pet.raza }}</span>
          </h3>
        </div>

        <div class="tercera datos">
          <div class="img-tamaño izquierda">
            <h3 class="tamaño">Tamaño.</h3>

            <h3 class="tipo">
              Mediano
            </h3>

            <!-- <img class="animal" v-bind:src="imagen(mascota.tipo)"> -->
            <img
              v-if="pet.tipo == 'Felino'"
              class="animal"
              src="../../assets/img/silueta_cat.png"
            />
            <img
              v-else-if="pet.tipo == 'Canino'"
              class="animal"
              src="../../assets/img/silueta_dog.png"
            />
            <img
              v-else-if="pet.tipo == 'Roedor'"
              class="animal"
              src="../../assets/img/silueta_hamster.png"
            />
            <img
              v-else-if="pet.tipo == 'Pez'"
              class="animal"
              src="../../assets/img/silueta_pez.png"
            />
            <img
              v-else-if="pet.tipo == 'Bovino'"
              class="animal"
              src="../../assets/img/silueta_vaca.png"
            />
            <img
              v-else-if="pet.tipo == 'Ave'"
              class="animal"
              src="../../assets/img/silueta_ave.png"
            />
            <img
              v-else-if="pet.tipo == 'Equino'"
              class="animal"
              src="../../assets/img/silueta_caballo.png"
            />
            <img
              v-else
              class="animal"
              src="../../assets/img/silueta_dino.png"
            />

            <img class="modelo" src="../../assets/img/cuerpo2.png" />
          </div>

          <div class="ultimos derecha">
            <h3 class="sexo mayuscula">Macho</h3>

            <h3 class="esteril mayuscula">
              <!-- Esteril. -->
              <span
                class="mayuscula"
                style="font-size: 2.2rem"
                >Estéril</span
              >
              
              <!-- <span v-else class="mayuscula"></span> -->
            </h3>

            <h3 class="vacuna">
              <!-- Vacunas. -->
              <span
                class="mayuscula"
                style="font-size: 2.2rem"
                >Vacunado</span
              >
            </h3>
          </div>
        </div>
        <div class="botones">
          <button
            type="button"
            class="btn button_adoptar"
            @click="adoptar(this.idPet)"
          >
            Adoptar
          </button>
        </div>
      </div>

      <div class="mensaje">
        <h3 class="descripcion">Descripción</h3>
        <p>
          Es una mascota muy bonita
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "@/components/navbar";
import axios from "axios";

import pets from "../../data/pets.js";

export default {
  data() {
    return {
      pet: {
        idPet: "",
        nombre: "",
        edad: "",
        tipo: "",
        raza: "",
        links_foto: "",
      },
      idPet: null,
      mascota: {
        id: "",
        nombre: "",
        edad: "",
        esteril: "",
        tipo: "",
        sexo: "",
        raza: "",
        tamano: "",
        descripcion: "",
        vacunada: "",
        adoptado: "",
        links_foto: "",
      },
    };
  },
  components: {
    navbar,
  },
  methods: {
    volverMascotas() {
      this.$router.push("/adopta/1");
    },
    adoptar(idPet) {
      this.$router.push({ path: "/apply/" + idPet, params: { id_pet: idPet } });
    },
    Tamanio(tamano) {
      const tam = tamano.split("(");
      return tam[0];
    },
  },
  mounted: function () {
    this.idPet = this.$route.params.idPet;

    this.pet = pets[this.idPet-1];
    //axios.get("http://localhost:8080/api/pet/consultaPet?idPet="+this.idPet).then( data =>{
    /*
    axios
      .get(
        "https://unpetlife.herokuapp.com/api/pet/consultaPet?idPet=" +
          this.idPet
      )
      .then((data) => {
        this.mascota.id = data.data.id;
        this.mascota.nombre = data.data.nombre;
        this.mascota.edad = data.data.edad;
        this.mascota.esteril = data.data.esteril;
        this.mascota.tipo = data.data.tipo;
        this.mascota.sexo = data.data.sexo;
        this.mascota.raza = data.data.raza;
        this.mascota.tamano = data.data.tamano;
        this.mascota.descripcion = data.data.descripcion;
        this.mascota.vacunada = data.data.vacunada;
        this.mascota.links_foto = data.data.links_foto;
        this.mascota.adoptado = data.data.adoptado;
        //console.log(data.data);
      });
      */
  },
};
</script>
<style>
.button_volver {
  background-color: #64b8ff;
  font-size: 18px;
}
.imageninfoMascota {
}
.barra_lateral {
  width: 3%;
  background-color: #4b8bdd;
}
.info_detallada {
  background-color: #ffffff;
  padding-right: 30px;
  padding-left: 30px;
}
.text_name {
  font-size: 30px;
  font-weight: 400;
}
.text_tipo {
  font-size: 25px;
  font-weight: 200;
  line-height: 15px;
}
.columna_info_basica {
  background-color: #f3f3f3;
}
.contenedor_titulo p {
  font-size: 25px;
  color: rgb(24, 23, 23);
}
.titulo_info {
  background-color: transparent;
  color: #4179c2;
  font-weight: 600;
}
.button_adoptar {
  background-color: #474747;
  color: #ffffff;
  font-size: 25px;
  padding: 5px 32px;
  text-align: center;
}
.container_but_adoptar {
  left: 50%;
}
.contenedor_info {
  background: white;
}
</style>