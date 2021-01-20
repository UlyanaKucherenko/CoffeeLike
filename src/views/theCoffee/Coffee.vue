<template>
    <div class="coffee">
        <h2 class="coffee__title">Choose Your Coffee</h2>
        <div class="coffee__main">
            <div class="coffee__main-content">
                <!--
                <the-transition >
                    <router-view />
                </the-transition>
                -->
                <a-input-search placeholder="input search text" v-model="message" style="width: 200px" />  
                <p>{{message}}</p>
                 <div class="coffee__products">
                    <div class="coffee__product" v-for="item of coffee" :key="item.name">
                        <div class="coffee__wrap-image">
                            <img :src=item.picture />
                        </div>
                        <div class="coffee__product-info" >
                            <a-button class="coffee__star-favorite" @click="selectFavorite(item.id)" type="primary" shape="circle" icon="star" />
                                
                            <p class="coffee__product-price">{{item.prices.small}} $</p>
                            <h4 class="coffee__product-title">{{item.name}}</h4>
                            <p class="coffee__product-category">
                                {{item.category}}
                            </p>

                            <div class="coffee__product-btns">
                                <the-button class="coffee__product-btn" type="addCart" @click="showDetail(item.id)">
                                    Add <a-icon type="shopping-cart" class="" />
                                </the-button>   
                            </div>
                            
                            <a-collapse accordion class="coffee__product-dateil">
                                <template #expandIcon="props">
                                    <a-icon type="right" :rotate="props.isActive ? 90 : 0" />
                                </template>
                                <a-collapse-panel key="1" header="Dateil">
                                    <p class="coffee__product-description"> {{item.description}}</p>
                                    <p>Composition of the: {{item.composition}}</p>
                                    <ul class="coffee__prices-list">
                                        <li>
                                            <a-icon type="coffee"  /> {{item.prices.small}}$
                                        </li>
                                        <li>
                                            <a-icon type="coffee" style="font-size:25px"/> {{item.prices.medium}}$
                                        </li>
                                        <li>
                                            <a-icon type="coffee" style="font-size:30px"/> {{item.prices.large}}$
                                        </li>
                                    </ul>
                                </a-collapse-panel>
                            </a-collapse>      
                        </div>
                    </div>
                </div>
            </div> 
        </div>
       
        <the-modal
        :visible="visible"
        @handle-cancel="hideModal"
        @handle-ok="hideModal">
            <form-oder />
        </the-modal>    
    </div>
</template>

<script>

import {firestore} from '../../firebase/firebase.utils.js'
import TheModal from '../../components/common/TheModal'
import formOder from '../../components/forms/formOder.vue'
import { mapActions } from 'vuex'

export default {
    name: 'Coffee',
    components: {
    TheModal,
    formOder
    },
    data() {
        return {
            coffee:[],
            visible: false,
            value:1,
            //message: 'Привет, Vue!',
        }
    },
    props :{
        message: {
            type: String,
            default: "input ",
        },
    },
     methods: {
         ...mapActions('shopCart', ['addItemToCart']),
         selectFavorite(card) {
             this.addItemToCart(card);
         },

          async getCoffee() {
            try {
                let coffee =[];
                const res = firestore.collection('coffee');
                //firestore.collection("coffee").where("name", "==", this.massage)
                const parsedRes = await res.get();
                parsedRes.forEach(function(item) {
                    coffee.push( item.data());
                //console.log(item.data());
                });
                return coffee;
            } catch (error) {
                console.error(error);
            }
          },
          
          showDetail() {
            this.visible = true;
            },
            hideModal() {
            this.visible = false;
            },
            onChange(value) {
                console.log('changed', value);
            },
            onChangeRadio(e) {
                console.log('radio checked', e.target.value);
            },
    },
    computed: {
    },
     mounted() {  
        
     },
        async created() {
            const dataCoffee = await this.getCoffee();
            //console.log(dataCoffee[0]);
            this.coffee = dataCoffee;
        },
}

</script>

<style lang="scss" scoped>

    .coffee {
        text-align: center;
         flex: 1;
            width: 70%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 50px;
        &__container {
            padding-top:30px ;
            padding-right: 20px;
            position: relative;
            flex: 1;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        &__content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 35px;
            line-height: 34px;
            color: #415167;
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        &__main {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

        &__main-content {
            width: 100%;
            padding: 0 15px;
        }

        &__main-btns {
            margin-bottom: 10px;
            display: flex;
            width: 100%;
            justify-content: flex-end;
            padding: 0 20px;
        }

        &__products {
            @include flex(space-between, stretch,  row,  wrap);
        }

        &__product {
            flex: 1 1 24%;
            max-width: 24%;
            margin:5px 5px 10px 0px;
            cursor: pointer;
            box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
            border: 1px solid rgba(182, 180, 180, 0.5);
            

            &:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.3);
                transition: 0.5s;
            }

            &:nth-child(4n+4) {
                margin-right: 0;
            }
        }

        &__wrap-image {
             width: 100%;
            @include padding-hack($padding: 60%, $size: cover);
        }

        &__product-info {
           text-align: left;
           font-family: Nunito;
           padding: 5px 20px 50px 20px;
           position: relative;
        }
        &__star-favorite{
            position: absolute;
            top: 15px;
            right: 20px;
            background-color: #bb8855;
            border: 1px solid  #bb8855;
        }
        &__product-price{
            @include text(30px,600, #C7A17A);
            margin-bottom: 10px;
        }
        &__product-title{
            @include text(24px,700, #232C38);
            line-height: normal;
            min-height: 54px;
        }
        &__product-category {
            margin-bottom: 5px;
            @include text(23px,300, #232C38);  
        }
        &__product-description {
           /* white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis; */
            @include text(14px,300, #232C38);  
        }

        &__product-btns {
            @include flex(flex-end, center,  row,  wrap);
            margin-bottom: 5px;
        }

         &__product-dateil{
            position: absolute;
            z-index: 2;
            width:100%;
            left: 0;
            bottom: 0;
            border-color:  transparent;
            border-top-color:  #bb8855;
            border-radius:0px;
            font-size: 20px;
        }

        &__prices-list {
             @include flex(space-between, center,  row,  wrap);
        }
  }

   
</style>