<template lang="pug">
  section.form-container#form-inputs
    label.form-container__number
      input.form-container__input.form-container__input-card(placeholder="Номер карты" v-mask="'#### #### #### ####'" v-model="cardNumber")
    label.form-container__date
      input.form-container__input.form-container__input-date(placeholder="ММ / ГГ" v-mask="'## / ##'" v-model="cardTime")
    label.form-container__cvc
      input.form-container__input.form-container__input-cvc(placeholder="CVC" v-mask="'####'" v-model="cardCvc")
</template>

<script>


    export default {
        name: "formInputs",
        data() {
            return {
                cardNumber: '',
                cardTime: '',
                cardCvc: ''
            }
        },
        methods: {
            giveData(){
                this.$emit('data', {
                    cardNumber: this.cardNumber,
                    cardTime: this.cardTime,
                    cardCvc: this.cardCvc
                })
            }
        },
        watch: {
            cardNumber: function () {
               this.giveData()
            },
            cardTime: function () {
                this.giveData()
            },
            cardCvc: function () {
                this.giveData()
            }
        }
    }
</script>

<style lang="sass">
  .form-container
    display: grid
    grid:
      template:
        rows: repeat(2, minmax(65px, 1fr))
        columns: 0.5fr minmax(10px, 0.05fr)  0.5fr
    grid-row-gap: 15px

    &__number
      display: flex
      position: relative
      flex-direction: column
      grid:
        row: 1 / 2
        column: 1 / -1
      text-align: center

      &::before
        content: ""
        position: absolute
        height: 20px
        width: 20px
        top: 30%
        right: 30px
        background-image: url("../assets/cardForm/card.svg")
        background-size: cover

    &__date
      display: flex
      position: relative
      grid:
        row: 2 / 3
        column: 1 / 2
      text-align: center

      &::before
        content: ""
        position: absolute
        height: 20px
        width: 20px
        top: 30%
        right: 30px
        background-image: url("../assets/cardForm/calendar.svg")
        background-size: cover

    &__cvc
      display: flex
      position: relative
      grid:
        row: 2 / 3
        column: 3 / 4
      text-align: center

      &::before
        content: ""
        position: absolute
        height: 35px
        width: 25px
        top: 20%
        right: 30px
        background-image: url("../assets/cardForm/key.svg")
        background-size: cover

    &__input
      flex-grow: 1
      height: 90%
      font-family: Georgia, Arial, sans-serif
      font-size: 15px
      padding-left: 25px
      border: 0
      border-radius: 50px
      box-shadow: 0 0 2px grey
      outline: none

      &:placeholder-shown
        padding-left: 25px

      &:hover, &:focus
        box-shadow: 0 0 10px 1px cornflowerblue

</style>
