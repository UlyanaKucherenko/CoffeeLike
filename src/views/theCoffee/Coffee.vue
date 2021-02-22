<template>
    <div class="coffee">
        <h2 class="coffee__title">Choose Your Coffee</h2>
        <div class="coffee__main">
            <div class="coffee__main-content">
                <!-- Search Filter-->
                 <div class="coffee__search-wrap">
                     <div class="coffee__search">
                        <input class="coffee__input-search" v-model="textSearch" placeholder="Search by name...">
                        <button class="coffee__button-search" @click="inputSearch()"><a-icon type="search" /></button>
                     </div>
                     <div class="coffee__filter-wrap">
                        <a-select class="coffee__select"
                            ref="categoriesRef"
                            @change="changeCategory"
                            :placeholder="selectedCategories">
                            <a-select-option class="coffee__select-option"
                            v-for="category in categories" :key="category"
                            :value="category">
                                {{category}}
                            </a-select-option>
                        </a-select> 
                    </div>
                 </div>

                  <!--Products-->
                 <pulse-loader class="coffee__spiner" :loading="loading" :color="colorSpiner"></pulse-loader>
                 <div class="coffee__products" v-if="!loading">
                     <!--Product card-->
                    <div class="coffee__product" v-for="item of coffee" :key="item.name">
                        <div class="coffee__wrap-image">
                            <img :src=item.picture />
                        </div>
                        <div class="coffee__product-info" >
                            <a-button class="coffee__star-favorite" :class="{activeFavorite}" @click="selectFavorite(item.id)" type="primary" shape="circle" icon="star" />
                                
                            <p class="coffee__product-price">{{item.prices.small}} $</p>
                            <h4 class="coffee__product-title">{{item.name}}</h4>
                            <p class="coffee__product-category">
                                {{item.category}}
                            </p>

                            <div class="coffee__product-btns">
                                <the-button class="coffee__product-btn" type="addCart" @click="showFormOder(item)">
                                    Add <a-icon type="shopping-cart" class="" />
                                </the-button>   
                            </div>
                            <a-collapse accordion class="coffee__product-dateil">
                                <template #expandIcon="props">
                                    <a-icon type="right" :rotate="props.isActive ? 90 : 0" />
                                </template>
                                <a-collapse-panel key="1" header="Dateil" class="coffee__dateil-header">
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
       
        <!-- Modal add card-->
        <modal-add-card 
        :currentItem="currentItem" 
        :handleCancel="handleCancel" 
        :visible="visible"></modal-add-card>
    </div>
</template>

<script>

import {firestore} from '../../firebase/firebase.utils.js'
import { mapActions, mapState, mapMutations} from 'vuex'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import { getDrinks } from "../../utils"
import ModalAddCard from "../../components/modals/ModalAddCard.vue"

export default {

    name: 'Coffee',
    components: {
    PulseLoader,
    ModalAddCard
    },
    data() {
        return {
            coffee:[],
            visible: false,
            textSearch: '',
            loading: false,
            colorSpiner: ' green',
            activeFavorite: false,
            categories: [
                "all drinks",
                "cocktail",
                "Classic drinks",
                "Author's teas",
            ],
            selectedCategories:'all drinks',
            favoriteDrinks: [],
            currentItem:{},
        }
    },

    methods: {
        inputSearch(){
            this.searchByName();
        },

        changeCategory(value) {
            this.selectedCategories = value;
            this.loading = true;

            if(this.selectedCategories === 'all drinks'){
            this.getCategoryAllDrinks(); 
            }
            else {
                this.getDrinksByCategory(); 
            }
        },

        ...mapActions('allDrinks', ['addItemToAllDrinks']),
        ...mapMutations('favoriteCoffee', ['changeFavoriteState']),

        selectFavorite(id) {
            const AllBtn = document.querySelectorAll(".coffee__star-favorite");
            console.log("AllBtn",AllBtn);

            if (this.favoriteDrinks.includes(id)) {
                this.favoriteDrinks = this.favoriteDrinks.filter(item => item !== id)
                console.log('this.favoriteDrinks delete', this.favoriteDrinks);
                this.changeFavoriteState(this.favoriteDrinks);
                 AllBtn.style.backgroundColor="";
              
            } else {
                this.favoriteDrinks.push(id);
                this.changeFavoriteState(this.favoriteDrinks);
                console.log('this.favoriteDrinks add', this.favoriteDrinks);
                  AllBtn.style.backgroundColor="red";
                
            }
            localStorage.setItem("favoriteDrinks", JSON.stringify(this.favoriteDrinks)) ; 
        },

        async searchByName() {
            try {
                let coffee =[];
                 this.loading = true;
                const res = firestore.collection(`coffee`).where("name", "==", `${this.textSearch}`);
                const parsedRes = await res.get();
                parsedRes.forEach(function(item) {
                    coffee.push( item.data());
                });
               this.coffee = coffee;
                this.loading = false;
            }catch(Error) {
                console.error(Error);
            }
        },

        async getCategoryAllDrinks() {
            try {
                let coffee =[];
                 this.loading = true;
                const res = firestore.collection(`coffee`);
                const parsedRes = await res.get();
                parsedRes.forEach(function(item) {
                    coffee.push( item.data());
                });
                this.coffee = coffee;
                this.loading = false;
            } catch(error) {
                    console.error(error);
            }
        },
          
        async getDrinksByCategory() {
            try {
                let coffee =[];
                const res = firestore.collection("coffee").where("category", "==", `${this.selectedCategories}`);
                const parsedRes = await res.get();
                parsedRes.forEach(function(item) {
                    coffee.push( item.data());
                });
                  this.coffee = coffee;
                  this.loading = false;
                
            } catch(error) {
                console.error(error);
            }
        },

        showFormOder(item) {
            this.visible = true;
            this.currentItem = item;
        },

        hideModal() {
            this.visible = false;
        },

        showModal(item) {
            this.visible = true;
            this.currentItem = item;
            },
        handleCancel() {
            console.log('Clicked cancel button');
            this.visible = false;
        },
    },

    computed: {
    ...mapState("allDrinks",["allDrinks"]),
    },

    async created() {
       if (this.allDrinks.length === 0) {
			const dataDrinks = await getDrinks();
			dataDrinks.forEach(item =>{
				this.addItemToAllDrinks(item);
			});
            this.coffee = this.allDrinks;
		} 
        else {
            this.coffee = this.allDrinks;
        }
    },
    
}

