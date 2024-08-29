<script setup></script>
<template>
    <div class="background3"> 
        <nav>
<input type="text">
<router-link to="/">HOME</router-link>
<router-link to="contatos">CONTATOS</router-link>
<router-link to="acervo">ACERVO</router-link>
<router-link to="login">LOGIN</router-link>
</nav>
<h1>Login</h1>
<div class="form-container">
    <div class="form-group">
      <label for="nome-r">Nome do responsável:</label>
      <input type="text" id="nome-r">
    </div>
    <div class="form-group">
      <label for="nome-e">Nome do estudante:</label>
      <input type="text" id="nome-e">
    </div>
    <div class="form-group">
      <label for="senha">Senha:</label>
      <input type="password" id="senha">
    </div>
  </div>
  <button class="access-button">
<router-link to="estudante">Acessar</router-link>
  </button>
    </div>

</template>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .form-container {
  max-width: 600px; /* Largura máxima do formulário */
  margin: 0 auto; /* Centraliza o formulário horizontalmente */
  padding: 20px; /* Espaço interno do contêiner */
  background-color: #696969; /* Cor de fundo do formulário */
  border-radius: 8px; /* Bordas arredondadas do formulário */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve ao redor do formulário */
}

/* Estiliza cada grupo de formulário */
.form-group {
  margin-bottom: 20px; /* Espaço abaixo de cada grupo */
}

/* Estiliza o rótulo */
.form-group label {
  display: block; /* Faz o rótulo ocupar toda a largura disponível */
  margin-bottom: 8px; /* Espaço abaixo do rótulo */
  font-family: "Poppins", sans-serif; /* Fonte usada para o rótulo */
  font-size: 16px; /* Tamanho da fonte do rótulo */
  color: #000000; /* Cor do texto do rótulo */
}

/* Estiliza o campo de entrada de texto */
.form-group input[type="text"],
.form-group input[type="password"] {
  width: 100%; /* Faz o campo ocupar toda a largura do grupo */
  padding: 10px; /* Espaço interno do campo */
  border: 1px solid #ccc; /* Borda do campo */
  border-radius: 4px; /* Bordas arredondadas do campo */
  font-family: "Poppins", sans-serif; /* Fonte usada no campo */
  font-size: 16px; /* Tamanho da fonte no campo */
  box-sizing: border-box; /* Inclui padding e borda no cálculo da largura total */
}

/* Estiliza o campo de entrada ao ganhar foco */
.form-group input[type="text"]:focus,
.form-group input[type="password"]:focus {
  border-color: #000000; /* Cor da borda ao ganhar foco */
  outline: none; /* Remove o contorno padrão */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5); /* Sombra ao redor do campo ao ganhar foco */
}
  .background3 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Ocupa toda a altura da janela de visualização */
    background-image: url('https://png.pngtree.com/background/20230527/original/pngtree-an-old-bookcase-in-a-library-picture-image_2760144.jpg');
    background-size: cover; /* Faz a imagem cobrir toda a área */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  }
h1{
    font-family: "Poppins", sans-serif;
      font-weight: 700; 
       font-style: normal;
    font-size: 70px;
    color: #000000;
    text-align: center;
}
div{
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
/* Estiliza o botão */
.access-button {
  background-color: #ffffff; /* Cor de fundo do botão */
  border: none; /* Remove a borda padrão do botão */
  border-radius: 5px; /* Bordas arredondadas do botão */
  padding: 12px 20px; /* Espaço interno do botão */
  color: #000000; /* Cor do texto do botão */
  font-family: "Poppins", sans-serif; /* Fonte usada no botão */
  font-size: 16px; /* Tamanho da fonte no botão */
  cursor: pointer; /* Cursor de ponteiro ao passar o mouse sobre o botão */
  display: inline-flex; /* Flexbox para centralizar o link */
  justify-content: center; /* Centraliza o conteúdo do botão horizontalmente */
  align-items: center; /* Centraliza o conteúdo do botão verticalmente */
  text-decoration: none; /* Remove o sublinhado do link */
  text-align: center; /* Alinha o texto no centro do botão */
  margin-top: -10px; /* Move o botão para cima */
}

/* Estiliza o link dentro do botão */
.button-link {
  color: #fff; /* Cor do texto do link dentro do botão */
  text-decoration: none; /* Remove o sublinhado do link */
  display: block; /* Faz o link ocupar toda a área do botão */
  width: 100%; /* Largura total do botão */
  height: 100%; /* Altura total do botão */
}

/* Estiliza o botão ao passar o mouse */
.access-button:hover {
  background-color: #555555; /* Cor de fundo mais escura ao passar o mouse */
}
</style>