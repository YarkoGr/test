<template>
  <div class="the-header">
    <a href="/"
      ><img class="the-header__img" src="../assets/svg/Logo.svg" alt="logo"
    /></a>
    <ul class="the-header__list">
      <li
        class="the-header__list-item"
        v-for="(item, idx) in menuItems"
        :key="idx"
      >
        <a class="the-header__list-item-link" :href="item.href">{{
          item.name
        }}</a>
      </li>
    </ul>
    <burger-menu />
  </div>
</template>

<script>
import BurgerMenu from "./sections/BurgerMenu.vue";
export default {
  components: { BurgerMenu },
  name: "TheHeader",
  data() {
    return {
      menuItems: [
        {
          name: "Home",
          href: "/",
        },
        {
          name: "About",
          href: "#about",
        },
        {
          name: "Services",
          href: "#services",
        },
        {
          name: "Works",
          href: "#works",
        },
        {
          name: "Contact",
          href: "#contact",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.the-header {
  @include flex(space-between);
  padding-top: 25px;
  &__list {
    @include flex(center, center);
    @media screen and (max-width: 730px) {
      display: none;
    }
  }
  &__list-item:not(:last-child) {
    margin-right: 30px;
  }
  &__list-item-link {
    text-decoration: none;
    @include text($h24, 700);
    text-transform: uppercase;
  }
  .burger-menu {
    display: none;
    @media screen and (max-width: 730px) {
      display: inline;
    }
  }
  .bm-menu {
    z-index: 20;
  }
}
</style>