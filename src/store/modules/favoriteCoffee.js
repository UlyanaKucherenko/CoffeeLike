const state = () => ({
    favoriteCart: [],
});

const  mutations ={
    changeFavoriteCartState(state, payload) {
        state.favoriteCart = [...state.favoriteCart, payload];
    },
};
const  actions = {
    addItemToCart: async ({commit}, payload) =>{
        commit("changeFavoriteCartState", payload);
    },
};
export default {
    namespaced: true,
    state,
    mutations, 
    actions,
    
};