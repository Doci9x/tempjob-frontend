<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">TempJob-Connect</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-if="navLinks.length">
          <router-link v-for="link in navLinks" :key="link" :to="getLinkPath(link)" class="nav-link">{{ link }}</router-link>
        </div>
        <div class="navbar-nav ms-auto dropdown" v-if="showProfileIcon">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://img.icons8.com/?size=100&id=KGfitZgTwrZL&format=png&color=416DE0" alt="Profile" class="rounded-circle" width="45" height="45">
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li class="dropdown-header d-flex align-items-center">
              <img :src="userProfileImage" alt="Profile Picture" class="rounded-circle me-2" width="30" height="30">
              {{ userName }}
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=50jQltuChBWa&format=png&color=000000" alt="Edit Profile" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Profil Bearbeiten</a>
            </li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=364&format=png&color=000000" alt="Settings" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Einstellungen</a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=25643&format=png&color=000000" alt="Manage Entries" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Einträge Verwalten</a>
            </li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=42763&format=png&color=000000" alt="Manage Applications" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Bewerbungen Verwalten</a>
            </li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=118377&format=png&color=000000" alt="Notifications" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Benachrichtigungen</a>
            </li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=GEe8kmVKjZaY&format=png&color=000000" alt="Chats" width="20" height="20" class="me-2">
              <a class="dropdown-item" href="#">Chats</a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="d-flex align-items-center dropdown-item-custom">
              <img src="https://img.icons8.com/?size=100&id=j8vtslxN0LJo&format=png&color=000000" alt="Logout" width="20" height="20" class="me-2">
              <a class="dropdown-item" @click="handleLogout" style="cursor: pointer;">Abmelden</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import apiClient from '@/api'; // Importieren des Axios-Clients
import type { RouteName } from '@/Config/NavbarConfig';
import { navbarConfig } from '@/Config/NavbarConfig';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userName = ref('John Doe'); // Beispiel für den Benutzernamen
    const userProfileImage = 'https://img.icons8.com/?size=100&id=7819&format=png&color=000000';

    const handleLogout = () => {
      router.push('/login');
    };

    const navLinks = computed(() => {
      return navbarConfig[route.name as RouteName]?.links || [];
    });

    const showProfileIcon = computed(() => {
      return navbarConfig[route.name as RouteName]?.showProfileIcon || false;
    });

    const getLinkPath = (link: string) => {
      switch (link) {
        case 'TempJob-Angebote':
          return '/tempjob';
        case 'Job erstellen':
          return '/job-create';
        default:
          return '/';
      }
    };

    const loadUserData = async () => {
      try {
        const response = await apiClient.get('/users/me'); // Beispiel-URL, anpassen je nach API
        userName.value = response.data.username;
      } catch (error) {
        console.error('Error loading user data', error);
      }
    };

    onMounted(() => {
      loadUserData();
    });

    return {
      handleLogout,
      navLinks,
      getLinkPath,
      showProfileIcon,
      userName,
      userProfileImage,
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

.dropdown-toggle::after {
  display: none;
}

.dropdown-menu {
  right: 0;
  left: auto;
}

.rounded-circle {
  border-radius: 50%;
}

.dropdown-header {
  display: flex;
  align-items: center;
}

.me-2 {
  margin-right: 0.5rem;
}

.d-flex {
  display: flex;
  align-items: center;
}

.dropdown-item-custom {
  padding-left: 10px;
}
</style>
