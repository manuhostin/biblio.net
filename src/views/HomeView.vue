<template>
  <div class="background1">
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
    <h1>BIBLIO.NET</h1>
    <p>
      Bem-vindos ao Biblio.net <br>
      Sistema para a biblioteca da sua escola!
    </p>
    <div class="contact-container">
      <router-link to="/cadastro" class="contato">Faça seu cadastro!</router-link>

    </div>

  </div>
</template>

<script setup>
// Não há necessidade de JavaScript aqui para este exemplo específico
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.background1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* Ocupa toda a altura da janela de visualização */
  background-image: url('https://png.pngtree.com/thumb_back/fh260/background/20230425/pngtree-an-old-library-has-wooden-step-leading-to-stairs-image_2513238.jpg');
  background-size: cover;
  /* Faz a imagem cobrir toda a área */
  background-position: center;
  /* Centraliza a imagem */
  background-repeat: no-repeat;
  /* Evita a repetição da imagem */
}

#logo {
  width: 80px;
  height: 30px;
  margin: 0;
}

h1 {
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 70px;
  color: #fff;
  text-align: center;
  padding: 40px 0 0 0;
}

p {
  font-family: "Poppins", sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 0, 0, 0.5);
  font-style: normal;
  font-size: 40px;
  color: #fff;
  text-align: center;
  padding: 20px;
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

main {
  font-family: "Poppins", sans-serif;

  padding: 20px;
  background-color: #fff;
  min-height: 80vh;
  /* Garante que o conteúdo principal ocupe uma quantidade razoável de espaço */
}

.contact-container {
  display: flex;
  justify-content: center;
  /* Centraliza o conteúdo horizontalmente */
  margin-top: 20px;
  /* Espaço acima do link de contato */
}

.contato {
  font-family: "Poppins", sans-serif;

  color: #fff;
  font-size: 24px;
  /* Ajuste o tamanho da fonte se necessário */
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #fff;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  /* Fundo semitransparente para contraste */
}

.contato:hover {
  background-color: rgba(255, 255, 255, 0.2);
  /* Efeito ao passar o mouse */
  color: #000;
}
</style>