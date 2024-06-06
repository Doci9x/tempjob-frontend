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
      <button @click="handleSubmit" class="btn btn-success">Hinzufügen</button>
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
            this.feedbackMessage = 'Job erfolgreich hinzugefügt!';
            this.isError = false;
            this.resetForm();
            this.$router.push({ name: 'Tempjob' }); // Zurück zur Job-Liste
          })
          .catch(error => {
            console.error("Fehler beim Hinzufügen des Jobs!", error);
            this.feedbackMessage = 'Fehler beim Hinzufügen des Jobs';
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
.job-create {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.job-create h1 {
  text-align: center;
  margin-bottom: 20px;
}

.add-job-form {
  display: flex;
  flex-direction: column;
}

.add-job-form .form-control {
  margin-bottom: 10px;
}

.btn-success {
  align-self: flex-end;
  color: white;
}

.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
