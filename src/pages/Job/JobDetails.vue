<template>
  <div class="container">
    <div class="header-buttons">
      <button @click="goBack" class="btn btn-secondary mb-3">Zurück</button>
      <button @click="applyForJob" class="btn btn-primary mb-3">Bewerben</button>
    </div>
    <div v-if="job">
      <div class="job-header">
        <h1>{{ job.name }}</h1>
        <h2>{{ job.location }}</h2>
      </div>
      <div class="job-details">
        <div class="job-detail" v-for="detail in jobDetails" :key="detail.title">
          <h3>{{ detail.title }}</h3>
          <p>{{ detail.value }}</p>
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
  name: 'JobDetails',
  data() {
    return {
      job: null
    };
  },
  computed: {
    jobDetails() {
      if (!this.job) return [];
      return [
        { title: 'Stellenbeschreibung', value: this.job.description },
        { title: 'E-Mail', value: this.job.email },
        { title: 'Telefon-Nummer', value: this.job.phoneNumber },
        { title: 'Ort', value: this.job.location },
        { title: 'Gehalt', value: this.job.salary },
        { title: 'Anforderungen', value: this.job.requirements },
        { title: 'Anfangsdatum', value: this.job.startDate },
        { title: 'Enddatum', value: this.job.endDate },
      ];
    }
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
      this.$router.push('/tempjob');
    },
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

.job-details .job-detail p {
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
