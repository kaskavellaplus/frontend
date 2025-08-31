<template>
  <header class="header">
    <div class="header__wrapper">
      <NuxtLink to="/">
        <img src="/img/logo.webp" alt="logo" class="header__logo" />
      </NuxtLink>
      <nav class="header__nav">
        <ul class="list-reset header__nav-list">
          <li
            v-for="(item, index) in headerNavigation"
            :key="index"
            class="header__nav-item"
          >
            <NuxtLink class="header__nav-link" :to="item.link">{{
              item.title
            }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="header__contacts">
        <a href="tel:+79161234567" class="header__contacts-link"
          >+7 (916) 123-45-67</a
        >
        <a href="mailto:info@kaskavellaplus.ru" class="header__contacts-link"
          >info@kaskavellaplus.ru</a
        >
      </div>
      <PButton @click="openPopup">Получить консультацию</PButton>

      <Burger
        :is-open="isMobileMenuOpen"
        @toggle="toggleMobileMenu"
        @close="closeMobileMenu"
        @openPopup="openPopup"
      />
    </div>
    <PopUp :is-open="isPopupOpen" @close="closePopup" />
  </header>
</template>

<script lang="ts" setup>
import PopUp from '../common/PopUp.vue'
import Burger from '../common/Burger.vue'

const isPopupOpen = ref(false)
const isMobileMenuOpen = ref(false)

const openPopup = () => {
  isPopupOpen.value = true
  isMobileMenuOpen.value = false
}

const closePopup = () => {
  isPopupOpen.value = false
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.header {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__nav {
    &-list {
      display: flex;
      gap: 20px;
    }
    &-link {
      padding: 6px 16px;
      border-radius: 6px;
      background-color: #0066b3;
      font-size: 16px;
      font-weight: 500;
      font-family: 'Onest';
      color: #ffffff;
      text-decoration: none;
      transition: all 0.3s ease;
      &:hover {
        background-color: #0086e2;
      }
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  &__logo {
    width: 130px;
    height: 130px;
    object-fit: contain;
    @media screen and (max-width: 900px) {
      width: 100px;
      height: 100px;
    }
  }
  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 5px;
    &-link {
      font-size: 16px;
      font-weight: 700;
      font-family: 'Onest';
      color: #ffffff;
    }
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
  :deep(.p-button) {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Onest';
    @media screen and (max-width: 1200px) {
      display: none;
    }
  }
}
</style>
