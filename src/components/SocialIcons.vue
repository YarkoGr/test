<template>
  <ul class="social-icons">
    <li class="social-icons__item" v-for="(element, idx) in socials" :key="idx">
      <a :href="element.link" target="_blank" class="social-icons__item-link"
        ><img
          :src="element.icon"
          :alt="element.name"
          class="social-icons__item-link-img"
      /></a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SocialIcons",
  data() {
    return {
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
.social-icons {
  @include flex(center, center);
  &__item:not(:last-child) {
    margin-right: 24px;
  }
}
</style>