<template>
  <div class="mx-8">
    <v-card
      class="mx-auto my-6 d-flex flex-column"
      max-width="1000"
      color="#f3f3f3"
    >
      <lang-change-button class="pt-4 px-6"></lang-change-button>
      <profile class="py-4 px-6"></profile>
      <biography class="py-4 px-6"></biography>
      <projects class="py-4 px-6"></projects>
      <publications class="py-4 px-6"></publications>
      <talks class="py-4 px-6"></talks>
      <funding-sources class="pb-4 px-6"></funding-sources>
    </v-card>
  </div>
</template>

<script>
import Biography from '~/components/Biography.vue'
import Profile from '~/components/Profile.vue'
import Publications from '~/components/Publications.vue'
import FundingSources from '~/components/FundingSources.vue'
import Projects from '~/components/Projects.vue'
import Talks from '~/components/Talks.vue'
import LangChangeButton from '~/components/LangChangeButton'

export default {
  components: {
    Biography,
    Profile,
    Publications,
    FundingSources,
    Projects,
    Talks,
    LangChangeButton
  }
}
</script>

<style></style>
