<template>
    <div>
        <h1>Parent: {{ carName }}</h1>

        <app-counter/>

        <app-car
                :carName="carName"
                :carYear="carYear"
                :changeFunc="changeNameToAudi"
                @nameChanged="carName = $event"
                @counterUpdated="counter = $event"
        />
    </div>
</template>

<script>
    import Car from "@/components/masterSlave/Car"
    import Counter from "@/components/masterSlave/Counter"

    export default {
        data() {
            return {
                carName: 'Tesla',
                carYear: 2018
            }
        },
        methods: {
            changeNameToAudi() {
                this.carName = 'Audi'
            }
        },
        components: {
            appCar: Car,
            appCounter: Counter
        }
    }
</script>

<style scoped>

</style>