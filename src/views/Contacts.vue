<template>
    <div class="contacts">   
        <div class="contacts__container">
            <x-icon icon=pin class="contacts__title-icon"/>
            <h3 class="contacts__title">our contacts</h3>
            <div class="contacts__main">
                <div class="contacts__info">
                    <ul class="contacts__social-links">
                        <li class="contacts__social-links-item">
                            <a href="#"  target="_blank" class="contacts__link">
                                <a-icon type="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="contacts__link">
                                <a-icon type="instagram" />
                            </a>
                        </li>
                    </ul>
                    <p class="contacts__tel"><a-icon type="phone" /><a href="tel:+1234567890"> +1234567890</a></p>
                    <p class="contacts__adress"><a-icon type="environment" /> Profesora Michała Życzkowskiego 37</p>
                </div>
                
                <div class="contacts__map-wrap">
                    <iframe class="contacts__map"      
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4946.718475041292!2d19.99624863863642!3d50.07540269832203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1612366491659!5m2!1sru!2sua" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import XIcon from '../components/common/XIcon.vue'

export default {
    name: 'Contacts',
    components: {
        XIcon
     },
    
}
</script>
<style  lang="scss" scoped>
    .contacts {
        text-align: center;
        flex: 1;
        width: 70%;
        height: 100%;
        position: relative;
        
        &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        background: url("../assets/img/our-contact.jpg") no-repeat center;
        background-size: cover;
        z-index: 0;
        }

        &__container{
            position: relative;
            @include flex(flex-start,center,column);
            padding: 30px 0px 0px;
            height: 100%;
            background-color: rgba(#777d86,0.5);
        }

        &__title-icon{
            margin-bottom: 30px;
        }

        &__title {
            @include text(35px, 900, #fff);
            font-family: Montserrat;
            text-transform: uppercase;
            margin-bottom: 60px;
        }

        &__main {
            background-color: rgba(#575b61,0.8);
            width: 80%;
            @include flex(center,center,row);
            position: relative;
            padding: 10px;

            @include media($screen: $screen-tablet-large){
                 @include flex(center,center,column);
                 width: 90%;
            }
        }

        &__map-wrap{
            width: 50%;
            position: relative;
            background-color:#777d86;
            font-size: 0;
            @include media($screen: $screen-tablet-large){
                width: 90%;
            }
        }
        &__map{
            width: 100%;
            height:300px;
             @include media($screen: $screen-tablet-large){
                height:200px;
            }
        }

        &__info{
            width:50%;
            @include flex(center,center,column);
            text-align: center;
            padding-right: 10px;
            @include text(17px, 400, #fff);
             @include media($screen: $screen-tablet-large){
                width:90%;
                margin-bottom: 20px;
            }
            
        }

        &__social-links {
             @include flex(center,center,row);
             font-size: 45px;
             width: 100%;
        }

         &__social-links-item {
             margin-right: 20px;
             &:last-child{
                 margin-right: 0;
             }
        }

        &__link{
            color: #C7A17A;
             &:hover {
            color: darken( #C7A17A, 10%);
            }
            &:active {
                color: darken( #C7A17A, 20%);
            }
        }
        &__tel,
        &__adress{
            @include text(17px, 400, #fff);
        }

        &__tel a{
            color: #C7A17A;
             &:hover {
            color: darken( #C7A17A, 10%);
            }
            &:active {
                color: darken( #C7A17A, 20%);
            }
        }
         &__adress{
           margin-bottom: 0;
        }
      
    }

</style>