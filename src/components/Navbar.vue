<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TempJob-Connect</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/login" class="nav-link">Login</router-link>
          <router-link to="/register" class="nav-link">Register</router-link>
          <router-link to="/tempjob" class="nav-link">TempJob-Angebote</router-link>
          <router-link to="/admin" class="nav-link">Admin-Dashboard</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <a @click="handleLogout" class="nav-link" style="cursor: pointer;">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter();

    const handleLogout = () => {
      router.push('/login');
    };

    return {
      handleLogout,
    };
  },
});
</script>

<style scoped>
.nav-link {
  margin-right: 15px;
  color: #f8f9fa;
}

.nav-link:hover {
  color: #ef0b0b;
}
</style>
