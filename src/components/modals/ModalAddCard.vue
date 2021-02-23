<template>
    <a-modal class="modal-add-card"
        :title="titleModal"
        :visible="visible"
        :confirm-loading="confirmLoading"
        @ok="onSubmit"
        @cancel="handleCancel" 

        >

       <a-form-model :model="form" >
            <div class="form__item-group">
                 <a-form-model-item v-model="form.img">
                    <a-avatar :src="currentItem.picture" style="width: 50px; height: 50px;" />
                </a-form-model-item>
                <a-form-model-item v-model="form.name"  class="form__item-image">
                    <h3>{{ currentItem.name}}</h3>
                </a-form-model-item>
            </div>
            <a-form-model-item >
            <a-radio-group v-model="form.size">
               <!-- <a-radio value="1">
                    <a-icon type="coffee" /> {{currentItem.prices.small}}$
                </a-radio>
                <a-radio value="2">
                    <a-icon type="coffee" style="font-size:25px"/> {{currentItem.prices.medium}}$
                </a-radio>
                 <a-radio value="3">
                     <a-icon type="coffee" style="font-size:30px"/> {{currentItem.prices.large}}$
                </a-radio>-->
                <a-radio value="200ml">
                    <a-icon type="coffee" /> 200ml
                </a-radio>
                <a-radio value="400ml">
                    <a-icon type="coffee" style="font-size:25px"/> 300ml
                </a-radio>
                 <a-radio value="500ml">
                     <a-icon type="coffee" style="font-size:30px"/> 500ml
                </a-radio>
            </a-radio-group>
            </a-form-model-item>
            <a-form-model-item label="Quantity:">
                 <a-input-number size="large" :min="1" :max="5" :default-value="1" @change="changeNumberOfDrinks" />
            </a-form-model-item>
        </a-form-model>
    </a-modal>
</template>
<script>
import {mapMutations, mapState} from 'vuex'

export default {
    name: "ModalAddCard",
    props: ["currentItem", "visible", "handleCancel"],
    data(){
        return{
            titleModal: "Add drink to shopping cart",
            confirmLoading: false,
            formData:{
                img:"",
                name: "",
                size: "",
                quantity: "",
                price:""
            },
            form: {
                img:"",
                name: "",
                size: "200ml",
                quantity: 1,
                price:"2"
            },
        }
    },

    methods: {
        changeNumberOfDrinks(value) {
            this.form.quantity  = value;
            console.log('changed number of drinks', this.quantity);
        },

        getRandomInt(min=60, max=1000) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
        },

        createFormData() {
            this.formData.img = this.currentItem.picture;
            this.formData.name = this.currentItem.name;
            this.formData.size = this.form.size;
            this.formData.quantity = this.form.quantity;
            this.formData.price = this.form.price;
            this.formData.id = this.getRandomInt();
            console.log("formData:",  this.formData);
        },

     ...mapMutations('shopCart', ['changeCartState']),

      onSubmit() {
        this.createFormData();
        this.confirmLoading = true;
        this.form.price = "2";
        this.changeCartState(this.formData);
        localStorage.setItem("shopCart", JSON.stringify(this.formData));  
        console.log("formData:",  this.cart);
        
        setTimeout(() => { 
           this.visible = false;
            this.form.size = "200ml";
            this.form.quantity= 1,
            this.confirmLoading = false;
        }, 2000);
    },
       
  },

   computed: {
        ...mapState("shopCart", ["cart"])
   }
}
</script>
<style lang="scss">
    .form__item-group{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 50%;

    }

</style>