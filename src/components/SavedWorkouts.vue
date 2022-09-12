<script lang="ts" setup>

</script>

<template>
  <section class="center-content">
    <div class="list-content">
      <h1 class="saved-workouts-title">Saved Workouts</h1>
    </div>
  </section>
</template>

<style scoped>
* {
  --border-radius: 10px;
}
h1 {
  font-size: xxx-large;
}

.center-content {
  display: flex;
  justify-content: center;
}
.list-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80");
  background-size: cover;
  align-items: center;
  width: 80%;
  border-radius: var(--border-radius);
  border: black solid 2px;
  margin: 10px 0 0 0;
  height: 40vw;
}

.saved-workouts-title {
  display: flex;
  align-items: flex-start;
}
</style>