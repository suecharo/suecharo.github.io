<template>
  <v-app>
    <v-content class="background">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {}
</script>

<style>
.background {
  background-image: url('~assets/shattered.png');
  background-repeat: repeat;
}

/* h1,
h2,
h3,
ol,
ul,
div,
li {
  border: 1px solid black;
} */
</style>
