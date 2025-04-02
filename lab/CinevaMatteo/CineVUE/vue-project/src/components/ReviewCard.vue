<script setup>
// Props del componente ReviewCard
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 1 && value <= 5
  },
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    default: '/src/assets/img/default-movie.jpg'
  },
  director: {
    type: String,
    default: ''
  },
  releaseYear: {
    type: Number,
    default: null
  }
});
</script>

<template>
  <div class="review-card">
    <div class="review-image">
      <img :src="imageUrl" :alt="title">
    </div>
    <div class="review-info">
      <h4 class="review-title">{{ title }}</h4>
      <div class="review-metadata" v-if="director || releaseYear">
        <span v-if="director">{{ director }}</span>
        <span v-if="director && releaseYear"> | </span>
        <span v-if="releaseYear">{{ releaseYear }}</span>
      </div>
      <p class="review-description">{{ description }}</p>
      <div class="review-stats">
        <div class="review-rating">
          <span class="stars">
            <span v-for="i in 5" :key="i" :class="{ 'filled': i <= rating }">★</span>
          </span>
          <span class="rating-text">{{ rating }}/5</span>
        </div>
        <div class="review-feedback">
          <span class="likes">👍 {{ likes }}</span>
          <span class="dislikes">👎 {{ dislikes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #fff;
}

.review-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

.review-image img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-bottom: 1px solid #eee;
}

.review-info {
  padding: 15px;
}

.review-title {
  margin: 0 0 5px 0;
  font-size: 1.3rem;
  color: #333;
}

.review-metadata {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 10px;
}

.review-description {
  margin: 0 0 15px 0;
  font-size: 1rem;
  line-height: 1.5;
  color: #444;
}

.review-stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
}

.review-rating {
  display: flex;
  align-items: center;
}

.stars {
  color: #ccc;
  margin-right: 5px;
  letter-spacing: 2px;
}

.stars .filled {
  color: #ff9800;
}

.rating-text {
  font-weight: bold;
  color: #333;
}

.review-feedback {
  display: flex;
  gap: 10px;
}

.likes, .dislikes {
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
}

.likes {
  color: #4caf50;
}

.dislikes {
  color: #f44336;
}
</style>