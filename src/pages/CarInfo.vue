<template>
    <div>
        <h1>Car id {{id}}</h1>

        <button class="btn btn-sm btn-secondary mb-2" @click="goBackToCars">Back</button>
        <br>
<!--        <router-link-->
<!--                class="btn btn-sm btn-info mt-2"-->
<!--                tag="button"-->
<!--                :to="'/car/' + id + '/full'"-->
<!--        >Full info</router-link>-->
        <router-link
                class="btn btn-sm btn-info mt-2"
                tag="button"
                :to="{
            name: 'carFull',
            params: {id: id},
            query: {name: 'Mazda', year: 2000},
            hash: '#scroll'
                }"
                v-if="!isHidden"
                @click.native="isHidden=true"
        >Full info</router-link>
        <router-link
                class="btn btn-sm btn-info mt-2"
                tag="button"
                :to="'/car/' + id"
                v-else
                @click.native="isHidden=false"
        >Hide info</router-link>

        <router-view/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                // id: this.$router.currentRoute.params['id']
                id: this.$route.params['id'], //$route === $router.currentRoute
                isHidden: false
            }
        },
        methods: {
            goBackToCars () {
                this.$router.push('/cars')
            }
        },
        watch: {
            $route (toR) { //(toR, fromR)
                this.id = toR.params['id']
            }
        },
        beforeRouteLeave (to, fromR, next) {
            console.log('beforeRouteLeave')

            if (window.confirm('Are you sure you want to leave?')) {
                next()
            } else {
                next(false)
            }
        }
    }
</script>

<style scoped>

</style>