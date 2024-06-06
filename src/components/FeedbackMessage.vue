<template>
  <div>
    <p :class="{'text-success': !error, 'text-danger': error}" v-if="message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    error: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.text-success {
  color: green;
}

.text-danger {
  color: red;
}
</style>
