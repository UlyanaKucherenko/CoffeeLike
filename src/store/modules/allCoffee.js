const state = () => ({
    allCoffee: [],
});

const  mutations ={
    changeCartState(state, payload) {
        state.allCoffee = [...state.allCoffee, payload];
    },
};
const  actions = {
    addItemToCart: async ({commit}, payload) =>{
        commit("changeCartState", payload);
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};