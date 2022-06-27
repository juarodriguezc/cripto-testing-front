<template>
    <div class="container" >
        <div class="row">
            <div class="col-12 col-md-10  offset-sm-1">
                <div id="format" class="mt-5">
                    <form class="form-inline"  v-on:submit.prevent="onSubmit" style=" margin-bottom: 2rem;" >
                        <h2 class=" col-12 text-center mt-3 mb-5 title_solicitud">
                            Formulario de solicitud de Adopción
                        </h2>
                        <p style="text-align:center; font-size:20px; color:rgb(40,40,40);">Los campos marcados con astericos (*) son obligatorios</p>
                        <br>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="name">Nombre Completo * </label>
                            <div class="col-sm-7">
                                <input type="text" id="name" class="form-control " placeholder="Escriba su nombre completo" v-model="name" required>
                            </div>
                            <span v-if="msg.name"  class=" info" >{{msg.name}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="email">Email * </label>
                            <div class="col-sm-7">
                                <input type="email" id="email" class="form-control " placeholder="Escriba su email" v-model="email" required>
                            </div>
                            <span v-if="msg.email"  class="info" >{{msg.email}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="telNumber">Teléfono Fijo</label>
                            <div class="col-sm-7">
                                <input type="number" id="telNumber" class="form-control " placeholder="Si tiene teléfono fijo, escríbalo" v-model="telNumber">
                            </div>
                            <span v-if="msg.telNumber"  class="info" >{{msg.telNumber}}</span>
                        </div>
                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="movilNumber">Teléfono Móvil * </label>
                            <div class="col-sm-7">
                                <input type="number" id="movilNumber" class="form-control " placeholder="Escriba su número de teléfono celular" v-model="movilNumber" required>
                            </div>
                            <span v-if="msg.movilNumber"  class="info" >{{msg.movilNumber}}</span>
                        </div>



                        <div class="form-group col-12 row">
                            <label for="department" class="col-sm-4 control-label offset-sm-1 label_info"> Departamento * </label>
                            <div class="col-sm-7 ">
                                <select class="form-select g-0" style = "width:100%" id="department" v-model="department" required>
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option v-for="municipio in municipios" :key="municipio.id" >{{municipio.id}} - {{municipio.departamento}}</option>
                                </select>
                            </div>
                            <span v-if="msg.department"  class="info" >{{msg.department}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label for="city" class="col-sm-4 control-label offset-sm-1 label_info"> Ciudad * </label>
                            <div class="col-sm-7 ">
                                <select class="form-select g-0" style = "width:100%" id="city" v-model="city" required>
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option v-if="ciudades.length == 0" ></option>
                                    <option v-for="ciudad in ciudades" :key="ciudad" >{{ciudad}}</option>
                                </select>
                            </div>
                            <span v-if="msg.city"  class="offset-md-3 info" >{{msg.city}}</span>
                        </div>



                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="address">Dirección * </label>
                            <div class="col-sm-7">
                                <input type="text" id="address" class="form-control " placeholder="Escriba su dirección de residencia." v-model="address" required>
                            </div>
                            <span v-if="msg.address"  class=" info" >{{msg.address}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="age">Edad * </label>
                            <div class="col-sm-7">
                                <input type="number" id="age" class="form-control " placeholder="Edad del aplicante" v-model="age" required>
                            </div>
                            <span v-if="msg.age"  class="info" >{{msg.age}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="age">Ocupación </label>
                            <div class="col-sm-7">
                                <input type="text" id="occupation" class="form-control " placeholder="Escriba su ocupación actual" v-model="occupation">
                            </div>
                            <span v-if="msg.occupation"  class="info" >{{msg.occupation}}</span>
                        </div>


                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="familyMembers">Miembros familiares * </label>
                            <div class="col-sm-7">
                                <input type="number" id="familyMembers" class="form-control " placeholder="¿Cuántos miembros viven en su familia?" v-model="familyMembers" required>
                            </div>
                            <span v-if="msg.familyMembers"  class=" info" >{{msg.familyMembers}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="averageAge">Edad promedio</label>
                            <div class="col-sm-7">
                                <input type="number" id="averageAge" class="form-control " placeholder="Promedio de edad de la familia" v-model="averageAge">
                            </div>
                            <span v-if="msg.averageAge"  class="info" >{{msg.averageAge}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="whoAutho">¿Quién autoriza la adopción? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="whoAutho" class="form-control " placeholder="¿Qué miembro de la familia autoriza la adopción?" v-model="whoAutho" required>
                            </div>
                            <span v-if="msg.whoAutho"  class="info" >{{msg.whoAutho}}</span>
                        </div>

                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Esta la familia de acuerdo? * </div>
                                <div class="col-sm-7">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="familyAgreement"
                                            id="familyAgreementYes"
                                            v-model="familyAgreement"
                                            value="true"
                                            required
                                        />
                                        Sí
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="familyAgreement"
                                                id="familyAgreementNo"
                                                v-model="familyAgreement"
                                                value="false"
                                            />
                                        No
                                        </label>
                                    </div>
                                </div>   
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="reason"> ¿Por qué desea adoptar? * </label>
                            <div class="col-sm-7">
                                <textarea id="reason" class="form-control " placeholder="Relate en pocas lineas el porque desea adoptar esta mascota" v-model="reason" rows="6" required />
                            </div>
                            <span v-if="msg.reason"  class="info" >{{msg.reason}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="restingPlace"> ¿Dónde dormirá la mascota? * </label>
                            <div class="col-sm-7">
                                <textarea type="text" id="restingPlace" class="form-control " placeholder="¿Tiene una casa adecuada para la mascota? &#10;¿Dónde dormira?" rows="2" v-model="restingPlace" required/>
                            </div>
                            <span v-if="msg.restingPlace"  class="info" >{{msg.restingPlace}}</span>
                        </div>

                        <div class="form-group col-12 row">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="careOption"> ¿Quién lo cuidará? * </label>
                            <div class="col-sm-7">
                                <input type="text" id="careOption" class="form-control " placeholder="¿Quién cuidará la mascota cuando usted no pueda?" v-model="careOption" required>
                            </div>
                            <span v-if="msg.careOption"  class="info" >{{msg.careOption}}</span>
                        </div>
                        <br>
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Hay miembros alergicos en la familia?* </div>
                                <div class="col-sm-7">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="radio"
                                            name="allergies"
                                            id="allergiesYes"
                                            v-model="allergies"
                                            value="true"
                                            required
                                        />
                                        Sí
                                        </label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                            <input
                                                class="form-check-input"
                                                type="radio"
                                                name="allergies"
                                                id="allergiesNo"
                                                v-model="allergies"
                                                value="false"
                                            />
                                            No
                                        </label>
                                    </div>
                                </div>   
                        </div>
                        <br> 
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Ha tenido mascotas?  </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="animalExperience"
                                            id="animalExperienceYes"
                                            v-model="animalExperience"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                            </div> 
                        <br> 
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceType"> ¿Qué tipos de mascota? </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceType" class="form-control " placeholder="Escriba qué tipos de mascota ha tenido" v-model="experienceType">
                            </div>
                            <span v-if="msg.experienceType"  class="info" >{{msg.experienceType}}</span>
                        </div> 
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceLife"> ¿Cuánto tiempo? </label>
                            <div class="col-sm-7">
                                <input type="number" id="experienceLife" class="form-control " placeholder="Durante cuántos años tuvo esa mascota" v-model="experienceLife">
                            </div>
                            <span v-if="msg.experienceLife"  class="info" >{{msg.experienceLife}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceNow"> Estado actual de mascota </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceNow" class="form-control " placeholder="Describa el estado actual de esa(s) mascota(s)" v-model="experienceNow">
                            </div>
                            <span v-if="msg.experienceNow"  class="info" >{{msg.experienceNow}}</span>
                        </div>
                        <div class="form-group col-12 row" v-if="animalExperience">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="experienceReason"> ¿Por qué? </label>
                            <div class="col-sm-7">
                                <input type="text" id="experienceReason" class="form-control " placeholder="Causa del actual estado de las mascotas" v-model="experienceReason">
                            </div>
                            <span v-if="msg.experienceReason"  class="info" >{{msg.experienceReason}}</span>
                        </div> 
                        <br>
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Está dispuesto a pasar un periodo de ajuste en el que la mascota aprenda a ir al baño, se adapte a los miembros de la familia y la nueva casa? </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="adjustmentPeriod"
                                            id="adjustmentPeriodYes"
                                            v-model="adjustmentPeriod"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                        </div>
                        <br>
                        <div class="form-group col-12 row" v-if="adjustmentPeriod">
                            <label class="control-label col-sm-4 offset-sm-1 label_info" for="adjustmentPeriodTime"> ¿Cuánto tiempo? </label>
                            <div class="col-sm-7">
                                <input type="text" id="adjustmentPeriodTime" class="form-control " placeholder="¿Cuánto tiempo estaria dispuesto?" v-model="adjustmentPeriodTime">
                            </div>
                            <span v-if="msg.adjustmentPeriodTime"  class="info" >{{msg.adjustmentPeriodTime}}</span>
                        </div> 
                        <br>
                        <div class="row">
                            <div class="col-4 offset-sm-1 label_info"> ¿Está dispuesto a que se realice seguimento para verificar el estado del animal? </div>
                                <div class="col-sm-7 ">
                                    <div class="form-check form-check-inline">
                                        <label class="form-check-label">
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            name="followingAgreement"
                                            id="followingAgreementYes"
                                            v-model="followingAgreement"
                                            value="true"
                                        />
                                        Sí
                                        </label>
                                    </div>
                                </div>   
                        </div> 


                        <div class="form-group row">
                            <label for="communication" class="col-sm-4 control-label offset-sm-1 label_info">
                                ¿Por cuál medio de comunicación prefiere ser contactado? * </label>
                            <div class="col-sm-7">
                                <select class="form-select g-0" style = "width:100%" required id="communication" v-model="communication">
                                    <option selected disabled hidden value="">Seleccione una opción </option>
                                    <option value="Teléfono Fijo">Teléfono Fijo</option>
                                    <option value="Teléfono celular">Teléfono Celular</option>
                                    <option value="Email">Email</option>
                                </select>
                            </div>
                            <span v-if="msg.communication"  class="info" >{{msg.communication}}</span>
                        </div>




                        <div class="form-group row justify-content-center botones_aplsol">
                            <button class="boton_enviar col-md-5  " type="submit" :disabled="isDisable" > Enviar Formulario </button>
                            <button class="boton_cancelar col-md-5 offset-sm-1" type="button" @click="cancelar" > Cancelar </button>  
                        </div>      

                    </form>

                    <div class=" container container_completo_sol " v-if="alerta">
                        
                        <div class="row justify-content-center msg_error_addsol">
                            <div class="col-2 content_error" >
                                <img class= "error_ico" src="../../assets/img/delete_512px.png">
                            </div>
                            <div class="col-10 content_error">
                                <p class = "no_solicitud">No se ha podido enviar la solicitud.</p>
                                <p class = "error_solicitud">Error: {{error}} </p>
                            </div>
                        </div>
                        
                    </div>


                    <div id="snackbar_addSol">
                        <div class = "row g-0">
                            <div class = "col-2">
                                <div class="loader">  </div> 
                            </div>
                            <div class = "col-auto">
                                <p class = "text_sending">Enviando solicitud</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    
</template>

<script>


import axios from "axios";
import municipios from '@/assets/json/municipios.json'
//VueX
import { useStore } from 'vuex'

export default {
    name: "applicationForm",
    props:{
        idPet:{
            Type: Number,
            required: true
        },
    },
    setup(props){
        //VueX config
        const store = useStore()
        //FUnctions
        function enviarSolicitud(soli){
            store.dispatch("addFormApl/sendSol",{soli});
        }
        return{
            enviarSolicitud,
        }
    },
    data(){
        return{
            name: "",
            email: "",
            telNumber: "",
            movilNumber: "",
            city: "",
            department: "",
            address: "",
            age: "",
            occupation: "",
            familyMembers: "",
            averageAge: "",
            whoAutho: "",
            familyAgreement: null,
            reason: "",
            restingPlace: "",
            careOption:"",
            allergies:null,
            animalExperience: false,
            experienceType: "",
            experienceLife:"",
            experienceNow:"",
            experienceReason: "",
            adjustmentPeriod :false,
            adjustmentPeriodTime: "",
            followingAgreement: false,
            communication: "",
            msg: [],
            isDisable: false,
            alerta: false,
            municipios:[],
            ciudades:[],
            error:"Error de conexión",
        }
    },
    watch:{
        name(value){
            this.name = value;
            this.nameVal(value);
            this.allValidation();
        },
        email(value){
            this.email = value;
            this.emailVal(value);
            this.allValidation();
        },
        telNumber(value){
            this.telNumber = value;
            this.telNumberVal(value);
            this.allValidation();
        },
        movilNumber(value){
            this.movilNumber = value;
            this.movilNumberVal(value);
            this.allValidation();
        },
        city(value){
            this.city = value;
            this.cityVal(value);
            this.allValidation();
        },
        department(value){
            var modValue = value.split("-");
            var index = parseInt(modValue[0]);
            this.ciudades = this.municipios[index].ciudades;
            this.department = value;
            this.departmentVal(modValue[1]);
            this.allValidation();
        },
        address(value){
            this.address = value;
            this.addressVal(value);
            this.allValidation();
        },
        age(value){
            this.age = value;
            this.ageVal(value);
            this.allValidation();
        },
        occupation(value){
            this.occupation = value;
            this.occupationVal(value);
            this.allValidation();
        },
        familyMembers(value){
            this.familyMembers = value;
            this.familyMembersVal(value);
            this.allValidation();
        },
        averageAge(value){
            this.averageAge = value;
            this.averageAgeVal(value);
            this.allValidation();
        },
        whoAutho(value){
            this.whoAutho = value;
            this.whoAuthoVal(value);
            this.allValidation();
        },
        reason(value){
            this.reason = value;
            this.reasonVal(value);
            this.allValidation();
        },
        restingPlace(value){
            this.restingPlace = value;
            this.restingPlaceVal(value);
            this.allValidation();
        },
        careOption(value){
            this.careOption = value;
            this.careOptionVal(value);
            this.allValidation();
        },
        experienceType(value){
            this.experienceType = value;
            this.experienceTypeVal(value);
            this.allValidation();
        },
        experienceLife(value){
            this.experienceLife = value;
            this.experienceLifeVal(value);
            this.allValidation();
        },
        experienceNow(value){
            this.experienceNow = value;
            this.experienceNowVal(value);
            this.allValidation();
        },
        experienceReason(value){
            this.experienceReason = value;
            this.experienceReasonVal(value);
            this.allValidation();
        },
        communication(value){
            this.communication = value;
            this.communicationVal(value);
            this.allValidation();
        },
        adjustmentPeriodTime(value){
            this.adjustmentPeriodTime = value;
            this.adjustmentPeriodTimeVal(value);
            this.allValidation();
        },
    },
    methods:{
        showSnackBar(){
            this.isDisable = true;
            var x = document.getElementById("snackbar_addSol");
            x.className = "show";
            setTimeout(function(){ x.className = x.className.replace("show", ""); }, 10500);
        },
        sendForm(){
            if(!(this.animalExperience)){
                this.experienceType = "";
                this.experienceLife = "";
                this.experienceNow = "";
                this.experienceReason = "";
            }
            if(!(this.adjustmentPeriod)){
                this.adjustmentPeriodTime= "";
            }
            this.showSnackBar();
            var date = new Date().toISOString("en-US", {timeZone: "America/Bogota"})
            var modDepartment = ((this.department.split("-"))[1]).trim();

            let json = {
                "name": this.name.trim(),
                "email": this.email,
                "telNumber": this.telNumber,
                "movilNumber": this.movilNumber,
                "city": this.city,
                "department": modDepartment,
                "address": this.address.trim(),
                "age": this.age,
                "occupation": this.occupation.trim(),
                "familyMembers" : this.familyMembers,
                "averageAge": this.averageAge,
                "whoAutho": this.whoAutho.trim(),
                "familyAgreement": this.familyAgreement,
                "reason": this.reason.trim(),
                "restingPlace" : this.restingPlace.trim(),
                "careOption": this.careOption,
                "allergies": this.allergies,
                "animalExperience" : this.animalExperience,
                "experienceType" : this.experienceType.trim(),
                "experienceLife": this.experienceLife,
                "experienceNow":this.experienceNow,
                "experienceReason": this.experienceReason.trim(),
                "adjustmentPeriod" :this.adjustmentPeriod,
                "adjustmentPeriodTime": this.adjustmentPeriodTime.trim(),
                "followingAgreement": this.followingAgreement,
                "communication": this.communication,
                "date":date,
                "pet_id": this.idPet
            }
            

            /* SERVICE UPDATE*/
            axios({
					//url: "http://localhost:8080/api/apply/form/"+this.idPet,
					url: "https://unpetlife.herokuapp.com/api/apply/form/"+this.idPet,
					data: json,
					method: "POST",
				})
            .then((data) => {
                this.isDisable = false;
                if (data.status == 200) {
                    let soli = {
                        telPhone:this.telNumber,
                        telCell:this.movilNumber,
                        email:this.email,
                    }
                    this.enviarSolicitud(soli)
                    this.$router.push('/adopta/1');
                    
                }
            }).catch((error) => {
                this.isDisable = false;
                this.alerta = true;
                var msg_back = error.response.data.message;
                this.error = msg_back;
            });

        },
        onSubmit(){
            this.sendForm();
        },
        cancelar(){
            this.$router.push('/adopta/1');
        },
        nameVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.áéíóúÁÉÍÓÚÜü]*$/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) && nonSpace.length > 3 && nonSpace.length < 151) || value.length === 0 ){
                this.msg['name'] = ''
            }else if(nonSpace.length <= 3 || nonSpace.length>=151){
                this.msg['name'] = 'Verifique el nombre ingresado.';
            }else{
                this.msg['name'] = 'Verifique el nombre ingresado, no debe contener números o caracteres especiales.';
            }
        },
        emailVal(value){
            let regex = /\S+@\S+\.(\S+){2,3}/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) &&  nonSpace.length > 5 && nonSpace.length < 51) || nonSpace.length === 0){
                this.msg['email'] = '';
            }else{
                this.msg['email'] = 'Verifique el email ingresado.';
            }
        },
        telNumberVal(value){
            if((value > 0 &&  value.length > 6 && value.length < 10) ){
                this.msg['telNumber'] = '';
                this.msg['communication'] = '';
            }else if(value.length === 0 ){
                this.msg['telNumber'] = '';
                if(this.communication == "Teléfono Fijo"){
                    this.msg['communication'] = 'Verifique el teléfono fijo ingresado.';
                }else{
                    this.msg['communication'] = '';
                }
            }else{
                this.msg['telNumber'] = 'Verifique el número de teléfono.';
                if(this.communication == "Teléfono Fijo"){
                    this.msg['communication'] = 'Verifique el teléfono fijo ingresado.';
                }
            }
        },
        movilNumberVal(value){
            if(( value > 0 &&  value.length > 8 && value.length < 11) || value.length === 0){
                this.msg['movilNumber'] = '';
            }else{
                this.msg['movilNumber'] = 'Verifique el número de teléfono móvil.';
            }
        },
        cityVal(value){
            if((value.length > 0)){
                this.msg['city'] = '';
            }else{
                this.msg['city'] = 'Ingrese una ciudad.';
            }
        },
        departmentVal(value){
            if((value.length >0)){
                this.msg['department'] = '';
            }else{
                this.msg['department'] = 'Ingrese un departamento.';
            }
        },
        addressVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 61) || value.length === 0){
                this.msg['address'] = '';
            }else{
                this.msg['address'] = 'Verifique la dirección ingresada.';
            }
        },
        ageVal(value){
            if((value > 14 && value < 120) || value.length === 0 ){
                this.msg['age'] = '';
            }else if (value < 14) {
                this.msg['age'] = 'Debe ser mayor de 14 años para aplicar.';
            }else if(value > 120){
                this.msg['age'] = 'Parece un número un poco alto ¿seguro que está vivo?';
            }else{
                this.msg['age'] = 'Edad no valida.';
            }
        },
        occupationVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 3 && nonSpace.length < 31) || value.length == 0 ){
                this.msg['occupation'] = '';
            }else{
                this.msg['occupation'] = 'Verifique la ocupación ingresada.';
            }
        },
        familyMembersVal(value){
            if(value < 0 ){
                this.msg['familyMembers'] = 'Verifique la cantidad de miembros ingresados.';
            }else{
                this.msg['familyMembers'] = '';
            }
        },
        averageAgeVal(value){
            if((value < 0 || value > 95) || !value.length === 0 ){
                this.msg['averageAge'] = 'Verifique el promedio ingresado.';
            }else{
                this.msg['averageAge'] = '';
            }
        },
        whoAuthoVal(value){
            let regex = /^(?![\s.]+$)[a-zA-Z\s.áéíóú]*$/;
            let nonSpace = value.replace(/\s/g, '');
            if((regex.test(value) && nonSpace.length > 1 && nonSpace.length < 31) || value.length === 0 ){
                this.msg['whoAutho'] = '';
            }else{
                this.msg['whoAutho'] = 'Verifique la información suministrada.';
            }
        },
        reasonVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 10 && nonSpace.length < 601) || value.length === 0 ){
                this.msg['reason'] = '';
            }else{
                this.msg['reason'] = 'Suministrar información es necesario, ingrese una razón más extensa (max 600 caracteres).';
            }
        },
        restingPlaceVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 101) || value.length === 0 ){
                this.msg['restingPlace'] = '';
            }else{
                this.msg['restingPlace'] = 'Es necesario que el animal descanse en algún lado, revise la información.';
            }
        },
        careOptionVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 5 && nonSpace.length < 101 ) || value.length === 0){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Verifique la información ingresada.';
            }
        },
        experienceTypeVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 2 && nonSpace.length < 51) || value.length === 0 ){
                this.msg['careOption'] = '';
            }else{
                this.msg['careOption'] = 'Indique qué tipo de mascotas ha tenido (max 50 caracteres).';
            }
        },
        experienceLifeVal(value){
            if((value > -1 && value < 100) || value.length === 0 ){
                this.msg['experienceLife'] = '';
            }else if(value < 0){
                this.msg['careOption'] = 'Un mascota no puede vivir menos de 0 años.';
            }else if(value > 100){
                this.msg['careOption'] = '¿Está seguro que la mascota vivió tanto? Verifique los datos ingresados.';
            }else{
                this.msg['careOption'] = 'Verifique el dato ingresado.';
            }
        },
        experienceNowVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 4 && nonSpace.length < 91) || value.length === 0 ){
                this.msg['experienceNow'] = '';
            }else{
                this.msg['experienceNow'] = 'Verifique el estado ingresado, no puede ser muy extenso.';
            }
        },
        experienceReasonVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 4 && nonSpace.length < 51) || value.length === 0 ){
                this.msg['experienceReason'] = '';
            }else{
                this.msg['experienceReason'] = 'Verifique el motivo del actual estado de la mascota (max 50).';
            }
        },
        adjustmentPeriodTimeVal(value){
            let nonSpace = value.replace(/\s/g, '');
            if((nonSpace.length > 3 && nonSpace.length < 50) || value.length === 0 ){
                this.msg['adjustmentPeriodTime'] = '';
            }else{
                this.msg['adjustmentPeriodTime'] = 'Describa cuánto tiempo en dias, años o meses.';
            }
        },
        communicationVal(value){
            if(value == "Teléfono Fijo"){
                if(this.telNumber.length > 6 ){
                    this.msg['communication'] = '';
                }else{
                    this.msg['communication'] = 'Verifique el teléfono fijo ingresado.';
                }
            }else{
                this.msg['communication'] = '';
            }
        },
        allValidation(){
            let res = true;
            for(var mens in this.msg){
                if(Object.prototype.hasOwnProperty.call(this.msg,mens)){
                    if(this.msg[mens] !== ""){
                        res = false;
                    }
                }
            }
            this.isDisable = !res;
        }  
    },
    mounted:function(){
        this.municipios = municipios
    },
}
</script>
<style scoped>
.form-control, .form-select, .btn{
    font-size: 16px;
    color: #686868;
}
label{
    margin-top: 3px;
}
.label_info{
    font-size: 18px;
    padding-right: 50px;
}
.form-group {
    margin-block: 15px;
    color:black;
    font-weight: 400;
    
    
}
.form-check-inline{
    margin-right: 40px;
}
.info{
    font-size: 16px;
    font-style: oblique;
    font-weight: 300;
    color: rgb(207, 0, 0);
    text-align: center;
}
/*Container alerta */
.container_completo_sol{
    width:100%;
    display: flex;
    justify-content: center;
}

