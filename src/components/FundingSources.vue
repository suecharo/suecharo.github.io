<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2">Funding Sources</h2>
    <ol class="ml-4">
      <li
        v-for="(item, i) in fundingSources"
        :key="i"
        class="text-justify"
        v-html="item"
      ></li>
    </ol>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      fundingSources: 'content/getFundingSources'
    })
  }
}
</script>

<style></style>
