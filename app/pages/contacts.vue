<template>
  <div>
    <CommonHero
      title="Контакты"
      bg="/img/hero-3.webp"
      description="Свяжитесь с нами для получения консультации по экологическим вопросам и заказа услуг"
    />
    <section class="contacts">
      <div class="container contacts__bg">
        <h2 class="contacts__title">Свяжитесь с нами</h2>
        <div class="contacts__grid">
          <div class="contacts__card">
            <div class="contacts__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                />
              </svg>
            </div>
            <h3 class="contacts__card-title">Телефон</h3>
            <a href="tel:+79166763566" class="contacts__link"
              >8 (916) 676-35-66</a
            >
            <a href="tel:+79163817645" class="contacts__link"
              >8 (916) 381-76-45</a
            >
            <p class="contacts__card-description">Звоните нам</p>
          </div>

          <div class="contacts__card">
            <div class="contacts__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <h3 class="contacts__card-title">Email</h3>
            <a href="mailto:info@kaskavellaplus.ru" class="contacts__link"
              >info@kaskavellaplus.ru</a
            >
            <p class="contacts__card-description">Ответим в течение 30 минут</p>
          </div>

          <div class="contacts__card">
            <div class="contacts__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 class="contacts__card-title">Адрес</h3>
            <p class="contacts__address">Москва Саморы Машела 4 к 1</p>
            <p class="contacts__card-description">Адрес офиса компании</p>
          </div>

          <div class="contacts__card">
            <div class="contacts__icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h3 class="contacts__card-title">Часы работы</h3>
            <p class="contacts__time">Пн-Пт, с 9:00 до 18:00</p>
            <p class="contacts__card-description">Сб-Вс: выходной</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'KaskavellaPlus - Контакты',
  meta: [
    {
      name: 'description',
      content:
        'Компания KaskavellaPlus предлагает полный спектр экологических услуг: от аудита и разработки документации до получения разрешений и сопровождения проверок. Наша команда экспертов поможет вашему предприятию работать в соответствии с природоохранным законодательством и внедрить экологически безопасные технологии.',
    },
    {
      property: 'og:title',
      content: 'KaskavellaPlus - Контакты',
    },
    {
      property: 'og:description',
      content:
        'Компания KaskavellaPlus предлагает полный спектр экологических услуг: от аудита и разработки документации до получения разрешений и сопровождения проверок. Наша команда экспертов поможет вашему предприятию работать в соответствии с природоохранным законодательством и внедрить экологически безопасные технологии.',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://kaskavellaplus.ru/contacts' },
    { property: 'og:site_name', content: 'KaskavellaPlus' },
    { property: 'og:locale', content: 'ru_RU' },
    { name: 'robots', content: 'index, follow' },
  ],
})
</script>

<style lang="scss" scoped>
.contacts {
  margin-top: 20px;
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

  &__title {
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #181818;
    margin-bottom: 40px;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }

  &__card {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    border-radius: 15px;
    padding: 25px;
    text-align: center;
    border: 1px solid #e9ecef;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      .contacts__icon svg {
        transform: scale(1.05);
        color: #0056b3;
      }
    }
  }

  &__icon {
    width: 38px;
    height: 38px;
    margin: 0 auto 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 100%;
      height: 100%;
      color: #0086e2;
      transition: transform 0.3s ease, color 0.3s ease;
    }
    @media screen and (max-width: 900px) {
      width: 32px;
      height: 32px;
      margin: 0 auto 10px;
    }
  }

  &__card-title {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Onest';
    color: #181818;
    margin-bottom: 10px;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }

  &__link {
    font-size: 18px;
    font-weight: 500;
    font-family: 'Onest';
    color: #0086e2;
    text-decoration: none;
    display: block;
    margin-bottom: 8px;
    transition: color 0.3s ease;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
    }
    &:hover {
      color: #0056b3;
    }
  }

  &__address,
  &__time {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Onest';
    color: #181818;
    margin-bottom: 8px;
    @media screen and (max-width: 1200px) {
      font-size: 14px;
    }
  }

  &__card-description {
    font-size: 14px;
    font-weight: 400;
    font-family: 'Onest';
    color: #6c757d;
    line-height: 1.4;
  }
}
</style>
