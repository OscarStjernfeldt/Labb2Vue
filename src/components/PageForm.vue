<script lang="ts" setup>
import {ref} from "vue";

let suggestion = "";

const suggestions = ref([]);

</script>

<template>
  <div class="center-page">
    <section class="body">
      <div class="background">
        <div class="form-background">
          <form class="form-fill">
            <div class="center-form">
              <label class="input-label" for="title">Write your suggestion</label>
              <input id="value" v-model="suggestion" class="input" type="text" placeholder="Please enter suggestion">
              <div class="center-button">
                <button class="button" type="button" @click="suggestions.push(suggestion)"> Add suggestion</button>
              </div>
            </div>
            <div class="output">
              <label class="input-label" for="suggestions">Suggestions</label>
              <div class="output-background" v-for="value in suggestions" :key="value"> {{ value }}</div>
            </div>
          </form>

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
  width: 100%;
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
  width: 90%;
  height: 30vw;
  border-radius: var(--border-radius);
  border: solid 1px #F0A500;
  color: #E45826;
}

.form-fill {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-radius: var(--border-radius);
  justify-content: space-evenly;
}

.center-form {
  background: #E6D5B8;
  color: #1B1A17;
  border-radius: var(--border-radius);
  margin: 10px 0 10px 0;
  padding: 10px;
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

.center-button {
  display: flex;
  justify-content: center;
}

.button {
  height: 40px;
  width: 8vw;
  border-radius: var(--border-radius);
  margin: 10px 0 10px 0;
  padding: 10px;
}

.button:hover {
  color: #E45826;
  background: #1B1A17;
}

.output {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #E6D5B8;
  border-radius: var(--border-radius);
  margin: 10px 0 10px 0;
  padding: 10px;
  color: #1B1A17;
}

.output-background {
  background: #1B1A17;
  border-radius: var(--border-radius);
  margin: 10px 0 10px 0;
  padding: 10px;
  color: #E45826;
  border: solid 2px #F0A500;
}
</style>
