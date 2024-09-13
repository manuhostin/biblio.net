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
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  nav {
    font-family: "Poppins", sans-serif;

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #000000;
    padding: 10px 20px;
    color: #fff;
}

nav input[type="text"] {
    font-family: "Poppins", sans-serif;

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

main {
    font-family: "Poppins", sans-serif;

    padding: 20px;
    background-color: #fff;
    min-height: 80vh; /* Garante que o conteúdo principal ocupe uma quantidade razoável de espaço */
}


</style>