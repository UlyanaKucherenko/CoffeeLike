<template>
   <a-carousel class="the-slider"
    :autoplay="true"
    :speed="1000"
    :autoplaySpeed="5000"
    effect="fade">
    <div class="the-slider__slide" v-for="item in slides" :key="item.name">
        <div class="the-slider__content">
            <div class="the-slider__col the-slider__col--left">
                <div  class="the-slider__text">
                    <h3 class="the-slider__title">{{item.name}}</h3>
                    <p class="the-slider__description">{{item.description}}</p>
                    <the-button class="the-slider__btn" type="detail">
                        <router-link to="/coffee" exact active-class="_active" class="the-slider__btn-link">
                            more detail
                        </router-link>
                    </the-button> 
                </div> 
            </div>
            <div class="the-slider__col the-slider__col--right">
                <div class="the-slider__wrap-image">
                    <img class="the-slider__product-image" :src="require(`@/assets/img/slides/${item.picture}.jpg`)" />
                </div>
            </div>
        </div>
    </div>
  </a-carousel>
</template>
<script>
export default {
  name:"TheSlider",
  components: {
    },
    data(){
        return{
            slides:[
                {
                    id: 1,
                    name: 'Lorem ipsum!',
                    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aut atque similique.',
                    picture:'coffee1',
                },
                {
                    id: 2,
                    name:'Latte',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'coffee4',
                },
                {
                    id: 3,
                    name:'Capuchino',
                    description: 'Also known as "Lungo" or "Long Black".',
                    picture:'coffee3',
                },
            ],
        }
    },
  methods: {
   
  },
};
</script>
<style lang="scss">
    .the-slider {
        width: 90%;
        background-color: rgba( rgb(104, 100, 100), 0.5);
        box-shadow: 0 14px 28px rgba(0,0,0,0.1), 0 10px 10px rgba(0,0,0,0.1);
        border-radius: 20px;
        min-height: 420px;
        padding: 20px 0;

       & .slick-slide {
        text-align: center;
        overflow: hidden;
        }

        &__content {
            @include flex(center,center,row);
            width: 100%;
            min-height: 300px;
            padding: 0 20px;
            margin-bottom: 50px;
            @include media($screen: 860px){ 
                @include flex(center,center,column-reverse);
                 padding: 10px 10px;
            }
        }
        &__col {
            @include flex(center,center,column);
             width: 50%;
               padding: 0 10px;
             &--left {
                max-width: 430px;
                 @include flex(space-between,flex-start,column);
             }
             &--right {
                max-width: 430px;
             }
             @include media($screen: 860px){ 
                 width: 100%;
                 padding: 0 0;
                &--right {
                     padding: 10px 0;
                }
            }
        }

        &__text {
            @include flex(space-between,flex-start,column);
            text-align: left;
            @include media($screen: 860px){ 
                 width: 100%;
                @include flex(center,center,column);
                text-align: center;
            }
            
        }
        &__wrap-image {
            width: 100%;
            @include padding-hack(65%, cover);
        }

        &__title {
            @include text(20px,500,#fff);
            margin-bottom: 20px;
        }
        &__description {
            @include text($small-size-mobile,500,#fff);
            min-height: 55px;
        }

        &__btn-link {
             @include text(14px,500,#fff);
             &:hover {
                  @include text(14px,500,#fff);
             }
        }

        & .slick-dots {
            height: 13px;
        }

        & .slick-dots-bottom {
            bottom: 0px;
        }

        & .slick-dots li  {
            margin-right: 45px;
            &:last-child {
                margin-right: 0;
            }
        }
        & .slick-dots li button {
            width: 13px;
            height: 13px;
            background: $white;
            border-radius: 50%;
        }

        & .slick-dots li.slick-active button {
            width: 13px;
            height: 13px;
        }
    }
</style>