<template>
  <div class="background2">
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
    <h1>Empréstimos</h1>
      <div class="container-book">
        <img id="imagem-book" src="../assets/imagens/img1.png" alt=""> 
          <div class="informacoes">
            <h2>Harry Potter e a pedra filosofal</h2>
            <p id="user-description">
              Publicado em 1997 peka aclamada escritora britâncica J.K. Rowling, 'Harry Potter e a pedra filosofal' marca o início de uma das séries literárias mais influetes e amadas do século XXI. Este primeiro volume apresenta-nos ao jovem Harry Potter, sua entrada na Escola de Magia e Bruxariade Hogwarts, o legado de seus pais e a sombria figura de Lord Voldemort.
            </p>
            <div class="textoButton">            
               <router-link to="/">
              <button>Voltar</button>
            </router-link></div>
             
          </div>
      </div>
  </div>
</template>

<script setup>
// Não há necessidade de JavaScript aqui para este exemplo específico
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');



#user {
  width: 20px;
  margin-top: 0;
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
  color: #000000;
  text-align: center;
  padding: 40px 0 0 0;
}

nav {
  font-family: "Poppins", sans-serif;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #000000;
  height: 28px;
  padding: 8px 3px;
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


body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
   
  }
  button {
    background-color: rgb(12, 12, 12);
    color: white;
    border-radius: 14px;
    font-size: 20px;
    width: 150px;
    height: 34px;
    margin: 18px;
  }

  .textoButton {
    font-size: 20px;
  }

  .container-book {
    padding: 150px;
    margin: 30px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    border: solid black 3px
  }
  
  #imagem-book {
    width: 300px;
    margin: 0;
    padding: 0px;
  }
  
  .informacoes {
    flex: 1;
  }
  
  h2 {
    font-size: 40px;
    align-items: center;
    justify-content: center;
    color: black;
  }
  
  p {
    margin:0;
    font-size: 30px;
    color: #000000;
  }
  

</style>