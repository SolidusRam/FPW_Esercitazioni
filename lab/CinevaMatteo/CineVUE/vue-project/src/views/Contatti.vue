<script setup>
</script>

<template>
  
  <main>
      <!-- Titolo principale della pagina Contatti -->
      <h2>Contatti</h2>
      
      <!-- Sezione per i dettagli di contatto -->
      <section>
          <h3>Come raggiungerci</h3>
          
          <!-- Indirizzo fisico -->
          <div>
              <h4>Sede fisica</h4>
              <address>
                  <p>Cineva S.r.l.</p>
                  <p>Via del Cinema 42</p>
                  <p>09124 - Cagliari (CA)</p>
                  <p>Italia</p>
              </address>
          </div>
          
          <!-- Contatti email -->
          <div>
              <h4>Contatti email</h4>
              <p>
                  <strong>Informazioni generali:</strong> 
                  <a href="mailto:info@cineva.it">info@cineva.it</a>
              </p>
              <p>
                  <strong>Supporto tecnico:</strong> 
                  <a href="mailto:supporto@cineva.it">supporto@cineva.it</a>
              </p>
              <p>
                  <strong>Collaborazioni e partnership:</strong> 
                  <a href="mailto:partner@cineva.it">partner@cineva.it</a>
              </p>
          </div>
          
          <!-- Orari di disponibilità -->
          <div>
              <h4>Orari</h4>
              <p>Il nostro team è disponibile per rispondere alle vostre domande dal lunedì al venerdì, dalle 9:00 alle 18:00.</p>
          </div>
      </section>
      
      <!-- Sezione per il modulo di contatto -->
      <section>
          <h3>Scrivici direttamente</h3>
          <p>Compila il modulo sottostante per inviarci un messaggio, ti risponderemo al più presto:</p>
          
          <!-- Form di contatto migliorato -->
          <form action="#" method="post">
              <fieldset>
                  <legend>Informazioni personali</legend>
                  <div>
                      <label for="nome">Nome e Cognome:</label>
                      <input type="text" id="nome" name="nome" placeholder="Es. Mario Rossi" required>
                  </div>
                  
                  <div>
                      <label for="email">Email:</label>
                      <input type="email" id="email" name="email" placeholder="Es. mario.rossi@example.com" required>
                  </div>
                  
                  <div>
                      <label for="telefono">Telefono (opzionale):</label>
                      <input type="tel" id="telefono" name="telefono" placeholder="Es. 3471234567">
                  </div>
              </fieldset>

              <fieldset>
                  <legend>Il tuo messaggio</legend>
                  <div>
                      <label for="oggetto">Oggetto:</label>
                      <input type="text" id="oggetto" name="oggetto" placeholder="Inserisci l'oggetto del messaggio" required>
                  </div>
                  
                  <div>
                      <label for="categoria">Categoria:</label>
                      <select id="categoria" name="categoria">
                          <option value="">Seleziona una categoria</option>
                          <option value="informazioni">Richiesta informazioni</option>
                          <option value="supporto">Supporto tecnico</option>
                          <option value="partnership">Collaborazione/Partnership</option>
                          <option value="suggerimento">Suggerimento</option>
                          <option value="altro">Altro</option>
                      </select>
                  </div>
                  
                  <div>
                      <label for="messaggio">Messaggio:</label>
                      <textarea id="messaggio" name="messaggio" rows="5" placeholder="Scrivi qui il tuo messaggio..." required></textarea>
                  </div>
              </fieldset>

              <fieldset>
                  <legend>Preferenze</legend>
                  <div>
                      <label>Come preferisci essere contattato?</label>
                      <div>
                          <input type="radio" id="contatto-email" name="metodo-contatto" value="email" checked>
                          <label for="contatto-email">Email</label>
                      </div>
                      <div>
                          <input type="radio" id="contatto-telefono" name="metodo-contatto" value="telefono">
                          <label for="contatto-telefono">Telefono</label>
                      </div>
                  </div>
                  
                  <div>
                      <input type="checkbox" id="newsletter" name="newsletter" value="si">
                      <label for="newsletter">Desidero iscrivermi alla newsletter di Cineva</label>
                  </div>
                  
                  <div>
                      <input type="checkbox" id="privacy" name="privacy" value="accettato" required>
                      <label for="privacy">Acconsento al trattamento dei miei dati personali *</label>
                  </div>
              </fieldset>

              <div class="form-buttons">
                  <button type="submit">Invia messaggio</button>
                  <button type="reset">Cancella tutto</button>
              </div>
          </form>
      </section>
  </main>

  <footer>
      <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
  </footer>
</template>