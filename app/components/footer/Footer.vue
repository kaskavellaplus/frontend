<template>
  <footer class="footer">
    <div class="container footer__bg">
      <div class="footer__content">
        <div class="footer__content-left">
          <p class="footer__content-left-title">Получить консультацию</p>
          <form @submit.prevent="onSubmit">
            <div class="footer__content-left-wrapper">
              <PInputText
                v-model="name"
                placeholder="Введите ваше имя"
                required
                autocomplete="off"
              />

              <PInputText
                v-model="email"
                type="email"
                placeholder="your@email.com"
                required
                autocomplete="off"
              />

              <PInputMask
                v-model="phone"
                mask="+7 (999) 999-99-99"
                placeholder="+7 (___) ___-__-__"
                required
                autocomplete="off"
              />
            </div>

            <PButton type="submit" label="Отправить" />
          </form>
          <div v-if="isSuccess" class="footer__content-left-success">
            <p class="footer__content-left-success-text">
              Заявка успешно отправлена!
            </p>
          </div>
        </div>
        <div class="footer__content-right">
          <nav class="footer__content-right-nav">
            <p class="footer__content-right-nav-title">Навигация</p>
            <ul class="list-reset footer__content-right-nav-list">
              <li
                v-for="(item, index) in headerNavigation"
                :key="index"
                class="footer__content-right-nav-item"
              >
                <NuxtLink
                  :to="item.link"
                  class="footer__content-right-nav-link"
                >
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </nav>
          <ul class="list-reset footer__content-right-contacts">
            <p class="footer__content-right-contacts-title">Контакты</p>
            <li class="footer__content-right-contacts-item">
              <a
                href="tel:+79161234567"
                class="footer__content-right-contacts-link"
                >+7 (916) 123-45-67</a
              >
            </li>
            <li class="footer__content-right-contacts-item">
              <a
                href="mailto:info@kaskavellaplus.ru"
                class="footer__content-right-contacts-link"
                >info@kaskavellaplus.ru</a
              >
            </li>
          </ul>
        </div>
      </div>
      <h2 class="footer__copyright">
        © 2025 ООО «Каскавелла Плюс». Все права защищены.
      </h2>
      <span class="footer__dev">Разработка сайта: </span>
      <a href="https://primedev.pro" class="footer__dev-link" target="_blank"
        >PRIMEDEV.PRO</a
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
const { handleSubmit, name, phone, email, resetForm, isSuccess } = sendMail()

const onSubmit = async () => {
  await handleSubmit(email.value, phone.value, name.value)
  resetForm()
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 20px 0;
  @media screen and (max-width: 1444px) {
    padding: 0 0;
  }
  &__bg {
    background-color: #054263;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    @media screen and (max-width: 1444px) {
      border-radius: 0px;
    }
  }
  &__copyright {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    @media screen and (max-width: 1200px) {
      font-size: 12px;
    }
  }
  &__dev {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Onest';
    color: #ffffff;
    @media screen and (max-width: 1200px) {
      font-size: 12px;
    }
  }
  &__dev-link {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Onest';
    color: #00dc82;
    @media screen and (max-width: 1200px) {
      font-size: 12px;
    }
  }
  &__content {
    margin-bottom: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    @media screen and (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 45px;
    }
    &-left {
      &-title {
        margin-bottom: 20px;
        font-size: 22px;
        font-weight: 700;
        font-family: 'Onest';
        color: #ffffff;
        @media screen and (max-width: 1200px) {
          font-size: 18px;
        }
        @media screen and (max-width: 900px) {
          font-size: 16px;
        }
      }
      &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }
      &-success {
        &-text {
          padding-top: 20px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          font-family: 'Onest';
          color: #00dc82;
        }
      }
    }
    &-right {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
      }
      &-nav {
        &-title {
          margin-bottom: 20px;
          font-size: 22px;
          font-weight: 700;
          font-family: 'Onest';
          color: #ffffff;
          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
        }
        &-list {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        &-link {
          font-size: 16px;
          font-weight: 400;
          font-family: 'Onest';
          color: #ffffff;
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
      &-contacts {
        display: flex;
        flex-direction: column;
        gap: 7px;
        &-title {
          margin-bottom: 18px;
          font-size: 22px;
          font-weight: 700;
          font-family: 'Onest';
          color: #ffffff;
          @media screen and (max-width: 1200px) {
            font-size: 18px;
          }
        }
        &-link {
          font-size: 16px;
          font-weight: 400;
          font-family: 'Onest';
          color: #ffffff;
          @media screen and (max-width: 1200px) {
            font-size: 14px;
          }
        }
      }
    }
  }
}
:deep(.p-inputtext) {
  width: 100%;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
    height: 40px;
    &::placeholder {
      font-size: 14px;
    }
  }
}
:deep(.p-button) {
  width: 100%;
}
</style>
