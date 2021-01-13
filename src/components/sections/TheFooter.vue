<template>
  <div class="the-footer">
    <div class="the-footer__wrapper container">
      <span class="the-footer__text"
        >©2014 tulusdriyo. All Rights Reserved.</span
      >
      <social-icons />
    </div>
  </div>
</template>

<script>
import SocialIcons from "../SocialIcons.vue";
export default {
  components: { SocialIcons },
  name: "TheFooter",
};
</script>
<style lang="scss">
.the-footer {
  padding-top: 76px;
  padding-bottom: 76px;
  background-color: $main-color;
  &__wrapper {
    @include flex(space-between, center);
  }
}
</style>