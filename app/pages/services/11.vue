<template>
  <CommonHero
    title="Раздел «Охрана окружающей среды» (ООС) / «Оценка воздействия на окружающую среду» (ОВОС)"
    bg="/img/hero-5.webp"
  />
  <section class="service">
    <div class="container service__bg">
      <h2 class="service__title">Основание</h2>
      <div class="service__content">
        <p class="service__content-description">
          Федеральный закон «Об охране окружающей природной среды» от 10.01.2002
          г. № 7-ФЗ;
        </p>
        <p class="service__content-description">
          Градостроительный кодекс РФ № 190-ФЗ от 29.12.2004 г.;
        </p>
        <p class="service__content-description">
          Приказ Государственного комитета Российской Федерации № 372 от
          16.05.2000г. «Об утверждении положения об оценке воздействия
          намечаемой хозяйственной и иной деятельности на окружающую среду в
          Российской Федерации»
        </p>
      </div>
      <h2 class="service__title">Кому необходимо?</h2>
      <div class="service__content">
        <p class="service__content-description">
          Раздел «Охрана окружающей среды» является неотъемлемой и обязательной
          частью проектной документации на строительство, расширение,
          реконструкцию хозяйственного или промышленного объекта. Необходим для
          выбора приоритетных направлений использования, развития и
          реконструкции территорий, а также определяет условия реализации
          проектных решений и хозяйственной деятельности на территориях.
        </p>
      </div>
      <h2 class="service__title">
        В раздел ООС входят в следующие подразделы:
      </h2>
      <div class="service__content">
        <p class="service__content-description">Охрана атмосферного воздуха;</p>
        <p class="service__content-description">
          Охрана и рациональное использование водных ресурсов;
        </p>
        <p class="service__content-description">
          Охрана земельных ресурсов, растительного и животного мира;
        </p>
        <p class="service__content-description">
          Защита от шума и других физических факторов воздействия.
        </p>
      </div>
      <h2 class="service__title">В разделе ООС отражаются:</h2>
      <div class="service__content">
        <p class="service__content-description">
          Информация о характере и масштабах воздействия на окружающую среду
          намечаемой деятельности, альтернативах ее реализации, оценке
          экологических и связанных с ними социально-экономических и иных
          последствий этого воздействия и их значимости, возможности минимизации
          воздействий;
        </p>
        <p class="service__content-description">
          Общественные предпочтения при принятии заказчиком решений, касающихся
          намечаемой деятельности;
        </p>
        <p class="service__content-description">
          Альтернативные варианты реализации намечаемой деятельности (в том
          числе о месте размещения объекта, о выборе технологий и иные) или
          отказ от нее с учетом результатов проведенной оценки воздействия на
          окружающую среду.
        </p>
      </div>
      <h2 class="service__title">Ответственность</h2>
      <div class="service__content">
        <p class="service__content-description">
          КоАП ст. 8.1 Статья 8.1. Несоблюдение экологических требований при
          планировании, технико-экономическом обосновании проектов,
          проектировании, размещении, строительстве, реконструкции, вводе в
          эксплуатацию, эксплуатации предприятий, сооружений или иных объектов.
          Несоблюдение экологических требований при планировании,
          технико-экономическом обосновании проектов, проектировании,
          размещении, строительстве, реконструкции, вводе в эксплуатацию,
          эксплуатации предприятий, сооружений или иных объектов — влечет
          наложение административного штрафа на граждан в размере от одной
          тысячи до двух тысяч рублей; на должностных лиц — от двух тысяч до
          пяти тысяч рублей; на юридических лиц — от двадцати тысяч до ста тысяч
          рублей.
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
