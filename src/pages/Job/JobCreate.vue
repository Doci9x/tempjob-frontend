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
      <input type="date" v-model="startDate" placeholder="Startdatum" class="form-control mb-2"/>
      <input type="date" v-model="endDate" placeholder="Enddatum" class="form-control mb-2"/>
      <button @click="handleSubmit" class="btn btn-primary" :disabled="isLoading">
        <span v-if="isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span v-if="isLoading">Lädt...</span>
        <span v-else>Hinzufügen</span>
      </button>
    </div>
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
      isLoading: false
    };
  },
  methods: {
    handleSubmit() {
      console.log("handleSubmit aufgerufen"); // Füge diesen Log hinzu
      if (this.name && this.description && this.email && this.phoneNumber && this.location && this.salary && this.startDate && this.endDate && this.requirements) {
        console.log("Alle Felder sind ausgefüllt"); // Füge diesen Log hinzu
        this.isLoading = true;
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
            this.resetForm();
            this.$router.push({ name: 'TempJob' }); // Zurück zur Job-Liste
          })
          .catch(error => {
            console.error("Fehler beim Hinzufügen des Jobs!", error);
            this.isLoading = false; // Stop loading on error
          });
      } else {
        console.log("Einige Felder sind leer"); // Füge diesen Log hinzu
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
      this.isLoading = false;
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
