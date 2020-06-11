<template>
    <div>
        <app-OnOff v-model="switched" class="mt-3" />

        <div>
            <h3 v-if="switched">Component is enabled</h3>
            <h3 v-else>Component is disabled</h3>
        </div>
        <!--        <app-form />-->
    </div>
</template>

<script>
    // import Form from "@/components/Form"
    import OnOff from "@/components/ownControl/OnOff"

    export default {
        data() {
            return {
                switched: false
            }
        },

        components: {
            // appForm: Form,
            appOnOff: OnOff
        }
    }
</script>