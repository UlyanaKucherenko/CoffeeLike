<template>
  <div class="home">
    <div class="home__decor">
		<div  class="home__logo">
			<router-link to="/" class="home__logo-link">
				<img src="../assets/img/revo_logo.png" alt="">	
			</router-link>
		</div>
		<h1 class="home__title">
				YOUR <span>PERSONALIZED</span>  COFFEE
		</h1>
	</div>
	
		<div class="home__slider-wrap">
			
			<a-carousel 
			:dot-position="dotPosition"
			autoplay="true"
			speed="3000"
			fade="true"
			>
				<div class="home__slider-slide">
					<img src="../assets/img/home-slid.png" />
				</div>
				<div class="home__slider-slide">
					<img src="../assets/img/home-slid.png" />
				</div>
			</a-carousel>
			
		</div>
   
  </div>
</template>

<script>

export default {
  name: 'Home', 
  /*components: {
	
  },*/
  data() {
    return {
      dotPosition: 'top',
    };
  },
   methods: {
         onChange(a, b, c) {
            console.log(a, b, c);
			},
			
   },

}
</script>

<style lang="scss" scoped>


	
  .home {
	display: flex;
	flex:1;
	height: 100vh;
	text-align: center;
    &__decor{
        width: 30%;
        max-width: 230px;
        flex: 1;
        padding: 70px 10px 0px 10px ;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		position: relative;
    }

	&__logo-link {
		display: inline-block;
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
		line-height: 70px;
		color: #415167;
		z-index: 2;

		span {
			background-color:#C7A17A;
			color:white;
			padding: 0 10px;
		}
	}

    &__slider-wrap {
		display: flex;
		flex: 1;
        //padding: 0px 0 20px 0;
		position: relative;
		background-color:#C7A17A;
		height: 100vh;
		//max-width: 896px;
		
		width: 70%;
    }
	&__slider-slide {
		display: flex;
        flex: 1;
        position: relative;
		width: 70%;
	} 
	& .ant-carousel{
		text-align: center;
		height: 100vh;
		line-height: 160px;
		background: #646566;
		overflow: hidden;
		max-width: 816px;
		width: 100%;
		}
	& .ant-carousel .slick-slide {
		height: 100%;
		
		}
	& .ant-carousel .slick-slide img {
		width: 100%;
		
		}
	& .ant-carousel .slick-list {
		height: 100%;
		
		}
	
		
  }
</style>