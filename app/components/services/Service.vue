<template>
  <section class="service">
    <div class="container service__bg">
      <div class="service__content">
        <h2 class="service__title">Приведем документы в порядок</h2>
        <p class="service__subtitle">Чем мы вам поможем</p>
      </div>
      <div class="service__wrapper">
        <p class="service__description">
          <span class="service__description-color"
            >Мы расскажем вам о требованиях законодательства, приведем в порядок
            экологическую документацию и в итоге поможем сэкономить до 500 000
            рублей на штрафах.
          </span>
        </p>
      </div>
      <ul class="list-reset service__list">
        <li
          v-for="(item, index) in servicesList"
          :key="index"
          class="service__item"
        >
          <NuxtLink :to="item.link" class="service__item-link">
            <img
              src="/img/arrow-blue.png"
              alt="arrow"
              class="service__item-arrow"
            />
            <h3 class="service__item-title">{{ item.title }}</h3>
            <p class="service__item-text">{{ item.description }}</p>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.service {
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
    padding-bottom: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__description {
    font-size: 18px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    &-color {
      color: #000000;
    }
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
  }
  &__list {
    padding-top: 40px;
    margin-bottom: 30px;
    display: grid;
    grid-template-columns: 350px 350px 350px;
    justify-content: flex-end;

    @media screen and (max-width: 1444px) {
      border-top: 1px solid #d9d9d9;
    }
    @media screen and (max-width: 1160px) {
      grid-template-columns: 280px 280px 280px;
      justify-content: flex-start;
    }
    @media screen and (max-width: 930px) {
      grid-template-columns: 350px 350px;
    }
    @media screen and (max-width: 799px) {
      grid-template-columns: 290px 290px;
    }
    @media screen and (max-width: 666px) {
      grid-template-columns: 250px 250px;
    }
    @media screen and (max-width: 593px) {
      grid-template-columns: 200px 200px;
    }
    @media screen and (max-width: 480px) {
      grid-template-columns: 170px 170px;
      justify-content: center;
    }
  }
  &__item {
    position: relative;
    border: 1px solid #d9d9d9;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px 20px;
    transition: all 0.4s ease-in-out;
    &-title {
      margin-bottom: 20px;
      max-width: 250px;
      font-size: 24px;
      font-weight: 400;
      font-family: 'Onest';
      color: #0066b3;
      @media screen and (max-width: 1200px) {
        font-size: 18px;
      }
      @media screen and (max-width: 900px) {
        font-size: 16px;
        max-width: 150px;
      }
    }
    &-arrow {
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
      font-size: 18px;
      font-weight: 400;
      font-family: 'Onest';
      line-height: normal;
      color: #000000;
      @media screen and (max-width: 1200px) {
        font-size: 14px;
      }
      @media screen and (max-width: 900px) {
        font-size: 12px;
      }
    }
    &:hover {
      background: rgba(0, 101, 179, 0.182);
      @media screen and (max-width: 1200px) {
        background: none;
      }
    }
  }
  &__link {
    text-decoration: none;
    display: flex;
    align-items: center;
  }
}
a {
  text-decoration: none;
}
</style>
