<template>
  <CommonHero
    title="Разработка и согласование плана мероприятий при наступлении неблагоприятных метеорологических условиях"
    bg="/img/hero-5.webp"
  />
  <section class="service">
    <div class="container service__bg">
      <div class="service__content">
        <p class="service__content-description">
          План мероприятий при НМУ — документ, предписывающий выполнять
          определенные мероприятия по уменьшению выбросов загрязняющих веществ в
          атмосферный воздух на время неблагоприятных метеоусловий.
        </p>
        <p class="service__content-description">
          Основание: Приказ Минприроды №811 от 28.11.2019, Федеральный закон от
          10.01.2002 N 7-ФЗ
        </p>
        <p class="service__content-description">
          Кто должен разрабатывать: Юридические лица и индивидуальные
          предприниматели, осуществляющие хозяйственную и (или) иную
          деятельность на объектах I, II и III категории НВОС
        </p>
        <p class="service__content-description">
          Ответственность: ст. 8.1 КоАп РФ — штраф <br />
          для должностных лиц от 1 000 до 5 000 руб. <br />
          для юридических лиц от 2 000 до 100 000 руб.
        </p>
      </div>
      <ul class="service__list">
        <li class="service__list-item">
          <p @click="toggleAccordion(0)" class="service__list-item-title">
            Можно ли разработать один план мероприятий при НМУ на несколько
            производственных площадок?
          </p>
          <div v-if="activeItem === 0">
            <p class="service__list-item-description">
              Мероприятия при НМУ разрабатываются отдельно для каждого объекта
              НВОС. Если площадки объединены в один объект (одно свидетельство
              НВОС), то можно, в противном случае мероприятия разрабатываются
              для каждого объекта отдельно.
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(1)" class="service__list-item-title">
            Придется ли частично или полностью останавливать производство после
            разработки таких мероприятий?
          </p>
          <div v-if="activeItem === 1">
            <p class="service__list-item-description">
              Мероприятия не разрабатываются только в том случае, если
              концентрация загрязняющих веществ не превышает 0,1 ПДК. Некоторые
              участки, если мероприятием заложено, могут приостанавливаться на
              время действия НМУ, если это необходимо.
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
