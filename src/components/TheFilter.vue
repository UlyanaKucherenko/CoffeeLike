<template>
    <div class="the-filter">
        <h5>Please, select item</h5>

        <a-select
            ref="categoriesRef"
            allowClear
            style="width: 200px; margin-right: 16px"
            @change="handleChange"
            placeholder="Select category"
        >
            <a-select-option  
            v-for="category in filterCategories" :key="category"
            :value="category">
                {{category}}
            </a-select-option>
            <a-select-option  
            value="allCoffee">
                All Coffee
            </a-select-option>
                       
        </a-select>

        <input class="the-filter__input-search" v-model="textSearch" placeholder="What you are looking for...">
        <p>You are looking for: {{ textSearch }}</p>
        <button class="the-filter__button-search" @click="search()">Search</button>
    </div>
</template>

<script>
export default {
    name:'TheFilter',

    data() {
        return {
            coffee:[],
            textSearch: '',
            filterCategories: [
                "cocktail",
                "Classic drinks",
                "Author's teas"
            ],
            selectedFilter:'',
      
        }
    },

     methods: {
          search(){
            this.loading = true;
            this.getCoffeeCategory(); 
        },

          async getCoffeeCategory() {
             console.log('getCoffeeCategory() ');
          },

        //select
             handleChange(value) {
                this.selectedFilter = value;
                console.log('value', value);
            },
    },
}
</script>
<style lang="scss">

    .the-filter {
           width: 100%;
           border-bottom: 1px solid rgb(185, 181, 181);
           margin-bottom: 20px;
           @include flex(flex-start, stretch,  column,  wrap);
           text-align: left;
       

        &__input-search {
            width: 300px;
        }

        &__button-search {
             width: 300px;
        }
    }
</style>