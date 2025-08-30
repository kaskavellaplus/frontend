<template>
  <section class="partners">
    <div class="container partners__bg">
      <div class="partners__content">
        <h2 class="partners__title">Наши партнеры</h2>
        <p class="partners__description">
          Мы выполнили более 80 проектов для промышленных предприятий — лидеров
          отрасли. Качество нашей работы подтверждается отзывами и новыми
          запросами со стороны компаний.
        </p>
      </div>
      <ul class="list-reset partners__list">
        <li
          v-for="(item, index) in partnersHome"
          :key="index"
          class="partners__item"
        >
          <img :src="item.img" alt="img" class="partners__item-img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.partners {
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
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    margin-bottom: 20px;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #000000;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 22px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
      text-align: left;
    }
  }
  &__description {
    margin-bottom: 40px;
    max-width: 700px;
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    text-align: left;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      text-align: left;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    justify-content: flex-start;
    @media screen and (max-width: 1200px) {
      grid-template-columns: 230px 230px 230px;
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
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 40px 20px;
    @media screen and (max-width: 1200px) {
      padding: 20px 20px;
    }
    @media screen and (max-width: 900px) {
      padding: 15px 10px;
    }
    &-img {
      width: 150px;
      height: auto;
      object-fit: contain;
      object-position: center;
      max-height: 120px;

      @media screen and (max-width: 1200px) {
        width: 100px;
        max-height: 100px;
      }
      @media screen and (max-width: 900px) {
        width: 80px;
        max-height: 80px;
      }
      @media screen and (max-width: 600px) {
        width: 90px;
        max-height: 90px;
      }
    }
  }
}
</style>
