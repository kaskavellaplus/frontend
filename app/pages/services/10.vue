<template>
  <CommonHero title="Экологическая отчетность" bg="/img/hero-5.webp" />
  <section class="service">
    <div class="container service__bg">
      <h2 class="service__title">Что такое экологическая отчетность?</h2>
      <div class="service__content">
        <p class="service__content-description">
          Экологическая отчетность — это система документооборота, которая
          включает в себя предоставление государственным органам отчетов о
          воздействии предприятия на окружающую среду, использовании природных
          ресурсов и выполнении природоохранных мероприятий.
        </p>
        <p class="service__content-description">
          <span class="service__content-description-color">Основание:</span>
          Федеральный закон № 7-ФЗ "Об охране окружающей среды", Федеральный
          закон № 89-ФЗ "Об отходах производства и потребления", Постановления
          Правительства РФ и приказы Росприроднадзора.
        </p>
        <p class="service__content-description">
          <span class="service__content-description-color"
            >Периодичность подачи:</span
          >
          Различные виды отчетности подаются ежегодно, ежеквартально или по мере
          необходимости в зависимости от категории объекта и вида воздействия на
          окружающую среду.
        </p>
        <p class="service__content-description">
          <span class="service__content-description-color"
            >Кто обязан подавать:</span
          >
          Юридические лица и индивидуальные предприниматели, осуществляющие
          хозяйственную и иную деятельность, оказывающую негативное воздействие
          на окружающую среду.
        </p>
        <p class="service__content-description">
          <span class="service__content-description-color"
            >Ответственность:</span
          >
          За нарушение сроков подачи экологической отчетности предусмотрены
          штрафы:<br />
          для должностных лиц от 3 000 до 6 000 руб.<br />
          для юридических лиц от 20 000 до 80 000 руб.
        </p>
      </div>
      <ul class="service__list">
        <li class="service__list-item">
          <p @click="toggleAccordion(0)" class="service__list-item-title">
            Какие виды экологической отчетности существуют?
          </p>
          <div v-if="activeItem === 0">
            <p class="service__list-item-description">
              <strong>Основные виды экологической отчетности:</strong><br />
              • Отчет об образовании, утилизации, обезвреживании, размещении
              отходов (форма 2-ТП отходы)<br />
              • Отчет об использовании воды (форма 2-ТП водхоз)<br />
              • Отчет об охране атмосферного воздуха (форма 2-ТП воздух)<br />
              • Декларация о плате за негативное воздействие на окружающую
              среду<br />
              • Расчет платы за негативное воздействие на окружающую среду<br />
              • Отчет о выполнении плана мероприятий по охране окружающей
              среды<br />
              • Отчет по программе производственного экологического контроля
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(1)" class="service__list-item-title">
            Какие сроки подачи отчетности?
          </p>
          <div v-if="activeItem === 1">
            <p class="service__list-item-description">
              <strong>Сроки подачи различных видов отчетности:</strong><br />
              • Форма 2-ТП (отходы) — до 15 января года, следующего за
              отчетным<br />
              • Форма 2-ТП (водхоз) — до 10 января года, следующего за
              отчетным<br />
              • Форма 2-ТП (воздух) — до 15 января года, следующего за
              отчетным<br />
              • Декларация о плате — до 10 марта года, следующего за отчетным<br />
              • Расчет платы — до 20 числа месяца, следующего за отчетным
              кварталом<br />
              • Отчет по ПЭК — до 25 марта года, следующего за отчетным
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(2)" class="service__list-item-title">
            Что включает в себя наша услуга?
          </p>
          <div v-if="activeItem === 2">
            <p class="service__list-item-description">
              <strong>Наши специалисты обеспечивают:</strong><br />
              • Анализ деятельности предприятия и определение необходимых видов
              отчетности<br />
              • Сбор и анализ исходных данных для подготовки отчетов<br />
              • Расчет показателей воздействия на окружающую среду<br />
              • Подготовку всех необходимых форм отчетности<br />
              • Своевременную подачу отчетов в контролирующие органы<br />
              • Консультации по вопросам экологического законодательства<br />
              • Сопровождение при проверках контролирующих органов
            </p>
          </div>
        </li>
        <li class="service__list-item">
          <p @click="toggleAccordion(3)" class="service__list-item-title">
            Какие документы необходимы для подготовки отчетности?
          </p>
          <div v-if="activeItem === 3">
            <p class="service__list-item-description">
              <strong
                >Для подготовки экологической отчетности потребуются:</strong
              ><br />
              • Данные о производственных процессах и используемом
              оборудовании<br />
              • Информация об образовании, движении и размещении отходов<br />
              • Данные о водопотреблении и водоотведении<br />
              • Результаты инструментальных измерений выбросов и сбросов<br />
              • Документы по обращению с отходами (договоры, справки о движении
              отходов)<br />
              • Разрешительная документация (лицензии, разрешения)<br />
              • Проектная документация по охране окружающей среды
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
