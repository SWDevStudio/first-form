<template>
    <div class="card-view">
        <div class="card-view__name">{{cardName}}</div>
        <ul class="card-view__number">
            <li class="card-view__number-item" v-for="(item,i) in numberCard" :key="i">
                {{item}}
            </li>
        </ul>
        <div class="card-view__date">{{cardDate}}</div>
        <div class="card-view__cvc">{{cardCvc}}</div>
    </div>
</template>

<script>
    export default {
        name: "cardView",
        data() {
            return {
                cardName: 'Ваша карта',
                cards: {
                    '0000': 'Master Card',
                    '0001': 'Keter',
                    '0002': 'Avito'
                },

            }
        },
        props: {
            numberCard: Array,
            cardDate: String,
            cardCvc: String
        },
        methods: {},
        watch: {
            numberCard: function () {
                if (Object.keys(this.cards).indexOf(this.numberCard[0], 0) !== -1) {
                    this.cardName = this.cards[this.numberCard[0]]
                }
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "../service/functions.scss";
    @import "../service/fonts.scss";

    .card-view {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        min-height: 250px;
        min-width: 400px;
        max-width: 400px;
        margin-bottom: 30px;
        background-image: url("../assets/card.png");
        background-size: contain;
        background-repeat: no-repeat;

        &__name {
            padding-right: 20px;
            text-align: end;
            font-family: 'Miryad', 'sans-serif';
            font-size: 30px;
            font-weight: 300;
            color: whitesmoke;
        }

        &__number {
            font-family: 'Audiowide', 'sans-serif';
            display: flex;
            justify-content: space-around;
            margin: 70px 0 0;
            padding: 0;
            list-style-type: none;
            font-size: 25px;
            color: white;
        }

        &__date {
            margin-left: 20px;
            text-align: center;
            font-size: 20px;
            font-family: 'Audiowide', 'sans-serif';
            color: aliceblue;
        }

        &__cvc {
            padding-right: 20px;
            text-align: end;
            font-size: 20px;
            font-family: 'Audiowide', 'sans-serif';
            color: aliceblue;
        }

        &__cardholder {
            font-size: 30px;
            font-family: 'Audiowide', 'sans-serif';
        }

        &__image {
            position: absolute;
            width: 100%;
            height: 100%;

            img {
                width: 100%;
            }

            z-index: -1;
        }
    }
</style>
