<template>
  <div v-if="message" class="alert alert-success d-flex align-items-center" role="alert">
    <i class="bi bi-check-circle-fill me-2"></i>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style scoped>
.alert {
  color: #0f5132; /* Dunkelgrüne Schriftfarbe für den Erfolg */
  background-color: #d1e7dd; /* Helle grüne Hintergrundfarbe */
  border-color: #badbcc; /* Dunklere grüne Randfarbe */
}
</style>
