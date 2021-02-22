<template>
    <div class="shop-cart">
        <h1 class="shop-cart__title">Shopping Cart</h1>
        <div class="shop-cart__main">
             <div class="shop-cart__wrap-btns">
                <the-button class="shop-cart__clear-btn" type="clear" @click="clearShopList">clear</the-button>
                <the-button type="makeOder" @click="makeOder">make an order</the-button>
            </div>
            <table class="shop-cart__list">
                 <tr class="shop-cart__item-list" v-for="item in productShopList" :key="item.id">
                    <td><a-avatar class="shop-cart__item-img" :src="item.img" /></td>
                    <td class="shop-cart__item-name">{{item.name}}</td>
                    <td class="shop-cart__item-size">{{item.size}}</td>
                    <td class="shop-cart__item-count">{{item.quantity}}</td>
                    <td class="shop-cart__item-price">{{item.price}}$</td>
                    <td><a-button  icon="delete" @click="deleteProduct(item.id)" /></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import { shopingListArray } from "../utils.js"

export default {
    name:'ShopCart',
    data(){
        return{
            productShopList:[],
           newArray:[],

        }
    },
    methods:{
        makeOder() {
            this.$success({
                title: 'Your order is accepted!',
                content: (
                <div>
                    <p>Expect a call from operator whithin one minute</p>
                </div>
                ),
            });

           this.clearShopList();
        },
        clearShopList() {
             this.productShopList =[];
            localStorage.clear("shopCart"); 
            this.clearState(); 
        },

        ...mapMutations("shopCart", ["changeCartState","clearState"]),

        deleteProduct(id){
            console.log("Product ID", id);
           console.log("productShopList", this.productShopList);
            this.productShopList = this.productShopList.filter(item => item.id !== id)
            this.newArray = this.productShopList;
           // console.log('newShoppingList', this.newArray);
            //this.changeCartState(this.newArray);
            localStorage.setItem("shopCart", JSON.stringify( this.productShopList));  
            console.log("cart", this.cart);
        }
    },
     computed: {
        ...mapState("shopCart", ["cart"])
   },

    async created(){
       console.log("shopingListArray", this.cart);
        console.log("cart+", shopingListArray);

         this.productShopList =  this.cart;

       
       
     }
    
}
</script>
<style lang="scss">
    .shop-cart {
        text-align: center;
        flex: 1;
        width: 70%;
        @include flex(flex-start,center,column);
        padding: 30px 15px 0;

    &__title {
        @include text(35px, 900,#415167);
        font-family: Montserrat;
        text-transform: uppercase;
        margin-bottom: 55px;
    }

    &__main {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &__list {
        font-size: 14px;
        border-collapse: collapse;
        border-spacing: 0;
        text-align: center;
        width: 90%;
        margin-bottom: 20px;
    }

    &__item-list td{
        height:50px;
        border-bottom: 1px solid rgb(192, 190, 190);
        width: 150px;
        
    }

    &__wrap-btns {
          @include flex(flex-end,center,row);
          margin-bottom: 30px;
          width: 90%;
    }
   
    &__clear-btn {
        margin-right: 20px;
    }

    }
</style>