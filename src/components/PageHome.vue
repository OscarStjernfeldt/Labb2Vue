<script setup lang="ts">
import WorkoutList from "@/components/WorkoutList.vue";
import SavedWorkouts from "@/components/SavedWorkouts.vue"
</script>

<template>
  <div class="center-content">
    <div class="search-bar">
      <form class="example">
        <label for="search"></label>
        <input type="text" placeholder="Search.." name="search" id="search">
        <button type="submit"><img src="/icons8-search-24.png" alt="search icon">
        </button>
      </form>
    </div>
    <div class="list-workouts">
      <h2>
        WORKOUTS
      </h2>
    </div>
    <div class="align-content">
      <WorkoutList/>
      <SavedWorkouts/>
    </div>

  </div>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.center-content {
  display: flex;

  flex-direction: column;
  width: 80%;
  margin: auto;
  justify-content: center;
}

.search-bar {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: var(--border-radius);
}

.example input[type=text] {
  padding: 15px;
  font-size: 17px;
  background: #f1f1f1;
  width: 90%;
  border-radius: var(--border-radius);
}

.example button {
  margin: 0 0 0 10px;
  background: #E6D5B8;
  border-radius: 100%;
  height: 64px;
  width: 64px;
  cursor: pointer;
}

.example button:hover {
  background: #E45826;
}

.example {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  min-width: 350px;
}

.example::after {
  content: "";
  clear: both;
  display: table;
}

.list-workouts {
  display: flex;
  justify-content: center;
  background: #F0A500;
  border-radius: var(--border-radius);
  margin-top: 10px;
  width: 100%;
  border: solid black 2px;
  color: #1B1A17;
}

.align-content {
  display: flex;
  flex-direction: row;
}
</style>