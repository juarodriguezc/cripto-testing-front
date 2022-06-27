export default ({
    namespaced: true,
    state: {
        filter:{
            sexo : "",
            vacunas : "",
            esteril : "",
            mascota : [true,true,true,true,true,true,true,true],
            peso : [true,true,true,true,true],
        },
    },
    mutations: {
        UPDATE_FILTER(state,filter){
            state.filter = filter
        },
        DELETE_FILTER(state){
            let filter = {
                sexo : "",
                vacunas : "",
                esteril : "",
                mascota : [true,true,true,true,true,true,true,true],
                peso : [true,true,true,true,true],
            };
            state.filter = filter;
        },
    },
    actions: {
        updateFilter({ commit },filter){
            commit("UPDATE_FILTER",filter);
        },
        deleteFilter({ commit }){
            commit("DELETE_FILTER");
        },
    },
});