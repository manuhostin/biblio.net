<template>
    <div class="background1">
        <nav>
<input type="text">
<router-link to="/">HOME</router-link>
<router-link to="contatos">CONTATOS</router-link>
<router-link to="acervo">ACERVO</router-link>
<router-link to="login">LOGIN</router-link>
</nav>
      <h1> Livro Amigo</h1>
      <p>
        O Livro Amigo é uma iniciativa solidária que visa proporcionar acesso à leitura para crianças carentes por meio do empréstimo de livros. O projeto tem como objetivo incentivar o hábito da leitura e contribuir para o desenvolvimento educacional e pessoal dessas crianças, ampliando suas oportunidades de aprendizado e cultura.


      </p>
    <div class= "contact-container">
        <router-link to="contatos" class="contato">Entre em contato!</router-link>

    </div>
    </div>
 
  </template>

  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  .background1 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh; /* Ocupa toda a altura da janela de visualização */
    background-image: url(data:image/jpeg;base64,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);
    background-size: cover; /* Faz a imagem cobrir toda a área */
    background-position: center; /* Centraliza a imagem */
    background-repeat: no-repeat; /* Evita a repetição da imagem */
  }
  h1 {
    font-family: "Poppins", sans-serif;
      font-weight: 700; 
       font-style: normal;
    font-size: 70px;
    color: #fff;
    text-align: center;
  }
  p {
    font-family: "Poppins", sans-serif;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5), 0 0 25px rgba(0, 0, 0, 0.5);

      font-style: normal;
    font-size: 30px;
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

main {
    font-family: "Poppins", sans-serif;

    padding: 20px;
    background-color: #fff;
    min-height: 80vh; /* Garante que o conteúdo principal ocupe uma quantidade razoável de espaço */
}
.contact-container {
    display: flex;
    justify-content: center; /* Centraliza o botão horizontalmente */
    align-items: center; /* Centraliza o botão verticalmente */
    padding: 20px;
}

.contato {
    background-color: #4CAF50; /* Cor de fundo verde */
    color: white; /* Cor do texto */
    padding: 10px 20px; /* Espaçamento interno */
    text-decoration: none; /* Remove sublinhado */
    border-radius: 5px; /* Bordas arredondadas */
    font-size: 16px; /* Tamanho do texto */
    font-weight: bold; /* Negrito */
    transition: background-color 0.3s ease; /* Transição suave na cor de fundo */
}

.contato:hover {
    background-color: #45a049; /* Cor ao passar o mouse */
    cursor: pointer; /* Mudança do cursor ao passar o mouse */
}

.contato:active {
    background-color: #3e8e41; /* Cor ao clicar */
}

  </style>
  