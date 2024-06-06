<template>
  <div class="restaurant-job-list">
    <h1>Verfügbare Job-Angebote!</h1>
    <input type="text" v-model="searchText" placeholder="Suche nach Jobs..." class="form-control mb-3">
    <table class="table">
      <thead>
      <tr>
        <th>Unternehmen</th>
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
          <button @click="viewDetails(job.id)" class="btn btn-primary action-button">Details</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "TempJobList",
  data() {
    return {
      restaurantJobs: [],
      searchText: ''
    };
  },
  created() {
    this.loadJobs();
  },
  watch: {
    '$route': 'loadJobs' // Neu Laden der Jobs wenn Route sich ändert
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
    loadJobs() {
      axios.get('https://webtech-project-backend.onrender.com/api/jobs')
        .then(response => {
          this.restaurantJobs = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the jobs!", error);
        });
    },
    viewDetails(jobId) {
      this.$router.push(`/job/${jobId}`);
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

/* Neue CSS-Klasse für Abstand zwischen den Buttons */
.action-button {
  margin-right: 10px; /* Definiert den Abstand zwischen den Buttons */
}
</style>
