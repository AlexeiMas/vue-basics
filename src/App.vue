<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav">
<!--                    <li class="nav-item">-->
<!--                        <router-link class="nav-link" to="/">Form</router-link>-->
<!--                    </li>-->
                    <router-link tag="li" class="nav-item" to="/" exact active-class="active">
                        <a class="nav-link">Form</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/masterSlave" active-class="active">
                        <a class="nav-link">MasterSlave</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/inputs" active-class="active">
                        <a class="nav-link">Inputs</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/list" active-class="active">
                        <a class="nav-link">List</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/switcher" active-class="active">
                        <a class="nav-link">Switcher</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/cars" active-class="active">
                        <a class="nav-link">Cars</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" to="/vuex" active-class="active">
                        <a class="nav-link">CounterVuex</a>
                    </router-link>
                </ul>
            </div>
        </nav>

        <router-view/>

        <hr>
        <label for="search" class="mt-3">Search name</label>
        <input type="text" id="search" placeholder="Search..." v-model="searchName" class="form-control">

        <ul>
            <li v-for="name of filteredName" :key="name">{{name}}</li>
        </ul>
    </div>
</template>

<script>
    import listMixin from "@/mixins/listMixin"
    export default {
        mixins: [listMixin]
    }
</script>

<style scoped>
</style>
