<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
    <Header />

    <main>
        <h2>Accedi all'area riservata</h2>
        
        <section>
            <h3>Login</h3>
            <p>Inserisci le tue credenziali per accedere</p>
            
            <form action="login" method="post">
                <fieldset>
                    <legend>Dati di accesso</legend>
                    
                    <div>
                        <label for="username">Username</label>
                        <input type="text" name="username" id="username" placeholder="Inserisci il tuo username" required>
                    </div>
                    
                    <div>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" placeholder="Inserisci la tua password" required>
                    </div>
                    
                    <div>
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Ricordami su questo dispositivo</label>
                    </div>
                </fieldset>
                
                <div class="form-buttons">
                    <button type="submit">Accedi</button>
                    <button type="reset">Cancella</button>
                </div>
            </form>
            
            <div class="login-options">
                <p>
                    <a href="#">Password dimenticata?</a>
                </p>
                <p>
                    Non hai un account? <a href="#">Registrati</a>
                </p>
            </div>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2023-2025 Cineva - Tutti i diritti riservati</p>
    </footer>
</template>

<style scoped>
.login-options {
    margin-top: 20px;
    text-align: center;
}

.login-options p {
    margin-bottom: 10px;
}

.form-buttons {
    margin-top: 20px;
}
</style>
