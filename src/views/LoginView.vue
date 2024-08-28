<script setup></script>
<template><h1>Login</h1>
<div>
<label for="nome-r">Nome do responsável:</label>
<input type="text">
</div>
<div>
<label for="nome-e">Nome do estudante:</label>
<input type="text">
</div>
<div>
<label for="senha">Senha:</label>
<input type="password">
</div>
<button><router-link to="estudante">Acersar</router-link></button>
</template>
<style scoped>
h1{
font-size: 50px ;
text-align: center
}
div{
text-align: center;
}
</style>