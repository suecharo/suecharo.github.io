<template>
  <div class="d-flex flex-column">
    <div class="d-flex" :class="{ 'flex-column': !breakpointSmAndUp }">
      <v-img :max-width="selfieWidth" src="selfie.png"></v-img>
      <div
        class="d-flex flex-column"
        :class="{
          'ml-6': breakpointSmAndUp,
          'mt-4': !breakpointSmAndUp
        }"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div v-html="profile.affiliation"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-2" v-html="profile.position"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-2 headline" v-html="profile.name"></div>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="mt-2">
          <span class="font-weight-medium">email: </span>{{ profile.email }}
        </div>
        <div class="mt-2 d-flex">
          <div
            v-for="(item, i) in profile.link"
            :key="i"
            :class="{ 'ml-2': i !== 0 }"
          >
            <a :href="item.src" :alt="item.name" target="_blank">
              <v-img width="32" :src="item.icon" :alt="item.name"></v-img>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column text-justify mt-4">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="profile.researchInterest.shortBio"></div>
      <div class="d-flex flex-column ml-2">
        <div class="subtitle-1 font-weight-medium">Topics</div>
        <ul class="ml-4">
          <li v-for="(topic, i) in profile.researchInterest.topics" :key="i">
            {{ topic }}
          </li>
        </ul>
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
      profile: 'content/getProfile'
    }),
    selfieWidth() {
      return this.$vuetify.breakpoint.smAndUp ? '300px' : '1000px'
    },
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    }
  },
  mounted() {
    this.isHydrated = true
  }
}
</script>

<style></style>
