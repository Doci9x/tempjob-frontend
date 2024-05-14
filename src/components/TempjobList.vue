<script>
export default {
  name: "RestaurantJobList",
  data() {
    return {
      restaurantJobs: [
        { id: 1, name: 'Bella Italia', description: 'Sucht erfahrene Kellner und Barkeeper.' },
        { id: 2, name: 'Veggie Paradise', description: 'Benötigt Koch mit Erfahrung in veganer Küche.' },
        { id: 3, name: 'Steakhouse Wild West', description: 'Sucht einen Chefkoch und Küchenhilfen.' },
        { id: 4, name: 'Café Central', description: 'Benötigt freundliches Personal für den Service.' },
        { id: 5, name: 'Sushi Circle', description: 'Sucht Sushi-Köche und Servicekräfte mit Erfahrung.' }
      ],
      newJobName: '',
      newJobDescription: '',
      nextJobId: 6,
      feedbackMessage: ''
    };
  },
  methods: {
    addJob() {
      if (this.newJobName.trim().length > 0 && this.newJobDescription.trim().length > 0) {
        this.restaurantJobs.push({
          id: this.nextJobId++,
          name: this.newJobName,
          description: this.newJobDescription
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
    <h1>Verfügbare Job-Angebote!</h1>
    <ul>
      <li v-for="job in restaurantJobs" :key="job.id">
        <button @click="deleteJob(job.id)" class="delete-button">Löschen</button>
        <span>{{ job.name }} - {{ job.description }}</span>
      </li>
    </ul>
    <div class="add-job-form">
      <input type="text" v-model="newJobName" placeholder="Restaurantname" />
      <input type="text" v-model="newJobDescription" placeholder="Jobbeschreibung" />
      <button @click="addJob">Hinzufügen</button>
    </div>

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
.add-job-form {
  margin-top: 20px;
}
input[type="text"] {
  width: 200px;  /* Breite des Eingabefeldes */
  height: 40px;  /* Höhe des Eingabefeldes */
  padding: 8px;  /* Innenabstand zur Textverbesserung */
  font-size: 16px; /* Schriftgröße */
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
.feedback {
  color: #d32f2f;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

</style>
