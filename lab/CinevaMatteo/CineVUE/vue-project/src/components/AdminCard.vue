<script setup>
// Props del componente AdminCard
defineProps({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'Amministratore'
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: '/src/assets/img/default-profile.jpg'
  }
});
</script>

<template>
  <div class="admin-card">
    <div class="admin-image">
      <img :src="imageUrl" :alt="name">
    </div>
    <div class="admin-info">
      <h4 class="admin-name">{{ name }}</h4>
      <p class="admin-role">{{ role }}</p>
      <p class="admin-description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.admin-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.admin-image img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.admin-info {
  flex: 1;
}

.admin-name {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.admin-role {
  margin: 0 0 10px 0;
  font-style: italic;
  color: #666;
}

.admin-description {
  margin: 0;
  line-height: 1.5;
}
</style>