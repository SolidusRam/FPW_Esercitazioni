<script setup>
import { RouterView } from 'vue-router';
import Navbar from '../views/Navbar.vue';

</script>
<template>

  <Navbar />

  <h2>Benvenuto su Cineva</h2>
  <p>Il sito web <b>Cineva</b> puoi trovare le recensioni dei film più recenti e non solo.</p>

  <hr>
    <h3>Recensioni in evidenza</h3>
    <article>
        <h4>Titolo Recensione</h4>
        <p>Descrizione del film</p>
        <p>Giudizio: 5/5 - Likes: 120k - Dislikes: 50</p>
    </article>
  
  <footer>
      <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
  </footer>
</template>
