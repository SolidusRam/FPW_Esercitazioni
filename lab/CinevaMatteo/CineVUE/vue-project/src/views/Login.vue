<script setup>
</script>

<template>
    <main class="login-container">
        <h2>Accedi all'area riservata</h2>
        
        <section class="login-card">
            <h3>Login</h3>
            <p>Inserisci le tue credenziali per accedere</p>
            
            <form action="login" method="post" class="login-form">
                <fieldset>
                    <legend>Dati di accesso</legend>
                    
                    <div class="form-group">
                        <label for="username">Username</label>
                        <div class="input-wrapper">
                            <input type="text" name="username" id="username" placeholder="Inserisci il tuo username" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-wrapper">
                            <input type="password" name="password" id="password" placeholder="Inserisci la tua password" required>
                        </div>
                    </div>
                    
                    <div class="form-group checkbox">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Ricordami su questo dispositivo</label>
                    </div>
                </fieldset>
                
                <div class="form-buttons">
                    <button type="submit" class="btn primary">Accedi</button>
                    <button type="reset" class="btn secondary">Cancella</button>
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
.login-container {
    max-width: 520px;
    margin: 0 auto;
    padding: 20px;
}

.login-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    margin-bottom: 40px;
    border: 1px solid rgba(0, 0, 0, 0.08);
}

h2 {
    color: #16213e;
    margin-bottom: 25px;
    font-size: 2rem;
    text-align: center;
}

h3 {
    color: #16213e;
    font-size: 1.6rem;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 2px solid #e94560;
    display: inline-block;
}

.login-form {
    margin-top: 25px;
}

fieldset {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 25px;
}

legend {
    padding: 0 10px;
    font-weight: 600;
    color: #16213e;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #16213e;
}

.input-wrapper {
    position: relative;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 12px 15px;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

input[type="text"]:focus,
input[type="password"]:focus {
    border-color: #16213e;
    box-shadow: 0 0 0 3px rgba(22, 33, 62, 0.2);
    outline: none;
}

.checkbox {
    display: flex;
    align-items: center;
}

.checkbox input {
    margin-right: 10px;
}

.form-buttons {
    margin-top: 30px;
    display: flex;
    gap: 15px;
}

.btn {
    padding: 12px 24px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.primary {
    background-color: #e94560;
    color: white;
}

.primary:hover {
    background-color: #d63854;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(233, 69, 96, 0.4);
}

.secondary {
    background-color: #f0f0f0;
    color: #333;
}

.secondary:hover {
    background-color: #e0e0e0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.login-options {
    margin-top: 25px;
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid #eee;
}

.login-options p {
    margin-bottom: 12px;
}

.login-options a {
    color: #e94560;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
}

.login-options a:hover {
    color: #d63854;
    text-decoration: underline;
}

@media (max-width: 600px) {
    .login-card {
        padding: 20px;
    }
    
    .form-buttons {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
}
</style>
