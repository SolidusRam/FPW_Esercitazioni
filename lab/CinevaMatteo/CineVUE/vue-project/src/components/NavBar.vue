<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="main-nav">
    <RouterLink to="/" exact>Home</RouterLink>
    <RouterLink to="/about">Chi Siamo</RouterLink>
    <RouterLink to="/news">Notizie</RouterLink>
    <RouterLink to="/contatti">Contatti</RouterLink>
    <RouterLink to="/login" class="login-link">Accedi</RouterLink>
  </nav>
</template>

<style scoped>
.main-nav {
  display: flex;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  padding: 14px 0;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  position: relative;
  z-index: 100;
  backdrop-filter: blur(5px);
  border-top: 3px solid #e94560;
}

.main-nav a {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.15rem;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
  letter-spacing: 0.6px;
  margin: 0 12px;
  position: relative;
  overflow: hidden;
}

.main-nav a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: #e94560;
  transform: translateX(-50%);
  transition: width 0.3s ease;
  border-radius: 3px;
}

.main-nav a:hover::before, 
.main-nav a.router-link-active::before {
  width: 70%;
}

.main-nav a:hover, 
.main-nav a.router-link-active {
  background-color: rgba(233, 69, 96, 0.2);
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(233, 69, 96, 0.4);
}

.login-link {
  background-color: rgba(233, 69, 96, 0.8);
  margin-left: 15px;
  border: 2px solid transparent;
  box-shadow: 0 4px 10px rgba(233, 69, 96, 0.3);
}

.login-link:hover {
  background-color: rgba(233, 69, 96, 1);
  border-color: rgba(255, 255, 255, 0.2);
}
</style>
