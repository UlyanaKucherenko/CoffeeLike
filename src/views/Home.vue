<template>
  <div class="home">
	<div  class="home__logo">
		<router-link to="/" class="home__logo-link">
			CoffeeLike
		</router-link>
	</div>
	<h1 class="home__title">
		YOUR <span>PERSONALIZED</span>  COFFEE
	</h1>
	
	<div class="home__main">
		<div class="home__wrap-slider">
			<the-slider />
		</div>
	</div>
   
  </div>
</template>

<script>
import {firestore} from '../firebase/firebase.utils.js'
import TheSlider from "../components/TheSlider.vue"
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  components:{
	TheSlider,
  },
  data() {
    return {
	
    };
  },
  methods:{
	async getAllDrinks() {
            try {
                const res = firestore.collection(`coffee`);
				const parsedRes = await res.get();
				let getData =[];
                parsedRes.forEach(function(item) {
                    getData.push( item.data());
                });
                return getData;
			} 
			catch (error) {
				console.log(error)
            }
		},
		
		...mapActions('allDrinks', ['addItemToAllDrinks']),
  },

    async created() {
		const dataDrinks = await this.getAllDrinks();
		dataDrinks.forEach(item =>{
			this.addItemToAllDrinks(item);
		});
    },

}
</script>

<style lang="scss" scoped>
  .home {
	display: flex;
	flex:1;
	height: 100%;
	text-align: center;
	width: 70%;

	padding-left: 300px;
	position: relative;

	@include media($screen: 1366px){ 	
		padding-left: 240px;
    }

	@include media($screen: 860px){ 
		padding-left: 0px;
		width: 90%;
    }
	

	&__logo-link {
		display: inline-block;
		position: absolute;
		z-index: 2;
		top:30px;
		left: 20px;
		@include text(30px, 700, rgb(24, 23, 23));
		@include media($screen: $screen-tablet-large){
           @include text(30px, 700, #fff);
        }
	}

	&__title {
		width: 30%;
        max-width: 400px;
		text-align: left;
		display: inline-block;
		margin-bottom: 0;
		position: absolute;
		bottom:80px;
		left: 20px;
		@include text($title-size, 900, #415167);
		font-family: Montserrat;
		z-index: 2;

		span {
			background-color:#C7A17A;
			color:white;
			padding: 0 10px;
		}

		@include media($screen: 1440px){
			font-size: 54px;	
			bottom:60px;
        }

		@include media($screen: 1366px){ 
			font-size: 44px;
        }
		@include media($screen: 860px){ 
			display: none;
        }
	}

    &__main {
		@include flex(center,center,column);
		flex: 1;
		position: relative;
		width: 70%;
		background-color:#666464;
		border-radius: 25px 0 0px 25px;

		&:before {
			content: "";
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			display: block;
			background: url("../assets/img/home-slid.png") no-repeat center;
			background-size: cover;
			z-index: 0;
			border-radius: 25px 0 0px 25px;
			@include media($screen: 860px){ 
				border-radius: 0px 0 0px 0px;
			}
		}
		@include media($screen: 860px){ 
			width: 90%;
			border-radius: 0px 0 0px 0px;
        }
    }

	&__wrap-slider{
		width: 100%; 
		height: 100%;
		background-color: rgba(#666464,0.3);
		position: relative;
		padding-top: 30px;
		@include flex(flex-start,center,column);
		border-radius: 25px 0 0px 25px;
			@include media($screen: 860px){ 
			border-radius: 0px 0 0px 0px;
			padding-top: 86px;
        }
	}
  }

</style>