const state = () => ({
    allDrinks: [],
});

const  mutations ={
    changeAllDrinksState(state, payload) {
        state.allDrinks = [...state.allDrinks, payload];
    },
};
const  actions = {
    addItemToAllDrinks: async ({commit}, payload) =>{
        commit("changeAllDrinksState", payload);
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};