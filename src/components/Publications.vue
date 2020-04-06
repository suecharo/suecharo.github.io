<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Publications</h2>
    <div
      v-for="(val, key, i) in publications"
      :key="i"
      class="ml-2"
      :class="{ 'mt-2': i !== 0 }"
    >
      <h3 class="subtitle-1 font-weight-medium">
        <template v-if="key === 'fullPaper'">Full Paper</template>
        <template v-else-if="key === 'shortPaper_extendedAbstract'"
          >Short Paper / Extended Abstract</template
        >
        <template v-else-if="key === 'poster_abstract_demonstration'"
          >Poster / Abstract / Demonstration</template
        >
      </h3>
      <ol class="ml-2">
        <li
          v-for="(item, j) in val"
          :key="j"
          class="text-justify"
          v-html="item"
        ></li>
      </ol>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      publications: 'content/getPublications'
    })
  }
}
</script>

<style></style>
