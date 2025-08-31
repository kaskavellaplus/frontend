<template>
  <div class="burger">
    <button
      class="burger__button"
      :class="{ 'burger__button--active': isOpen }"
      @click="toggleMenu"
      aria-label="Открыть меню"
    >
      <span class="burger__line"></span>
      <span class="burger__line"></span>
      <span class="burger__line"></span>
    </button>

    <Transition name="mobile-menu">
      <div v-if="isOpen" class="mobile-menu-overlay" @click="closeMenu">
        <div class="mobile-menu" @click.stop>
          <div class="mobile-menu__header">
            <h3 class="mobile-menu__title">Меню</h3>
          </div>

          <nav class="mobile-menu__nav">
            <ul class="mobile-menu__nav-list">
              <li
                v-for="(item, index) in headerNavigation"
                :key="index"
                class="mobile-menu__nav-item"
              >
                <NuxtLink
                  class="mobile-menu__nav-link"
                  :to="item.link"
                  @click="closeMenu"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>

          <div class="mobile-menu__contacts">
            <a href="tel:+79161234567" class="mobile-menu__contacts-link">
              +7 (916) 123-45-67
            </a>
            <a
              href="mailto:info@kaskavellaplus.ru"
              class="mobile-menu__contacts-link"
            >
              info@kaskavellaplus.ru
            </a>
          </div>

          <!-- <PButton @click="openPopup">Получить консультацию</PButton> -->
        </div>
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { headerNavigation } from '@/utils/headerNavigation'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'toggle'): void
  (e: 'close'): void
  (e: 'openPopup'): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()

const toggleMenu = () => {
  emit('toggle')
}

const closeMenu = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
.burger {
  display: none;

  @media screen and (max-width: 1200px) {
    display: block;
  }
}

.burger__button {
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0;
  z-index: 1001;
  position: relative;
}

.burger__line {
  width: 100%;
  height: 3px;
  background-color: #ffffff;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.burger__button--active {
  .burger__line {
    &:nth-child(1) {
      transform: rotate(44deg) translate(8px, 8px);
      background-color: #054263;
    }

    &:nth-child(2) {
      opacity: 0;
      transform: translateX(-20px);
    }

    &:nth-child(3) {
      transform: rotate(-45deg) translate(6px, -6px);
      background-color: #054263;
    }
  }
}

.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu {
  width: 280px;
  height: 100vh;
  background: #ffffff;
  padding: 59px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 20px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 900px) {
    padding: 45px 20px 20px 20px;
  }
}

.mobile-menu__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e5e7eb;
}

.mobile-menu__title {
  font-family: 'Onest';
  font-size: 16px;
  font-weight: 700;
  color: #054263;
  margin: 0;
}

.mobile-menu__close {
  width: 32px;
  height: 32px;
  background: #f3f4f6;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: #e5e7eb;
    transform: scale(1.1);
  }
}

.mobile-menu__close-icon {
  font-size: 18px;
  color: #6b7280;
  font-weight: 600;
}

.mobile-menu__nav {
  margin-bottom: 30px;
}

.mobile-menu__nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-menu__nav-item {
  border-bottom: 1px solid #f3f4f6;
  padding-bottom: 10px;
}

.mobile-menu__nav-link {
  font-family: 'Onest';
  font-size: 16px;
  font-weight: 500;
  color: #054263;
  text-decoration: none;
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: #0086e2;
  }
}

.mobile-menu__contacts {
  margin-bottom: 30px;
}

.mobile-menu__contacts-link {
  display: block;
  font-family: 'Onest';
  font-size: 16px;
  font-weight: 400;
  color: #054263;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #0086e2;
  }
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from {
  opacity: 0;

  .mobile-menu {
    transform: translateX(100%);
  }
}

.mobile-menu-leave-to {
  opacity: 0;

  .mobile-menu {
    transform: translateX(100%);
  }
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;

  .mobile-menu {
    transform: translateX(0);
  }
}
</style>
