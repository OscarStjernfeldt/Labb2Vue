<script lang="ts" setup>
import type {PropType} from "vue";
import type {IWorkout} from "@/interfaces/IWorkout";
import WorkoutListItem from "@/components/WorkoutListItem.vue";

defineProps({
  savedWorkouts: {
    type: Array as PropType<IWorkout[]>,
    required: true,
  },
})

const emits = defineEmits(['clearWorkouts']);

function clearList() {
  localStorage.clear();
  emits("clearWorkouts");
}
</script>

<template>
  <section class="center-content-list">
    <div class="list-content">
      <h1 class="saved-workouts-title">Saved Workouts</h1>
      <div>
        <button class="button-reset-list" @click="clearList">Reset list</button>
      </div>
      <div class="saved-workouts">
        <div class="saved-workout" v-for="(workout, index) in savedWorkouts" :key="index">
          <WorkoutListItem :title="workout.title" :workouts="workout.workouts" :shownAsSaved="true"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

h1 {
  font-size: xx-large;
}

.center-content-list {
  display: flex;
  justify-content: center;
  height: 100%;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.list-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: url("https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1604&q=80");
  background-size: cover;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius);
  border: black solid 2px;
  margin: 10px 0 10px 0;
  min-height: 40vw;
  height: fit-content;
  padding: 10px;
}

.saved-workouts-title {
  display: flex;
  align-items: flex-start;
  margin: 2% 0 2% 0;
}

.button-reset-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: black solid 1px;
  border-radius: var(--border-radius);
  background: #E45826;
  width: 100px;
  height: 30px;
  align-items: center;
}

.button-reset-list:hover {
  background: #F0A500;
}

.workout-text ul {
  padding: 0;
  margin: 0 3vw;
  font-family: SansSerif, serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>