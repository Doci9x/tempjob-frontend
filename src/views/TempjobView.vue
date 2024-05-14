<script>
import JobAddForm from "@/components/JobAddForm.vue";
import TempjobList from "@/components/TempjobList.vue";
export default {
    name: "RestaurantJobList",
    components: {
        JobAddForm,
        TempjobList
    },
    data() {
        return {
            restaurantJobs: [
                { id: 1, name: 'Bella Italia', description: 'Sucht erfahrene Kellner und Barkeeper.' },
                { id: 2, name: 'Veggie Paradise', description: 'Benötigt Koch mit Erfahrung in veganer Küche.' },
                { id: 3, name: 'Steakhouse Wild West', description: 'Sucht einen Chefkoch und Küchenhilfen.' },
                { id: 4, name: 'Café Central', description: 'Benötigt freundliches Personal für den Service.' },
                { id: 5, name: 'Sushi Circle', description: 'Sucht Sushi-Köche und Servicekräfte mit Erfahrung.' }
            ],

            nextJobId: 6,
            feedbackMessage: ''
        };
    },
    methods: {
        addJob(newJobData) {
            if (newJobData.name.trim().length > 0 && newJobData.description.trim().length > 0) {
                this.restaurantJobs.push({
                    id: this.nextJobId++,
                    name: newJobData.name,
                    description: newJobData.description
                });
                this.newJobName = '';
                this.newJobDescription = '';
                this.feedbackMessage = 'Job erfolgreich hinzugefügt!';
            } else {
                this.feedbackMessage = 'Bitte füllen Sie alle Felder aus.';
            }
        },
        deleteJob(jobId) {
            this.restaurantJobs = this.restaurantJobs.filter(job => job.id !== jobId);
            this.feedbackMessage = 'Job erfolgreich gelöscht!';
        }
    }
}
</script>

<template>
    <div class="restaurant-job-list">
        <h1>Verfügbare Restaurantjobs!</h1>
        <TempjobList :jobs="restaurantJobs" @delete-job="deleteJob"/>
        <JobAddForm @add-job="addJob"/>
        <!-- Feedback Nachricht -->
        <div v-if="feedbackMessage" class="feedback">{{ feedbackMessage }}</div>
    </div>

</template>

<style scoped>

.restaurant-job-list h1 {
    color: #7ce376;
    font-size: 40px;
}
.restaurant-job-list ul {
    list-style-type: none;
    padding: 0;
}
.restaurant-job-list li {
    margin: 10px 0;
    font-size: 17px;
}

input[type="text"] {
    width: 200px;  /* Breite des Eingabefeldes */
    height: 40px;  /* Höhe des Eingabefeldes */
    padding: 8px;  /* Innenabstand zur Textverbesserung */
    font-size: 16px; /* Schriftgröße */
}

.feedback {
    color: #d32f2f; /* Rot für Fehlermeldungen */
    background-color: #f8d7da;
    border-color: #f5c6cb;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
}

</style>
