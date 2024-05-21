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
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </form>
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
    const error = ref('');
    const router = useRouter();

    const handleRegister = () => {
      if (username.value && password.value) {
        error.value = '';
        // Redirect to login after "registration"
        router.push('/login');
      } else {
        error.value = 'Bitte geben Sie einen Username und ein Passwort an!';
      }
    };

    return {
      username,
      password,
      error,
      handleRegister,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
}
</style>
