<template>
  <div class="restaurant-job-list">
    <h1>Verfügbare Job-Angebote!</h1>
    <input type="text" v-model="searchText" placeholder="Suche nach Jobs..." class="form-control mb-3">
    <table class="table">
      <thead>
      <tr>
        <th>Jobtitel</th>
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
          <button @click="deleteJob(job.id)" class="btn btn-danger action-button">Löschen</button>
          <button class="btn btn-primary action-button">Details</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="add-job-form d-flex">
      <input type="text" v-model="newJobName" placeholder="Jobtitel" class="form-control mb-2"/>
      <input type="text" v-model="newJobDescription" placeholder="Jobbeschreibung" class="form-control mb-2"/>
      <input type="text" v-model="newJobEmail" placeholder="Email" class="form-control mb-2"/>
      <button @click="addJob" class="btn-add btn btn-success">Hinzufügen</button>
    </div>
    <FeedbackMessage :message="feedbackMessage" />
  </div>
</template>

<script>
import axios from 'axios';
import FeedbackMessage from '@/components/FeedbackMessage.vue';

export default {
  name: "TempJobList",
  components: {
    FeedbackMessage
  },
  data() {
    return {
      restaurantJobs: [],
      newJobName: '',
      newJobDescription: '',
      newJobEmail: '',
      feedbackMessage: '',
      searchText: ''
    };
  },
  created() {
    this.loadJobs();
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
    addJob() {
      if (this.newJobName.trim() && this.newJobDescription.trim() && this.newJobEmail.trim()) {
        const newJob = {
          name: this.newJobName,
          description: this.newJobDescription,
          email: this.newJobEmail
        };
        axios.post('https://webtech-project-backend.onrender.com/api/jobs', newJob)
          .then(response => {
            this.restaurantJobs.push(response.data);
            this.newJobName = '';
            this.newJobDescription = '';
            this.newJobEmail = '';
            this.feedbackMessage = 'Job erfolgreich hinzugefügt!';
          })
          .catch(error => {
            console.error("There was an error adding the job!", error);
            this.feedbackMessage = 'Fehler beim Hinzufügen des Jobs';
          });
      } else {
        this.feedbackMessage = 'Bitte füllen Sie alle Felder aus.';
      }
    },
    deleteJob(jobId) {
      axios.delete(`https://webtech-project-backend.onrender.com/api/jobs/${jobId}`)
        .then(() => {
          this.restaurantJobs = this.restaurantJobs.filter(job => job.id !== jobId);
          this.feedbackMessage = 'Job erfolgreich gelöscht!';
        })
        .catch(error => {
          console.error("There was an error deleting the job!", error);
          this.feedbackMessage = 'Fehler beim Löschen des Jobs';
        });
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

/* Neue CSS-Klasse für Abstand zwischen den Buttons */
.action-button {
  margin-right: 10px; /* Definiert den Abstand zwischen den Buttons */
}
</style>
