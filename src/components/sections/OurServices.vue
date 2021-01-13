<template>
  <div class="our-services container" id="services">
    <ul class="our-services__cards">
      <li class="our-services__cards-item">
        <img
          src="../../assets/svg/Icon-Graphic.svg"
          alt="card-img"
          class="our-services__cards-item-img"
        />
        <span class="our-services__cards-item-title">GRAPHIC DESIGN</span>
        <span class="our-services__cards-item-subtitle">{{ subtitle }}</span>
      </li>
      <li class="our-services__cards-item">
        <img
          src="../../assets/svg/Icon-Web.svg"
          alt="card-img"
          class="our-services__cards-item-img"
        />
        <span class="our-services__cards-item-title">WEB DEVELOPMENT</span>
        <span class="our-services__cards-item-subtitle">{{ subtitle }}</span>
      </li>
      <li class="our-services__cards-item">
        <img
          src="../../assets/svg/Icon-SEO.svg"
          alt="card-img"
          class="our-services__cards-item-img"
        />
        <span class="our-services__cards-item-title">SEO MARKETING</span>
        <span class="our-services__cards-item-subtitle">{{ subtitle }}</span>
      </li>
      <li class="our-services__cards-item">
        <img
          src="../../assets/svg/Icon-Mobile.svg"
          alt="card-img"
          class="our-services__cards-item-img"
        />
        <span class="our-services__cards-item-title">MOBILE DEVELOPMENT</span>
        <span class="our-services__cards-item-subtitle">{{ subtitle }}</span>
      </li>
    </ul>
    <div class="our-services__wrapper">
      <img
        src="../../assets/svg/Icon-Services.svg"
        alt="services-icon"
        class="our-services__wrapper-img"
      />
      <h2 class="our-services__wrapper-title">OUR SERVICES</h2>
      <span class="our-services__wrapper-subtitle"
        >“Nullam quis risus eget urna mollis ornare vel eu leo. Nulla vitae elit
        libero, a pharetra augue.” - Borat -</span
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "OurServices",
  data() {
    return {
      subtitle: "Cras mattis consectetur purus sit amet fermentum.",
    };
  },
};
</script>
<style lang="scss">
.our-services {
  @include flex();
  &__cards {
    @include flex($wrap: wrap);
  }
  &__cards-item {
    @include flex(center, center, column);
    width: 50%;
    text-align: center;
    padding: 100px 0 134px;
    img {
      margin-bottom: 30px;
    }
  }
  &__cards-item-title {
    @include text($h24, 700, $black);
    margin-bottom: 19px;
  }
  &__cards-item-subtitle {
    @include text($h18, 300, $black);
    font-style: italic;
    max-width: 202px;
  }
  &__cards-item:nth-child(3n + 1) {
    background-color: $grey;
  }
  &__wrapper {
    @include flex(start, center, column);
    text-align: center;
    max-width: 34%;
    background: linear-gradient(
        rgba(193, 191, 217, 0.5),
        rgba(193, 191, 217, 0.5)
      ),
      url("../../assets/bg-services.png") no-repeat center;
    padding: 117px 33px 0 33px;
    img {
      margin-bottom: 32px;
    }
  }
  &__wrapper-title {
    @include text($h36, 400);
    margin-bottom: 118px;
  }
  &__wrapper-subtitle {
    @include text($h18, 400);
    font-style: italic;
  }
}
</style>