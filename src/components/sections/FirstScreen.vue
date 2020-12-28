<template>
  <div class="first-screen">
    <the-header class="first-screen__header container" />
    <div class="first-screen__content container">
      <h1 class="first-screen__title">CreativE DIGITAL Project</h1>
      <span class="first-screen__subtitle"
        >Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit.</span
      >
    </div>
  </div>
</template>

<script>
import TheHeader from "../../components/TheHeader";
export default {
  name: "FirstScreen",
  components: {
    TheHeader,
  },
};
</script>

<style lang="scss">
.first-screen {
  min-height: 100vh;
  @include flex(center, center);
  background: linear-gradient($first-screen-bg, $first-screen-bg),
    url("../../assets/bg-first-screen.png") no-repeat center center;
  background-size: cover;
  flex: 1;
  &__header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }
  &__content {
    text-align: center;
  }
  &__title {
    @include text($h72, 700);
    text-transform: uppercase;
    margin-bottom: 39px;
  }
  &__subtitle {
    @include text($h30, 300);
    font-style: italic;
  }
}
</style>