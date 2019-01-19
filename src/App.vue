<template>
  <div id="app">
    <img src="./assets/logo.png">
    <v-app>
      <v-content>
        <router-view/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
