<script setup></script>
<template>
<nav>
<input type="text">
<router-link to="/">HOME</router-link>
<router-link to="contatos">CONTATOS</router-link>
<router-link to="acervo">ACERVO</router-link>
<router-link to="login">LOGIN</router-link>
</nav>
<main>
<Router-View/>
</main>
</template>
<style scoped>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url('src/assets/Biblio.net.png'); /* Use @ para acessar a pasta assets */
    background-size: cover;
    background-position: center;
}

/* Navigation Styles */
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #333;
    padding: 10px 20px;
    color: #fff;
}

nav input[type="text"] {
    padding: 5px;
    border: none;
    border-radius: 10px;
    outline: none;
}

nav a {
    color: #fff;
    text-decoration: none;
    margin: 0 2px; /* Espaço muito reduzido entre os links */
    font-size: 25px;
}

nav a:hover {
    text-decoration: underline;
}

/* Main Content Styles */
main {
    padding: 20px;
    background-color: #fff;
    min-height: 80vh; /* Garante que o conteúdo principal ocupe uma quantidade razoável de espaço */
}

</style>