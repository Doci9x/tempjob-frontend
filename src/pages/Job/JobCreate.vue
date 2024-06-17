<template>
  <div class="job-create">
    <h1>Neues Job-Angebot erstellen</h1>
    <div class="add-job-form">
      <input type="text" v-model="name" placeholder="Unternehmen" class="form-control mb-2"/>
      <input type="text" v-model="description" placeholder="Jobbeschreibung" class="form-control mb-2"/>
      <input type="text" v-model="salary" placeholder="Zahlung" class="form-control mb-2"/>
      <input type="text" v-model="requirements" placeholder="Anforderungen" class="form-control mb-2"/>
      <input type="email" v-model="email" placeholder="Email" class="form-control mb-2"/>
      <input type="text" v-model="phoneNumber" placeholder="Telefonnummer" class="form-control mb-2"/>
      <input type="text" v-model="location" placeholder="Standort" class="form-control mb-2"/>
      <input type="date" v-model="startDate" class="form-control mb-2"/>
      <input type="date" v-model="endDate" class="form-control mb-2"/>
      <button @click="handleSubmit" class="btn btn-primary">Hinzufügen</button>
    </div>
    <p :class="{'text-success': !isError, 'text-danger': isError}" v-if="feedbackMessage">{{ feedbackMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'JobCreate',
  data() {
    return {
      name: '',
      description: '',
      email: '',
      phoneNumber: '',
      location: '',
      salary: '',
      startDate: '',
      endDate: '',
      requirements: '',
      feedbackMessage: '',
      isError: false
    };
  },
  methods: {
    handleSubmit() {
      if (this.name && this.description && this.email && this.phoneNumber && this.location && this.salary && this.startDate && this.endDate && this.requirements) {
        const newJob = {
          name: this.name,
          description: this.description,
          email: this.email,
          phoneNumber: this.phoneNumber,
          location: this.location,
          salary: this.salary,
          startDate: this.startDate,
          endDate: this.endDate,
          requirements: this.requirements
        };
        axios.post('https://webtech-project-backend.onrender.com/api/jobs', newJob)
          .then(response => {
            console.log('Response received:', response); // Log the entire response
            this.feedbackMessage = 'Job erfolgreich hinzugefügt!';
            this.isError = false;
            this.resetForm();
            this.$router.push({ name: 'Tempjob' }); // Zurück zur Job-Liste
          })
          .catch(error => {
            console.error("Fehler beim Hinzufügen des Jobs!", error);
            if (error.response && error.response.data) {
              console.error('Server response:', error.response.data); // Log server response
              this.feedbackMessage = `Fehler: ${error.response.data.message || 'Unbekannter Fehler'}`;
            } else {
              this.feedbackMessage = 'Fehler beim Hinzufügen des Jobs';
            }
            this.isError = true;
          });
      } else {
        this.feedbackMessage = 'Bitte füllen Sie alle Felder aus.';
        this.isError = true;
      }
    },
    resetForm() {
      this.name = '';
      this.description = '';
      this.email = '';
      this.phoneNumber = '';
      this.location = '';
      this.salary = '';
      this.startDate = '';
      this.endDate = '';
      this.requirements = '';
      this.feedbackMessage = '';
      this.isError = false;
    }
  }
}
</script>

<style scoped>

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f7;
  color: #333;
  margin: 0;
  padding: 0;
}

.job-create {
  max-width: 700px;
  margin: 20px auto;
  padding: 30px;
}

.job-create h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-weight: 500; /* Etwas dicker als normal */
}

.add-job-form {
  display: flex;
  flex-direction: column;
}

.add-job-form .form-control {
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 16px;
}

.add-job-form .form-control:focus {
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.25);
}

.btn-primary {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.text-success {
  color: green;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
}

.text-danger {
  color: red;
  text-align: center;
  margin-top: 20px;
  font-weight: 500;
}
</style>
