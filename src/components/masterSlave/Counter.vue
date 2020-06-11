<template>
    <h1 v-font>Counter: {{counter}}</h1>
</template>

<script>
    import {eventEmitter} from "@/main"

    export default {
        data() {
            return {
                counter: 0
            }
        },
        directives: {
          font: {
              bind(el) {
                  el.style.fontSize = '40px'
              }
          }
        },
        created() {
            eventEmitter.$on('counterUpdated', (num) => {
                this.counter += num
            })
        }
    }
</script>

<style scoped>

</style>