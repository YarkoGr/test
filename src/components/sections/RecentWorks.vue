<template>
  <div class="recent-works" id="works">
    <img
      src="../../assets/svg/Icon-Works.svg"
      alt="works-icon"
      class="recent-works__icon"
    />
    <h2 class="recent-works__title">RECENT WORKS</h2>
    <the-carousel />
    <the-button buttonName="View Gallery" />
  </div>
</template>

<script>
import TheButton from "../TheButton.vue";
import TheCarousel from "../TheCarousel.vue";

export default {
  components: { TheCarousel, TheButton },
  name: "RecentWorks",
  data() {
    return {
      buttonName: "View Gallery",
    };
  },
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
  .the-button {
    color: $white;
    border-color: $white;
  }
}

.the-carousel {
  width: 60%;
  margin-bottom: 102px;
}
</style>