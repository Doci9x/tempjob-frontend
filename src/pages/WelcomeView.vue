<template>
  <div class="welcome-container">
    <div class="content">
      <h1>Willkommen auf der TempJob-Connect WebSite!</h1>
      <div class="buttons">
        <router-link to="/login" class="btn btn-primary">Anmelden</router-link>
        <router-link to="/register" class="btn btn-primary">Registrieren</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeView',
};
</script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #ffffff;
  color: #000000;
}

.content {
  text-align: center;
}

h1 {
  font-size: 36px;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  justify-content: center; /* Zentrierung der Schaltflächen */
  gap: 10px;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}
</style>
