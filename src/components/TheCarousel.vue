<template>
  <div class="the-carousel">
    <VueSlickCarousel v-bind="value">
      <div
        class="the-carousel__img-wrapper"
        v-for="(key, idx) in images"
        :key="idx"
      >
        <img :src="key.img" alt="carousel-img" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "TheCarousel",
  components: {
    VueSlickCarousel,
  },

  data() {
    return {
      value: {
        arrows: true,
        dots: true,
        edgeFriction: 0.5,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      images: [
        {
          img: require("@/assets/recent-work.png"),
        },
        {
          img: "https://picsum.photos/926/695?random=2",
        },
        {
          img: "https://picsum.photos/926/695?random=3",
        },
        {
          img: "https://picsum.photos/926/695?random=4",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.the-carousel {
  &__img-wrapper {
    @include padding-hack(75.1%, contain);
    margin-bottom: 43px;
  }
}

.slick-next {
  right: -100px;
}
.slick-next:before {
  content: url(../assets/svg/arrowNext.svg);
}

.slick-prev {
  left: -100px;
}
.slick-prev:before {
  content: url(../assets/svg/arrowPrew.svg);
}

.slick-dots li button:before {
  border-radius: 50%;
  border: 1px solid $white;
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  content: "";
  text-align: center;
}
.slick-dots li.slick-active button:before {
  background: $white;
}
</style>