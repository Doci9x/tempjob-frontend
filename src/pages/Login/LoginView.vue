<template>
  <div class="auth-container">
    <div class="auth-content">
      <h2>Willkommen zurück!</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" id="username" v-model="username" autocomplete="username" required>
        </div>
        <div class="form-group">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" autocomplete="current-password" required>
        </div>
        <button type="submit" class="btn btn-primary" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span v-if="loading">Lädt...</span>
          <span v-else>Login</span>
        </button>
      </form>
      <p class="mt-3">
        Du hast noch kein Konto?
        <router-link to="/register" class="link">Registrieren</router-link>
      </p>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import apiClient from '@/api';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const loading = ref(false);

    const router = useRouter();

    const handleLogin = async () => {
      loading.value = true;
      error.value = '';
      try {
        const response = await apiClient.loginUser({ username: username.value, password: password.value });
        if (response.status === 200) {
          const userData = response.data;
          console.log('Login successful, storing user data:', userData);
          localStorage.setItem('user', JSON.stringify(userData));
          router.push('/tempjob');
        }
      } catch (err) {
        error.value = 'Ungültige Anmeldeinformationen';
      } finally {
        loading.value = false;
      }
    };

    return {
      username,
      password,
      error,
      loading,
      handleLogin,
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
  max-width: 400px;
  width: 100%;
  margin-top: 10px; /* Abstand zur Navbar */
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
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

.error {
  color: red;
  margin-top: 10px;
}

.spinner-border {
  margin-right: 5px;
}
</style>
