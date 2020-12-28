<template>
  <div class="the-about container" id="about">
    <div class="the-about__title-wrapper">
      <img
        class="the-about__img"
        src="../../assets/svg/Icon-AboutUs.svg"
        alt="about-icon"
      />
      <h2 class="the-about__title">About Us</h2>
    </div>
    <div class="the-about__description">
      <span
        >Nullam quis risus eget urna <b>mollis ornare</b> vel eu leo. Donec id
        elit non mi porta gravida at eget metus. Donec ullamcorper nulla non
        metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum
        faucibus dolor auctor.
      </span>
      <span
        ><b>Morbi leo risus</b>, porta ac consectetur ac, vestibulum at eros.
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Maecenas faucibus mollis interdum. Cras mattis consectetur
        purus sit amet fermentum. Sed posuere consectetur est at lobortis.</span
      >
      <the-button></the-button>
    </div>
  </div>
</template>

<script>
import TheButton from "../TheButton.vue";
export default {
  components: { TheButton },
  name: "TheAbout",
};
</script>

<style lang="scss">
.the-about {
  @include flex();
  padding: 124px 0;
  &__title-wrapper {
    padding-top: 76px;
    text-align: center;
    min-width: 34%;
    min-height: 557px;
    background: linear-gradient($first-screen-bg, $first-screen-bg),
      url("../../assets/bg-about.png") no-repeat;
    background-size: cover;
    background-position: -63px 0;
  }
  &__img {
    margin-bottom: 44px;
  }
  &__title-wrapper {
    @include text($h46);
  }
  &__description {
    @include flex(start, center, column);
    padding: 79px 34px 0 124px;
    span {
      margin-bottom: 20px;
    }
    span:last-of-type {
      margin-bottom: 70px;
    }
  }
}
</style>