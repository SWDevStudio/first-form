<template>
  <div id="form">
    <card-view al="hello" :number-card="numberCard"/>

  </div>

</template>

<script>
  import cardView from "./components/cardView";


export default {
  name: 'new',
  components: {
    cardView
  },
  data(){
    return {
      numberCard: ['####','####','####','####']
    }
  }
}
</script>

<style>

</style>
