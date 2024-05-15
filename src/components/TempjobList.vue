<template>
  <div class="restaurant-job-list">
    <h1>Verfügbare Job-Angebote!</h1>
    <input type="text" v-model="searchText" placeholder="Suche nach Jobs..." class="form-control mb-3">
    <table class="table">
      <thead>
      <tr>
        <th>Restaurant</th>
        <th>Beschreibung</th>
        <th>Email</th>
        <th>Aktionen</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="job in filteredJobs" :key="job.id">
        <td>{{ job.name }}</td>
        <td>{{ job.description }}</td>
        <td>{{ job.email }}</td>
        <td>
          <button @click="deleteJob(job.id)" class="btn btn-danger">Löschen</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="add-job-form d-flex">
      <input type="text" v-model="newJobName" placeholder="Restaurantname" class="form-control mb-2"/>
      <input type="text" v-model="newJobDescription" placeholder="Jobbeschreibung" class="form-control mb-2"/>
      <input type="text" v-model="newJobEmail" placeholder="Email" class="form-control mb-2"/>
      <button @click="addJob" class="btn-add btn btn-success">Hinzufügen</button>
    </div>
    <FeedbackMessage :message="feedbackMessage" />
  </div>
</template>

<script>
import FeedbackMessage from '@/components/FeedbackMessage.vue';

export default {
  name: "RestaurantJobList",
  components: {
    FeedbackMessage
  },
  data() {
    return {
      restaurantJobs: [
        {
          id: 1,
          name: 'Bella Italia',
          description: 'Sucht erfahrene Kellner und Barkeeper.',
          email: 'contact@bellaitalia.com'
        },
        {
          id: 2,
          name: 'Veggie Paradise',
          description: 'Benötigt Koch mit Erfahrung in veganer Küche.',
          email: 'info@veggieparadise.com'
        },
        {
          id: 3,
          name: 'Steakhouse Wild West',
          description: 'Sucht einen Chefkoch und Küchenhilfen.',
          email: 'chef@steakhouseww.com'
        },
        {
          id: 4,
          name: 'Café Central',
          description: 'Benötigt freundliches Personal für den Service.',
          email: 'service@cafecentral.com'
        },
        {
          id: 5,
          name: 'Sushi Circle',
          description: 'Sucht Sushi-Köche und Servicekräfte mit Erfahrung.',
          email: 'jobs@sushicircle.com'
        }
      ],
      newJobName: '',
      newJobDescription: '',
      newJobEmail: '',
      nextJobId: 6,
      feedbackMessage: '',
      searchText: ''
    };
  },
  computed: {
    filteredJobs() {
      return this.restaurantJobs.filter(job =>
        job.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.email.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  },
  methods: {
    addJob() {
      if (this.newJobName.trim() && this.newJobDescription.trim() && this.newJobEmail.trim()) {
        this.restaurantJobs.push({
          id: this.nextJobId++,
          name: this.newJobName,
          description: this.newJobDescription,
          email: this.newJobEmail
        });
        this.newJobName = '';
        this.newJobDescription = '';
        this.newJobEmail = '';
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

<style scoped>
.restaurant-job-list h1 {
  color: #071234;
  font-size: 40px;
}
.table {
  width: 100%;
  margin-bottom: 20px;
}
.table th{
  font-weight: bold; /* Macht die Schrift in den Tabellenüberschriften fett */

}
input[type="text"] {
  margin-bottom: 10px;
}
.btn-delete {
  margin-right: 15px;
  background-color: #800013;
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
.btn-add {
  margin-left: 15px;
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

