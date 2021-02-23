<template>
    <div class="side-bar">
        
        <div class="side-bar__user-btn">
			<div class="side-bar__user-btn-profil">
                <a-dropdown :trigger="['click']">
                    <a class="ant-dropdown-link" @click="e => e.preventDefault()">
                        <a-avatar style="backgroundColor:#87d068" icon="user"  />
                    </a>
                    <a-menu slot="overlay">
                    <a-menu-item key="0">
                        <a href="#">MyProfil</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="1">
                        Output
                    </a-menu-item>
                    </a-menu>
                </a-dropdown>
                <span class="side-bar__user-name">Ulya</span>
			</div>
            <div class="side-bar__favorete-btn" @click="handleClick">
                <a-badge :count="favoriteDrinks.length" :offset="[-25,-2]" :number-style="{ backgroundColor: '#52c41a' }">
                    <a-icon class="side-bar__item-icon" type="star" />
                </a-badge>
            </div>
		</div>

        <ul class="side-bar__list">

            <li class="side-bar__item" v-for="route in routes" :key="route.name">
                <router-link :to="route.path" exact active-class="_active" class="side-bar__item-link">
                    <a-icon class="side-bar__item-icon" :type="route.icon" /> <span class="side-bar__item-text">{{route.name}}</span>
                </router-link>
            </li>
            
            <li class="side-bar__item">
                <router-link to="/shopping-cart" exact active-class="_active" class="side-bar__item-link" @click="showShop">
                    <a-badge :count="cart.length" :offset="[-25,-2]">
                        <a-icon class="side-bar__item-icon" type="shopping-cart" />
                    </a-badge>
                   <span class="side-bar__item-text"> shopping cart</span>
                </router-link>
            </li>
            <li class="side-bar__item">
                <router-link to="/contacts" exact active-class="_active" class="side-bar__item-link">
                    <a-icon class="side-bar__item-icon" type="environment" />
                    <span class="side-bar__item-text">Contacts</span>
                </router-link>
            </li>
        </ul>

    <a-modal v-model="visible" title="Favorite drinks" @ok="clearFavorite" :footer="null">

         <table class="favorite__list">
             <a-button :class="isInBtnClearActive() ? 'activeClearBtn' : '' " @click="clearFavorite">clear</a-button>
                 <tr class="favorite__item-list" v-for="item in favoriteDrinksWithDescription" :key="item.id">
                    <td><a-avatar class="favorite__item-img" :src="item.picture" /></td>
                    <td class="favorite__item-name">{{item.name}}</td>
                    <td><a-button  icon="delete" @click="deleteItem(item.id)" /></td>
                </tr>
            </table>
        </a-modal>

    </div>
    
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import { favouriteCoffeeArray } from "../../utils"


export default {
    name: 'SideBar',
    data() {
        return {
            routes: [
                 {
                     path:'/',
                     name:'Home',
                     icon:'home'
                 },
                 {
                     path:'/coffee',
                     name:'Coffee',
                     icon:'coffee'
                 },
                 
             ],
            visible: false,
            favoriteDrinksWithDescription: [],
            activeBtn:false,
        }
    },
    methods:{

        handleClick() {
            this.visible = true;
            const dataForModal = this.allDrinks.filter(item => this.favoriteDrinks.includes(item.id))
            console.log("dataForModal", dataForModal);
            this.favoriteDrinksWithDescription = dataForModal;
        },

        showShop(){
            console.log("showShop");
        },
         handleOk(e) {
            console.log(e);
            this.visible = false;
        },
        ...mapMutations("favoriteCoffee", ["changeFavoriteState", "clearFavoriteState"]),

        isInBtnClearActive(){
             let isInActive = false;
            if (this.favoriteDrinks >1) {
               isInActive = true;
            } else {
                isInActive = false;
            }
            return isInActive;
        },

        deleteItem(id){
            console.log('ID', id);
            this.favoriteDrinksWithDescription = this.favoriteDrinksWithDescription.filter(item => item.id !== id)
            console.log('favoriteDrinksWithDescription', this.favoriteDrinksWithDescription);
            this.changeFavoriteState(this.favoriteDrinksWithDescription);
        },

        clearFavorite() {
            this.favoriteDrinksWithDescription=[];
            this.changeFavoriteState(this.favoriteDrinksWithDescription);
            localStorage.setItem("favoriteDrinks", JSON.stringify(this.favoriteDrinksWithDescription)) ; 
            console.log("clearFavorite");
            
        }

    },
    computed: {
        ...mapState("shopCart", ["cart"]),
        ...mapState("favoriteCoffee", ["favoriteDrinks"]),
        ...mapState('allDrinks', ['allDrinks']),
        
    },
    
     async created(){
        const data = favouriteCoffeeArray;
        if (data) {
            this.changeFavoriteState(data);
            this.activeBtn = true;
        } else {
            this.changeFavoriteState([]);
            this.activeBtn = false;
        }
         
        

     }

}
</script>

<style lang="scss" scoped>

    .head-example {
    width: 42px;
    height: 42px;
    display: inline-block;
    }

    .favorite__list {
            width: 100%;
        }
    .favorite__item-list {
           height: 50px;
    }

    .activeClearBtn {
        display:none;
    }
  

    .side-bar {
         &__user-btn {
            width: 100%;
            @include flex($justify-content: space-between, $align-items: center, $direction: row, $wrap: wrap);
            color:white;
            min-height: 40px;
            margin-bottom: 40px;

            @include media($screen: $screen-tablet-large){
                @include flex( center, center,  column);
                margin-bottom: 30px;

            }

        }
        &__user-btn-profil {
            @include media($screen: $screen-tablet-large){
             margin-bottom: 30px;
            }
        }
        &__user-name {
            margin-left: 5px;
            @include media($screen: $screen-tablet-large){
            display: none;
            }
        }

        &__favorete-btn {
            cursor: pointer;
        }
        
        &__list {
            margin-bottom: 0;
            @include flex(center,center,column);
        }

        &__item {
            margin-bottom: 30px;
            max-width: 250px;
            width: 100%;

            &:last-child {
                 margin-bottom: 0px;
            }
        }

        &__item-link {
            font-family: Nunito;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            color: #F9F5E8;
            text-transform: uppercase;
            border-radius: 19px;
            border: none;
            outline: none;
            @include flex(flex-start,center);
            min-height: 50px;
            cursor: pointer;
            transition: all 0.3s ease-out;
                
             &:hover {
            color: darken( #C7A17A, 10%);
            }
            &:active {
                color: darken( #C7A17A, 20%);
            }
            &._active {
                color: darken( #C7A17A, 20%);
            }
            @include media($screen: $screen-tablet-large){
                 @include flex(center,center);
            }
        }
        &__item-text {
            margin-left: 20px;
            @include media($screen: $screen-tablet-large){
                display: none;
            }
        }

        &__item-icon{
             font-size: 20px;
             @include media($screen: $screen-tablet-large){
                font-size: 36px;
            }
        }

    }
</style>