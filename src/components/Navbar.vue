<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">TempJob-Connect</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link v-for="link in visibleLinks" :key="link.path" :to="link.path" class="nav-link">{{ link.label }}</router-link>
        </div>
        <div class="navbar-nav ms-auto" v-if="visibleLinks.length">
          <a @click="handleLogout" class="nav-link" style="cursor: pointer;">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { navbarConfig, RouteName } from '@/Config/NavbarConfig';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const route = useRoute();

    const handleLogout = () => {
      router.push('/login');
    };

    const visibleLinks = computed(() => {
      const routeName = route.name as RouteName;
      return navbarConfig[routeName] || [];
    });

    return {
      handleLogout,
      visibleLinks,
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
