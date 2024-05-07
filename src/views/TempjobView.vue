<!-- App.vue oder eine andere Hauptkomponente -->
<template>
  <div class="app">
    <TempjobList />
  </div>
</template>

<script setup lang="ts">
import TempjobList from '@/components/TempjobList.vue'
</script>

<style scoped>
.app {
  font-family: 'Arial', sans-serif;
}
</style>

