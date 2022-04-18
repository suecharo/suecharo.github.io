<template>
  <v-app>
    <v-main class="background">
      <v-container fluid>
        <div class="mx-8">
          <v-card
            class="mx-auto my-6 d-flex flex-column"
            max-width="1000"
            color="#f3f3f3"
          >
            <lang-change-button class="py-4 pr-6" />
            <profile-box class="pb-4 px-6" />
            <biography-box class="py-4 px-6" />
            <project-box class="py-4 px-6" />
            <publication-box class="py-4 px-6" />
            <talk-box class="py-4 px-6" />
            <funding-source-box class="mb-8 px-6" />
          </v-card>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BiographyBox from '@/components/BiographyBox.vue'
import FundingSourceBox from '~/components/FundingSourceBox.vue'
import LangChangeButton from '@/components/LangChangeButton'
import ProfileBox from '@/components/ProfileBox.vue'
import ProjectBox from '~/components/ProjectBox.vue'
import PublicationBox from '~/components/PublicationBox.vue'
import TalkBox from '~/components/TalkBox.vue'

export default {
  name: 'MainPage',

  components: {
    BiographyBox,
    FundingSourceBox,
    LangChangeButton,
    ProfileBox,
    ProjectBox,
    PublicationBox,
    TalkBox,
  },
}
</script>

<style>
.background {
  background-image: url('~assets/shattered.png');
  background-repeat: repeat;
}
</style>
