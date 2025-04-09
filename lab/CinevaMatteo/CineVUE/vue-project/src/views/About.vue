<script setup>
import AdminCard from "@/components/AdminCard.vue";
</script>

<template>

  <main>
    <!-- Titolo principale della pagina About -->
    <h2>Chi Siamo</h2>
    
    <!-- Sottotitolo -->
    <h3>La nostra missione nel mondo del cinema</h3>
    
    <!-- Paragrafo con le informazioni sul sito -->
    <section>
        <h4>Il nostro progetto</h4>
        <p>
            Cineva è nato nel 2023 con l'obiettivo di creare una piattaforma di recensioni cinematografiche 
            autentica e affidabile. Il nostro team è composto da appassionati di cinema che dedicano 
            il loro tempo alla visione e all'analisi critica dei film, dai blockbuster hollywoodiani 
            alle produzioni indipendenti, passando per il cinema d'autore internazionale.
        </p>
        <p>
            Ogni recensione pubblicata su Cineva è frutto di un'attenta analisi che considera 
            non solo la trama e la recitazione, ma anche la regia, la fotografia, la colonna sonora 
            e altri aspetti tecnici e artistici. Il nostro sistema di valutazione, basato su una scala da 1 a 5, 
            offre inoltre la possibilità ai lettori di esprimere il proprio consenso o dissenso.
        </p>
    </section>
    
    <!-- Paragrafo su a chi è rivolto il sito -->
    <section>
        <h4>A chi ci rivolgiamo</h4>
        <p>
            Cineva è pensato per un pubblico variegato di cinefili e spettatori casuali:
        </p>
        <ul>
            <li><strong>Appassionati di cinema</strong> alla ricerca di opinioni dettagliate e competenti sui film</li>
            <li><strong>Spettatori occasionali</strong> che vogliono orientarsi nella scelta di cosa vedere al cinema o in streaming</li>
            <li><strong>Studenti di cinema</strong> interessati ad approfondire l'analisi critica delle opere cinematografiche</li>
            <li><strong>Professionisti del settore</strong> che desiderano seguire le tendenze e le opinioni del pubblico</li>
        </ul>
        <p>
            Il nostro obiettivo è creare un punto di incontro per tutti coloro che amano il cinema, 
            incoraggiando la discussione e lo scambio di opinioni in un ambiente rispettoso e stimolante.
        </p>
    </section>
    
    <!-- Sezione Team -->
    <section>
        <h4>Il nostro team</h4>
        <p>Ecco le persone che gestiscono Cineva con passione e dedizione:</p>
        
        <div class="admin-team">
            <AdminCard 
                name="Marco Rossi" 
                role="Fondatore e CEO" 
                description="Laureato in Cinema e Media, ha fondato Cineva nel 2023 con l'obiettivo di creare uno spazio dedicato alle recensioni cinematografiche autentiche e approfondite."
                imageUrl="/src/assets/img/logo.png"
            />
            
            <AdminCard 
                name="Laura Bianchi" 
                role="Direttore Editoriale" 
                description="Giornalista con esperienza decennale nella critica cinematografica, supervisiona tutti i contenuti pubblicati su Cineva garantendone qualità e accuratezza."
                imageUrl="/src/assets/img/logo.png"
            />
            
            <AdminCard 
                name="Alessandro Verdi" 
                role="Responsabile Tecnico" 
                description="Ingegnere informatico con la passione per il cinema, si occupa della gestione e dell'evoluzione tecnica della piattaforma Cineva."
                imageUrl="/src/assets/img/logo.png"
            />
        </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
  </footer>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.admin-team {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

@media (min-width: 768px) {
  .admin-team {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .admin-team .admin-card {
    width: calc(50% - 15px);
  }
}

@media (min-width: 1024px) {
  .admin-team .admin-card {
    width: calc(33.333% - 20px);
  }
}
</style>
