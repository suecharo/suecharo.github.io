import content from '~/assets/content.json'

export const state = () => ({
  contentJa: content.ja,
  contentEn: content.en,
  lang: 'en',
})

export const getters = {
  getProfile(state) {
    return state.lang === 'en'
      ? state.contentEn.profile
      : state.contentJa.profile
  },
  getBiography(state) {
    return state.lang === 'en'
      ? state.contentEn.biography
      : state.contentJa.biography
  },
  getProjects(state) {
    return state.lang === 'en'
      ? state.contentEn.projects
      : state.contentJa.projects
  },
  getPublications(state) {
    return state.lang === 'en'
      ? state.contentEn.publications
      : state.contentJa.publications
  },
  getTalks(state) {
    return state.lang === 'en' ? state.contentEn.talks : state.contentJa.talks
  },
  getFundingSources(state) {
    return state.lang === 'en'
      ? state.contentEn.fundingSources
      : state.contentJa.fundingSources
  },
}

export const mutations = {
  changeLang(state) {
    state.lang = state.lang === 'en' ? 'ja' : 'en'
  },
}

export const actions = {
  changeLang({ commit }) {
    commit('changeLang')
  },
}