.msg_error_addsol{
    width:400px;
    border-style: solid;
	border-color: rgb(109, 109, 109);
    background: rgb(112, 112, 112);
	color: rgb(233, 233, 233);
    text-align: center;
    border-radius: 20px;
    padding: 16px;
    font-size: 17px;
}
.msg_error_addsol p{
    color: rgb(233, 233, 233);
}
.error_ico{
    width:80px;
}
.no_solicitud{
    font-size: 17px;
    font-weight: 500;
}
.error_solicitud{
    font-size: 11px;
    text-align: left;
	padding-left: 10px;
}
/* */
#format{
    display: grid;
    background-color: white;
    max-width: 200rem;
    grid-gap: 2rem;
    grid-template-columns: repeat(1, 1fr);
    padding: 3rem;
    border: #AEAEAE 5px solid;
    border-radius: 5rem;
    margin-bottom: 5rem;
    -webkit-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
    -moz-box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
    box-shadow: 28px 24px 45px -2px rgba(0, 0, 0, 0.7);
}
/*Title soliciutd */
.title_solicitud{
    color: #6FABF9;
    font-family: "Merienda", cursive;
    font-weight: 600;
    margin: .5rem 0 0.5rem;
}


/*Botones  solicitud*/
.botones_aplsol{
    display: block;
    margin: 1rem;
    font-size: 1.8rem;
    color: #000000;
    font-family: "Merienda", cursive;
    font-weight: 600;
    padding-left: 10rem;
}


