<template>
  <div class="container mt-5">
    <h2>Willkommen zurück!</h2>
    <form @submit.prevent="handleLogin">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>

    <!-- Register Link -->
    <p class="mt-3">
      Du hast noch kein Konto?
      <router-link to="/register" class="register-link">Registrieren</router-link>
    </p>
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

    const router = useRouter();

    const handleLogin = async () => {
      try {
        const response = await apiClient.loginUser({ username: username.value, password: password.value });
        if (response.status === 200) {
          router.push('/tempjob');
        }
      } catch (err) {
        error.value = 'Ungültige Anmeldeinformationen';
      }
    };

    return {
      username,
      password,
      error,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
}

.register-link {
  color: #007bff;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>
