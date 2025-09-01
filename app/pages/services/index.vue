<template>
  <div>
    <CommonHero
      title="Экологические решения
для вашего бизнеса"
      description="Мы предлагаем полный спектр экологических услуг: от аудита и разработки документации до получения разрешений и сопровождения проверок. Наша команда экспертов поможет вашему предприятию работать в соответствии с природоохранным законодательством и внедрить экологически безопасные технологии."
      bg="/img/hero-2.webp"
    />
    <Service />
  </div>
</template>

<script lang="ts" setup>
import Service from '@/components/services/Service.vue'

useHead({
  title: 'KaskavellaPlus - Услуги',
  meta: [
    {
      name: 'description',
      content:
        'Компания KaskavellaPlus предлагает полный спектр экологических услуг: от аудита и разработки документации до получения разрешений и сопровождения проверок. Наша команда экспертов поможет вашему предприятию работать в соответствии с природоохранным законодательством и внедрить экологически безопасные технологии.',
    },
    {
      property: 'og:title',
      content: 'KaskavellaPlus - Услуги',
    },
    {
      property: 'og:description',
      content:
        'Компания KaskavellaPlus предлагает полный спектр экологических услуг: от аудита и разработки документации до получения разрешений и сопровождения проверок. Наша команда экспертов поможет вашему предприятию работать в соответствии с природоохранным законодательством и внедрить экологически безопасные технологии.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaskavellaplus.ru/services' },
    { property: 'og:site_name', content: 'KaskavellaPlus' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
