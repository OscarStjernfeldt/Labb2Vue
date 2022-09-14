<script lang="ts" setup>
import SavedWorkouts from "@/components/SavedWorkouts.vue"
import {onMounted, ref} from "vue";
import type {IWorkout} from "@/interfaces/IWorkout";

let savedWorkouts = ref<IWorkout[]>([]);

onMounted(() => {
  const savedWorkoutsString = localStorage.getItem('savedWorkouts');
  if (savedWorkoutsString) {
    savedWorkouts.value = JSON.parse(savedWorkoutsString);
  }
})

function clearWorkouts() {
  savedWorkouts.value = []
}
</script>

<template>
  <SavedWorkouts :savedWorkouts="savedWorkouts" @clearWorkouts="clearWorkouts"/>
</template>

<style scoped>

</style>