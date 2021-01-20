<template>
    <component :is="getIcon"></component>
</template>

<script>
const getName = (name) => `icon-${name}`;
export default {
    name: 'Icon',
    props: {
        icon:{
            type:   String,
            default: 'facebook',
        },
    }, 
    components: {

        [getName('facebook')]: () => import('../icons/IconFacebook.vue'),
        [getName('google')]: () => import('../icons/IconGoogle.vue'),
        [getName('linkedin')]: () => import('../icons/IconLinkedin.vue'),
        [getName('twitter')]: () => import('../icons/IconTwitter.vue'),
        [getName('stars')]: () => import('../icons/IconStars.vue'),

    },
    computed: {
        getIcon() {
            return getName(this.icon);
        },
    },
};
</script>
