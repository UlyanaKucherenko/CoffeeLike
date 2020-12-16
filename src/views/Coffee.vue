<template>
    <div class="coffee">
        <div class="coffee__container">
            <div  class="coffee__logo">
                <router-link to="/" class="coffee__logo-link">
                    <img src="../img/revo_logo.png" alt="">	
                </router-link>
            </div>
            <div class="coffee__content">
                <h2 class="coffee__title">Choose Your Coffee</h2>
                <div>
                    <a-card hoverable style="width: 240px">
                        <img
                        slot="cover"
                        alt="example"
                        src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                        <a-card-meta title="Europe Street beat">
                        <template slot="description">
                            www.instagram.com
                        </template>
                        </a-card-meta>
                    </a-card>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Coffee',
    
}
</script>

<style lang="scss">
    .coffee {
        &__container {
            padding-left: 15px;
            padding-top:15px ;
        }

        &__logo {
            margin-bottom: 20px;
        }

        &__logo-link {
            width:100px;
            height: 37px;
            display: block;
            position: relative;
            img{
                position: absolute;
                width: 100%;
                height: 100%;
               
            }
        }

        &__content {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__title {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 35px;
            line-height: 34px;
            color: #415167;
            text-transform: uppercase;

        }
  }
</style>