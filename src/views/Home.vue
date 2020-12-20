<template>
  <div class="home">
    <div class="home__decor">
		<div  class="home__logo">
			<router-link to="/" class="home__logo-link">
				<img src="../img/revo_logo.png" alt="">	
			</router-link>
		</div>
		<h1 class="home__title">
				YOUR <span>PERSONALIZED</span>  COFFEE
			</h1>
	</div>
		<div class="home__slider-wrap">
			<div class="home__slide">
				<img src="../img/home-slid.png" alt="">	
			</div>
			
		</div>
   
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
   
  }
}
</script>

<style lang="scss">
  .home {
	display: flex;

    &__decor{
        width: 100%;
        max-width: 230px;
        flex: 1;
        padding: 70px 10px 0px 0px ;
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
		
		display: inline-block;
		margin-bottom: 0;
		position: absolute;
		bottom:80px;
		font-family: Montserrat;
		font-style: normal;
		font-weight: 900;
		font-size: 54px;
		line-height: 70px;
		color: #415167;
		z-index: 2;

		span {
			background-color:#C7A17A;
			color:white;
			padding: 0 10px;
;
		}
	}

    &__slider-wrap {
        flex: 1;
        //padding: 0px 0 20px 0;
		position: relative;
    }
	&__slide {
        flex: 1;
        position: relative;
		height: 100%;
		width: 100%;

       img {
        position: absolute;
	   	width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
		
       }
    
	} 
  }
</style>