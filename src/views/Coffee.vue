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
                <div class="coffee__products">
                    <a-card class="coffee__product" hoverable style="width: 240px">
                        <img
                        slot="cover"
                        alt="example"
                        src="../img/product/1.png"
                        />
                        <a-card-meta title="Affogato">
                        <template slot="description">
                            This is a term that literally means 'drowned'. It is the description of a shot of separately served espresso that is later poured over a the top of a scoop of vanilla ice cream or gelato. This beverage is usually served in a short drink glass and is a Italian desert favourite.
                             Popular Affogatos include Vanilla Affogato, Mocha Affogato, and Peppermint Affogato.

                        </template>
                        </a-card-meta>
                    </a-card>

                     <a-card class="coffee__product" hoverable style="width: 240px">
                        <img
                        slot="cover"
                        alt="example"
                        src="../img/product/2.png"
                        />
                        <a-card-meta title="Babycino">
                        <template slot="description">
                            A cappuccino styled drink served in an up-market café typically for children. It consists of warm milk in a small cup and topped with milk froth and chocolate powder. No espresso coffee essence is added.
                        </template>
                        </a-card-meta>
                    </a-card>

                     <a-card class="coffee__product" hoverable style="width: 240px">
                        <img
                        slot="cover"
                        alt="example"
                        src="../img/product/3.png"
                        />
                        <a-card-meta title="Americano">
                        <template slot="description">
                            Also known as 'Lungo' or 'Long Black' and made by diluting 1-2 shots of espresso with hot water in order to approximate the texture, flavor and body of an American-style drip coffee. Said to have been originally devised as a sort of insult to Americans who wanted their Italian espresso diluted.

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

<style lang="scss" scoped>
    .coffee {
        &__container {
            padding-top:70px ;
        }

        &__logo {
            margin-bottom: 5px;
        }

        &__logo-link {
            display: inline-block;
            position: relative;
          
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
            margin-bottom: 65px;

        }

        &__products {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            //margin-right: 10px;
        }

        &__product {
             margin-right: 10px;
        }
  }
</style>