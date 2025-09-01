<template>
  <CommonHero
    title="Экологическое сопровождение предприятия"
    bg="/img/hero-5.webp"
  />
  <section class="service">
    <div class="container service__bg">
      <div class="service__content">
        <p class="service__content-description">
          Экологическое сопровождение предприятия представляет собой комплекс
          мероприятий, направленных на обеспечение соблюдения норм и правил
          природопользования и охраны окружающей среды.
        </p>
        <p class="service__content-description">
          Оно включает следующие ключевые аспекты:
        </p>
        <ul class="service__list">
          <li class="service__list-item">
            <p @click="toggleAccordion(0)" class="service__list-item-title">
              Цели экологического сопровождения
            </p>
            <div v-if="activeItem === 0">
              <p class="service__list-item-description">
                Обеспечение правовой защиты: Консультации специалистов помогают
                минимизировать риски возникновения претензий со стороны
                контролирующих органов и избежать штрафов.
              </p>
              <p class="service__list-item-description">
                Поддержка эффективной эксплуатации: Организация безопасного
                функционирования производственных объектов путем разработки
                необходимой проектной и разрешительной документации.
              </p>
              <p class="service__list-item-description">
                Повышение конкурентоспособности: Экологические мероприятия
                позволяют предприятию соответствовать современным требованиям
                рынка и получать преимущества перед конкурентами.
              </p>
              <p class="service__list-item-description">
                Оптимизация расходов: Правильное ведение документооборота
                позволяет снизить затраты на устранение последствий нарушений
                природоохранительного законодательства.
              </p>
              <p class="service__list-item-description">
                Формирование положительного имиджа: Предприятие демонстрирует
                свою ответственность перед обществом и приверженность принципам
                устойчивого развития.
              </p>
            </div>
          </li>
        </ul>
        <p class="service__content-description">
          Основные этапы экологического сопровождения:
        </p>
        <ul class="service__list">
          <li class="service__list-item">
            <p @click="toggleAccordion(1)" class="service__list-item-title">
              Проведение анализа текущего состояния предприятия
            </p>
            <div v-if="activeItem === 1">
              <p class="service__list-item-description">
                Изучение документов, характеризующих деятельность организации.
              </p>
              <p class="service__list-item-description">
                Определение объемов выбросов загрязняющих веществ и образования
                отходов.
              </p>
              <p class="service__list-item-description">
                Установление классов опасности производимых товаров и
                оказываемых услуг.
              </p>
            </div>
          </li>
        </ul>
        <ul class="service__list">
          <li class="service__list-item">
            <p @click="toggleAccordion(2)" class="service__list-item-title">
              Подготовка отчетности
            </p>
            <div v-if="activeItem === 2">
              <p class="service__list-item-description">
                Оформление проектов предельно допустимых выбросов (ПДВ),
                нормативных значений сбросов сточных вод и лимитов размещения
                отходов.
              </p>
              <p class="service__list-item-description">
                Регистрация предприятий и объектов в государственном реестре
                недвижимости.
              </p>
              <p class="service__list-item-description">
                Инвентаризация отходов и разработка паспортов опасных отходов.
              </p>
            </div>
          </li>
        </ul>
        <ul class="service__list">
          <li class="service__list-item">
            <p @click="toggleAccordion(3)" class="service__list-item-title">
              Контроль над соблюдением установленных нормативов
            </p>
            <div v-if="activeItem === 3">
              <p class="service__list-item-description">
                Мониторинг количества образованных отходов и объема выбросов
                вредных веществ.
              </p>
              <p class="service__list-item-description">
                Обеспечение своевременной утилизации отработанных материалов.
              </p>
              <p class="service__list-item-description">
                Соблюдение порядка обращения с отходами I–IV класса опасности.
              </p>
            </div>
          </li>
        </ul>
        <p class="service__content-description">
          Таким образом, экологическое сопровождение обеспечивает комплексное
          решение вопросов, связанных с охраной окружающей среды, снижением
          рисков финансовых потерь и поддержанием благоприятного общественного
          мнения о предприятии.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const activeItem = ref<number | null>(null)

const toggleAccordion = (index: number) => {
  if (activeItem.value === index) {
    activeItem.value = null
  } else {
    activeItem.value = index
  }
}
</script>

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
