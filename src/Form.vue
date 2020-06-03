<template lang="html">
    <div id="form">
        <card-view
                :number-card="data.cardNumber | splitString()"
                :card-date="data.cardTime"
        />
        <form-inputs @data="getData"></form-inputs>
    </div>

</template>

<script>
    import cardView from "./components/cardView";
    import formInputs from "./components/formInputs.vue";

    export default {
        name: 'new',
        components: {
            cardView,
            formInputs
        },
        data() {
            return {
                data: [],
            }
        },
        methods: {
            getData(data) {
                this.data = data;
            },

        },

        computed: {

        },

        filters: {
            splitString(ar) {
                if (ar) return ar.split(' ');
                return ['####', '####', '####', '####']
            },


        }
    }
</script>

<style>

</style>
