<template>
<div class="the-slider">
    <a-carousel>
    <div class="the-slider__slide">
        <div class="the-slider__content">
            <div class="the-slider__col the-slider__text">
                <h3 class="the-slider__title">Lorem ipsum!</h3>
                <p class="the-slider__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aut atque similique accusamus beatae ut soluta, doloremque non eaque mollitia ducimus.</p>
                <the-button class="the-slider__btn" type="addCart">
                    Add 
                </the-button>  
            </div>
            <div class="the-slider__col the-slider__wrap-image">
                <img class="the-slider__product-image" src="https://picsum.photos/seed/picsum/200/300" />
            </div>
        </div>
    </div>
    <div class="the-slider__slide">
        <div class="the-slider__content">
            <div class="the-slider__col the-slider__text">
                <h3 class="the-slider__title">Lorem ipsum!</h3>
                <p class="the-slider__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, aut atque similique accusamus beatae ut soluta, doloremque non eaque mollitia ducimus.</p>
                <the-button class="the-slider__btn" type="addCart">
                    Add 
                </the-button>  
            </div>
            <div class="the-slider__col the-slider__wrap-image">
                <img class="the-slider__product-image" src="https://picsum.photos/seed/picsum/200/300" />
            </div>
        </div>
    </div>
  </a-carousel>
</div>
</template>
<script>
export default {
  name:"TheSlider",
  methods: {
   
  },
};
</script>
<style lang="scss">
    .the-slider {
        width: 85%;
       & .ant-carousel .slick-slide {
        text-align: center;
       
        background-color: rgba( rgb(104, 100, 100), 0.5);
        overflow: hidden;
        border-radius: 20px;
        }

        &__content {
            @include flex(center,center,row);
            width: 100%;
            min-height: 400px;
            padding: 0 20px;
            @include media($screen: 860px){ 
                @include flex(center,center,column-reverse);
                 padding: 10px 10px;
            }
        }
        &__col {
            @include flex(center,center,column);
        }

        &__text {
            padding: 0 20px 0 0px;
            width: 60%;
            @include flex(center,flex-start,column);
            text-align: left;
            @include media($screen: 860px){ 
                 width: 100%;
                @include flex(center,center,column);
                text-align: center;
            }
            
        }
        &__wrap-image {
            width: 40%;
            @include padding-hack(25%, cover);
            @include media($screen: 860px){ 
                width: 50%;
            }
        }

        &__title {
            @include text(20px,500,#fff);
        }
        &__description {
            @include text($small-size-mobile,500,#fff);
        }

    }
</style>