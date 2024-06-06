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

export default defineComponent({
  name: 'LoginView',
  setup() {
    const username = ref('');
    const password = ref('');

    const router = useRouter();

    const handleLogin = () => {
      router.push('/tempjob');
    };

    return {
      username,
      password,
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
</style>
