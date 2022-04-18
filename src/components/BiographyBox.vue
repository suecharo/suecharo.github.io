<template>
  <div class="d-flex flex-column">
    <h2 class="title mb-2" v-text="'Biography'" />
    <div
      v-for="(val, key, i) in biography"
      :key="i"
      class="ml-2"
      :class="{ 'mt-2': i !== 0 }"
    >
      <h3 class="subtitle-1 font-weight-medium" v-text="headers[key]" />
      <div class="d-flex flex-column ml-2">
        <div
          v-for="(item, j) in val"
          :key="j"
          class="d-flex"
          :class="{ 'mt-2': j !== 0 }"
        >
          <div
            class="d-flex"
            :class="{
              'flex-column': !breakpointSmAndUp,
              'align-center': !breakpointSmAndUp,
            }"
          >
            <div class="text-center" style="width: 80px">
              {{ item.from }}
            </div>
            <div class="text-center">-</div>
            <div class="text-center" style="width: 80px">{{ item.to }}</div>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="ml-4" v-html="item.content"></div>
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
      isHydrated: false,
      headers: {
        education: 'Education',
        appointment: 'Appointment',
        workExperience: 'Work Experience',
      },
    }
  },
  computed: {
    ...mapGetters({
      biography: 'content/getBiography',
    }),
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    },
  },
  mounted() {
    this.isHydrated = true
  },
}
</script>

<style></style>