.botones_aplsol .boton_enviar {
    padding: 1.4rem 2rem 1.4rem 2rem;
    border-radius: 5rem;
    border-color: #6FABF9;
    border-width: thin;
    color: black;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#99d9f7+0,aadeff+100 */
    background: #99d9f7;
}

.botones_aplsol .boton_enviar:hover {
    color: white;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#64b8ff+0,54c8e5+46,64b8ff+100 */
    background: #64b8ff;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    border: 5px solid #B6B6B6;
}

.botones_aplsol .boton_cancelar {
    padding: 1.4rem 2rem 1.4rem 2rem;
    border-radius: 5rem;
    border-color: #ff2323;
    border-width: thin;
    color: black;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#99d9f7+0,aadeff+100 */
    background: #ff2323;;
}

.botones_aplsol .boton_cancelar:hover {
    color: white;
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#64b8ff+0,54c8e5+46,64b8ff+100 */
    background: red;
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    border: 5px solid #B6B6B6;
}

/*Snackbar */
#snackbar_addSol {
    visibility: hidden;
    width: 300px;
    margin-left: -125px;
    background-color: #fff;
    border-style: solid;
    border-color: rgb(77, 77, 77);
    color: #333;
    text-align: center;
    border-radius: 20px;
    padding: 16px;
    position: fixed;
    z-index: 1;
    left: 50%;
    bottom: 30px;
    font-size: 17px;
    
}

#snackbar_addSol.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 10s;
    animation: fadein 0.5s, fadeout 0.5s 10s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

.text_sending{
    margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding-left: 30px;
}

/**Loader */
.loader {
    border: 7px solid #d4d4d4;
    animation: spin 1s linear infinite;
    border-top: 7px solid #6FABF9;
    border-radius: 50%;
    width: 50px;
    height: 50px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>