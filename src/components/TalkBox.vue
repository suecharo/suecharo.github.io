<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="d-flex flex-column">
    <h2 class="title mb-2" v-text="'Talk / Conference'" />
    <ol class="ml-4">
      <li
        v-for="(item, i) in talks"
        :key="i"
        class="text-justify"
        v-html="item"
      />
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      talks: 'content/getTalk',
    }),
  },
}
</script>

<style></style>
