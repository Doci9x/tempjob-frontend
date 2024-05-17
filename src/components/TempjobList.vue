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
          <button v-if="isAdmin" @click="deleteJob(job.id)" class="btn btn-danger">Löschen</button>
          <button v-else class="btn btn-primary">Details</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div v-if="isAdmin" class="add-job-form d-flex">
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
import { mapGetters } from 'vuex';
import { jobs } from '@/data/jobs'; // Import der ausgelagerten Job-Daten

export default {
  name: "RestaurantJobList",
  components: {
    FeedbackMessage
  },
  data() {
    return {
      restaurantJobs: jobs, // Importierte Job-Daten
      newJobName: '',
      newJobDescription: '',
      newJobEmail: '',
      nextJobId: 11,  // die ID fortlaufend
      feedbackMessage: '',
      searchText: ''
    };
  },
  computed: {
    ...mapGetters(['isAdmin']),
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
      if (this.isAdmin) {
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
      }
    },
    deleteJob(jobId) {
      if (this.isAdmin) {
        this.restaurantJobs = this.restaurantJobs.filter(job => job.id !== jobId);
        this.feedbackMessage = 'Job erfolgreich gelöscht!';
      }
    }
  }
}
</script>

<style scoped>
.restaurant-job-list h1 {
  color: #071234;
  font-size: 40px;
  padding-top: 80px; /* Adjust this value based on your navbar's actual height */
}

.table {
  width: 100%;
  margin-bottom: 20px;
}

.table th {
  font-weight: bold; /* Macht die Schrift in den Tabellenüberschriften fett */
}

input[type="text"] {
  margin-bottom: 10px;
}

.btn-add {
  margin-left: 10px;
  color: white;
}
</style>
