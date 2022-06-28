<template lang="">
  <navbar />
  <div class="espacio_trabajo">
    <div class="subtitulo">
      <h1 class="titulo_home texto_centrado">Adopción de mascotas</h1>
    </div>
    <msgSuccess v-if="msgVisible"/>
    <div class="filtro subtitulo">
      
      <ul class="nav">
        <li class="tipo opcion">
        
          <h2 class="texto">
            <span class="fa fa-paw"></span>
            Tipo
          </h2>
        
          <ul class="filtro_animal">
            
            <button class="" id="Canino" @click="Tipo('Canino')">

              <img v-if="mascota[0]" class="animal imgmascota" src="../../assets/img/dog_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/dog_true.png">
              <span v-if="mascota[0]" > Canino </span>
              <span v-else style="color:red"> Canino </span>
            </button>
          
            <button class="" id="Felino" @click="Tipo('Felino')">
            
              <img v-if="mascota[1]" class="animal imgmascota" src="../../assets/img/cat_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/car_true.png">
              <span v-if="mascota[1]" > Felino </span>
              <span v-else style="color:red"> Felino </span>
            </button>
          
            <button class="" id="Bovino" @click="Tipo('Bovino')">
            
              <img v-if="mascota[2]" class="animal imgmascota" src="../../assets/img/cow_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/cow_true.png">
              <span v-if="mascota[2]" > Bovino </span>
              <span v-else style="color:red"> Bovino </span>
            </button>
          
            <button class="" id="Pez" @click="Tipo('Pez')">
            
              <img v-if="mascota[3]" class="animal imgmascota" src="../../assets/img/fish_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/fish_true.png">
              <span v-if="mascota[3]" > Pez </span>
              <span v-else style="color:red"> Pez </span>
              
            </button>
          
            <button class="" id="Roedor" @click="Tipo('Roedor')">
            
              <img v-if="mascota[4]" class="animal imgmascota" src="../../assets/img/hamster_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/hamster_true.png">
              <span v-if="mascota[4]" > Roedor </span>
              <span v-else style="color:red"> Roedor </span>
              
            </button>
          
            <button class="" id="Ave" @click="Tipo('Ave')">
            
              <img v-if="mascota[5]" class="animal imgmascota" src="../../assets/img/bird_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/bird_true.png">
              <span v-if="mascota[5]" > Ave </span>
              <span v-else style="color:red"> Ave </span>
              
            </button>
          
            <button class="" id="Equino" @click="Tipo('Equino')">
            
              <img v-if="mascota[6]" class="animal imgmascota" src="../../assets/img/horse_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/horse_true.webp">
              <span v-if="mascota[6]" > Equino </span>
              <span v-else style="color:red"> Equino </span>
              
            </button>
          
            <button class="" id="Otro" @click="Tipo('Otro')">
            
              <img v-if="mascota[7]" class="animal imgmascota" src="../../assets/img/other_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/other_true.webp">
              <span v-if="mascota[7]" > Otro </span>
              <span v-else style="color:red"> Otro </span>
              
            </button>
          </ul>
        
        </li>
        
        <li class="esteril opcion">
          <button class="fboton" @click="Esterilidad">
            
            <h2 v-if="esteril=='No'" class="texto">
              <span class="fa fa-minus-circle"></span>
              No Esteril
            </h2>

            <h2 v-else-if="esteril=='Si'" class="texto">
              <span class="fa fa-plus-circle"></span>
              Esteril
            </h2>
            
            <h2 v-else class="texto">
              <span class="fa fa-info-circle"></span>
              Es Estéril?
            </h2>

          </button>
        </li>
        
        <li class="sexo opcion">
          <button class="fboton" @click="Sexo">
            
            <h2 v-if="sexo=='Macho'" class="texto">
              <span class="fa fa-mars"></span>
              Macho
            </h2>
  
            <h2 v-else-if="sexo=='Hembra'" class="texto">
              <span class="fa fa-venus icono"></span>
              Hembra
            </h2>
  
            <h2 v-else class="texto">
              <span class="fa fa-neuter"></span>
              Sexo
            </h2>

          </button>
        </li>
        
        <li class="peso opcion">
          <h2 class="texto">
            <span class="fa fa-balance-scale"></span>
            Peso
          </h2>

          <ul class="filtro_peso">
            <button class="" id="Chico" @click="Peso('Chico')">
              Chico
              <span>Menos de 5 Kg</span>
            </button>

            <button class="" id="Pequeño" @click="Peso('Pequeño')">
              Pequeño
              <span>6 a 14 Kg</span>
            </button>

            <button class="" id="Mediano" @click="Peso('Mediano')">
              Mediano
              <span>15 a 25 Kg</span>
            </button>

            <button class="" id="Grande" @click="Peso('Grande')">
              Grande
              <span>26 a 50 Kg</span>
            </button>

            <button class="" id="Enorme" @click="Peso('Enorme')">
              Enorme
              <span>Mayor a 50 Kg</span>
            </button>

          </ul>
        </li>
        
        <li class="vacuna opcion">
          <button class="fboton" @click="Vacunar">
            <h2 v-if="vacunas=='true'" class="texto">

              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 3l4 4"></path>
                <path d="M19 5l-4.5 4.5"></path>
                <path d="M11.5 6.5l6 6"></path>
                <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"></path>
                <path d="M7.5 12.5l1.5 1.5"></path>
                <path d="M10.5 9.5l1.5 1.5"></path>
                <path d="M3 21l3 -3"></path>
              </svg>  
              Vacunado
            </h2>

            <h2 v-else-if="vacunas=='false'" class="texto">
              
              <svg xmlns="http://www.w3.org/2000/svg" class="fa icon icon-tabler icon-tabler-vaccine" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M17 3l4 4"></path>
                <path d="M19 5l-4.5 4.5"></path>
                <path d="M11.5 6.5l6 6"></path>
                <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"></path>
                <path d="M7.5 12.5l1.5 1.5"></path>
                <path d="M10.5 9.5l1.5 1.5"></path>
                <path d="M3 21l3 -3"></path>
                <line x1="3" y1="3" x2="21" y2="21"></line>
              </svg>  
              Sin Vacuna
            </h2>
            
            <h2 v-else class="texto">
              Vacunas?
            </h2>
          </button>
        </li>

        <li class="boton opcion">
          
        </li>
      </ul>
    </div>

    <div class="overlay" id="overlay">
      <div class="popup" id="popup">
        
        <div class="borrar">
          <button 
            @click="salir" 
            id="btn-cerrar-popup" 
            class="boton_borrar">
            <i class="fa fa-times"></i>
          </button>
        </div>
        
        <h3 class="">
          Filtros
        </h3>  

        <div class="form" action="">
          
          <hr>

          <h4 class="texto al">
            <span class="fa fa-paw"></span>
            Tipo
          </h4>

          <div class="contenedor-inputs filtro_animal">
            
            <button class="" id="PCanino" @click="Tipo('Canino')">

              <img v-if="mascota[0]" class="animal imgmascota" src="../../assets/img/dog_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/dog_true.png">
              <span v-if="mascota[0]" > Canino </span>
              <span v-else style="color:red"> Canino </span>
            </button>
          
            <button class="" id="PFelino" @click="Tipo('Felino')">
            
              <img v-if="mascota[1]" class="animal imgmascota" src="../../assets/img/cat_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/car_true.png">
              <span v-if="mascota[1]" > Felino </span>
              <span v-else style="color:red"> Felino </span>
            </button>
          
            <button class="" id="PBovino" @click="Tipo('Bovino')">
            
              <img v-if="mascota[2]" class="animal imgmascota" src="../../assets/img/cow_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/cow_true.png">
              <span v-if="mascota[2]" > Bovino </span>
              <span v-else style="color:red"> Bovino </span>
            </button>
          
            <button class="" id="PPez" @click="Tipo('Pez')">
            
              <img v-if="mascota[3]" class="animal imgmascota" src="../../assets/img/fish_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/fish_true.png">
              <span v-if="mascota[3]" > Pez </span>
              <span v-else style="color:red"> Pez </span>
            </button>
          
            <button class="" id="PRoedor" @click="Tipo('Roedor')">
            
              <img v-if="mascota[4]" class="animal imgmascota" src="../../assets/img/hamster_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/hamster_true.png">
              <span v-if="mascota[4]" > Roedor </span>
              <span v-else style="color:red"> Roedor </span>
            </button>
          
            <button class="" id="PAve" @click="Tipo('Ave')">
            
              <img v-if="mascota[5]" class="animal imgmascota" src="../../assets/img/bird_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/bird_true.png">
              <span v-if="mascota[5]" > Ave </span>
              <span v-else style="color:red"> Ave </span>
            </button>
          
            <button class="" id="PEquino" @click="Tipo('Equino')">
            
              <img v-if="mascota[6]" class="animal imgmascota" src="../../assets/img/horse_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/horse_true.webp">
              <span v-if="mascota[6]" > Equino </span>
              <span v-else style="color:red"> Equino </span>
            </button>
          
            <button class="" id="POtro" @click="Tipo('Otro')">
            
              <img v-if="mascota[7]" class="animal imgmascota" src="../../assets/img/other_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/other_true.webp">
              <span v-if="mascota[7]" > Otro </span>
              <span v-else style="color:red"> Otro </span>
            </button>
          </div>

          <hr>

          <div class="contenedor-inputs esteril boto">
            <button class="fboton" @click="Esterilidad">
            
              <h2 v-if="esteril=='No'" class="texto">
                <span class="fa fa-minus-circle"></span>
                No Esteril
              </h2>

              <h2 v-else-if="esteril=='Si'" class="texto">
                <span class="fa fa-plus-circle"></span>
                Esteril
              </h2>
              
              <h2 v-else class="texto">
                <span class="fa fa-info-circle"></span>
                Es Esteril?
              </h2>
            </button>
          </div>
          
          <hr>

          <div class="contenedor-inputs esteril boto">
            <button class="fboton" @click="Sexo">
              
              <h2 v-if="sexo=='Macho'" class="texto">
                <span class="fa fa-mars"></span>
                Macho
              </h2>
    
              <h2 v-else-if="sexo=='Hembra'" class="texto">
                <span class="fa fa-venus icono"></span>
                Hembra
              </h2>
    
              <h2 v-else class="texto">
                <span class="fa fa-neuter"></span>
                Sexo
              </h2>
            </button>
          </div>

          <hr>

          <h4 class="texto al">
            <span class="fa fa-balance-scale"></span>
            Peso
          </h4>

          <div class="contenedor-inputs filtro_peso">
            
              <button class="" id="PChico" @click="Peso('Chico')">
                Chico
                <span>Menos de 5 Kg</span>
              </button>

              <button class="" id="PPequeño" @click="Peso('Pequeño')">
                Pequeño
                <span>6 a 14 Kg</span>
              </button>

              <button class="" id="PMediano" @click="Peso('Mediano')">
                Mediano
                <span>15 a 25 Kg</span>
              </button>

              <button class="" id="PGrande" @click="Peso('Grande')">
                Grande
                <span>26 a 50 Kg</span>
              </button>

              <button class="" id="PEnorme" @click="Peso('Enorme')">
                Enorme
                <span>Mayor a 50 Kg</span>
              </button>
          </div>
          
          <hr>

          <div class="contenedor-inputs esteril boto">
            <button class="fboton" @click="Vacunar">
              <h2 v-if="vacunas=='true'" class="texto">

                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 3l4 4"></path>
                  <path d="M19 5l-4.5 4.5"></path>
                  <path d="M11.5 6.5l6 6"></path>
                  <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"></path>
                  <path d="M7.5 12.5l1.5 1.5"></path>
                  <path d="M10.5 9.5l1.5 1.5"></path>
                  <path d="M3 21l3 -3"></path>
                </svg>  
                Vacunado
              </h2>

              <h2 v-else-if="vacunas=='false'" class="texto">
                
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-vaccine" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M17 3l4 4"></path>
                  <path d="M19 5l-4.5 4.5"></path>
                  <path d="M11.5 6.5l6 6"></path>
                  <path d="M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5"></path>
                  <path d="M7.5 12.5l1.5 1.5"></path>
                  <path d="M10.5 9.5l1.5 1.5"></path>
                  <path d="M3 21l3 -3"></path>
                  <line x1="3" y1="3" x2="21" y2="21"></line>
                </svg>  
                Sin Vacuna
              </h2>
              
              <h2 v-else class="texto">
                Vacunas?
              </h2>
            </button>
          </div>

          <hr>

          <div class="botones boton_filtrar filtrar">
            <button @click="limpiar(); salir()" type="button" class="btn  button_volver limpiar">
              <span class="fa fa-refresh"></span>
              Limpiar
            </button>

            <button @click="filtrar(); salir()" type="button" class="btn  button_volver filt">
              <span class="fa fa-filter"></span>
              Filtrar
            </button>
          </div>
          <!-- <input type="submit" class="btn-submit" value="Suscribirse"> -->
        </div>

        
      </div>
    </div>
    
    <div class="botones boton_filtrar filtrar">
      <button @click="limpiar" type="button" class="btn  button_volver limpiar">
        <span class="fa fa-refresh"></span>
        Limpiar
      </button>

      <button @click="filtrar" type="button" class="btn  button_volver filt">
        <span class="fa fa-filter"></span>
        Filtrar
      </button>
    </div>

    <div class="botones boton_filtrar fil">
      <button @click="filtro" type="button" class="btn  button_volver">
        <span class="fa fa-filter"></span>
        Filtrar
      </button>
    </div>

    <div class="row tres_mascotas">
      <div
        class="col-lg-4 col-md-6 col-sm-12 vista"
        v-for="mascota in Listamascota"
        :key="mascota.idPet"
      >
        <div class="card mb-4 box-shadow" :class="mascotas(mascota.id)">

          <img
            class="card-img-top imagen_catalogo"
            v-bind:src="mascota.links_foto"
            v-bind:alt="mascota.id"
          />

          <div class="card-body carta_mascota datos_mascota">
            <div class="col-9 titulo_masc">
              <h2 :class="nombre(mascota.nombre)">
                {{ tamanio(mascota.nombre) }}
                <span :class="completo(mascota.nombre.length)">
                  {{ adicion(mascota.nombre) }}
                </span>
              </h2>

              <p>{{ mascota.tipo }} - {{ mascota.edad }} años</p>
              <p>{{ mascota.raza }}</p>
            </div>

            <div class="col-3 icono">
              <img v-if="mascota.tipo=='Felino'" class="animal imgmascota" src="../../assets/img/cat_96px.png">
              <img v-else-if="mascota.tipo=='Canino'" class="animal imgmascota" src="../../assets/img/dog_96px.png">
              <img v-else-if="mascota.tipo=='Roedor'" class="animal imgmascota" src="../../assets/img/hamster_96px.png">
              <img v-else-if="mascota.tipo=='Pez'" class="animal imgmascota" src="../../assets/img/fish_96px.png">
              <img v-else-if="mascota.tipo=='Bovino'" class="animal imgmascota" src="../../assets/img/cow_96px.png">
              <img v-else-if="mascota.tipo=='Ave'" class="animal imgmascota" src="../../assets/img/bird_96px.png">
              <img v-else-if="mascota.tipo=='Equino'" class="animal imgmascota" src="../../assets/img/horse_96px.png">
              <img v-else class="animal imgmascota" src="../../assets/img/other_96px.png">
            </div>

          </div>

          <div class="cboton">
            <button
              class="btn btn-lg button_adopta"
              v-on:click="verInfo(mascota.idPet)"
            >
              Ver más
            </button>
          </div>
        </div>
      </div>
    </div>


    <div class = "no_mascotas" v-if="noResult">
      <img src="../../assets/img/dog_confused.png" >
      <h3 class="title_notfound">
        No se han encontrado resultados.
      </h3>
      <h4  class="subtitle_notfound">
        No hay mascotas con los filtros seleccionados.
      </h4>
    </div>



    <nav class="paginas">
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
          v-on:click="gotoPage(page)"
        >
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
import navbar from "@/components/navbar";
import axios from "axios";

