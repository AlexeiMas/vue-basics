<template>
    <div class="container text-center pt-5">
        <h1>{{title}}</h1>
        <hr>
        <app-counter/>
        <second-counter/>
        <hr>
        <app-actions/>
    </div>
</template>

<script>
    import CounterVuex from "@/vuex/CounterVuex"
    import Actions from "@/vuex/Actions"
    import SecondCounter from "@/vuex/SecondCounter"

    export default {
        components: {
            appCounter: CounterVuex,
            appActions: Actions,
            secondCounter: SecondCounter
        },
        computed: {
            title () {
                return this.$store.getters.title
            }
        }
    }
</script>

<style scoped>

</style>