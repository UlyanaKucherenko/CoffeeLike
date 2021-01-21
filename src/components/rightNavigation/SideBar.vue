<template>
    <div class="side-bar">
        
        <div class="side-bar__user-btn">
            <!--
			<div>
				<div id="components-badge-demo-title">
                    <a-badge :count="5" title="Custom hover text">
                    <a href="#" class="head-example">
                        <a-icon type="shopping-cart" :style="{ fontSize: '42px', color: '#F9F5E8' }" />
                    </a>
                    </a-badge>
                </div>
			</div>
            -->
			<div>
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
                <a-badge :count="favoriteCart.length" :offset="[5,0]" :number-style="{ backgroundColor: '#52c41a' }">
                    <a-icon type="star" :style="{ fontSize: '25px' }"/>
                </a-badge>
            </div>
           
		</div>

        <ul  class="side-bar__list">
            <li class="side-bar__item" v-for="route in routes" :key="route.name">
                <router-link :to="route.path" exact active-class="_active" class="side-bar__item-link">
                    <a-icon :type="route.icon" /> <span class="side-bar__item-text">{{route.name}}</span>
                </router-link>
            </li>
            <li class="side-bar__item">
                <router-link to="/shopping-cart" exact active-class="_active" class="side-bar__item-link">
                    <a-badge :count="cart.length" :offset="[5,0]">
                        <a-icon type="shopping-cart" :style="{ fontSize: '20px' }"/>
                    </a-badge>
                   <span class="side-bar__item-text"> shopping cart</span>
                </router-link>
            </li>
            <li class="side-bar__item">
                <router-link to="/contacts" exact active-class="_active" class="side-bar__item-link">
                    <a-icon type="home" />
                    <span class="side-bar__item-text">Contacts</span>
                </router-link>
            </li>
        </ul>

        
        <a-modal v-model="visible" title="favoriteCart Modal" @ok="handleOk">
        <ul>
            <li v-for="item in favoriteCart" :key="item.name">
                 <a-avatar shape="square" size="35" icon="user" />
                {{item}} id
            </li>
        </ul>
        </a-modal>
       
    </div>
    
</template>

<script>
import { mapState } from 'vuex';
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
        }
    },
    methods:{
        handleClick() {
            this.visible = true;
        },
        handleOk(e) {
            console.log(e);
            this.visible = false;
        },
    },
     computed: {
        ...mapState("shopCart",["cart"]),
        ...mapState("favoriteCoffee",["favoriteCart"]),
    },
     mounted() {  
        console.log(this.cart);

     },
   
}
</script>

<style lang="scss" scoped>

    .head-example {
    width: 42px;
    height: 42px;
    display: inline-block;
    }

    .side-bar {
        position: fixed;
        width: 30%;
        max-width: 400px;
        padding: 30px 30px 0 30px;
        @include media($screen: 1660px){
        max-width: 320px;
        }
        @include media($screen: $screen-desktop){
            max-width: 200px;
            padding: 30px 15px 0 15px;
        }

         &__user-btn {

            width: 100%;
            @include flex($justify-content: space-between, $align-items: center, $direction: row, $wrap: wrap);

            color:white;
            min-height: 40px;
            margin-bottom: 40px;

            //$screen-tablet-large
            @include media($screen: $screen-tablet-large){
                @include flex($justify-content: space-between, $align-items: center, $direction: column, $wrap: wrap);

            }
        }
        &__user-name {
            margin-left: 5px;
        }

        &__favorete-btn {
            cursor: pointer;
        }
        &__list {

        }

        &__item {
            margin-bottom: 30px;
        }

        &__item-link {
            font-family: Nunito;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #F9F5E8;
            text-transform: uppercase;

            background-color: #C7A17A;
           
            border-radius: 19px;
            border: none;
            outline: none;
            @include flex(flex-start,center);
            height: 46px;
            padding: 0 24px;
            cursor: pointer;
            transition: all 0.3s ease-out;
                
             &:hover {
            background-color: darken( #C7A17A, 10%);
            color: #F9F5E8;
;
            }
            &:active {
                background-color: darken( #C7A17A, 20%);
                color: #F9F5E8;
            }
            &._active {
                background-color: darken( #C7A17A, 20%);
            }
            @include media($screen: $screen-tablet-large){
                 @include flex(center,center);
                 padding: 0 15px;
            }
        }
        &__item-text {
            margin-left: 20px;
            @include media($screen: $screen-tablet-large){
                display: none;
            }
        }
    }
</style>