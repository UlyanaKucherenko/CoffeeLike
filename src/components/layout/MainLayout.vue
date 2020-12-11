<template>
    <div class="main-layout">
        <div class="main-layout__content">
            <slot />
        </div>
        <div class="main-layout__nav">Nav</div>
        
    </div>
</template>

<script>

export default {
    name: 'MainLayout',
}
</script>

<style lang="scss" >
    .main-layout {
        display: flex;
        justify-content: stretch;
        align-items: stretch;
        flex:1;

        &__content {
            flex: 1;
            display: flex;
            & > *{
                flex:1;
            }
        }

        &__nav {
            width: 100%;
            max-width: 320px;
            background-color: #415167;
            flex: 1;
        }
    }
</style>