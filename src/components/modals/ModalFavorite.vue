<template>
     <a-modal title="Favorite drinks" @ok="handleOk"
        :visible="visible"
        @cancel="handleCancel" >

         <table class="favorite__list">
                 <tr class="favorite__item-list" v-for="item in favoriteDrinksWithDescription" :key="item.id">
                    <td><a-avatar class="favorite__item-img" :src="item.picture" /></td>
                    <td class="favorite__item-name">{{item.name}}</td>
                    <td><a-button  icon="delete" /></td>
                </tr>
            </table>
        </a-modal>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: "ModalFavorite",
    props: ["currentItem", "visible", "handleCancel"],
    data(){
        return{
             favoriteDrinksWithDescription: [],
        }
    },

      methods:{

        handleClick() {
            this.visible = true;
            const dataForModal = this.allDrinks.filter(item => this.favoriteDrinks.includes(item.id))
            console.log("dataForModal", dataForModal);
            this.favoriteDrinksWithDescription = dataForModal;
        },
         handleOk(e) {
            console.log(e);
            this.visible = false;
        },
        ...mapMutations("favoriteCoffee", ["changeFavoriteState"])

    },

     computed: {
        ...mapState("shopCart", ["cart"]),
        ...mapState("favoriteCoffee", ["favoriteDrinks"]),
        ...mapState('allDrinks', ['allDrinks']),
        
    },
    
     

}
</script>