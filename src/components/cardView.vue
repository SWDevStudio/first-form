<template>
    <div class="card-view">
        <div class="card-view__image">
            <img :src="test2" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "cardView",
        data(){
            return {
                test2: require('../assets/karta.png.png')
            }
        },
        methods: {
            tests(){
                return '../assets/karta.png'
            }
        },

    }
</script>

<style scoped lang="scss">
    .card-view {
        width: 320px;
        height: 480px;
        background: black;
    }
</style>
