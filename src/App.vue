<template>
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
    cursor: pointer;
    background-color: $black;
    color: $white;
    padding: 0.7rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    transition: all 0.2s linear;
    &.active {
      background-color: #F7F7F7;
      color: #000;
      transition: all 0.2s linear;
    }
  }
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>

