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
       
         &__container {
         display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex:1;
        min-height: 100vh;

        padding: 0px 0px 0 30px;
      }


      &__content {
        flex: 1;
        width: 100%;
            display: flex;
            & > *{
                flex:1;
            }
      }

      &__right-nav{
        width: 30%;
            max-width: 320px;
            background-color: #3b3c3d;
            flex: 1;
            padding: 30px 30px 0 30px;
            display: flex;
            justify-content: center;
            
      }
    }
</style>