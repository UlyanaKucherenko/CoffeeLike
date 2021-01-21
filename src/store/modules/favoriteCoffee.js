const state = () => ({
    favoriteCart: [],
});

const  mutations ={
    changeCartState(state, payload) {
        state.favoriteCart = [...state.favoriteCart, payload];
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