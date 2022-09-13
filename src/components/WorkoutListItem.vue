<script lang="ts" setup>
defineProps({
  title: {type: String, required: true},
  workouts: {type: Array, required: true},
  shownAsSaved: {type: Boolean, required: false, default: false},
})
</script>

<template>
  <article class="workout">
    <div class="workout-text">
      <div class="align-addToList-title">
        <h3 class="workout-title">{{ title }}</h3>
        <button v-if="!shownAsSaved" class="addToList" @click="$emit('buttonClicked', {title, workouts})">Save workout</button>
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

.align-addToList-title {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.workout-title {
  margin: 0;
}

.addToList {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: black solid 1px;
  border-radius: var(--border-radius);
  background: #E45826;
  width: 100px;
  height: 30px;
  align-items: center;
}

.addToList:hover {
  background: #F0A500;
}
</style>