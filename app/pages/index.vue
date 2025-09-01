<template>
  <div>
    <HomeHero />
    <HomeHelpYou />
    <HomeAbout />
    <HomeProjects />
    <HomePartners />
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'KaskavellaPlus - Экологическая экспертиза и проектирование',
  meta: [
    {
      name: 'description',
      content:
        'Специализируемся на разработке экологических проектов для предприятий всех отраслей. Создаем природоохранную документацию, проводим экологическую экспертизу и помогаем в получении разрешительных документов. Наша команда экологов-проектировщиков решает любые задачи по экологическому сопровождению бизнеса.',
    },
    {
      property: 'og:title',
      content: 'KaskavellaPlus - Экологическая экспертиза и проектирование',
    },
    {
      property: 'og:description',
      content:
        'Специализируемся на разработке экологических проектов для предприятий всех отраслей. Создаем природоохранную документацию, проводим экологическую экспертизу и помогаем в получении разрешительных документов. Наша команда экологов-проектировщиков решает любые задачи по экологическому сопровождению бизнеса.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaskavellaplus.ru/' },
    { property: 'og:site_name', content: 'KaskavellaPlus' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style></style>
