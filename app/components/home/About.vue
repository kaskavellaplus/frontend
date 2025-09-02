<template>
  <section class="about">
    <div class="container about__bg">
      <div class="about__content">
        <h2 class="about__title">
          «Каскавелла Плюс» — эксперты экологического проектирования
        </h2>
        <p class="about__subtitle">Почему стоит работать с нами</p>
      </div>
      <div class="about__wrapper">
        <p class="about__description">
          <span class="about__description-color"
            >Более 8 лет успешно работаем во всех федеральных округах
            России.</span
          >
          Имеем прямые контакты с региональными управлениями Росприроднадзора,
          Роспотребнадзора и природоохранных ведомств. Наши проекты проходят
          согласование с первого раза благодаря глубокому знанию региональной
          специфики и требований надзорных органов.
        </p>
        <p class="about__description">
          Специализируемся на разработке проектов ПДВ, СЗЗ, ПНООЛР, НДВ, НМУ для
          предприятий всех отраслей. Наши проекты соответствуют последним
          изменениям законодательства и требованиям экологической безопасности.
        </p>
        <p class="about__description">
          Качество подтверждается положительными заключениями государственной
          экологической экспертизы и отсутствием претензий со стороны надзорных
          органов.
        </p>
      </div>
      <NuxtLink to="/company" class="about__link"
        >Узнать больше о компании</NuxtLink
      >
      <ul class="list-reset about__list">
        <li v-for="(item, index) in aboutHome" :key="index" class="about__item">
          <h3 class="about__item-number">{{ item.number }}</h3>
          <p
            :class="{ 'about__item-center': !item.number }"
            class="about__item-text"
          >
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1444px) {
    margin-top: 0px;
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
    justify-content: space-between;
    margin-bottom: 20px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  }
  &__title {
    max-width: 500px;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #000000;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
  &__subtitle {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  &__wrapper {
    margin-bottom: 30px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media screen and (max-width: 1200px) {
      margin-bottom: 20px;
    }
  }
  &__description {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    &-color {
      color: #0066b3;
    }
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }
  &__link {
    display: block;
    margin-bottom: 40px;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #0066b3;
    width: max-content;
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }
  &__list {
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: flex-start;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 230px 230px 230px;
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: 200px 200px 200px;
      justify-content: flex-start;
      margin-bottom: 0;
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
