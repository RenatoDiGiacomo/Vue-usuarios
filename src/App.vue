<template>
  <div class="title">
    <h1>Usuários</h1>
    <button>Novo Usuário</button>
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
/*Global Style*/
@font-face {
  font-family: Montserrat;
  src: url("./assets/fonts/static/Montserrat-Regular.ttf");
}
@font-face {
  font-family: Montserrat-Bold;
  src: url("./assets/fonts/static/Montserrat-Regular.ttf");
}

$fontRegular: Montserrat;
$fontBold: Montserrat-Bold;

$black: #000;
$white: #ffffff;
$grey: #797979;


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: $fontRegular;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 6rem auto 0;
  h1 {
    font-family: $fontBold;
    font-weight: 900;
    font-size: 3.125rem;
  }
  button {
    background-color: $black;
    color: $white;
    padding: 1rem 1.5rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
  }
  .title{
    width: 100% ;
    display: flex;
    justify-content: space-between;
  }
}
</style>

