import Aura from '@primeuix/themes/aura';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  alias: {
    '@': '../app',
    '~': '../'
  },
  modules: ['@primevue/nuxt-module', ['nuxt-mail', {
    message: {
      to: 'info@kaskavellaplus.ru',
    },
    smtp: {
      service: 'timeweb',
      auth: {
        user: 'info@kaskavellaplus.ru',
        pass: 'kaskavellaplus565620)',
      },
      host: "smtp.timeweb.ru",
      port: 465,
      secure: true,
      requireTLS: true,
    },
  }], 'nuxt-mail'],
  primevue: {
    components: {
        prefix: 'P',
        include: ['InputText','Select','Button','InputMask', 'Textarea', 'Form', 'FormField']
    },
    options: {
      theme: {
          preset: Aura
      }
    }
  },
})