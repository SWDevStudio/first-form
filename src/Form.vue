<template lang="html">
    <div id="form">
        <card-view
                :number-card="data.cardNumber | splitString()"
                :card-date="data.cardTime | startTime()"
                :card-cvc="data.cardCvc | startCvc()"
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
            startTime(ar) {
                if (ar) return ar;
                return "## / ##"
            },
            startCvc(ar) {
                if (ar) return ar;
                return "###"
            },
        }
    }
</script>

<style>

</style>
