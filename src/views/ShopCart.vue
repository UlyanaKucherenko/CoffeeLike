<template>
    <div class="shop-cart">
        <h1 class="shop-cart__title">Shopping Cart</h1>
        <div class="shop-cart__main">
            <table class="shop-cart__list">
                 <tr class="shop-cart__item-list" v-for="item in productShopList" :key="item.name">
                    <td><a-avatar class="shop-cart__item-img" :src="item.img" /></td>
                    <td class="shop-cart__item-name">{{item.name}}</td>
                    <td class="shop-cart__item-size">{{item.size}}</td>
                    <td class="shop-cart__item-count">{{item.count}}</td>
                    <td class="shop-cart__item-price">{{item.price}}$</td>
                    <td>delete</td>
                </tr>
            </table>
             <button>clear</button>
            <button>make an order</button>
        </div>
    </div>
</template>
<script>
export default {
    name:'ShopCart',
    data(){
        return{
            productShopList:[
                {
                    img:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    name: "Flat White",
                    size: "300ml",
                    count:"1",
                    price:"2"
                },
                 {
                    img:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
                    name: "Caramel Flan Latte",
                    size: "400ml",
                    count:"2",
                    price:"4"
                }
            ],
        }
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
        border-top: 1px solid rgb(192, 190, 190);
        width: 100%;
        padding: 20px 0 0;
    }
    &__list {
        font-size: 14px;
        border-collapse: collapse;
        border-spacing: 0;
        text-align: center;
    }

    &__item-list {
        min-height:50px;
        padding: 0 15px;
        @include flex(flex-start,center,row);
        border-bottom: 1px solid rgb(192, 190, 190);
    }
    & td {
       
         width: 150px;
    }

   
    
    }
</style>