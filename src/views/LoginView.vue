<template>
  <div class="container mt-5">
    <h2>Login</h2>
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
      <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
    </form>

    <!-- Toast -->
    <div v-if="showToast" class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 11">
      <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Willkommen</strong>
          <button type="button" class="btn-close" aria-label="Close" @click="showToast = false"></button>
        </div>
        <div class="toast-body">
          <pre>
username: 'user', password: '123'
username: 'admin', password: '123'
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const username = ref('');
    const password = ref('');
    const error = ref('');
    const showToast = ref(true); // Initialize the toast to be visible

    const store = useStore();
    const router = useRouter();

    const handleLogin = async () => {
      try {
        await store.dispatch('login', { username: username.value, password: password.value });
        router.push('/tempjob');
      } catch (err) {
        error.value = 'Ungültiger Username oder Password';
      }
    };

    return {
      username,
      password,
      error,
      showToast,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 500px;
}

.toast-container {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1055;
}

.toast {
  display: block;
}
</style>
