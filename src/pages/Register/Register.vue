<template>
  <div class="auth-container">
    <div class="auth-content">
      <h2>Registrieren</h2>
      <form @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" required>
        </div>
        <div class="form-group">
          <label for="firstName" class="form-label">First Name</label>
          <input type="text" class="form-control" id="firstName" v-model="firstName" required>
        </div>
        <div class="form-group">
          <label for="lastName" class="form-label">Last Name</label>
          <input type="text" class="form-control" id="lastName" v-model="lastName" required>
        </div>
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="email" v-model="email" required>
        </div>
        <div class="form-group">
          <label for="phone" class="form-label">Phone</label>
          <input type="text" class="form-control" id="phone">
        </div>
        <div class="form-group">
          <label for="birthDate" class="form-label">Birth Date</label>
          <input type="date" class="form-control" id="birthDate" v-model="birthDate" required>
        </div>
        <div class="form-group">
          <label for="address" class="form-label">Address</label>
          <input type="text" class="form-control" id="address" v-model="address" required>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
      <p class="mt-3">
        Du hast schon ein Konto?
        <router-link to="/login" class="link">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/api';  // Importiere den API Client

export default defineComponent({
  name: 'RegisterView',
  setup() {
    const username = ref('');
    const password = ref('');
    const firstName = ref('');
    const lastName = ref('');
    const email = ref('');
    const phone = ref('');
    const birthDate = ref('');
    const address = ref('');
    const router = useRouter();

    const handleRegister = async () => {
      if (username.value && password.value && firstName.value && lastName.value && email.value && birthDate.value && address.value) {
        const user = {
          username: username.value,
          password: password.value,
          firstName: firstName.value,
          lastName: lastName.value,
          email: email.value,
          phone: phone.value,
          birthDate: birthDate.value,
          address: address.value,
        };
        try {
          await apiClient.createUser(user);
          router.push('/login');
        } catch (error) {
          console.error('Error creating user', error);
          alert('Error creating user');
        }
      }
    };

    return {
      username,
      password,
      firstName,
      lastName,
      email,
      phone,
      birthDate,
      address,
      handleRegister,
    };
  },
});
</script>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px); /* Höhe abzüglich der Navbar-Höhe */
  background-color: #f5f5f7;
  position: relative; /* Position relativ zur Seite */
  top: 70px; /* oberen Rand, um den Platz für die Navbar freizuhalten */
  width: 100%; /* Breite auf 100% setzen */
  overflow: auto; /* Ermöglicht das Scrollen, wenn der Inhalt den Bildschirm überschreitet */
}

.auth-content {
  background: #fff;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
  margin-top: 10px; /* Abstand zur Navbar */
}

h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  color: #555;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-sizing: border-box;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.link {
  color: #007bff;
  text-decoration: none;
}

.link:hover {
  text-decoration: underline;
}
</style>
