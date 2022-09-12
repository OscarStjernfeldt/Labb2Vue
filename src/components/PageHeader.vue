<script setup lang="ts">
import {RouterLink} from 'vue-router'</script>

<template>
    <header class="content">
      <div class="logo-background">
        <h1>TRÄNING</h1>
      </div>
      <div class="topnav" id="myTopnav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="#search">Search</RouterLink>
        <RouterLink to="/savedworkouts">Saved workouts</RouterLink>
        <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="myFunction()">&#9776;</a>
      </div>
    </header>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

h1 h2 h3 {
  font-family: Serif, serif;
}

.content {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80vw;
  border: black solid 1px;
  border-radius: var(--border-radius);
}

.topnav {
  overflow: hidden;
  background-color: #000000;
  min-width: 350px;
  border-radius: 0 0 var(--border-radius) var(--border-radius);
}

.topnav a {
  float: left;
  display: block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  color: #E45826;
}

.topnav .icon {
  display: none;
}

.topnav a:hover {
  background-color: #555;
  color: white;
}

.logo-background {
  text-align: center;
  padding-top: 15px;
  min-width: 350px;
  height: 100px;
  background: #F0A500;
  color: #1B1A17;
  border-radius:var(--border-radius) var(--border-radius) 0 0;
}
</style>