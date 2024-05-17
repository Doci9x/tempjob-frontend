<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
</style>
