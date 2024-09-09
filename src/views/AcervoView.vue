<script setup>

import { ref } from 'vue';

const cards = ref([
  {
    id: 1,
    img: "../assets/imagens/img1.png",
    title: 'Harry Potter e a pedra filosofal',
    description: 'csscscscscs',
  },
  {
    id: 2,
    img: "../assets/imagens/img2.png",
    title: 'Harry Potter e o prisioneiro de Azkaban ',
    description: 'csscscscscs',
  },
  {
    id: 3,
    img: "../assets/imagens/img3.png",
    title: 'Harry Potter e a câmara secreta',
    description: 'csscscscscs',
  }
])

</script>

<template>
  <div class="background5">
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

    <div class="card-container">
      <div class="card" v-for="card in cards" :key="card.id">
        <img :src="card.img" class="card-img">
        <div>
          <h2 class="card-title">{{ card.title }}</h2>
          <p class="card-description">{{ card.description }}</p>
        </div>
      </div>
    </div>



  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

}

.card {
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  width: 200px;
}

.card-image {
  width: 100%;
  height: auto;
}

.card-content {
  padding: 16px;
}

.card-title {
  font-size: 1.2em;
  margin: 0;
}

.card-description {
  font-size:
    1em;
  color: #666;
}


#logo {
  width: 80px;
  height: 30px;
  margin: 0;
}


p {
  font-family: "Poppins", sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 0, 0, 0.5);
  font-style: normal;
  font-size: 20px;
  color: #fff;
  text-align: center;
}

nav {
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  height: 28px;
  padding: 10px 10px;
  color: #fff;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 2px;
  /* Espaço muito reduzido entre os links */
  font-size: 18px;
}

nav a:hover {
  text-decoration: underline;
}


.contact-container {
  display: flex;
  justify-content: center;
  /* Centraliza o conteúdo horizontalmente */
  margin-top: 20px;
  /* Espaço acima do link de contato */
}

.background5 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(160, 112, 73);
}
</style>
