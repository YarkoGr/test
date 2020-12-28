<template>
  <div class="recent-works" id="works">
    <img
      src="../../assets/svg/Icon-Works.svg"
      alt="works-icon"
      class="recent-works__icon"
    />
    <h2 class="recent-works__title">RECENT WORKS</h2>
    <div class="recent-works__slider">
      <the-swiper />
    </div>
  </div>
</template>

<script>
import TheSwiper from "../TheSwiper.vue";
export default {
  components: { TheSwiper },
  name: "RecentWorks",
};
</script>

<style lang="scss">
.recent-works {
  padding: 60px 0;
  background: linear-gradient($main-color-opaciti, $main-color-opaciti),
    url("../../assets/bg-works.png") no-repeat center center;
  background-size: cover;
  @include flex(center, center, column);
  &__icon {
    margin-bottom: 36px;
  }
  &__title {
    @include text($h36, 400);
    margin-bottom: 67px;
  }
}
</style>