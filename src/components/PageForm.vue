<script lang="ts" setup>
import {ref} from "vue";

let firstName = "";
let lastName = "";
let title = "";
const suggestions = ref("");

</script>

<template>
  <div class="center-page">
    <section class="body">
      <div class="background">
        <div class="form-background">
          <div class="form-fill">
            <div>
              <label class="input-label" for="firstName">Firstname</label>
              <input id="firstName" v-model="firstName" class="input" type="text"
                     placeholder="Please enter your firstname">
            </div>
            <div>
              <label class="input-label" for="lastName">Lastname</label>
              <input id="firstName" v-model="lastName" class="input" type="text"
                     placeholder="Please enter your firstname">
            </div>
            <div>
              <label class="input-label" for="title">Workout title</label>
              <input id="title" v-model="title" class="input" type="text" placeholder="Please enter your title">
            </div>
            <div>
              <label class="input-label" for="suggestions">Workout information</label>
              <textarea id="suggestions" v-model="suggestions" class="input-textarea"
                        placeholder="Please file any suggested workouts" @keydown.enter="onEnter"></textarea>
            </div>
            <div>
            </div>
          </div>
          <div class="center-button">
            <button class="button" type="submit"> Submit form</button>
          </div>
        </div>
        <div class="printed-form">
          <p class="input-label">Your name: {{ firstName + " " + lastName }}</p>
          <p class="input-label">Workout title: {{ title }}</p>
          <p class="input-label">Workout information: {{ suggestions }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.center-page {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.body {
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.background {
  display: flex;
  justify-content: space-evenly;
  border-radius: var(--border-radius);
  align-items: center;
  margin: 10px 0 0 0;
}

.form-background {
  background: #1B1A17;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 35vw;
  height: 30vw;
  border-radius: var(--border-radius);
  border: solid 1px #F0A500;
  color: #E45826;
}

.form-fill {
  display: flex;
  flex-direction: column;
  width: 20vw;
  border-radius: var(--border-radius);
  align-items: flex-end;
}

.input-label {
  margin: 10px 0 10px 0;
  font-size: x-large;
  border-radius: var(--border-radius);
  resize: none;
  white-space: pre;
}

.input {
  margin: 10px 0 10px 15px;
  padding: 10px;
  max-width: 12vw;
  border-radius: var(--border-radius);
}

.input-textarea {
  margin: 10px 0 10px 0;
  padding: 10px;
  width: 20vw;
  height: 5vw;
  max-width: 20vw;
  min-width: 20vw;
  max-height: 5vw;
  min-height: 5vw;
  border-radius: var(--border-radius);
}

.button {
  height: 40px;
  width: 10vw;
  border-radius: var(--border-radius);
  margin: 10px 0 10px 0;
  padding: 10px;
}

.button:hover {
  background: #E6D5B8;
}

.printed-form {
  background: #1B1A17;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 35vw;
  height: 30vw;
  padding: 0 0 0 10px;
  border-radius: var(--border-radius);
  border: solid 1px #F0A500;
  color: #E45826;
}
</style>