</script>

<style lang="scss" scoped>


    .coffee {
        text-align: center;
        flex: 1;
        width: 70%;
        @include flex(flex-start,center,column);
        padding: 30px 20px 0;
        
        &__container {
            position: relative;
            flex: 1;
            width: 100%;
            @include flex(center,center,column);
        }

        &__content {
            text-align: center;
            @include flex(center,center,column);
        }

        &__title {
            font-family: Montserrat;
            @include text(35px, 900, #415167);
            text-transform: uppercase;
            margin-bottom: 55px;
        }

        &__main {
            display: flex;
            flex-direction: column;
            width: 100%;
        }

         &__search-wrap {
            @include flex(center,center,row);
            margin-bottom: 30px;
            border-bottom: 1px solid rgb(192, 190, 190);
            padding-bottom: 20px;
            @include media($screen: 760px){ 	
             @include flex(center,center,column);
            }
        }

         &__search{
            @include flex(flex-start,center,row);
             margin-right: 60px;
            @include media($screen: 760px){ 	
                margin-right: 0;
                margin-bottom: 20px;
            }
        }

        &__input-search {
            max-width: 300px;
            width: 100%;
            padding: 0 15px;
            @include flex(center,center,row);
            min-height: 35px;
            border: 1px solid  rgb(192, 190, 190);
            overflow: hidden;
            outline: none;
            @include text(15px,400, #5c5959);
        }
        &__button-search {
            padding: 0 24px;
            @include flex(center,center,row);
            min-height: 35px;
            border: none;
            background-color: #415167;
            color:white;
            cursor: pointer;
        }

        &__filter-wrap {
            @include flex(flex-end,center,row);
        }

        &__select {
            width: 250px;
        }

        &__spiner {
            display: flex;
            justify-content: center;
        }
        &__main-content {
            width: 100%;
            //padding: 0 15px 0 0;
        }

        &__products {
            @include flex(space-between, stretch,  row,  wrap);
            @include media($screen: 860px){ 	
             @include flex(space-around, stretch,  row,  wrap);
            }
        }

        &__product {
            flex: 1 1 24%;
            width: 24%;
            max-width: 260px;
            min-height: 300px;
            margin:5px 5px 15px 0px;
            box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
            border: 1px solid rgba(182, 180, 180, 0.5);
            margin-right: 10px;
            

            &:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.3);
                transition: 0.5s;
            }

            /*&:nth-child(4n+4) {
                margin-right: 0;
            }*/

            @include media($screen: 960px){ 	
                flex: 1 1 47%;
                width: 47%;
            }
            @include media($screen: 860px){ 	
                max-width: 300px;
                flex: 1 1 80%;
                width: 80%;
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

         .activeFavorite{
            background-color: #415167;
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
            @include text(20px,300, #232C38);

            &:hover {
                background-color: lighten(#bb8855,20%);
                color: white;
                transition: 0.3s;
                @include text(20px,300, white);
            }
        }

        &__prices-list {
             @include flex(space-between, center,  row,  wrap);
        }
  }
  .activeFavorite{
            background-color: #415167;
        }
   
</style>