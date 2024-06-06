<template>
  <div class="container">
    <div class="header-buttons">
      <button @click="goBack" class="btn btn-secondary mb-3">Zurück</button>
      <button @click="applyForJob" class="btn btn-success mb-3">Bewerben</button>
    </div>
    <div v-if="job">
      <div class="job-header">
        <h1>{{ job.name }}</h1>
        <h2>{{ job.location }}</h2>
      </div>
      <table class="job-details">
        <tr>
          <th>Beschreibung</th>
          <td>{{ job.description }}</td>
        </tr>
        <tr>
          <th>E-Mail</th>
          <td>{{ job.email }}</td>
        </tr>
        <tr>
          <th>Phone-Nummer</th>
          <td>{{ job.phoneNumber }}</td>
        </tr>
        <tr>
          <th>Ort</th>
          <td>{{ job.location }}</td>
        </tr>
        <tr>
          <th>Gehalt</th>
          <td>{{ job.salary }}</td>
        </tr>
        <tr>
          <th>Anforderungen</th>
          <td>{{ job.requirements }}</td>
        </tr>
        <tr>
          <th>Anfangsdatum</th>
          <td>{{ job.startDate }}</td>
        </tr>
        <tr>
          <th>Enddatum</th>
          <td>{{ job.endDate }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      <p>Laden...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JobDetails',
  data() {
    return {
      job: null
    };
  },
  created() {
    this.loadJobDetails();
  },
  methods: {
    loadJobDetails() {
      const jobId = this.$route.params.id;
      axios.get(`https://webtech-project-backend.onrender.com/api/jobs/${jobId}`)
        .then(response => {
          this.job = response.data;
        })
        .catch(error => {
          console.error("There was an error fetching the job details!", error);
        });
    },
    goBack() {
      this.$router.push('/tempjob');
    },
  }
};
</script>

<style scoped>
/* Allgemeine Stile */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.job-header {
  text-align: center;
  margin-bottom: 20px;
}

.job-header h1 {
  font-size: 2em;
  font-weight: bold;
}

.job-header h2 {
  font-size: 1em;
  font-style: italic;
  color: #666;
  margin-top: 5px;
}

.job-details {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.job-details th, .job-details td {
  padding: 10px;
  border: 1px solid #ddd;
}

.job-details th {
  background-color: #f0f0f0;
  text-align: left;
}

.job-details td {
  background-color: #fff;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.btn-success {
  background-color: #28a745;
  border-color: #28a745;
  color: white;
}

.btn-success:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>
