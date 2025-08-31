<template>
  <CommonHero
    title="Постановка на учет объектов негативного воздействия и актуализация сведений"
    bg="/img/hero-5.webp"
  />
  <section class="service">
    <div class="container service__bg">
      <h2 class="service__title">Основание</h2>
      <div class="service__content">
        <p class="service__content-description">
          Федеральный закон N 296-ФЗ «Об ограничении выбросов парниковых газов»
          от 2 июля 2021 г.
        </p>
        <p class="service__content-description">
          Приказ Минприроды России от 30.06.2015 N 300 «Об утверждении
          методических указаний и руководства по количественному определению
          объема выбросов парниковых газов организациями, осуществляющими
          хозяйственную и иную деятельность в Российской Федерации»
        </p>
      </div>
      <h2 class="service__title">Кому необходимо?</h2>
      <div class="service__content">
        <p class="service__content-description">
          Расчет общей массы выбросов парниковых газов необходим для постановки
          на учет и актуализации сведений объекта НВОС
        </p>
        <p class="service__content-description">
          Отчет об объемах выбросов парниковых газов обязаны сдавать ИП и ЮЛ,
          деятельность которых соответствует следующим критериям:
        </p>
        <p class="service__content-description">
          — масса выбросов парниковых газов эквивалентна 150 и более тыс. тонн
          углекислого газа в год за период до 01.01.2024 г.
        </p>
        <p class="service__content-description">
          — масса выбросов парниковых газов эквивалентна 50 тыс. тонн и более
          углекислого газа в год за период с 01.01.2024 г.
        </p>
        <p class="service__content-description">
          — по видам деятельности соответствует критериям, утвержденным
          постановлением Правительства РФ от 14.03.2022 г. No355
          (нефтегазодобыча, добыча угля, черная и цветная металлургия,
          производство минеральных материалов, химическая и нефтехимическая
          отрасль, сжигание топлива в транспорте, обращение с отходами).
        </p>
        <p class="service__content-description">
          Срок сдачи отчета – 01 июля года, следующего за отчетным
        </p>
      </div>
      <h2 class="service__title">Ответственность</h2>
      <div class="service__content">
        <p class="service__content-description">
          С 1.07.2025 штраф за непредставление или несвоевременное представление
          отчета о выбросах парниковых газов или представление в отчете заведомо
          недостоверной информации законодательством об ограничении выбросов:
        </p>
        <p class="service__content-description">
          — для должностных лиц – от 10 000 до 50 000 рублей;
        </p>
        <p class="service__content-description">
          — для ИП – от 50 000 до 150 000 рублей;
        </p>
        <p class="service__content-description">
          — для юридических лиц – от 100 000 до 500 000 рублей
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.service {
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
  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
  &__title {
    margin-bottom: 30px;
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
  &__content-description {
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
  &__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__list-item {
    display: flex;
    flex-direction: column;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    background: #ffffff;

    &:hover {
      border-color: #0086e2;
      box-shadow: 0 4px 12px rgba(0, 134, 226, 0.1);
    }
  }
  &__list-item-title {
    font-size: 18px;
    font-weight: 600;
    font-family: 'Onest';
    color: #054263;
    padding: 20px;
    margin: 0;
    cursor: pointer;
    background: #f8f9fa;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    &:hover {
      background: #e9ecef;
      color: #0086e2;
    }

    &::after {
      content: '+';
      font-size: 24px;
      font-weight: 700;
      color: #6b7280;
      transition: all 0.3s ease;
    }

    &.active::after {
      content: '−';
      color: #0086e2;
    }

    @media screen and (max-width: 1200px) {
      font-size: 16px;
      padding: 15px;
    }
  }

  &__list-item-description {
    font-size: 16px;
    font-weight: 400;
    font-family: 'Onest';
    color: #374151;
    line-height: 1.6;
    margin: 0;
    padding: 20px;
    background: #ffffff;
    border-top: 1px solid #f3f4f6;
    animation: slideDown 0.3s ease;

    @media screen and (max-width: 1200px) {
      font-size: 14px;
      padding: 15px;
    }
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
