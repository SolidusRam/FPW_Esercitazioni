<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <h1>Cineva</h1>
    <h2>Il sito web di recensioni cinematografiche</h2>
    <a href="/"><img src="@/assets/img/logo.png" alt="Cineva" width="200" /></a>
    <div>
      <nav>
        <RouterLink to="/" exact>Home</RouterLink>
        <RouterLink to="/about">Chi Siamo</RouterLink>
        <RouterLink to="/news">Notizie</RouterLink>
        <RouterLink to="/contatti">Contatti</RouterLink>
        <RouterLink to="/login" class="login-link">Accedi</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 20px 0;
  margin-bottom: 30px;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-align: center;
}

h1 {
  font-family: 'Playfair Display', serif;
  text-align: center;
  font-size: 3rem;
  margin-bottom: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

nav {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
  margin: 0 10px;
}

nav a:hover, nav a.router-link-active {
  background-color: #e94560;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(233, 69, 96, 0.5);
}

.login-link {
  background-color: rgba(233, 69, 96, 0.7);
  margin-left: 15px;
}

.login-link:hover {
  background-color: rgba(233, 69, 96, 1);
}
</style>