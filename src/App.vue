<script setup lang="ts">
import {RouterView} from 'vue-router'
import PageFooter from "./components/PageFooter.vue"
import PageHeader from "./components/PageHeader.vue"
</script>

<template>
  <header>
    <PageHeader/>
  </header>
  <main>
    <RouterView/>
  </main>
  <footer class="put-buttom">
    <PageFooter/>
  </footer>
</template>

<style scoped>
.put-buttom {
  position: relative;
  bottom: 0;
  width: 100%;
}
</style>
