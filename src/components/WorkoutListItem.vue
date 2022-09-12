<script lang="ts" setup>
defineProps({
  title: {type: String, required: true},
  workouts: {type: Array, required: true},
})
</script>

<template>
  <article class="workout">
    <div class="workout-text">
      <div class="align-checkbox-title">
        <h3 class="workout-title">{{ title }}</h3>
        <button class="checkbox" v-on:click.prevent="addToSavedList">Save workout</button>
      </div>
      <ul>
        <li v-for="(workout, index) in workouts" :key="index">{{ workout }}</li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
h3 {
  font-size: x-large;
}

.workout {
  text-align: center;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  height: 200px;
  min-width: fit-content;
  margin-top: 10px;
  border-radius: var(--border-radius);
  border: black solid 1px

}

.workout-text {
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.workout-text ul {
  padding: 0;
  margin: 0 3vw;
  font-family: SansSerif, serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.align-checkbox-title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.workout-title {
  margin: 0;
}

.checkbox {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: black solid 1px;
  border-radius: var(--border-radius);
  background: #E45826;
  width: 30%;
  align-items: center;
}

.food-picture {
  width: 100%;
  border-radius: var(--border-radius);
  max-width: 200px;
  border: black solid 1px
}
</style>