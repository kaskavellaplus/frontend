<template>
  <CommonHero title="Разработка проекта ЗСО" bg="/img/hero-5.webp" />
  <section class="service">
    <div class="container service__bg">
      <div class="service__content">
        <p class="service__content-description">
          Проект ЗСО — документ, содержащий расчетное обоснование размеров
          поясов ЗСО и регламентирующий мероприятия по защите источника
          водоснабжения и инженерных коммуникаций, соединяющих водозабор с
          основной магистралью водопровода, от различных воздействий
          (физических, химическихи микробиологических).
        </p>
        <p class="service__content-description">
          Основание: Федеральный закон от 10.01.2002 г. №7-ФЗ, №74-ФЗ от
          03.06.2006 г., Постановления Правительства РФ от 30.12.2006г. № 881
        </p>
        <p class="service__content-description">
          Кто должен разрабатывать: Юридические лица и индивидуальные
          предприниматели, осуществляющие хозяйственную и (или) иную
          деятельность на объектах I, II и III категории НВОС
        </p>
        <p class="service__content-description">
          Ответственность: ст. 8.14 КоАп РФ — штраф <br />
          для должностных лиц от 10 000 до 20 000 руб. <br />
          для юридических лиц от 80 000 до 100 000 руб. <br />
          Приостановление деятельности до 90 суток
        </p>
      </div>
      <ul class="service__list">
        <li class="service__list-item">
          <p @click="toggleAccordion(0)" class="service__list-item-title">
            Что является результатом разработки проекта ЗСО?
          </p>
          <div v-if="activeItem === 0">
            <p class="service__list-item-description">
              Конечным результатом является внесение данных об установленных
              поясах ЗСО в Единый Государственный Реестр Недвижимости с
              нанесением поясов на публичную кадастровую карту.
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(1)" class="service__list-item-title">
            Какие ограничения должны соблюдаться в поясах ЗСО?
          </p>
          <div v-if="activeItem === 1">
            <p class="service__list-item-description">
              Полный перечень ограничений указан в п. 3.2 и 3.3 СанПиН
              2.1.4.1110-02. В первом поясе запрещается посадка новых деревьев,
              строительство дома и других построек. Пояс обязательно обностился
              забором. Во втором поясе запрещается размещение объектов,
              представляющих опасность биологического загрязнения (кладбища,
              скотомогильники, полигоны размещения отходов и др.). В третьем
              поясе запрещается сброс промышленных, сельскохозяйственных,
              городских и ливневых сточных вод, в которых содержание химических
              веществ и микроорганизмов превышает установленные санитарными
              правилами гигиенические нормативы качества воды.
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
