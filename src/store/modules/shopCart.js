const state = () => ({
    cart: [
        /*{
            name:"latte",
            price:"2"
        }
        ,{
            name:"capuchimo",
            price:"3"
        }*/
    ]
});

const  mutations ={
    changeCartState(state, payload) {
        state.cart = [...state.cart,payload];
    },
};

export default {
    namespaced: true,
    state,
    mutations
    
};



