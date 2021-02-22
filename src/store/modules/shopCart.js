const state = () => ({
    cart: [
      /*  {
            id:101,
            img:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            name: "Flat White",
            size: "300ml",
            quantity:"1",
            price:"2"
        },
         {
            id:102, 
            img:"https://picsum.photos/id/237/20/20",
            name: "Caramel Flan Latte",
            size: "400ml",
            quantity:"2",
            price:"4"
        }*/
    ]
});

const  mutations ={
    changeCartState(state, payload) {
        state.cart = [...state.cart,payload];
    },
    clearState(state){
        state.cart= [];
    }
};

export default {
    namespaced: true,
    state,
    mutations
    
};



