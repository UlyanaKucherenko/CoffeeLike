<template>
    <div id="contact" class="contacts">   
           
        <div class="contacts__bg">
                <x-icon icon=pin />
        </div>
        <div class="contacts__wrapp-content">
            <div class="contacts__container container">
                <span class="contacts__icon">
                    <x-icon icon=layer />
                </span>
                <h3 class="contacts__title">our contacts</h3>

                <form action="" method="post" class="contacts__form">
                    <input class="contacts__input" type="text" name="name" placeholder="Your Name *" />
                    <input class="contacts__input" type="email" name="email" placeholder="Your Email *" />
                    <textarea class="contacts__textarea" placeholder="Your Message *"></textarea>
                    <button class="contacts__form-btn" type="submit">SEND MESSAGE</button>
                </form>
            </div>
           
        </div>
    </div>
</template>

<script>
import XIcon from '../components/common/XIcon'
export default {
    name: 'Contacts',
    components: { 
        XIcon
     },
    
}
</script>
<style  lang="scss" scoped>
    .contacts {
        height: 900px;
        position: relative;
        width: 100%;

        &__bg {
           
            position: absolute;
            color:#5c5c5c;
            z-index: 0;
            display: inline-block;
            top: 231px;
            left: 56%;
        }

        &__wrapp-content {
            z-index: 1;
            position: absolute;
            top:0;
            width: 100%;
            height:100%;
            padding: 50px 0;
        }

        &__container {
             @include flex(center, center, column);
             text-align: center;
        }

        &__icon {
            margin-bottom: 25px;
        }

        &__title {
            margin-bottom: 270px;
            font-family:  ProximaNova;
            @include text(36px, 400, #2b2828); 
            text-transform: uppercase;

            @include media(879px) {
               margin-bottom: 100px;

            }
        }

        &__form {
            max-width:860px;
            width: 100%;
            @include flex(center, center, row, wrap);
            font-family: 'PT Sans', sans-serif;

            @include media(879px) {
                margin-right: 20px;
                @include flex(center, center, column, wrap);
                 max-width:420px;
                width: 100%;
            }
        }
        &__input {
            max-width:415px;
            width: 50%;
            margin-right: auto;
            margin-bottom: 30px;
            padding: 0 15px;
            height: 60px;
            @include flex(flex-start, center, row);
            border:none;
            overflow: hidden;
            background-color: rgba(#2b2828,0.5);
            @include text(18px,400, #5c5959);
            &::-webkit-input-placeholder { /* WebKit browsers */
            @include text(18px,400, white);
        }
            
            font-style: italic;
  
            @include media(960px) {
               margin-right: 20px;
            }
            @include media(879px) {
               margin-right: 0px;
               width: 100%;

            }
            
        }
        &__input[type=email] {
            margin-right: 0;
        }
        &__textarea {
            width: 100%;
            height: 200px;
            background-color: rgba(#2b2828,0.5);
            border:none;
            padding: 10px 15px 0 15px;
            overflow: hidden;
            margin-bottom: 50px;
            @include text(18px,400,  #5c5959);
            font-style: italic;
            &::-webkit-input-placeholder { /* WebKit browsers */
            @include text(18px,400, white);
            }
        }

        &__form-btn {
            max-width: 293px;
            width: 100%;
            height: 70px;
            padding:  0 15;
            border-radius: 4px;
            background-color: #9f9acf;
            border: none;
            border-bottom: 4px solid rgba($color: #000000, $alpha: 0.3); 
            outline:none;
            @include flex(center, center, row);
            cursor: pointer;

            @include text(20px, 700, #FFFFFF); 
            text-transform: uppercase;
            font-family: ProximaNova;
            letter-spacing: 0.4px;
            text-align: center;
            
            &:hover {
                background-color: rgba(#646161,0.8);
                transition: all .3s ease-in;
                border-bottom: none;
            }

            &:active {
                background-color: rgba(#ffbe33,1);
                transition: all .1s ease-in;
                outline:none;
            }
        }
    }

</style>