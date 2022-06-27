export default ({
    namespaced: true,
    state: {
        msgVisible:false,
        contactSol:{},
        petName:"",
    },
    mutations: {
        SEND_SOL(state, soli){
            state.msgVisible = true;
            state.contactSol = soli;
        },
        CHANGE_PET_NAME(state, petName){
            state.petName = petName;
        },
        EXIT_SOL(state){
            state.contactSol = {};
            state.msgVisible = false;
            state.petName = "";
        },
    },
    actions: {
        sendSol({ commit },{soli}){
            commit("SEND_SOL",soli);
        },
        changePetName({ commit },petName){
            commit("CHANGE_PET_NAME",petName);
        },
        exitSol({ commit }){
            commit("EXIT_SOL");
        },
    },
});