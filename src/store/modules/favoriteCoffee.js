const state = () => ({
    favoriteDrinks: [],
});

const mutations ={
    changeFavoriteState(state, payload) {
        state.favoriteDrinks = [...payload];
    },
};

export default {
    namespaced: true,
    state,
    mutations
};