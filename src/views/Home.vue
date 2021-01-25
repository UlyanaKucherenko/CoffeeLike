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
	
		<div class="home__slider-wrap">
			
			<a-carousel 
			:dot-position="dotPosition"
			:autoplay="false"
			:speed="3000"
			:fade="true"
			>
				<div class="home__slider-slide">
					<img class="home__slider-image" src="../assets/img/home-slid.png" />
				</div>
				<div class="home__slider-slide">
					<img  style="" src="https://image.freepik.com/free-photo/large-cup-of-coffee-on-vintage-wooden-background-spring-flowers-and-books_308079-380.jpg" />
				</div>
			</a-carousel>
			
		</div>
   
  </div>
</template>

<script>


export default {
  name: 'Home', 
  data() {
    return {
      dotPosition: 'top',
    };
  },

}
</script>

<style lang="scss" scoped>
  .home {
	display: flex;
	flex:1;
	height: 100vh;
	text-align: center;
	width: 70%;
    &__decor{
        width: 30%;
        max-width: 400px;
        flex: 1;
        padding: 70px 0px 0px 60px ;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		position: relative;
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
		font-family: Montserrat;
		font-style: normal;
		font-weight: 900;
		font-size: $title-size;
		
		color: #415167;
		z-index: 2;

		span {
			background-color:#C7A17A;
			color:white;
			padding: 0 10px;
		}
		@include media($screen: 1440px){
            font-size: 54px;
        }
	}

    &__slider-wrap {
		display: flex;
		flex: 1;
		position: relative;
		height: 100vh;
		width: 70%;
    }
	&__slider-slide {
		display: flex;
        flex: 1;
        position: relative;
		width: 70%; 
		@include padding-hack(100%, cover,);

	} 
	
	& .ant-carousel{
		text-align: center;
		height: 100%;
		line-height: 160px;
		background: #646566;
		overflow: hidden;
		width:calc(72vw);
		}
	& .ant-carousel .slick-slide {
		height: 100%;
		}
	
	& .ant-carousel .slick-list {
		height: 100%;
		}
  }

</style>