<script setup>

</script>

<template>
  <header>
    <div class="container">
      <div class="nav-left">
        <img id="logo" src="../assets/logoPiccolo.png" alt="">
        <h1>B-Doctors</h1>
      </div>
      <div class="nav-right">
        <a href="">Registrati</a>
        <a href="">Accedi</a>
      </div>

    </div>

  </header>
</template>

<style lang="scss">
@use '../style.scss' as *;

.container {
  height: 100px;
  background-color: #17a5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-left {
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-around;

  h1 {
    font-family: cursive;
  }
}

#logo {
  width: 110px;
}

.nav-right {
  width: 200px;
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}
</style>
