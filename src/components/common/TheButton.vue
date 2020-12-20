<template>
    <button class="the-button" :class="[type]" @click="$emit('click')">
        <a-icon v-if="icon" :type="icon" class="the-button__icon" :spin="spin"/>
        <span class="the-button__text">
            <slot />
        </span>
    </button>
</template>

<script>


export default {
    name: 'theButton',
    props: {
        type: {
         validator(value){
             return ['primary','secondary','danger'].indexOf(value) !== -1;
         },
         default: "primary",
        },

        icon: {
            type: String,
        },
        spin: {
            type: Boolean,
            default: false
        }
    },
};

</script>

<style lang="scss">
    .the-button {
        background-color: #C7A17A;
        border-radius: 19px;
        border: none;
        outline: none;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 46px;
        padding: 0 24px;
        cursor: pointer;
        transition:  background-color .2s ease;

        &.secondary {
            background-color: $test;
             &:hover {
            background-color: lighten($test, 10%);
            }
            &:active {
                background-color: darken($test, 10%);
            }
        }

          &.danger {
            background-color: #eb6a6a;
             &:hover {
            background-color: lighten(#eb6a6a, 10%);
            }
            &:active {
                background-color: darken(#eb6a6a, 10%);
            }
        } 

        &:hover {
            background-color: lighten(#C7A17A, 10%);
        }
        &:active {
            background-color: darken(#C7A17A, 10%);
        }

        &__icon {
            margin-right: 10px;
        }
    }
</style>