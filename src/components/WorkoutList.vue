<script setup lang="ts">
import WorkoutListItem from "@/components/WorkoutListItem.vue";
import type {IWorkout} from "@/interfaces/iWorkout";
import {getAllWorkouts} from "@/repository/WorkoutsRepository";
import type {Ref} from "vue";
import {onBeforeMount, ref} from "vue";

const workouts: Ref<IWorkout[]> = ref([]);

onBeforeMount(() => {
  workouts.value = getAllWorkouts();

})
</script>

<template>
  <section class="workouts">
    <WorkoutListItem v-for="(workout,index) in workouts" :key="index" v-bind="workout"/>
  </section>
</template>

<style scoped>
.workouts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>