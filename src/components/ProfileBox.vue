<template>
  <!--eslint-disable vue/no-v-html-->
  <div class="d-flex flex-column">
    <div class="d-flex" :class="{ flexColumn: !breakpointSmAndUp }">
      <v-img :max-width="selfieWidth" src="selfie.png" />
      <div
        class="d-flex flex-column"
        :class="{
          'ml-6': breakpointSmAndUp,
          'mt-4': !breakpointSmAndUp,
        }"
      >
        <div v-html="profile.affiliation" />
        <div class="mt-2" v-html="profile.position" />
        <div class="mt-2 headline" v-html="profile.name" />
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
              <v-img width="32" :src="item.icon" :alt="item.name" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex flex-column text-justify mt-4 mx-2"
      v-html="profile.researchInterest.shortBio"
    />
    <div class="d-flex flex-column mt-2 mx-2">
      <div class="subtitle-1 font-weight-medium" v-text="'Topics'" />
      <ul class="ml-2">
        <li
          v-for="(topic, i) in profile.researchInterest.topics"
          :key="i"
          v-text="topic"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      isHydrated: false,
    }
  },
  computed: {
    ...mapGetters({
      profile: 'content/getProfile',
    }),
    breakpointSmAndUp() {
      return this.isHydrated ? this.$vuetify.breakpoint.smAndUp : true
    },
    selfieWidth() {
      return this.$vuetify.breakpoint.smAndUp ? '300px' : '1000px'
    },
  },
  mounted() {
    this.isHydrated = true
  },
}
</script>

<style></style>
