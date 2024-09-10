<script setup></script>
<template>
    <nav>
        <img id="logo" src="../assets/imagens/logo.jpg" alt="">
        <router-link to="/">HOME</router-link>
        <router-link to="contatos">CONTATOS</router-link>
        <router-link to="acervo">ACERVO</router-link>
        <div id="user">
            <router-link to="/login">
                <img src="../assets/imagens/user.png" alt="" />
            </router-link>
        </div>
    </nav>
    <main>
        <Router-View />
    </main>
</template>
<style scoped>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;

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
    margin: 0 2px;
    /* Espaço muito reduzido entre os links */
    font-size: 25px;
}

nav a:hover {
    text-decoration: underline;
}

/* Main Content Styles */
main {
    padding: 20px;
    background-color: #fff;
    min-height: 80vh;
    /* Garante que o conteúdo principal ocupe uma quantidade razoável de espaço */
}
</style>