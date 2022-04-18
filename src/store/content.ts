import { ActionTree, GetterTree, MutationTree } from 'vuex/types'
import content from '~/assets/content.json'
import { RootState } from '@/store'

export const state = () => ({
  contentJa: content.ja,
  contentEn: content.en,
  lang: 'en',
})

export type State = ReturnType<typeof state>

export const getters: GetterTree<State, RootState> = {
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
  getProject(state) {
    return state.lang === 'en'
      ? state.contentEn.project
      : state.contentJa.project
  },
  getPublication(state) {
    return state.lang === 'en'
      ? state.contentEn.publication
      : state.contentJa.publication
  },
  getTalk(state) {
    return state.lang === 'en' ? state.contentEn.talk : state.contentJa.talk
  },
  getFundingSource(state) {
    return state.lang === 'en'
      ? state.contentEn.fundingSource
      : state.contentJa.fundingSource
  },
}

export const mutations: MutationTree<State> = {
  changeLang(state) {
    state.lang = state.lang === 'en' ? 'ja' : 'en'
  },
}

export const actions: ActionTree<State, RootState> = {
  changeLang({ commit }) {
    commit('changeLang')
  },
}
