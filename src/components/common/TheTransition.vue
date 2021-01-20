<template>
    <transition :name="name">
        <slot />
    </transition>
</template>
<script>
export default {
    name:'TheTransition',
    props: {
        name:{
            type:String,
            default:"fade-in"
        }
    }
}
</script>
<style lang="scss">

    .fade-in-enter-active {
        animation: fadeIn 2s;
        }

    .fade-in-enter-leave {
        animation: fadeIn 2s;
        }

    @keyframes fadeIn {
        0% {
            opacity: 0; 
            }
            100% {
            opacity: 1; 
            }
        }

</style>