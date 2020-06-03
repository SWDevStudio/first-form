<template lang="html">
  <div id="form">
    <card-view :number-card="number"/>
    <form-inputs @cardNumber="cardNumber"></form-inputs>
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
        data(){
          return {
            number: '',

          }
        },
        methods: {
          cardNumber(data){
            this.number = data;
          }
        },
        filters: {
        }
    }
</script>

<style>

</style>
