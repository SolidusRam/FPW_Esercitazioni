<script setup>
import { RouterView } from 'vue-router';
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />

  <main>
    <h2>Benvenuto su Cineva</h2>
    <p>Il sito web <b>Cineva</b> puoi trovare le recensioni dei film più recenti e non solo.</p>

    <hr>
    <section>
      <h3>Recensioni in evidenza</h3>
      <article>
        <h4>Titolo Recensione</h4>
        <p>Descrizione del film</p>
        <p>Giudizio: 5/5 - Likes: 120k - Dislikes: 50</p>
      </article>
    </section>

    <hr>
    <section>
      <h4>Classifica Attori più apprezzati</h4>
      <table>
        <tr>
          <th></th>
          <th>Attore</th>
          <th>Voti</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Attore 1</td>
          <td>100k</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Attore 2</td>
          <td>90k</td>
        </tr>
      </table>
    </section>
  </main>
  
  <footer>
    <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
  </footer>
</template>
