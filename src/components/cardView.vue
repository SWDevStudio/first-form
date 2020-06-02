<template>
    <div class="card-view">
        <div class="card-view__image">
            <img src="../assets/card.png" alt="">
        </div>
        <div class="card-view__content">
            <div class="card-view__name">Master Card</div>
            <ul class="card-view__number">
                <li class="card-view__number-item" v-for="item in numberCard" :key="item">
                    {{item}}
                </li>
            </ul>
            <div class="card-view__date">12/99</div>
            <div class="card-view__cardholder">Mikhail Malakhow</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardView",
        data() {
            return {
                numberCard: [
                    '####','####','####','####'
                ]
            }
        },
        methods: {},

    }
</script>

<style scoped lang="scss">
    @import "../service/functions.scss";
    @import "../service/fonts.scss";
    .card-view {
        position: relative;
        width: 800px;
        height: 600px;
        &__content {
            width: 82%;
            margin: 0 auto;
            padding-top: convertLong(217px);
        }
        &__name {
            text-align: end;
            margin-bottom: convertLong(800px);
            font-family: 'Miryad', 'sans-serif';
            font-size: 40px;
        }
        &__number {
            margin-left: 0;
            padding-left: 0;
            margin-bottom: convertLong(260px);
            font-family: 'Audiowide', 'sans-serif';
            display: flex;
            justify-content: space-between;
            list-style-type: none;
            font-size: 36px;


        }
        &__date {
            text-align: center;
            font-size: 30px;
            font-family: 'Audiowide', 'sans-serif';
            margin-bottom: convertLong(219px);
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
                width: 100% ;
            }
            z-index: -1;
        }
    }
</style>
