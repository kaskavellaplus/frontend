<template>
  <section class="about">
    <div class="container about__bg">
      <div class="about__content">
        <h2 class="about__title">
          Компания с 2018 года разрабАтывает проекты и документы в сфере
          экологии
        </h2>
        <p class="about__subtitle">Кто мы такие</p>
      </div>
      <div class="about__wrapper">
        <p class="about__description">
          <span class="about__description-color"
            >Мы работаем для предприятий и организаций, осуществляющих
            хозяйственную деятельность на территории Российской Федерации.</span
          >
        </p>
        <p class="about__description">
          Основными видами оказываемых услуг являются: разработка проектов
          санитарно-защитных зон, проектов нормативов предельно-допустимых
          выбросов, проектов нормативов образования отходов и лимитов на их
          размещение, программ экологического контроля на предприятиях, планов
          мероприятий проводимых при наступлении неблагоприятных
          метеорологических условий и т.п.
        </p>
        <p class="about__description">
          Данный вид деятельности не подлежит лицензированию, также отсутствуют
          требования о необходимости членства в СРО.
        </p>
      </div>
      <div class="about__content-2">
        <h2 class="about__title-2">
          Все наши экологи-проектировщики имеют высшее профильное образование
        </h2>
        <div class="about__wrapper">
          <p class="about__description">
            Наши специалисты прошли дополнительное обучение на различных курсах
            ведущего российского разработчика программного обеспечения для
            проведения экологических расчетов — Фирмы Интеграл (г.
            Санкт-Петербург).
          </p>
          <p class="about__description">
            Компания обладает достаточной материально-технической базой для
            выполнения проектов на объектах любой категории и класса опасности,
            а также проектов для значительного числа промышленных площадок
            (большого количества объектов НВОС).
          </p>
          <p class="about__description">
            Наши клиенты это — юридические лица и индивидуальные
            предпринимателя, которые владеют либо распоряжаются объектами
            оказывающими негативное воздействие на окружающую среду (выбросы в
            атмосферу, сбросы в водоёмы, шумо-, радио-, магнитное и прочие
            воздействия и т.п.).
          </p>
          <p class="about__description">
            <span class="about__description-color">
              Компания осуществляет полное сопровождение на всех этапах
              экспертизы и получения СЭЗ, при необходимости устраняет замечания
              экспертов гос.органов.</span
            >
          </p>
          <p class="about__description">
            По итогу работы заказчик получает проект, отвечающий всем
            требованиям действующего законодательства и прошедший все этапы
            экспертиз и согласований.
          </p>
        </div>
      </div>
      <ul class="list-reset about__list">
        <li
          v-for="(item, index) in companyAbout"
          :key="index"
          class="about__item"
        >
          <p class="about__item-text">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.about {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1444px) {
    margin-top: 0px;
  }
  &__bg {
    background-color: #ffffff;
    border-radius: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  &__content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
      flex-direction: column-reverse;
    }
  }
  &__content-2 {
    display: flex;
    align-items: flex-end;
    flex-direction: column;

    border-bottom: 1px solid #d9d9d9;
    border-top: 1px solid #d9d9d9;
  }
  &__title-2 {
    padding-top: 40px;
    margin-bottom: 20px;
    max-width: 500px;
    font-size: 26px;
    font-weight: 700;
    font-family: 'Onest';
    color: #000000;
    text-align: right;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
    }
    @media screen and (max-width: 900px) {
      font-size: 16px;
    }
  }
  &__title {
    max-width: 500px;
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
  &__subtitle {
    font-size: 20px;
    font-weight: 400;
    font-family: 'Onest';
    color: #000000;
    @media screen and (max-width: 1200px) {
      font-size: 16px;
    }
    @media screen and (max-width: 900px) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
  &__wrapper {
    padding-bottom: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  &__description {
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
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;

    @media screen and (max-width: 752px) {
      grid-template-columns: repeat(2, 1fr);
    }
    // @media screen and (max-width: 900px) {
    //   grid-template-columns: 200px 200px 200px;
    //   justify-content: flex-start;
    //   margin-bottom: 0;
    // }
    // @media screen and (max-width: 682px) {
    //   grid-template-columns: 250px 250px;
    // }
    // @media screen and (max-width: 588px) {
    //   grid-template-columns: 200px 200px;
    // }
    // @media screen and (max-width: 480px) {
    //   grid-template-columns: 170px 170px;
    //   justify-content: center;
    // }
  }
  &__item {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 40px 20px;
    background-color: #ffffff;
    border: 1px solid #d9d9d9;
    @media screen and (max-width: 1200px) {
      padding: 20px 20px;
    }
    @media screen and (max-width: 900px) {
      padding: 15px 10px;
    }

    &-text {
      font-size: 18px;
      font-weight: 400;
      font-family: 'Onest';
      line-height: normal;
      color: #000000;
      @media screen and (max-width: 1200px) {
        font-size: 16px;
      }
      @media screen and (max-width: 900px) {
        font-size: 14px;
      }
    }
  }
}
</style>
