<template>
    <div>
        <h2>Form inputs</h2>
        <input type="text" placeholder="Input text" v-model.lazy="name">
        <p>{{name}}</p>

        <hr>
        <textarea v-model="textarea"></textarea>
        <p>{{textarea}}</p>

        <hr>
        <label>
            <input type="checkbox" value="insta" v-model="socialCheck"> Instagram
        </label>
       <label>
            <input type="checkbox" value="vk" v-model="socialCheck"> Vk
        </label>
       <label>
            <input type="checkbox" value="fb" v-model="socialCheck"> Facebook
        </label>
        <ul>
            <li v-for="item in socialCheck" :key="item">{{item}}</li>
        </ul>

        <hr>
        <label>
            <input type="radio" value="insta" v-model="socialRadio"> Instagram
        </label>
        <label>
            <input type="radio" value="vk" v-model="socialRadio"> Vk
        </label>
        <label>
            <input type="radio" value="fb" v-model="socialRadio"> Facebook
        </label>
        <p>{{socialRadio}}</p>

        <hr>
        <select v-model="social">
            <option v-for="s in socialList" :key="s">{{s}}</option> // :selected="s === defaultSocial"
        </select>
        <p>{{social}}</p>

        <hr>
        <input type="text" v-model.number="age">
        <p>{{age}}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                textarea: 'I am initial text',
                socialCheck: ['vk'], //default value
                socialRadio: 'fb',
                socialList: ['insta', 'vk', 'fb'],
                social: 'fb',
                age: 20
            }
        },
        watch: {
            age (value) {
                console.log(value)
            }
        }
    }
</script>

<style scoped>
    textarea {
        width: 300px;
        height: 100px;
    }
    p {
        white-space: pre;
    }
</style>