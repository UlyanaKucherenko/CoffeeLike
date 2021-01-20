const state = () => ({
    cart: [],
});

const  mutations ={
    changeCartState(state, payload) {
        state.cart = [...state.cart, payload];
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