<template>
  <footer class="footer">
    <div class="container footer__bg">
      <div class="footer__content">
        <div class="footer__content-left">
          <p class="footer__content-left-title">Получить консультацию</p>
          <PForm :model:="form" :rules="rules" @submit.prevent="onSubmit">
            <div class="footer__content-left-wrapper">
              <PFormField name="name" label="Имя" required>
                <PInputText
                  v-model="form.name"
                  placeholder="Введите ваше имя"
                />
              </PFormField>

              <PFormField name="email" label="Email" required>
                <PInputText
                  v-model="form.email"
                  type="email"
                  placeholder="Введите ваш email"
                />
              </PFormField>
            </div>

            <PButton type="submit" label="Отправить" />
          </PForm>
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
const rules = {
  name: [{ required: true, message: 'Имя обязательно для заполнения' }],
  email: [
    { required: true, message: 'Email обязателен для заполнения' },
    { type: 'email', message: 'Введите корректный email' },
  ],
}
const form = ref({
  name: '',
  email: '',
})
const onSubmit = (data: any) => {
  console.log('Форма отправлена:', data)
  alert('Форма отправлена!')
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
        margin-bottom: 40px;
        font-size: 22px;
        font-weight: 700;
        font-family: 'Onest';
        color: #ffffff;
        @media screen and (max-width: 1200px) {
          font-size: 18px;
        }
        @media screen and (max-width: 900px) {
          font-size: 16px;
          margin-bottom: 20px;
        }
      }
      &-wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
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
