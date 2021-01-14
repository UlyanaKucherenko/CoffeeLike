<template>
    <div class="all-drinks">
        <div class="all-drinks__wrap-btn">
                <router-link to="/coffee">
                    <the-button class="coffee__btn" :class="{drinksshow : allDrinksShow}" icon="arrow-left" type="" @click="handleClick"></the-button>
                </router-link>
            </div>
        <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />       
        <div class="all-drinks__products">

            <div class="all-drinks__product" v-for="{name,description,picture } of coffee" :key="name">
                <a-card hoverable class="all-drinks__card" style="max-width: 200px" @click="showModal">
                    <img
                    slot="cover"
                     alt="example"
                    :src="require(`@/assets/img/product/${picture}.png`)"
                    />
                    <a-card-meta :title=name>
                    <template slot="description">
                        {{description}}
                    </template>
                    </a-card-meta>
                </a-card>
            </div>
        </div>
        
        <a-modal
                        title="Title"
                        :visible="visible"
                        :confirm-loading="confirmLoading"
                        @ok="handleOk"
                        @cancel="handleCancel"
                        >
                        <p>{{ ModalText }}</p>
                        </a-modal>
    </div>
</template>

<script>
export default {
    name:'AllDrinks',
    data() {
        return {
            visible:false,
            coffee:[
                {
                    name:'Americano',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'3',
                },
                {
                    name:'Latte',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'1',
                },
                {
                    name:'Capuchino',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'2',
                },
                {
                    name:'Big Latte',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'1',
                },
                {
                    name:'Glyace',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'1',
                },
            ],
        }
    },
    methods:{
        showModal() {
            this.visible = true;
        },
        handleCancel() {
            this.visible = false;
        }
    }
}
</script>
<style lang="scss">
    .all-drinks {

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__wrap-btn {
            margin-bottom: 10px;
            display: flex;
            width: 100%;
            justify-content: flex-start;
            padding: 0 20px;
        }
        &__products {
            display: flex;
            /*flex-direction: row;
            justify-content: space-between;*/
            align-items: stretch;
            margin:0 -20px;
            flex-wrap: wrap;
            
        }

        &__product {
            flex: 1 1 25%;
            max-width: 25%;
             padding: 10px 20px;

             & > div {
                 height: 100%;
             }
        }

        &__product-content {
            border: 1px solid rgb(190, 189, 189);
        }

        &__card {
            display: flex;
            flex-direction: column;
            height: 200px;
        }
    }
</style>