import msgSuccess from "@/components/apliAdopcion/msgSuccessApli";

import pets from "../../data/pets.js";

import { useStore } from "vuex";
import { computed } from "vue";

var datos = "";
var valor = 1;
export default {
  setup() {
    //VueX config
    const store = useStore();
    //States
    const msgVisible = computed(() => store.state.addFormApl.msgVisible);
    const params = computed(() => store.state.filterPets.filter);
    //Functions
    function updateFilter(params) {
      store.dispatch("filterPets/updateFilter", params);
    }
    function deleteFilter(params) {
      store.dispatch("filterPets/deleteFilter");
    }

    return {
      params,
      updateFilter,
      deleteFilter,
      msgVisible,
    };
  },
  data() {
    return {
      Listamascota: null,
      pagina: null,
      size: 10,
      totalPages: 0,
      esteril: "",
      sexo: "",
      vacunas: "",
      mascota: [],
      peso: [],
      txtParam: "",
      noResult: false,
    };
  },
  components: {
    navbar,
    msgSuccess,
  },
  watch: {
    $route: {
      immediate: true,
      handler(newVal) {
        if (newVal.name != "Adopta") {
          this.deleteFilter();
        }
      },
    },
  },
  methods: {
    Esterilidad() {
      switch (this.esteril) {
        case "Si":
          this.esteril = "No";
          break;
        case "No":
          this.esteril = "";
          break;
        default:
          this.esteril = "Si";
          break;
      }
    },
    Sexo() {
      switch (this.sexo) {
        case "Hembra":
          this.sexo = "Macho";
          break;
        case "Macho":
          this.sexo = "";
          break;
        default:
          this.sexo = "Hembra";
          break;
      }
    },
    Vacunar() {
      switch (this.vacunas) {
        case "true":
          this.vacunas = "false";
          break;
        case "false":
          this.vacunas = "";
          break;
        default:
          this.vacunas = "true";
          break;
      }
    },
    Tipo(animal) {
      switch (animal) {
        case "Canino":
          if (this.mascota[0]) this.mascota[0] = false;
          else this.mascota[0] = true;
          break;
        case "Felino":
          if (this.mascota[1]) this.mascota[1] = false;
          else this.mascota[1] = true;
          break;
        case "Bovino":
          if (this.mascota[2]) this.mascota[2] = false;
          else this.mascota[2] = true;
          break;
        case "Pez":
          if (this.mascota[3]) this.mascota[3] = false;
          else this.mascota[3] = true;
          break;
        case "Roedor":
          if (this.mascota[4]) this.mascota[4] = false;
          else this.mascota[4] = true;
          break;
        case "Ave":
          if (this.mascota[5]) this.mascota[5] = false;
          else this.mascota[5] = true;
          break;
        case "Equino":
          if (this.mascota[6]) this.mascota[6] = false;
          else this.mascota[6] = true;
          break;
        case "Otro":
          if (this.mascota[7]) this.mascota[7] = false;
          else this.mascota[7] = true;
          break;
      }
    },
    Peso(tam) {
      var tip = document.getElementById(`${tam}`);
      if (tip.className == "") tip.classList.add("rojo");
      else tip.classList.remove("rojo");

      tip = document.getElementById(`P${tam}`);
      if (tip.className == "") tip.classList.add("rojo");
      else tip.classList.remove("rojo");
      switch (tam) {
        case "Chico":
          if (this.peso[0]) this.peso[0] = false;
          else this.peso[0] = true;
          break;
        case "Pequeño":
          if (this.peso[1]) this.peso[1] = false;
          else this.peso[1] = true;
          break;
        case "Mediano":
          if (this.peso[2]) this.peso[2] = false;
          else this.peso[2] = true;
          break;
        case "Grande":
          if (this.peso[3]) this.peso[3] = false;
          else this.peso[3] = true;
          break;
        case "Enorme":
          if (this.peso[4]) this.peso[4] = false;
          else this.peso[4] = true;
          break;
      }
    },
    verInfo(idPet) {
      this.$router.push("/info-mascota/" + idPet);
    },
    gotoPage(idPage) {
      this.$router.push("/adopta/" + idPage);
    },
    gobackPage() {
      if (this.pagina == 1) {
        return;
      }
      valor = 1;
      this.pagina = this.pagina - 1;
      this.$router.push("/adopta/" + this.pagina);
    },
    gonextPage() {
      if (this.pagina == this.totalPages) {
        return;
      }
      valor = 1;
      this.pagina = this.pagina - -1;
      this.$router.push("/adopta/" + this.pagina);
    },
    mascotas(i) {
      if (valor % 2 == 0) {
        valor++;
        return {
          izquierda: true,
        };
      } else {
        valor++;
        return {
          derecha: true,
        };
      }
    },
    nombre(name) {
      if (name.length > 9) {
        return "max-9 name";
      } else {
        return "min-9 name";
      }
    },
    tamanio(nombre) {
      if (nombre.length < 18) {
        return nombre;
      } else {
        datos = nombre.split(" ");
        return `${datos[0]} ${datos[1]}`;
      }
    },
    completo(e) {
      if (e >= 18) {
        return "mirar";
      }
    },
    adicion(nombre) {
      if (nombre.length > 18) {
        let aux = "";
        for (var i = 2; i < datos.length; i++) {
          aux = aux + " " + datos[i];
        }
        return aux;
      }
    },
    filtro() {
      var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
        overlay = document.getElementById("overlay"),
        popup = document.getElementById("popup"),
        tex = document.getElementById("scrollbar"),
        btnCerrarPopup = document.getElementById("btn-cerrar-popup");

      overlay.classList.add("active");
      popup.classList.add("active");
      tex.classList.add("bloquear");
    },
    salir() {
      var btnAbrirPopup = document.getElementById("btn-abrir-popup"),
        overlay = document.getElementById("overlay"),
        popup = document.getElementById("popup"),
        tex = document.getElementById("scrollbar"),
        btnCerrarPopup = document.getElementById("btn-cerrar-popup");
      tex.classList.remove("bloquear");
      overlay.classList.remove("active");
      popup.classList.remove("active");
    },
    tranformToParam() {
      // Tratamiento de las entradas
      valor = 1;
      let tiposP = "";
      let esterilP = "";
      let sexoP = "";
      let tamanoP = "";
      let vacunasP = "";
      let a = 0;
      var tipos = [];
      var tamano = [];
      if (!this.mascota[0]) tipos[a++] = "Canino";
      if (!this.mascota[1]) tipos[a++] = "Felino";
      if (!this.mascota[2]) tipos[a++] = "Bovino";
      if (!this.mascota[3]) tipos[a++] = "Pez";
      if (!this.mascota[4]) tipos[a++] = "Roedor";
      if (!this.mascota[5]) tipos[a++] = "Ave";
      if (!this.mascota[6]) tipos[a++] = "Equino";
      if (!this.mascota[7]) tipos[a++] = "Otro";
      a = 0;
      if (!this.peso[0]) tamano[a++] = "Chico (menos de 5 Kg)";
      if (!this.peso[1]) tamano[a++] = "Pequeño (de 6 a 14 Kg)";
      if (!this.peso[2]) tamano[a++] = "Mediano (de 15 a 25 Kg)";
      if (!this.peso[3]) tamano[a++] = "Grande (de 26 a 50 kg)";
      if (!this.peso[4]) tamano[a++] = "Enorme (mayor a 50 kg)";

      if (!tipos.length == 0) {
        tiposP = "&tipo=" + tipos.toString();
      }
      if (!this.esteril == "") {
        esterilP = "&esteril=" + this.esteril;
      }
      if (!this.sexo == "") {
        sexoP = "&sexo=" + this.sexo;
      }
      if (!tamano.length == 0) {
        tamanoP = "&tamano=" + tamano.toString();
      }
      if (!this.vacunas == "") {
        vacunasP = "&vacunada=" + this.vacunas;
      }
      this.txtParam = tiposP + esterilP + sexoP + tamanoP + vacunasP;
    },
    filtrar: function () {
      this.noResult = false;
      this.tranformToParam();
      this.pagina = this.$route.params.idPage;
      /*
      axios
        .get(
          "https://unpetlife.herokuapp.com/api/pet/consultaFil?page=" +
            (this.pagina - 1) +
            "&size=" +
            this.size + this.txtParam
        )
        .then((data) => {
          //Verifica no desborde en paginacion
          if(data.data.totalElements > 0){
            let maxPage = data.data.totalPages;
            if(this.pagina > maxPage){
                this.gotoPage(maxPage)
            }

            let filter = {
                sexo : this.sexo,
                vacunas : this.vacunas,
                esteril : this.esteril,
                mascota : this.mascota,
                peso : this.peso,
            };
            this.updateFilter(filter)

            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
          }else{
            this.noResult = true;
            this.gotoPage(1)
            this.Listamascota = data.data.content;
            this.totalPages = data.data.totalPages;
          }
          

      });
      */
    },
    limpiar: function () {
      this.noResult = false;
      this.deleteFilter();
      this.$router.push("/adopta/" + 1);
      this.sexo = this.params.sexo;
      this.vacunas = this.params.vacunas;
      this.esteril = this.params.esteril;
      this.mascota = this.params.mascota;
      this.peso = this.params.peso;
      this.tranformToParam();

      while (document.querySelector(".rojo") != null) {
        document.querySelector(".rojo").classList.remove("rojo");
      }
      /*
      axios
        .get(
          "https://unpetlife.herokuapp.com/api/pet/consultaFil?page=0" +
            "&size=" +
            this.size +
            this.txtParam
        )
        .then((data) => {
          this.Listamascota = data.data.content;
          this.totalPages = data.data.totalPages;
        });
        */
    },
  },
  mounted: function () {
    //Load values of variables
    this.pagina = this.$route.params.idPage;
    //Load using vueX
    this.sexo = this.params.sexo;
    this.vacunas = this.params.vacunas;
    this.esteril = this.params.esteril;
    this.mascota = this.params.mascota;
    this.peso = this.params.peso;
    this.Listamascota = pets;

    this.filtrar();
  },
};
</script>
<style >
.filtroP {
  margin: 5px;
  padding: 3%;
  align-content: center;
  border-right: solid 1px rgb(33, 34, 51);
  text-align: center;
}
.colFil {
  border-bottom: solid 1px rgb(25, 27, 53);
  padding: 2%;
}
.filBtn {
  margin-top: 5%;
  margin-left: 5%;
  margin-right: 5%;
  margin-bottom: 5%;
}
</style>