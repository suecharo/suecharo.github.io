<template>
  <div class="d-flex justify-end">
    <v-btn
      background="#f3f3f3"
      color="secondary"
      outlined
      small
      @click="changeLang"
      >{{ lang }}</v-btn
    >
  </div>
</template>

<script>
export default {
  computed: {
    lang() {
      return this.$store.state.content.lang === 'en'
        ? 'Japanese Page'
        : 'English Page'
    }
  },
  methods: {
    changeLang() {
      this.$store.dispatch('content/changeLang')
    }
  }
}
</script>

<style></style>
