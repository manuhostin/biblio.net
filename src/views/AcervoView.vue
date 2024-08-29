<script setup></script>
<template>
<div class="background5">
    <nav>
<input type="text">
<router-link to="/">HOME</router-link>
<router-link to="contatos">CONTATOS</router-link>
<router-link to="acervo">ACERVO</router-link>
<router-link to="login">LOGIN</router-link>
</nav>
<h1>Acervo</h1>

</div>

</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  h1 {
    font-family: "Poppins", sans-serif;
      font-weight: 700; 
       font-style: normal;
    font-size: 70px;
    color: #fff;
    text-align: center;
  }
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
h1{
font-size:50px ;
text-align: center;
}
.background5 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Ocupa toda a altura da janela de visualização */
    background-image: url('https://wallpapers.com/images/hd/books-background-wzn7r830u9uzxaxc.jpg');
    background-size: cover; /* Faz a imagem cobrir toda a área */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  }
</style>
