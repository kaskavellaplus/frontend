<template>
  <section class="projects">
    <div class="container projects__bg">
      <div class="projects__content">
        <h2 class="projects__title">
          Сделали более 1000 проектов в разных отраслях
        </h2>
        <p class="projects__description">
          Мы разрабатывали документацию для предприятий в различных областях
          промышленности и социальной сфере. Делали проекты для школ, больниц,
          автомоек и даже аэропортов.
        </p>
        <NuxtLink to="/" class="projects__link"
          >Примеры наших проектов</NuxtLink
        >
        <ul class="list-reset projects__list">
          <li
            v-for="(item, index) in projectHome"
            :key="index"
            class="projects__item"
          >
            <h3 class="projects__item-number">{{ item.number }}</h3>
            <p class="projects__item-text">
              {{ item.description }}
            </p>
          </li>
        </ul>
        <p class="projects__description">
          Мы всегда поможем решить возникающие проблемы и затруднения, связанные
          с реализацией и жизненным циклом выполненных нами проектов. Если
          проблемы выходят за рамки наших компетенций — мы предложим наиболее
          рациональные способы их решения, и найдем исполнителей.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.projects {
  padding: 20px 0;
  @media screen and (max-width: 1444px) {
    padding: 0 0;
  }
  &__bg {
    background-color: #ffffff;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    @media screen and (max-width: 1444px) {
      border-radius: 0px;
      border-bottom: 1px solid #d9d9d9;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media screen and (max-width: 900px) {
      align-items: flex-start;
    }
  }
  &__title {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #000000;
    text-align: right;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
      text-align: left;
    }
  }
  &__description {
    margin-bottom: 10px;
    max-width: 700px;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    text-align: right;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      text-align: left;
    }
  }
  &__link {
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #0066b3;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      text-align: left;
    }
  }
  &__list {
    margin-bottom: 40px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: flex-start;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 230px 230px 230px;
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: 200px 200px 200px;
      justify-content: center;
    }
    @media screen and (max-width: 682px) {
      grid-template-columns: 250px 250px;
    }
    @media screen and (max-width: 588px) {
      grid-template-columns: 200px 200px;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 170px 170px;
      justify-content: center;
    }
  }
  &__item {
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 10px;
    padding: 40px 20px;
    @media screen and (max-width: 1200px) {
      padding: 20px 20px;
    }
    @media screen and (max-width: 900px) {
      padding: 15px 10px;
    }
    &-center {
      text-align: center;
    }
    &-number {
      font-size: 60px;
      font-weight: 400;
      font-family: 'Onest';
      color: #0066b3;
      @media screen and (max-width: 1200px) {
        font-size: 40px;
      }
      @media screen and (max-width: 900px) {
        font-size: 30px;
      }
    }
    &-text {
      font-size: 18px;
      font-weight: 400;
      font-family: 'Onest';
      line-height: normal;
      color: #000000;
      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }
      @media screen and (max-width: 900px) {
        font-size: 14px;
      }
    }
    &-link {
      text-decoration: none;
    }
  }
}
</style>
