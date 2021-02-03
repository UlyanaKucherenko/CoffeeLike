<template>
    <div class="main-layout">
        <div class="main-layout__container">
                <div class="main-layout__content">
                    <slot />
                </div>
                <div class="main-layout__right-nav">
                    <side-bar />
                </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../rightNavigation/SideBar';
export default {
    name: 'MainLayout',
    components: {
        SideBar
    }
}
</script>

<style lang="scss" >
    .main-layout {
        position: relative;
        height: 100vh;
       
        &__container {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex:1;
        min-height: 100vh;
        
      }


      &__content {
        flex: 1;
        display: flex;
        justify-content: center;
        height: 100vh;
        overflow-y: scroll;
        padding-right: 280px;
      }

      &__right-nav{
        width: 30%;
        background-color: #3b3c3d;
        flex: 1;
        display: flex;
        justify-content: center;
        max-width: 300px;
        position: fixed;
        top: 0;
        right: 0;
        height: 100%;
        padding-top: 30px;
        
      }
    }
</style>