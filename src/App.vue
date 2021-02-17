<template>
  <div class="app">
    <main-layout>
      <transition name="fade-in" mode="out-in">
      <router-view/>
      </transition>
    </main-layout>
  </div>
</template>
<script>
import MainLayout from './components/layout/MainLayout.vue';


export default {
  components: {
    MainLayout,

  }
}
</script>

<style lang="scss">

.app {
  min-height: 100vh;

  .fade-in-enter-active {
    animation: fadeIn 1.5s;
  }

  .fade-in-enter-leave {
    animation: fadeIn 1.5s;
  }

  @keyframes fadeIn {
      0% {
        opacity: 0; 
        }
      100% {
        opacity: 1; 
        }
  }
}

</style>
