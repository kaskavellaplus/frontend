<template>
  <section class="help">
    <div class="container help__bg">
      <div class="help__content">
        <p class="help__subtitle">Наши решения</p>
        <h2 class="help__title">
          Разработаем экологическую документацию для всех категорий
        </h2>
      </div>
      <ul class="list-reset help__list">
        <li v-for="(item, index) in helpList" :key="index" class="help__item">
          <NuxtLink :to="item.link" class="help__item-link">
            <img :src="item.bg" alt="img" class="help__item-img" />
            <h3 class="help__item-title">{{ item.title }}</h3>
            <img src="/img/arrow.png" alt="arrow" class="help__item-arrow" />
            <div class="help__item-overlay">
              <p class="help__item-text">{{ item.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/services" class="help__link"
        >Посмотреть все услуги</NuxtLink
      >
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.help {
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
    margin-bottom: 50px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  &__title {
    max-width: 500px;
    text-align: right;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #000000;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
      text-align: left;
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
  &__list {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: flex-end;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 250px 250px 250px;
    }
    @media screen and (max-width: 900px) {
      grid-template-columns: 200px 200px 200px;
      justify-content: flex-start;
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
    position: relative;
    height: 300px;
    &-img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
    &-title {
      z-index: 1;
      max-width: 200px;
      position: absolute;
      top: 15px;
      left: 15px;
      width: 100%;
      height: 100%;
      font-size: 24px;
      font-weight: 400;
      font-family: 'Onest';
      color: #ffffff;
      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 900px) {
        font-size: 16px;
        max-width: 150px;
      }
    }
    &-arrow {
      z-index: 1;
      position: absolute;
      top: 15px;
      right: 5px;
      width: 35px;
      height: 35px;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 1200px) {
        width: 25px;
        height: 25px;
        display: none;
      }
    }
    &:hover &-arrow {
      opacity: 1;
      right: 15px;
    }
    &-text {
      position: absolute;
      bottom: -50px;
      left: 15px;
      right: 7px;
      font-size: 18px;
      font-weight: 400;
      font-family: 'Onest';
      line-height: normal;
      color: #ffffff;
      opacity: 0;
      transition: all 0.4s ease-in-out;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
      @media screen and (max-width: 900px) {
        font-size: 12px;
        bottom: 15px;
        opacity: 1;
        pointer-events: none;
      }
    }
    &:hover &-text {
      opacity: 1;
      bottom: 15px;
    }
    &-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      border-radius: 10px;
      opacity: 0;
      transition: all 0.4s ease-in-out;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }
    &:hover &-overlay {
      opacity: 1;
    }
    @media screen and (max-width: 900px) {
      height: 100%;
    }
  }
  &__link {
    display: inline-block;
    text-align: right;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #0066b3;
    text-decoration: underline;
    @media screen and (max-width: 900px) {
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>
