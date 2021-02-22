<template>
    <button class="the-button" :class="[type]" @click="$emit('click')">
        <span class="the-button__text">
            <slot />
        </span>
         <a-icon v-if="icon" :type="icon" class="the-button__icon" :spin="spin"/>
    </button>
</template>

<script>


export default {
    name: 'theButton',
    props: {
        type: {
         validator(value){
             return ['primary','addCart','detail','favorite','clear', 'makeOder'].indexOf(value) !== -1;
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
        transition:.2s ease;

        &.addCart {
            background-color: rgb(38, 126, 38);
              border-radius: 0px;
             &:hover {
            background-color: lighten($test, 10%);
            }
            &:active {
                background-color: darken($test, 10%);
            }
        }

          &.detail {
            background-color: #306d3ef8;
            border:2px solid #306d3ef8;
            border-radius: 0px;
            max-width: 150px;
            width: 100%;
            text-transform: uppercase;
            color: #fff;
            font-weight: 600px;
            transition: all 0.5s ease-out;
            
             &:hover {
                border:2px solid #fff;
                background-color: rgba(#000, 0.3);
            }
            &:active {
              background-color: rgba(#000, 0.6);
            }
        } 

         &.favorite {
            background-color: white;
            border-radius: 0px;
            color: rgb(38, 126, 38);
            font-size: 30px;
            padding: 0 5px;
            
        }

         &.clear{
            border-radius: 0px;
            background-color: gainsboro;
            text-transform: uppercase;
            max-width: 150px;
            width: 30%;
            font-size: 14px;
            transition: all 0.5s ease-out;
            padding: 0 15px;

            &:hover {
            background-color: lighten(#C7A17A, 10%);
            }
            &:active {
                background-color: darken(#C7A17A, 10%);
            }
        }

         &.makeOder{
            border-radius: 0px;
            background-color: #306d3ef8;
            text-transform: uppercase;
            max-width: 200px;
            width: 40%;
            font-size: 14px;
            transition: all 0.5s ease-out;
            padding: 0 15px;

            &:hover {
            background-color: lighten(#306d3ef8, 10%);
            }
            &:active {
                background-color: darken(#306d3ef8, 10%);
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