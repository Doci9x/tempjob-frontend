<template>
  <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand d-flex align-items-center">
        <img src="https://img.icons8.com/ios-filled/50/ffffff/briefcase.png" alt="Logo" class="logo me-2">
        TempJob-Connect
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav" v-if="navLinks.length">
          <router-link v-for="link in navLinks" :key="link" :to="getLinkPath(link)" class="nav-link">{{ link }}</router-link>
        </div>
        <div class="navbar-nav ms-auto dropdown" v-if="showProfileIcon">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img :src="profileIconUrl" alt="Profile" class="rounded-circle profile-icon">
          </a>
          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
            <li class="dropdown-header d-flex align-items-center">
              <img :src="userProfileImage" alt="Profile Picture" class="rounded-circle me-2 user-image">
              <span>{{ userFullName }}</span>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/edit--v1.png" alt="Edit Profile" class="icon me-2">
              <a class="dropdown-link" href="#">Profil Bearbeiten</a>
            </li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/settings.png" alt="Settings" class="icon me-2">
              <a class="dropdown-link" href="#">Einstellungen</a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/list--v1.png" alt="Manage Entries" class="icon me-2">
              <a class="dropdown-link" href="#">Einträge Verwalten</a>
            </li>

            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/briefcase.png" alt="Manage Applications" class="icon me-2">
              <a class="dropdown-link" href="#">Bewerbungen Verwalten</a>
            </li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/bell.png" alt="Notifications" class="icon me-2">
              <a class="dropdown-link" href="#">Benachrichtigungen <span class="badge">3</span></a>
            </li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/chat.png" alt="Chats" class="icon me-2">
              <a class="dropdown-link" href="#">Chats</a>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li class="dropdown-item d-flex align-items-center">
              <img src="https://img.icons8.com/ios-glyphs/30/ffffff/exit.png" alt="Logout" class="icon me-2">
              <a class="dropdown-link" @click="handleLogout" style="cursor: pointer;">Abmelden</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import type { RouteName } from '@/config/NavbarConfig';
import { navbarConfig } from '@/config/NavbarConfig';

export default defineComponent({
  name: 'Navbar',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const userProfileImage = ref('https://img.icons8.com/ios-filled/50/ffffff/user.png');
    const unreadCount = ref(3);

    const handleLogout = () => {
      localStorage.removeItem('user'); // Entferne die Benutzerinformationen aus dem localStorage
      router.push('/login');
    };

    const navLinks = computed(() => {
      return navbarConfig[route.name as RouteName]?.links || [];
    });

    const showProfileIcon = computed(() => {
      return navbarConfig[route.name as RouteName]?.showProfileIcon || false;
    });

    const profileIconUrl = computed(() => {
      return 'https://img.icons8.com/ios-filled/50/ffffff/user-male-circle.png';
    });

    const userFullName = computed(() => {
      return 'John Snow';
    });

    const getLinkPath = (link: string) => {
      switch (link) {
        case 'TempJob-Angebote':
          return '/tempjob';
        case 'Job erstellen':
          return '/job-create';
        case 'Admin-Dashboard':
          return '/admin-dashboard';
        default:
          return '/';
      }
    };

    return {
      handleLogout,
      navLinks,
      getLinkPath,
      showProfileIcon,
      userFullName,
      userProfileImage,
      profileIconUrl,
      unreadCount,
    };
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
}

.navbar {
  background-color: #343a40; /* Dunkleres Grau */
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 500;
  color: #ecf0f1; /* Hellgrau */
}

.nav-link {
  margin-right: 15px;
  color: #ecf0f1; /* Hellgrau */
  transition: color 0.3s;
}

.nav-link:hover {
  color: #adb5bd; /* Helleres Grau für Hover-Effekt */
}

.profile-icon {
  width: 45px;
  height: 45px;
  object-fit: cover;
}

.dropdown-toggle::after {
  display: none;
}

.dropdown-menu {
  right: 0;
  left: auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #495057; /* Mittelgrau */
}

.dropdown-header {
  display: flex;
  align-items: center;
  color: #ecf0f1; /* Hellgrau */
  font-size: 1rem;
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

.icon {
  width: 20px;
  height: 20px;
  filter: invert(100%);
}

.dropdown-item {
  color: #ecf0f1; /* Hellgrau */
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: #6c757d; /* Helleres Grau für Hover-Effekt */
  color: #ffffff; /* Weiß */
}

.dropdown-link {
  color: inherit;
  text-decoration: none;
}

.badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0 6px;
  font-size: 12px;
}
</style>
