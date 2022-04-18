<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="d-flex flex-column">
    <h2 class="title mb-2" v-text="'Funding Source'" />
    <ol class="ml-4">
      <li
        v-for="(item, i) in fundingSources"
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
      fundingSources: 'content/getFundingSource',
    }),
  },
}
</script>

<style></style>
