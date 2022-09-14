<script setup lang="ts">
import WorkoutListItem from "@/components/WorkoutListItem.vue";
import {getAllWorkouts} from "@/repository/WorkoutsRepository";
import type {Ref} from "vue";
import {onBeforeMount, ref} from "vue";
import type {IWorkout} from "@/interfaces/IWorkout";

const workouts: Ref<IWorkout[]> = ref([]);

const emits = defineEmits(['saved']);

function addToList(workout: IWorkout) {
  emits('saved', workout)
}

onBeforeMount(() => {
  workouts.value = getAllWorkouts();
})
</script>

<template>
  <section class="workouts">
    <WorkoutListItem v-for="(workout, index) in workouts" :key="index" v-bind="workout" @buttonClicked="addToList"/>
  </section>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.workouts {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 1% 1% 0 0;
  height: 50%;

}
</style>