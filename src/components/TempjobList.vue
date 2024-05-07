<!-- TempjobList.vue -->
<template>
  <div class="restaurant-job-list">
    <h1>Verfügbare Restaurantjobs!</h1>
    <ul>
      <li v-for="job in restaurantJobs" :key="job.id">
        {{ job.name }} - {{ job.description }}
        <button @click="deleteJob(job.id)">Löschen</button>
      </li>
    </ul>
    <div class="add-job-form">
      <input type="text" v-model="newJobName" placeholder="Restaurantname" />
      <input type="text" v-model="newJobDescription" placeholder="Jobbeschreibung" />
      <button @click="addJob">Hinzufügen</button>
    </div>
  </div>
</template>

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
      nextJobId: 6
    };
  },
  methods: {
    addJob() {
      if (this.newJobName.trim() !== '' && this.newJobDescription.trim() !== '') {
        this.restaurantJobs.push({
          id: this.nextJobId++,
          name: this.newJobName,
          description: this.newJobDescription
        });
        this.newJobName = '';
        this.newJobDescription = '';
      }
    },
    deleteJob(jobId) {
      this.restaurantJobs = this.restaurantJobs.filter(job => job.id !== jobId);
    }
  }
}
</script>

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
button {
  margin-left: 18px;
  cursor: pointer;
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

</style>
