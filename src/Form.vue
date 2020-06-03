<template lang="html">
  <div id="form">
    <card-view :number-card="['####', '####', '####', '####']"/>
    <form-inputs></form-inputs>
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
        }
    }
</script>

<style>

</style>
