<script setup>
import { RouterView } from 'vue-router';
import ReviewCard from "@/components/ReviewCard.vue";
import { ref } from 'vue';

// Dati di esempio per le recensioni
const reviews = ref([
  {
    id: 1,
    title: "Dune - Parte Due",
    description: "Un capolavoro visivo che continua l'epica saga di Dune con una narrativa coinvolgente e effetti speciali straordinari. Denis Villeneuve conferma il suo talento nella fantascienza.",
    rating: 5,
    likes: 120000,
    dislikes: 50,
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    director: "Denis Villeneuve",
    releaseYear: 2024
  },
  {
    id: 2,
    title: "Oppenheimer",
    description: "Un film biografico potente e intenso che esplora la figura complessa del padre della bomba atomica. La regia di Christopher Nolan e la performance di Cillian Murphy sono impeccabili.",
    rating: 4,
    likes: 95000,
    dislikes: 200,
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    director: "Christopher Nolan",
    releaseYear: 2023
  },
  {
    id: 3,
    title: "Povere Creature!",
    description: "Una favola gotica e surreale che mescola fantascienza e dramma con uno stile visivo unico. Emma Stone offre una delle interpretazioni più audaci della sua carriera.",
    rating: 4,
    likes: 78000,
    dislikes: 320,
    imageUrl: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    director: "Yorgos Lanthimos",
    releaseYear: 2023
  }
]);

// Dati di esempio per attori più apprezzati
const actors = ref([
  { position: 1, name: "Cillian Murphy", votes: 218000 },
  { position: 2, name: "Emma Stone", votes: 192000 },
  { position: 3, name: "Timothée Chalamet", votes: 175000 },
  { position: 4, name: "Florence Pugh", votes: 163000 },
  { position: 5, name: "Robert Downey Jr.", votes: 149000 }
]);
</script>

<template>
  <main class="container">
    <h2>Benvenuto su Cineva</h2>
    <p>Sul sito web <b>Cineva</b> puoi trovare le recensioni dei film più recenti e non solo.</p>

    <section class="featured-reviews">
      <h3>Recensioni in evidenza</h3>
      <div class="reviews-grid">
        <ReviewCard 
          v-for="review in reviews"
          :key="review.id"
          :title="review.title"
          :description="review.description"
          :rating="review.rating"
          :likes="review.likes"
          :dislikes="review.dislikes"
          :imageUrl="review.imageUrl"
          :director="review.director"
          :releaseYear="review.releaseYear"
        />
      </div>
    </section>

    <section class="top-actors">
      <h3>Classifica Attori più apprezzati</h3>
      <table>
        <thead>
          <tr>
            <th>Posizione</th>
            <th>Attore</th>
            <th>Voti</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="actor in actors" :key="actor.position">
            <td>{{ actor.position }}</td>
            <td>{{ actor.name }}</td>
            <td>{{ actor.votes.toLocaleString() }}</td>
          </tr>
        </tbody>
      </table>
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

@media (min-width: 1024px) {
  .reviews-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.top-actors table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  border-radius: 8px;
  overflow: hidden;
}

.top-actors th, .top-actors td {
  padding: 12px 15px;
  text-align: left;
}

.top-actors th {
  background-color: #16213e;
  color: white;
  font-weight: 500;
}

.top-actors tr:nth-child(even) {
  background-color: #f8f9fa;
}

.top-actors tr:hover {
  background-color: #e9ecef;
}

footer {
  text-align: center;
  padding: 20px;
  margin-top: 40px;
  background-color: #16213e;
  color: white;
}
</style>
