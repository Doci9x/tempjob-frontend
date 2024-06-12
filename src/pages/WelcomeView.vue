<template>
  <div class="welcome-container">
    <div class="content">
      <h1>Willkommen bei TempJob-Connect!</h1>
      <p class="intro">Ihre Plattform für flexible Jobangebote.</p>
      <div class="features">
        <div class="feature">
          <i class="bi bi-briefcase-fill"></i>
          <h3>Vielfältige Jobs</h3>
          <p>Finden Sie temporäre Jobs, die zu Ihnen passen.</p>
        </div>
        <div class="feature">
          <i class="bi bi-file-earmark-check-fill"></i>
          <h3>Einfache Bewerbung</h3>
          <p>Bewerben Sie sich schnell und unkompliziert.</p>
        </div>
        <div class="feature">
          <i class="bi bi-tools"></i>
          <h3>Für Arbeitgeber</h3>
          <p>Verwalten Sie Ihre Jobangebote und finden Sie Kandidaten.</p>
        </div>
      </div>
      <div class="buttons">
        <router-link to="/login" class="btn btn-primary">Anmelden</router-link>
        <div class="divider"></div>
        <router-link to="/register" class="btn btn-secondary">Registrieren</router-link>
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
@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f5f7;
  color: #333;
  margin: 0;
  padding: 0;
}

.welcome-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 150px); /* Höhe abzüglich der Navbar-Höhe */
  background-color: #f5f5f7;
  color: #333;
  padding: 20px;
  position: relative; /* Position relativ zur Seite */
  top: 50px; /* oberen Rand, um den Platz für die Navbar freizuhalten */
  width: 100%;
  overflow: auto; /* Ermöglicht das Scrollen, wenn der Inhalt den Bildschirm überschreitet */
}

.content {
  background: #fff;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 900px;
  width: 100%;
  margin-top: 10px; /* Abstand zur Navbar */
}

h1 {
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
}

.intro {
  font-size: 18px;
  margin-bottom: 20px;
  color: #555;
}

.features {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  flex-wrap: wrap; /* Zeilenumbruch für kleine Bildschirme */
}

.feature {
  width: 30%;
  text-align: center;
  margin-bottom: 20px; /* Abstand zwischen den Feature-Boxen auf kleineren Bildschirmen */
}

.feature i {
  font-size: 40px;
  margin-bottom: 10px;
  color: #007bff;
}

.feature h3 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
}

.feature p {
  font-size: 14px;
  color: #777;
}

.buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.divider {
  width: 2px;
  height: 40px;
  background-color: #ddd;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 25px;
  transition: background-color 0.3s, transform 0.3s;
  font-size: 16px;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  transform: scale(1.05);
}
</style>
