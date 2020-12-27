<template>
    <div class="coffee">
        <div class="coffee__container">
            <div  class="coffee__logo">
                <router-link to="/" class="coffee__logo-link">
                    <img src="../img/revo_logo.png" alt="">	
                </router-link>
            </div>
            <div class="coffee__content">
                <h2 class="coffee__title">Choose Your Coffee</h2>
              
                <a-card style="max-width: 200px">
                    <img slot="cover" alt="" :src="coctail.strDrinkThumb" />
                    <a-card-meta :title="coctail.strDrink">
                        <template slot="description">
                        {{ coctail.strCategory }}
                        </template>
                    </a-card-meta>
                </a-card>
                
                <div class="coffee__products">
                    <div class="coffee__product">
                         <div class="coffee__product-content">
                             <div>
                                 <img alt="example" src="../img/product/1.png"/>
                             </div>
                            
                            <h3 title="Affogato"></h3>
                            <p slot="description">
                                This is a term that literally means 'drowned'. 
                            </p>
                            <the-button icon="heart" type="secondary" @click="handleClick"></the-button>
                        </div>
                    </div>

                    <div class="coffee__product">
                         <a-card  hoverable>
                            <img
                            slot="cover"
                            alt="example"
                            src="../img/product/2.png"
                            />
                            <a-card-meta title="Babycino">
                            <template slot="description">
                                A cappuccino styled drink served in an up-market café typically for children. 
                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                    <div class="coffee__product">
                        <a-card hoverable>
                            <img
                            slot="cover"
                            alt="example"
                            src="../img/product/3.png"
                            />
                            <a-card-meta title="Americano">
                            <template slot="description">
                                Also known as 'Lungo' or 'Long Black'.

                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>
                    <div class="coffee__product">
                        <a-card hoverable>
                            <img
                            slot="cover"
                            alt="example"
                            src="../img/product/3.png"
                            />
                            <a-card-meta title="Americano">
                            <template slot="description">
                                Also known as 'Lungo' or 'Long Black'. 

                            </template>
                            </a-card-meta>
                        </a-card>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {coctailsUrls} from '../http/urls.js';

export default {
    name: 'Coffee',
    data() {
        return {
            coctail: [],
        }
    },
     methods: {
         onChange(a, b, c) {
            console.log(a, b, c);
            },
        handleClick() {
            console.log('BTN clicked');
        },
         async getRandomCoctail() {
            try {
                const res = await fetch(coctailsUrls.random);
                const parsedRes = await res.json();
                return parsedRes;
            } catch (error) {
                console.error(error);
            }
          },
    },
     async created() {
            const data = await this.getRandomCoctail();
            console.log(data)
            this.coctail = data.drinks[0];
        }
}


</script>

<style lang="scss" scoped>

    .coffee {
        &__container {
            padding-top:30px ;
            padding-right: 20px;
            position: relative;
        }

        &__logo {
            margin-bottom: 5px;
            z-index: -1;
            display: inline-block;
        }

        &__logo-link {
            display: inline-block;
            position: relative;
          
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
            margin-bottom: 65px;

        }

        &__products {
            display: flex;
            /*flex-direction: row;
            justify-content: space-between;*/
            align-items: stretch;
            margin:0 -20px;
            flex-wrap: wrap;
        }

        &__product {
            flex: 1 1 25%;
            max-width: 25%;
             padding: 10px 20px;

             & > div {
                 height: 100%;
             }
        }

        &__product-content {
            border: 1px solid rgb(190, 189, 189);
        }
  }
</style>