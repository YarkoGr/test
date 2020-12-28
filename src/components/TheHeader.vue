<template>
  <div class="the-header">
    <a href="/"
      ><img class="the-header__img" src="../assets/svg/Logo.svg" alt="logo"
    /></a>
    <ul class="the-header__list">
      <li class="the-header__list-item">
        <a class="the-header__list-item-link" href="/">Home</a>
      </li>
      <li class="the-header__list-item">
        <a class="the-header__list-item-link" href="#about">About</a>
      </li>
      <li class="the-header__list-item">
        <a class="the-header__list-item-link" href="#services">Services</a>
      </li>
      <li class="the-header__list-item">
        <a class="the-header__list-item-link" href="#works">Works</a>
      </li>
      <li class="the-header__list-item">
        <a class="the-header__list-item-link" href="#contact">Contact</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style lang="scss">
.the-header {
  @include flex(space-between);
  padding-top: 25px;
  &__list {
    @include flex(center, center);
  }
  &__list-item:not(:last-child) {
    margin-right: 30px;
  }
  &__list-item-link {
    text-decoration: none;
    @include text($h24, 700);
    text-transform: uppercase;
  }
}
</style>