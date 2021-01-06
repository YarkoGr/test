<template>
  <button class="the-button">
    {{ buttonName }}
  </button>
</template>


<script>
export default {
  name: "TheButton",
  props: ["buttonName"],
};
</script>
<style lang="scss">
.the-button {
  min-height: 51px;
  padding: 0 52px;
  border: 1px solid $black;
  background: transparent;
  @include text($h20, 300, $black);
  font-style: italic;
  outline: none;
  cursor: pointer;
}
</style>