<template>
  <div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, idx) in items" :key="idx">
        <img class="swiper__img" :src="item.src" alt="img-carousel" />
      </swiper-slide>

      <div class="swiper-pagination" slot="pagination">
        <img src="" alt="" />
      </div>
      <div class="swiper-arrows swiper-button-prev" slot="button-prev">
        <svg
          width="23"
          height="39"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          viewBox="1.992 1.999 22.017 38.001"
          fill="#000000"
        >
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M23.877 2.533c.27.51.11 1.162-.359 1.457L3.461 21.856c-.468.294-1.068.12-1.338-.39s-.11-1.163.359-1.458L22.539 2.142c.468-.295 1.067-.12 1.338.39zm0 36.932c.27-.51.11-1.162-.359-1.456L3.461 20.142c-.468-.294-1.068-.12-1.338.39s-.11 1.163.359 1.457l20.057 17.867c.468.295 1.067.12 1.338-.39z"
          />
        </svg>
      </div>
      <div class="swiper-arrows swiper-button-next" slot="button-next">
        <svg
          width="23"
          height="39"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.com/svgjs"
          viewBox="1.992 1.999 22.017 38.001"
          fill="#000000"
        >
          <path
            paint-order="stroke fill markers"
            fill-rule="evenodd"
            d="M23.877 2.533c.27.51.11 1.162-.359 1.457L3.461 21.856c-.468.294-1.068.12-1.338-.39s-.11-1.163.359-1.458L22.539 2.142c.468-.295 1.067-.12 1.338.39zm0 36.932c.27-.51.11-1.162-.359-1.456L3.461 20.142c-.468-.294-1.068-.12-1.338.39s-.11 1.163.359 1.457l20.057 17.867c.468.295 1.067.12 1.338-.39z"
          />
        </svg>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "../styles/swiper/style.css";
export default {
  name: "swiper-example-navigation",
  title: "Navigation",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      items: [
        // {
        //   src: require("@/assets/recent-work.png"),
        // },
        {
          src: "https://picsum.photos/200/300?random=1",
        },
        {
          src: "https://picsum.photos/200/300?random=2",
        },
        {
          src: "https://picsum.photos/200/300?random=3",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
  display: flex;
}
.swiper-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
}
.swiper-arrows {
  display: block;
}
</style>