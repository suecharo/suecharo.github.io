<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="d-flex flex-column">
    <h2 class="title mb-2" v-text="'Publication'" />
    <div
      v-for="(val, key, i) in publication"
      :key="i"
      class="ml-2"
      :class="{ 'mt-2': i !== 0 }"
    >
      <h3 class="subtitle-1 font-weight-medium" v-text="headers[key]" />
      <ol class="ml-2">
        <li
          v-for="(item, j) in val"
          :key="j"
          class="text-justify"
          v-html="item"
        />
      </ol>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      headers: {
        paper: 'Paper',
        poster_abstract_demonstration: 'Poster / Abstract / Demonstration',
      },
    }
  },

  computed: {
    ...mapGetters({
      publication: 'content/getPublication',
    }),
  },
}
</script>

<style></style>
