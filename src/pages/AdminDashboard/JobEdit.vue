<template>
  <div class="container">
    <div class="header-buttons">
      <button @click="goBack" class="btn btn-secondary mb-3">Zurück</button>
      <button @click="saveJob" class="btn btn-primary mb-3">Speichern</button>
    </div>
    <div v-if="job">
      <div class="job-header">
        <h1>{{ job.name }}</h1>
        <h2>{{ job.location }}</h2>
      </div>
      <div class="job-details">
        <div class="job-detail">
          <h3>Stellenbeschreibung</h3>
          <input v-model="job.description" placeholder="Stellenbeschreibung" />
        </div>
        <div class="job-detail">
          <h3>E-Mail</h3>
          <input v-model="job.email" placeholder="E-Mail" />
        </div>
        <div class="job-detail">
          <h3>Telefon-Nummer</h3>
          <input v-model="job.phoneNumber" placeholder="Telefon-Nummer" />
        </div>
        <div class="job-detail">
          <h3>Ort</h3>
          <input v-model="job.location" placeholder="Ort" />
        </div>
        <div class="job-detail">
          <h3>Gehalt</h3>
          <input v-model="job.salary" placeholder="Gehalt" />
        </div>
        <div class="job-detail">
          <h3>Anforderungen</h3>
          <input v-model="job.requirements" placeholder="Anforderungen" />
        </div>
        <div class="job-detail">
          <h3>Anfangsdatum</h3>
          <input v-model="job.startDate" placeholder="Anfangsdatum" />
        </div>
        <div class="job-detail">
          <h3>Enddatum</h3>
          <input v-model="job.endDate" placeholder="Enddatum" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Laden...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JobEdit',
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
          console.error("Error fetching job details", error);
        });
    },
    goBack() {
      this.$router.push('/admin-dashboard');
    },
    saveJob() {
      axios.patch(`https://webtech-project-backend.onrender.com/api/jobs/${this.job.id}`, this.job)
        .then(() => {
          this.$router.push('/admin-dashboard');
        })
        .catch(error => {
          console.error("Error saving job", error);
        });
    }
  }
};
</script>

<style scoped>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f7;
  color: #333;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.header-buttons {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.header-buttons .btn {
  font-size: 1em;
  padding: 10px 20px;
  border-radius: 20px;
  margin: 0 10px;
}

.job-header {
  text-align: center;
  margin-bottom: 20px;
}

.job-header h1 {
  font-size: 3em;
  font-weight: 700;
  color: #333;
}

.job-header h2 {
  font-size: 1.5em;
  font-weight: 500;
  color: #666;
}

.job-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.job-details .job-detail {
  width: 48%;
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.job-details .job-detail h3 {
  font-size: 1em;
  font-weight: 500;
  color: #007bff;
  margin-bottom: 5px;
}

.job-details .job-detail input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9em;
  color: #555;
}

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
