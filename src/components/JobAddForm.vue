<!-- JobAddForm.vue -->
<template>
    <div class="add-job-form">
        <input type="text" v-model="newJobName" placeholder="Restaurantname" />
        <input type="text" v-model="newJobDescription" placeholder="Jobbeschreibung" />
        <button @click="submitJob">Hinzufügen</button>
    </div>
</template>

<script>
export default {
    name: 'JobAddForm',
    data() {
        return {
            newJobName: '',
            newJobDescription: ''
        };
    },
    methods: {
        submitJob() {
            this.$emit('add-job', {
                name: this.newJobName,
                description: this.newJobDescription
            });
            this.newJobName = '';
            this.newJobDescription = '';
        }
    }
}
</script>

<style scoped>
.add-job-form {
    margin-top: 20px;
}
input[type="text"] {
    width: 200px;
    height: 40px;
    padding: 8px;
    font-size: 16px;
}
button {
    margin-right: 18px;
    margin-left: 10px;
    cursor: pointer;
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 10px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
}
</style>
