<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>

    <h1>Cineva</h1>
    <h2>Il sito web di recensioni cinematografiche</h2>
    <a href="/"><img src="@/assets/img/logo.png" alt="Cineva" width="200" /></a>
    <header> 
        <div>
        <nav>
            <RouterLink to="/" exact>Home</RouterLink>
            <RouterLink to="/about">Chi Siamo</RouterLink>
            <RouterLink to="/news">Notizie</RouterLink>
            <RouterLink to="/contatti">Contatti</RouterLink>
        </nav>
        </div>
    </header>

</template>

