<template>
    <a-modal class="modal-add-card"
        :title="titleModal"
        :visible="visible"
        @ok="onSubmit"
        @cancel="handleCancel" >

        <a-avatar :src="currentItem.picture" style="width: 50px; height: 50px;" />
       <a-form-model :model="form" >
            <a-form-model-item v-model="form.name">
                <h3>{{ currentItem.name}}</h3>
            </a-form-model-item>
            <a-form-model-item >
            <a-radio-group v-model="form.size">
                <a-radio value="1">
                    <a-icon type="coffee" /> {{currentItem.prices.small}}$
                </a-radio>
                <a-radio value="2">
                    <a-icon type="coffee" style="font-size:25px"/> {{currentItem.prices.medium}}$
                </a-radio>
                 <a-radio value="3">
                     <a-icon type="coffee" style="font-size:30px"/> {{currentItem.prices.large}}$
                </a-radio>
            </a-radio-group>
            </a-form-model-item>
            <a-form-model-item >
                 <a-input-number size="large" :min="1" :max="5" :default-value="1" @change="changeNumberOfDrinks" />
            </a-form-model-item>
        </a-form-model>
    </a-modal>
</template>
<script>
import {mapMutations} from 'vuex'

export default {
    name: "ModalAddCard",
    props: ["currentItem", "visible", "handleCancel"],
    data(){
        return{
            titleModal: "Add drink to shopping cart",
            form: {
                name: "",
                size: "1",
                numberOfDrinks: 1,
            },
        }
    },

    methods: {
        changeNumberOfDrinks(value) {
            this.form.numberOfDrinks  = value;
            console.log('changed number of drinks', this.numberOfDrinks);
    },

     ...mapMutations('shopCart', ['changeCartState']),

      onSubmit() {
        this.form.name = this.currentItem.name;
        console.log('Submit Form with data !', this.form);
        this.changeCartState(this.form);
    },
       
  },
}
</script>
<style lang="scss">

</style>