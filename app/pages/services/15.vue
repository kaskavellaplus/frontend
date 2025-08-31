<template>
  <CommonHero title="Разработка проекта НДС" bg="/img/hero-5.webp" />
  <section class="service">
    <div class="container service__bg">
      <div class="service__content">
        <p class="service__content-description">
          Проект НДС — проект, содержащий информацию о нормативах сбросов
          загрязняющих веществ со сточными водами в поверхностный водный объект
          (право пользования поверхностным объектом для сброса очищенных сточных
          вод) от стационарных источников выбросов предприятия в целом или его
          структурного подразделения.
        </p>
        <p class="service__content-description">
          Основание: Закон РФ «О недрах» от 21.02.1992 №2395-1, СанПиН
          2.1.4.1110-02
        </p>
        <p class="service__content-description">
          Кто должен разрабатывать: Проект НДС необходим предприятиям
          источниками водоснабжения которых являются собственные водозаборы с
          поверхностных (реки, озера, водохранилища) и подземных (грунтовые и
          артезианские скважины) источников. При этом вода из этих источников
          используется предприятием для питьевых, хозяйственно-бытовых нужд и
          (или) производства пищевых продуктов. Проект НДС разрабатывается:
        </p>
        <p class="service__content-description">
          — При организации нового источника водоснабжения;
        </p>
        <p class="service__content-description">
          — Для действующих источников, если проект не был разработан ранее;
        </p>
        <p class="service__content-description">
          — При изменении параметров эксплуатации действующего источника
          водоснабжения (в том числе при увеличении производительности забора
          воды);
        </p>
        <p class="service__content-description">
          — Также,разработка проекта НДС является одним из этапов при получении
          лицензии на недропользование в части добычи воды.
        </p>
        <p class="service__content-description">
          Ответственность: ст. 8.14 КоАп РФ — штраф <br />
          для должностных лиц от 30 000 до 50 000 руб. <br />
          для юридических лиц от 800 000 до 1 млн. руб.
        </p>
      </div>
      <ul class="service__list">
        <li class="service__list-item">
          <p @click="toggleAccordion(0)" class="service__list-item-title">
            Необходимо ли разрабатывать Проект НДС при сбросе через
            централизованные системы водоотведения (ЦСВ)?
          </p>
          <div v-if="activeItem === 0">
            <p class="service__list-item-description">
              Да, в случае если суммарный сброс сточных вод по нескольким
              выпускам в одну ЦСВ более 200 м3/сутки
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(1)" class="service__list-item-title">
            Можно ли установить одни нормативы допустимых сбросов для нескольких
            выпусков?
          </p>
          <div v-if="activeItem === 1">
            <p class="service__list-item-description">
              Нет, нормативы НДС устанавливаются для каждого имеющегося у
              предприятия выпуска
            </p>
          </div>
        </li>
      </ul>
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
