<template>
    <div class="side-bar">
        
        <div class="side-bar__user-btn">
            
			<div>
				<div id="components-badge-demo-title">
                    <a-badge :count="5" title="Custom hover text">
                    <a href="#" class="head-example">
                        <a-icon type="shopping-cart" :style="{ fontSize: '42px', color: '#F9F5E8' }" />
                    </a>
                    </a-badge>
                </div>
			</div>
			<div>
				<a-avatar style="backgroundColor:#87d068" icon="user"  />
			</div>
           
            <div>
                <x-icon icon=stars />
            </div>
		</div>

        <ul  class="side-bar__list">
            <li class="side-bar__item" v-for="route in routes" :key="route.name">
                <router-link :to="route.path" exact active-class="_active" class="side-bar__item-link">
                    <a-icon :type="route.icon" /> <span class="side-bar__item-text">{{route.name}}</span>
                </router-link>
            </li>
        </ul>

       
    </div>
    
</template>

<script>
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
        }
    },
    mounted() {
        
    }
   
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
        width: 100%;
        max-width: 200px;

         &__user-btn {

            width: 100%;
            @include flex($justify-content: space-between, $align-items: center, $direction: row, $wrap: wrap);

            color:white;
            min-height: 40px;
            margin-bottom: 40px;
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
            background-color: darken( #C7A17A, 20%);
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
        }
        &__item-text {
            margin-left: 20px;
        }
    }
</style>