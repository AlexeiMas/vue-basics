<template>
    <div>
        <h1>List</h1>
        <input type="text" v-model="searchName" class="mt-1">

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