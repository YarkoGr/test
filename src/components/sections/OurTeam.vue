<template>
  <div class="our-team">
    <img
      src="../../assets/svg/Icon-Team.svg"
      alt="our-team-icon"
      class="our-team__icon"
    />
    <h2 class="our-team__title">MEET OUR TEAM</h2>
    <div class="our-team__carousel">
      <VueSlickCarousel v-bind="value">
        <div
          class="our-team__carousel-card"
          v-for="(item, idx) in cards"
          :key="idx"
        >
          <div class="our-team__carousel-card-img-wrapper">
            <img :src="item.img" :alt="`${item.title}-photo`" />
          </div>
          <div class="our-team__carousel-card-subscribe">
            <h3 class="our-team__carousel-card-title">{{ item.title }}</h3>
            <span class="our-team__carousel-card-subtitle">{{
              item.subtitle
            }}</span>
          </div>
          <ul class="our-team__carousel-card-socials">
            <li
              class="our-team__carousel-card-socials-item"
              v-for="(element, idx) in socials"
              :key="idx"
            >
              <a
                :href="element.link"
                target="_blank"
                class="our-team__carousel-card-socials-item-link"
                ><img
                  :src="element.icon"
                  :alt="element.name"
                  class="our-team__carousel-card-socials-item-link-img"
              /></a>
            </li>
          </ul>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "OurTeam",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      value: {
        arrows: true,
        infinite: true,
        speed: 500,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      cards: [
        {
          img: require("@/assets/workers/worker1.png"),
          title: "Miguel Obrien",
          subtitle: "CEO & Founder",
        },
        {
          img: require("@/assets/workers/worker2.png"),
          title: "Jackie Carroll",
          subtitle: "Art Director",
        },
        {
          img: require("@/assets/workers/worker3.png"),
          title: "Ida Morrison",
          subtitle: "Designer",
        },
        {
          img: "https://picsum.photos/926/695?random=2",
          title: "Yarik Pasko",
          subtitle: "Front End Developer",
        },
      ],
      socials: [
        {
          name: "behance",
          icon: require("@/assets/social/behance.png"),
          link: "https://www.behance.net/",
        },
        {
          name: "facebook",
          icon: require("@/assets/social/facebook.png"),
          link: "https://www.facebook.com/",
        },
        {
          name: "google",
          icon: require("@/assets/social/google.png"),
          link: "https://www.google.com.ua",
        },
        {
          name: "linkedin",
          icon: require("@/assets/social/linked-in.png"),
          link: "https://www.linkedin.com",
        },
        {
          name: "twitter",
          icon: require("@/assets/social/twitter.png"),
          link: "https://twitter.com",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../styles/sections/ourTeam.scss";
</style>