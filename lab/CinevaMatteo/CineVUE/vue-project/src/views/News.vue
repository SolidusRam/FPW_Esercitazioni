<script setup>
import ReviewCard from "@/components/ReviewCard.vue";
import { ref } from 'vue';

// Dati di esempio per le news
const newsItems = ref([
  {
    id: 1,
    title: "Nuovi dettagli sul prossimo film Marvel",
    description: "La Marvel ha rivelato le prime immagini e dettagli sul prossimo film del suo universo cinematografico. Il regista ha confermato il ritorno di personaggi amati dai fan.",
    imageUrl: "https://www.themoviedb.org/t/p/original/rz8GGX5Id2hCW1KzNI3K9xh1H5h.jpg",
    date: "01 aprile 2025",
    source: "Cinema Today"
  },
  {
    id: 2,
    title: "Festival di Cannes: annunciati i film in concorso",
    description: "Il comitato di selezione del Festival di Cannes ha annunciato i film che parteciperanno al concorso principale per la Palma d'Oro di quest'anno. Tra i registi selezionati, molti nomi di grande prestigio.",
    imageUrl: "https://www.themoviedb.org/t/p/original/qNdtEQ3kkUUvHUHlzUti3PpURGz.jpg",
    date: "30 marzo 2025",
    source: "FilmFestival Magazine"
  },
  {
    id: 3,
    title: "Oscar 2026: le prime previsioni sui favoriti",
    description: "Gli esperti del settore hanno già iniziato a formulare le prime previsioni sui film che potrebbero essere in lizza per gli Oscar 2026, basandosi sulle produzioni attualmente in fase di completamento.",
    imageUrl: "https://www.themoviedb.org/t/p/original/xNJlmGKFAYP9hXtHZyBbKrgTSi9.jpg",
    date: "28 marzo 2025",
    source: "Awards Watch"
  }
]);

// Dati di esempio per le anteprime
const upcomingMovies = ref([
  {
    id: 101,
    title: "Ritorno al Futuro: Reboot",
    description: "Un nuovo capitolo della leggendaria saga di Ritorno al Futuro, con un cast completamente rinnovato ma fedele allo spirito originale.",
    imageUrl: "https://www.themoviedb.org/t/p/original/A3zLEDl7Sj4oGDVpSXdIOzK6nTW.jpg",
    releaseDate: "15 maggio 2025",
    director: "Steven Spielberg"
  },
  {
    id: 102,
    title: "La Luna di Giove",
    description: "Un thriller fantascientifico ambientato su Europa, la luna ghiacciata di Giove, dove una missione di ricerca scopre qualcosa di inaspettato sotto la superficie.",
    imageUrl: "https://www.themoviedb.org/t/p/original/anxgITTZ8QgunYsM9PKNF6MbKwl.jpg",
    releaseDate: "22 maggio 2025",
    director: "Denis Villeneuve"
  }
]);
</script>

<template>
  <main class="container">
    <h2>Ultime Notizie</h2>
    
    <section class="news-section">
      <h3>News in evidenza</h3>
      <div class="news-grid">
        <div class="news-item" v-for="news in newsItems" :key="news.id">
          <div class="news-image">
            <img :src="news.imageUrl" :alt="news.title">
          </div>
          <div class="news-content">
            <h4>{{ news.title }}</h4>
            <div class="news-metadata">
              <span class="news-date">{{ news.date }}</span>
              <span class="news-source">{{ news.source }}</span>
            </div>
            <p>{{ news.description }}</p>
            <a href="#" class="read-more">Leggi l'articolo completo</a>
          </div>
        </div>
      </div>
    </section>
    
    <section class="upcoming-section">
      <h3>Prossimamente al cinema</h3>
      <div class="reviews-grid">
        <ReviewCard 
          v-for="movie in upcomingMovies"
          :key="movie.id"
          :title="movie.title"
          :description="movie.description"
          :rating="5"
          :likes="0"
          :dislikes="0"
          :imageUrl="movie.imageUrl"
          :director="movie.director"
        />
      </div>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h2 {
  color: #16213e;
  margin-bottom: 15px;
  font-size: 2rem;
}

section {
  margin-bottom: 40px;
}

section h3 {
  color: #16213e;
  border-bottom: 2px solid #e94560;
  padding-bottom: 10px;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.news-grid {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.news-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

@media (min-width: 768px) {
  .news-item {
    grid-template-columns: 250px 1fr;
  }
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 200px;
}

.news-content {
  padding: 15px;
}

.news-content h4 {
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  color: #16213e;
}

.news-metadata {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #777;
  margin-bottom: 12px;
}

.news-content p {
  margin-bottom: 15px;
  line-height: 1.5;
}

.read-more {
  display: inline-block;
  color: #e94560;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.read-more:hover {
  color: #c81e43;
  text-decoration: underline;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media (min-width: 768px) {
  .reviews-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  background-color: #16213e;
  color: white;
}
</style>