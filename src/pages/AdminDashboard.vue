<template>
  <div class="admin-dashboard">
    <h1 class="title">Admin Dashboard</h1>
    <div v-if="loading" class="loading-container">
      <p>Laden...</p>
    </div>
    <div v-else class="stats-container">
      <div class="stat-box">
        <h3>Übersicht Benutzer</h3>
        <p>{{ userCount }}</p>
        <button @click="toggleUserList" class="btn-toggle">{{ showUserList ? 'Weniger anzeigen' : 'Mehr anzeigen' }}</button>
        <transition name="fade">
          <div v-if="showUserList">
            <input type="text" v-model="searchUserQuery" placeholder="Benutzer suchen..." class="search-bar">
            <ul class="list">
              <li v-for="user in filteredUsers" :key="user.id" class="list-item">{{ user.firstName }} {{ user.lastName }}</li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="stat-box">
        <h3>Übersicht Jobs</h3>
        <p>{{ jobCount }}</p>
        <button @click="toggleJobList" class="btn-toggle">{{ showJobList ? 'Weniger anzeigen' : 'Mehr anzeigen' }}</button>
        <transition name="fade">
          <div v-if="showJobList">
            <input type="text" v-model="searchJobQuery" placeholder="Jobs suchen..." class="search-bar">
            <ul class="list">
              <li v-for="job in filteredJobs" :key="job.id" class="list-item">
                {{ job.name }}
                <div class="list-item-actions">
                  <button @click="editJob(job.id)" class="btn btn-edit">Bearbeiten</button>
                  <button @click="deleteJob(job.id)" class="btn btn-delete">Löschen</button>
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="stat-box">
        <h3>Übersicht Bewerbungen</h3>
        <p>{{ applicationCount }}</p>
        <button @click="toggleApplicationList" class="btn-toggle">{{ showApplicationList ? 'Weniger anzeigen' : 'Mehr anzeigen' }}</button>
        <transition name="fade">
          <div v-if="showApplicationList">
            <input type="text" v-model="searchApplicationQuery" placeholder="Bewerbungen suchen..." class="search-bar">
            <ul class="list">
              <li v-for="application in filteredApplications" :key="application.id" class="list-item">{{ application.jobName }}</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import apiClient from '@/api';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      loading: true,
      userCount: 0,
      jobCount: 0,
      applicationCount: 0,
      users: [],
      jobs: [],
      applications: [],
      showUserList: false,
      showJobList: false,
      showApplicationList: false,
      searchUserQuery: '',
      searchJobQuery: '',
      searchApplicationQuery: ''
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.firstName.toLowerCase().includes(this.searchUserQuery.toLowerCase()) ||
        user.lastName.toLowerCase().includes(this.searchUserQuery.toLowerCase())
      );
    },
    filteredJobs() {
      return this.jobs.filter(job =>
        job.name.toLowerCase().includes(this.searchJobQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(this.searchJobQuery.toLowerCase())
      );
    },
    filteredApplications() {
      return this.applications.filter(application =>
        application.jobName.toLowerCase().includes(this.searchApplicationQuery.toLowerCase()) ||
        application.applicantName.toLowerCase().includes(this.searchApplicationQuery.toLowerCase())
      );
    }
  },
  methods: {
    async fetchStats() {
      this.loading = true;
      try {
        const userResponse = await apiClient.getUsers();
        this.users = userResponse.data;
        this.userCount = this.users.length;

        const jobResponse = await apiClient.getJobs();
        this.jobs = jobResponse.data;
        this.jobCount = this.jobs.length;

        const applicationResponse = await apiClient.getApplications();
        this.applications = applicationResponse.data;
        this.applicationCount = this.applications.length;
      } catch (error) {
        console.error('Error fetching stats', error);
      } finally {
        this.loading = false;
      }
    },
    toggleUserList() {
      this.showUserList = !this.showUserList;
    },
    toggleJobList() {
      this.showJobList = !this.showJobList;
    },
    toggleApplicationList() {
      this.showApplicationList = !this.showApplicationList;
    },
    editJob(jobId) {
      // Implementiere hier die Logik zur Bearbeitung des Jobs
      console.log(`Bearbeite Job mit ID: ${jobId}`);
    },
    async deleteJob(jobId) {
      try {
        await apiClient.deleteJob(jobId);
        this.jobs = this.jobs.filter(job => job.id !== jobId);
        this.jobCount = this.jobs.length;
      } catch (error) {
        console.error('Error deleting job', error);
      }
    }
  },
  async mounted() {
    await this.fetchStats();
  }
};
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

.admin-dashboard {
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
  font-weight: 700;
}

.loading-container {
  text-align: center;
  font-size: 1.5em;
  color: #000000;
}

.stats-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.stat-box {
  background-color: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease;
}

.stat-box:hover {
  transform: translateY(-5px);
}

.stat-box h3 {
  margin-bottom: 10px;
  font-size: 1.4em;
  color: #007bff;
  border-bottom: 2px solid #007bff;
  padding-bottom: 5px;
}

.stat-box p {
  font-size: 2em;
  margin-bottom: 10px;
  font-weight: 500;
}

.btn-toggle, .btn-edit, .btn-delete {
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.btn-toggle {
  background-color: #007bff;
  color: white;
  border: none;
}

.btn-toggle:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.search-bar {
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  margin: 20px 0; /* Abstand zur Button-Leiste */
}

.list {
  list-style-type: none;
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-item {
  background-color: #ffffff;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.list-item-actions {
  display: flex;
  gap: 10px;
}

.list-item .btn {
  font-size: 0.9em;
  padding: 5px 10px;
  border-radius: 5px;
}

.btn-edit {
  background-color: #6c757d;
  border: none;
  color: white;
}

.btn-edit:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
}

.btn-delete {
  background-color: #b11525;
  border: none;
  color: white;
}

.btn-delete:hover {
  background-color: #c82333;
  transform: translateY(-2px);
}
</style>
