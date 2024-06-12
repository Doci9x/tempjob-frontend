<template>
  <div class="restaurant-job-list">
    <h1>Verfügbare Job-Angebote!</h1>
    <input type="text" v-model="searchText" placeholder="Suche nach Jobs..." class="search-bar">
    <div class="job-list">
      <div v-for="job in filteredJobs" :key="job.id" class="job-card">
        <div class="job-details">
          <h2>{{ job.name }}</h2>
          <p><strong>Beschreibung:</strong> {{ job.description }}</p>
          <p><strong>Gehalt:</strong> {{ job.salary }}</p>
          <p><strong>Dauer:</strong> {{ calculateDuration(job.startDate, job.endDate) }}</p>
          <p class="email"><strong>Email:</strong> {{ job.email }}</p>
        </div>
        <div class="job-actions">
          <button @click="viewDetails(job.id)" class="btn btn-primary">Details</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { formatDistance } from 'date-fns';

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
    '$route': 'loadJobs' // Neu Laden der Jobs, wenn Route sich ändert
  },
  computed: {
    filteredJobs() {
      return this.restaurantJobs.filter(job =>
        job.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        job.salary.toLowerCase().includes(this.searchText.toLowerCase())
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
    },
    calculateDuration(startDate, endDate) {
      if (!startDate || !endDate) return 'N/A';
      const start = new Date(startDate);
      const end = new Date(endDate);
      return formatDistance(start, end);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f7;
  color: #333;
  margin: 0;
  padding: 0;
}

.restaurant-job-list {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
}

.restaurant-job-list h1 {
  color: #071234;
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
}

.search-bar {
  width: 100%;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
}

.job-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.job-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: box-shadow 0.3s ease;
}

.job-card:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.job-details {
  flex: 1;
}

.job-details h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #007bff;
}

.job-details p {
  margin: 5px 0;
}

.job-details .email {
  color: #555;
  font-style: italic;
}

.job-actions {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
