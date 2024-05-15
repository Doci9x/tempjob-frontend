<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">TempJob-Connect</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/tempjob" class="nav-link">TempJob-Angebote</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar'
})
</script>

<style scoped>
.navbar {
  background-color: #343a40; /* Dunkelgrau, passend zur Klasse bg-dark */
  border-bottom: 1px solid #dee2e6; /* Helle untere Grenze */
}

.nav-link {
  margin-right: 15px;
  color: #f8f9fa; /* Hellere Schrift für besseren Kontrast */
}

.nav-link:hover {
  color: #adb5bd; /* Grau für Hover-Effekte */
}
</style>
