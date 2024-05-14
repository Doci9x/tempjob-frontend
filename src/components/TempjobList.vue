<template>
    <ul>
        <li v-for="job in jobs" :key="job.id">
            <span>{{ job.name }} - {{ job.description }}</span>
            <button @click="deleteJob(job.id)" class="delete-button">Löschen</button>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'JobList',
    props: {
        jobs: Array
    },
    methods: {
        deleteJob(jobId) {
            this.$emit('delete-job', jobId);
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}
li {
    margin: 10px 0;
    font-size: 17px;
}
.delete-button {
    margin-left: 10px;
}
</style>
