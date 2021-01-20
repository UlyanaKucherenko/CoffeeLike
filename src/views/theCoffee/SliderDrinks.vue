<template>
    <div class="slider-drinks">  
        <div class="slider-drinks__wrap-btn">
                <router-link to="/coffee/all-drinks">
                    <the-button class="coffee__btn" icon="arrow-right" type="secondary" @click="handleClick">All drinks </the-button>
                </router-link>
            </div>
         <carousel
            :dots="false"
            :responsive="{0:{items:1},1024:{items:2},1366:{items:3}}"
            :margin="20"
            :loop="false"
            :nav="false" class="slider-drinks__curousel">
            <template slot="prev"><span class="prev slider-drinks__prev"><a-icon type="left-circle" /></span></template>

                <div class="slider-drinks__slide" v-for="{id,name,description,picture } of coffee" :key="name">

                    <div class="slider-drinks__product">
                        <div class="slider-drinks__product-card" @click="showModal" :id="id">
                            <div class="slider-drinks__product-wrap-image">
                                <img class="slider-drinks__product-image" :src="require(`@/assets/img/product/${picture}.png`)" />
                            </div>
                            <div class="slider-drinks__prodect-meta">
                                <h4>{{name}}</h4>
                                <div>
                                    <p>22.5$</p>
                                    {{description}}
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="slider-drinks__product">
                        <div class="slider-drinks__product-card" @click="showModal">
                            <div class="slider-drinks__product-wrap-image">
                                <img src="data:image/jpeg;base64,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"/>
                            </div>
                            <div class="slider-drinks__meta">
                                <h4>{{name}}</h4>
                                <div>
                                    <p>22.5$</p>
                                    {{description}}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            <template slot="next"><span class="next slider-drinks__next"><a-icon type="right-circle" /></span></template>
        </carousel>

<!--
        <a-modal class="the-modal"
            title='Info'
            :visible="visible"
            :confirm-loading="confirmLoading"
            @ok="handleOk"
            @cancel="handleCancel"
            >
             <div class="the-modal__product">      
                 <a-form-model :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
                        <div class="the-modal__product-info">
                            <div class="the-modal__wrap-image">
                                <img class="the-modal__image" src="../../assets/img/product/1.png" />
                            </div>
                            <div class="the-modal__product-text">
                                <h3>Americano</h3>
                                <p>Also known as "Lungo" or "Long Black"</p>   
                            </div>
                        </div>  
                    <a-form-model-item label="Activity type">
                        <div>
                            <a-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />
                        </div>
                    </a-form-model-item>
                    <a-form-model-item label="Size cup">
                    <a-radio-group v-model="form.resource">
                        <a-radio value="1">
                        small
                        </a-radio>
                        <a-radio value="2">
                        middle
                        </a-radio>
                        <a-radio value="3">
                        big
                        </a-radio>
                    </a-radio-group>
                    </a-form-model-item>
                    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
                    <a-button type="primary" @click="onSubmit">
                        Create
                    </a-button>
                    <a-button style="margin-left: 10px;">
                        Cancel
                    </a-button>
                    </a-form-model-item>
                </a-form-model>
            </div>
        </a-modal>
    -->
    
    <the-modal
        :visible="visible"
        @handle-cancel="hideModal"
        @handle-ok="hideModal">

        <a-form-model 
        :model="form" 
        :label-col="labelCol" 
        :wrapper-col="wrapperCol">
            <div class="form__product-info">
                <div class="form__wrap-image">
                    <img class="form__image" src="../../assets/img/product/1.png" />
                </div>
                <div class="form__product-text">
                    <h3>Americano</h3>
                    <p>Also known as "Lungo" or "Long Black"</p>   
                </div>
            </div>  
                <a-form-model-item label="Activity type">
                    <div>
                        <a-input-number size="large" :min="1" :max="100000" :default-value="3" @change="onChange" />
                    </div>
                </a-form-model-item>
                
                <a-form-model-item label="Size cup">
                <a-radio-group v-model="form.resource">
                    <a-radio value="1">
                    small
                    </a-radio>
                    <a-radio value="2">
                    middle
                    </a-radio>
                    <a-radio value="3">
                    big
                    </a-radio>
                </a-radio-group>
                </a-form-model-item>
                    <a-form-model-item :wrapperol="{ span: 14, offset: 4 }">
                <a-button type="primary" >
                    Create
                </a-button>
                <a-button style="margin-left: 10px;">
                    Cancel
                </a-button>
                </a-form-model-item>
            </a-form-model>
    </the-modal>
    
    </div>
</template>

<script>
import carousel from 'vue-owl-carousel';
import TheModal from '../../components/common/TheModal'

export default {
    name: 'SliderDrinks',
    components: {
        carousel, 
        TheModal
        
    },
    data() {
        return {
            
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
            form: {
                name: '',
                region: undefined,
                date1: undefined,
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            visible: false,
            coffee:[
                {
                    id: 1,
                    name: 'Americano',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'3',
                },
                {
                    id: 2,
                    name:'Latte',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'1',
                },
                {
                    id: 3,
                    name:'Capuchino',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'2',
                },
                {
                    name:'Big Latte',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'1',
                },
            ],
        }
    },
    methods: {
        handleClick() {
            console.log('BTN clicked');
        },
        showModal() {
            this.visible = true;
        },
        hideModal() {
            this.visible = false;
        },
        onChange(value) {
            console.log('changed', value);
        },
    }
}
</script>
<style lang="scss">
    .slider-drinks {
        //max-width:1090px;
        width: 100%;
        position: relative;
         &__wrap-btn {
            margin-bottom: 10px;
            display: flex;
            width: 100%;
            justify-content: flex-end;
            padding: 0 20px;
        }
        &__curousel {
        padding: 0px 10px;
       position: relative;
        }

         &__prev {
            left: 20px;
            position: absolute;
            top:42%;
            z-index: 2;
            display: inline-block;
             font-size: 40px;
        }

        &__next {
            right: 20px;
            position: absolute;
            top:42%;
            z-index: 1;
            display: inline-block;
            font-size: 40px;
        }

        &__slide {
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             min-height: 400px;
             max-width: 320px;
             position: relative;
             padding: 10px 0px 10px 10px;
        }

        &__product {
            display: flex;
             flex-direction: column;
             height: 180px;
             max-width: 487px; 
             width: 100%;
        }

        &__product-card {
            display: flex;
            height: 180px;
            cursor: pointer;
            box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
            &:hover {
                box-shadow: 0 14px 28px rgba(0,0,0,0.3), 0 10px 10px rgba(0,0,0,0.3);
                transition: 0.5s;
            }
        }

        &__product-wrap-image {
            width: 200px;
            @include padding-hack($padding: 60%, $size: cover);
        }

        &__prodect-meta {
            margin-bottom: 20px;
            padding: 0;
            text-align: left;
        }
    }
   .form {
        @include flex(center,center);
        & .ant-modal-body {
           
        }
       
       &__wrap-image {
            width: 100px;
            @include padding-hack($padding: 23%, $size: cover);
       }
       &__product {
           display: flex;
           flex-direction: column;
           margin-bottom: 10px;
       }

       &__product-info {
           display:flex;
           flex-direction: row;
       }

    }
</style>