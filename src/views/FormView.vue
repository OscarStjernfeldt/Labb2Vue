<script lang="ts" setup>
import PageForm from '../components/PageForm.vue'</script>

<template>
  <section class="center-page">
    <div class="title">
      <h2>
        ADD NEW SUGGESTION
      </h2>
    </div>
  </section>
  <PageForm/>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.center-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0 0 var(--border-radius);
}

.title {
  display: flex;
  justify-content: center;
  background: #F0A500;
  border-radius: var(--border-radius);
  margin-top: 10px;
  width: 80%;
  border: solid black 2px;
  color: #1B1A17;
}
</style>