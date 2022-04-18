import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  ssr: false,
  target: 'static',
  head: {
    title: 'Hirotaka Suetake Web Page',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Hirotaka Suetake Web Page',
      },
    ],
  },
  buildModules: ['@nuxt/typescript-build', '@nuxtjs/vuetify'],
  vuetify: {
    theme: {
      themes: {
        light: {
          primary: '#2B1F1F', // darkness 43, 31, 31
          accent: '#BA2A2A', // Shinto 186, 42, 42
          secondary: '#435847', // Cloud Pump 67, 88, 71
          info: '#EBE9DA', // Huh 235, 233, 218
          error: '#B1B4AD', // sparkling silver 177, 180, 173
        },
      },
    },
  },
  srcDir: './src/',
}

export default config
