<template>

    <ul  class="side-bar">
        <li class="side-bar__item" v-for="route in routes" :key="route.name">
            <router-link :to="route.path" exact active-class="_active" class="side-bar__item-link">{{route.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
             routes: [],
        }
    },
    mounted() {
        this.routes = this.$router.options.routes;
    }
   
}
</script>

<style lang="scss">
    .side-bar {
        &__item {
            margin-bottom: 30px;
        }

        &__item-link {
            font-family: Nunito;
            font-style: normal;
            font-weight: 700;
            font-size: 16px;
            color: #EDF0F5;
            text-decoration: none;
            transition: 0.2s ease;
            transition-property: color;
            &:hover {
               color: orangered;
            }
            &._active {
               color: orangered;
            }
        }
    }
</style>