<template>
  <div class="home">
    <div class="home__decor">
		<div  class="home__logo">
			<router-link to="/" class="home__logo-link">
				CoffeeLike
			</router-link>
		</div>
		<h1 class="home__title">
				YOUR <span>PERSONALIZED</span>  COFFEE
		</h1>
	</div>
	
	<div class="home__main">
	
	</div>
   
  </div>
</template>

<script>
import {firestore} from '../firebase/firebase.utils.js'
import {mapActions} from 'vuex'
export default {
  name: 'Home', 
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
    &__decor{
		background-color: #fff;
        width: 30%;
        max-width: 400px;
        flex: 1;
        padding: 70px 0px 0px 30px ;
		position: relative;
		@include flex(flex-start, flex-start, column);

		@include media($screen: 1660px){
		max-width: 320px;
		}

		@include media($screen: 1440px){
			max-width: 265px;
		}

		@include media($screen: 1240px){
            max-width: 250px;
            padding: 50px 0px 0 15px;
        }	
    }

	&__logo-link {
		display: inline-block;
		width: 200px;
		@include text(30px, 700, rgb(24, 23, 23));

		@include media($screen: 1440px){
            width: 130px;
        }
	}

	&__title {
		text-align: left;
		display: inline-block;
		margin-bottom: 0;
		position: absolute;
		bottom:80px;
		left: 105px;
		@include text($title-size, 900, #415167);
		font-family: Montserrat;
		z-index: 2;

		span {
			background-color:#C7A17A;
			color:white;
			padding: 0 10px;
		}

		@include media($screen: 1660px){
			left:30px;
        }
		@include media($screen: 1440px){
			font-size: 54px;
			bottom:40px;
        }

		@include media($screen: 1240px){ 
			left: 20px;
			font-size: 44px;
        }
	}

    &__main {
		display: flex;
		flex: 1;
		position: relative;
		width: 100%;
		background-color:#666464;

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
		}
    }
  }

</style>