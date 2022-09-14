<script lang="ts" setup>
let firstName = "";
let lastName = "";
let email = "";

</script>

<template class="body">
  <h1 class="title">Client form</h1>
  <section class="background">
    <div class="form-background">
      <div class="form-fill">
        <label class="input-label" for="firstName">Firstname</label>
        <label class="input-label" for="lastName">Lastname</label>
        <label class="input-label" for="email">Email</label>
      </div>
      <div class="form-title">
        <input id="firstName" v-model="firstName" class="input" type="text" placeholder="Please enter your firstname">
        <input id="lastName" v-model="lastName" class="input" type="text" placeholder="Please enter your lastname">
        <input id="email" v-model="email" class="input" type="email" placeholder="Please enter your email">
      </div>

    </div>
    <button type="submit"></button>
    <div>
      <div class="printed-form">
        <p>Firstname: {{ firstName }}</p>
        <p>Lastname: {{ lastName }}</p>
        <p>Email: {{ email }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
* {
  --border-radius: 10px;
}

.body {
  width: 80%;
}

.background {
  display: flex;
  justify-content: space-evenly;
  border-radius: var(--border-radius);
  align-items: center;
}

.title {
  display: flex;
  justify-content: center;
  background: #ffffff;
}

.form-background {
  background: #34f000;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: 30vw;
  border-radius: var(--border-radius);
}

.form-fill {
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius);
}

.input-label {
  margin: 10px 0 10px 0;
  font-size: x-large;
  border-radius: var(--border-radius);
}

.form-title {
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
}

.input {
  margin: 10px 0 10px 0;
  padding: 10px;
  border-radius: var(--border-radius);
}

.printed-form {
  background: aqua;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400%;
  height: 30vw;
  border-radius: var(--border-radius);
}
</style>