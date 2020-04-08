<template>
  <div id="overlay">
    <div id="loading">
      <img src="@/assets/circles.svg" alt="loading">
    </div>
  </div>
</template>

<style>
  body {
    position: relative;
  }
  #overlay {
    position: absolute;
    top:0px;
    left:0px;
    height: 100vh;
    width: 100vw;
    background-color: #17a3b8a1;
  }
  #main-content {
    position: relative;
  }
  #loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>
