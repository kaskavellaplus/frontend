<template>
  <CommonHero
    title="Постановка на учет объектов негативного воздействия и актуализация сведений"
    bg="/img/hero-5.jpg"
  />
  <section class="service">
    <div class="container service__bg">
      <h2 class="service__title">Что такое постановка на учет объекта НВОС?</h2>
      <div class="service__content">
        <p class="service__content-description">
          Объект НВОС — это объект капитального строительства и (или) другой
          объект, оказывающих негативное воздействие на окружающую среду
          (выбросы в атмосферный воздух, сбросы в водоем, образование и
          размещение отходов)
        </p>
        <p class="service__content-description">
          Основание: Статья 69.2 ФЗ № 7 от 10.01.2002 г. Постановление
          правительства № 830 от 07.05.2022 г.
        </p>
        <p class="service__content-description">
          В какой срок: не позднее чем в течение шести месяцев с даты ввода
          объекта в эксплуатацию. Кем подается заявка: юридическими лицами и
          индивидуальными предпринимателями, осуществляющими хозяйственную и
          (или) иную деятельность на указанных объектах
        </p>
        <p class="service__content-description">
          Процедура постановки на учет: Проведение инвентаризации и разработка
          отчета Формирование и подача заявки в департамент/Министерство
          экологии областного субъекта
        </p>
        <p class="service__content-description">
          Ответственность: ст. 8.1, 8.46 КоАП РФ — штраф <br />
          для должностных лиц от 5 000 до 20 000 руб.<br />
          для юридических лиц от 30 000 до 100 000 руб.
        </p>
      </div>
      <ul class="service__list">
        <li class="service__list-item">
          <p @click="toggleAccordion(0)" class="service__list-item-title">
            Нужно ли мне ставить свой объект на учет?
          </p>
          <div v-if="activeItem === 0">
            <p class="service__list-item-description">
              Нужно ли мне ставить свой объект на учет? Да, если имеете (или
              эксплуатируете) источники выбросов загрязняющих веществ в
              атмосферный воздух (котельная, резервуар хранения топлива, пост
              обслуживания автотранспорта; проводите сварочные и (или)
              покрасочные работы, разгрузку и хранение сыпучих материалов и др.)
              или источники сброса загрязняющих веществ в водоем (ливневые,
              хозяйственно-бытовые сточные воды).
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(1)" class="service__list-item-title">
            Что для этого нужно?
          </p>
          <div v-if="activeItem === 1">
            <p class="service__list-item-description">
              Провести инвентаризацию источников выбросов загрязняющих веществ в
              атмосферный воздух и разработать отчет об инвентаризации. Подать
              заявку в срок не позднее 6 месяцев с момента ввода в эксплуатацию
              объекта.
            </p>
            <p class="service__list-item-description">
              Получить свидетельство НВОС с установленной категорией.
              Разработать проектную документацию, необходимую для вашей
              категории.
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
