<template>
  <div>
    <h2 class="title mb-2">Projects</h2>
    <div class="d-flex flex-column ml-4">
      <div
        v-for="(item, i) in projects"
        :key="i"
        class="d-flex"
        :class="{ 'flex-column': !breakpointSmAndUp, 'mt-4': i !== 0 }"
      >
        <v-img :max-width="imgWidth" :src="item.thumbnail"></v-img>
        <div
          class="d-flex flex-column"
          :class="{ 'ml-6': breakpointSmAndUp, 'mt-2': !breakpointSmAndUp }"
        >
          <div
            style="line-height: 1.3;"
            class="secondary--text title text-justify"
            v-html="item.title"
          ></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="mt-1 text-justify" v-html="item.description"></div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div
            class="mt-1 text-justify font-weight-light"
            v-html="item.link"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isHydrated: false
    }
  },
  computed: {
    ...mapGetters({
      projects: 'content/getProjects'
    }),
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    },
    imgWidth() {
      return this.$vuetify.breakpoint.smAndUp ? '200px' : '1000px'
    }
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style></style>
