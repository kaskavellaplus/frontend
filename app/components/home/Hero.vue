<template>
  <section class="hero">
    <div class="container hero__bg">
      <Header />
      <div class="hero__content">
        <h1 class="hero__title">Экологическая экспертиза и проектирование</h1>
        <p class="hero__description">
          Специализируемся на разработке экологических проектов для предприятий
          всех отраслей. Создаем природоохранную документацию, проводим
          экологическую экспертизу и помогаем в получении разрешительных
          документов. Наша команда экологов-проектировщиков решает любые задачи
          по экологическому сопровождению бизнеса.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.hero {
  padding: 20px 0;
  height: 100%;
  @media screen and (max-width: 1444px) {
    padding: 0 0;
  }
  &__bg {
    display: flex;
    flex-direction: column;
    background-image: url('/img/hero-bg.webp');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    min-height: 800px;
    border-radius: 20px;
    padding-bottom: 120px;
    @media screen and (max-width: 1444px) {
      border-radius: 0px;
    }
    @media screen and (max-width: 1200px) {
      min-height: 600px;
    }
    @media screen and (max-width: 900px) {
      min-height: 400px;
      padding-bottom: 50px;
    }
  }
  &__content {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 700px;
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 30px;
    @media screen and (max-width: 1200px) {
      gap: 10px;
    }
    @media screen and (max-width: 900px) {
      padding: 10px;
    }
    @media screen and (max-width: 480px) {
      border-radius: 0px;
    }
  }
  &__title {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Onest';
    color: #ffffff;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
    @media screen and (max-width: 480px) {
      font-size: 14px;
    }
  }
  &__description {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
    @media screen and (max-width: 900px) {
      font-size: 12px;
    }
    @media screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
}
</style>
