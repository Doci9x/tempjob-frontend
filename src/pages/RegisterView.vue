<template>
  <div class="container mt-5">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>

    <!-- Login Link -->
    <p class="mt-3">
      Du hast schon ein Konto?
      <router-link to="/login" class="login-link">Login</router-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RegisterView',
  setup() {
    const username = ref('');
    const password = ref('');
    const router = useRouter();

    const handleRegister = () => {
      if (username.value && password.value) {
        // Redirect to login after "registration"
        router.push('/login');
      }
    };

    return {
      username,
      password,
      handleRegister,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
.login-link {
  color: #007bff;
  text-decoration: none;
}

.login-link:hover {
  text-decoration: underline;
}
</style>
