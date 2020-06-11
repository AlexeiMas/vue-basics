<template>
  <div class="car">
      <h3>Name:
          <span v-colored:color="'green'">
          {{carName | lowercase}} \ {{reverseName | uppercase}}
          </span>
      </h3>
      <p v-colored:color.delay.font="'blue'">Year: {{carYear}}</p>
      <button @click="changeName">Change name</button>
      <button @click="changeFunc()">Change from parent</button>
      <button @click="updateCounter">Update counter</button>
  </div>
</template>

<script>
    import {eventEmitter} from "@/main"

    export default {
        props: {
          carName: {
              type: String,
              required: true,
              default: 'Default name'
          },
          carYear: Number,
          changeFunc: Function
        },
        filters: {
          lowercase(value) {
              return value.toLowerCase()
          }
        },
        methods: {
          changeName() {
              this.carName = 'Chevrolet'
              this.$emit('nameChanged', this.carName)
          },
          updateCounter() {
              // this.$emit('counterUpdated', this.counter + 1)
              eventEmitter.$emit('counterUpdated', 3)
          }
        },
        computed: {
            reverseName() {
                return this.carName.split('').reverse().join('')
            }
        }
    }
</script>

<style>
    .car {
        border: 1px solid black;
        padding: 0 1rem;
    }

    .car h3 {
        margin-bottom: 5px;
    }
</style>