<template>
  <div class="main-layout">
    <first-screen></first-screen>
    <the-about></the-about>
    <our-services></our-services>
    <recent-works></recent-works>
  </div>
</template>
<script>
import FirstScreen from "../components/sections/FirstScreen";
import OurServices from "../components/sections/OurServices.vue";
import TheAbout from "../components/sections/TheAbout";
import RecentWorks from "../components/sections/RecentWorks";
export default {
  name: "MainLayout",
  components: {
    FirstScreen,
    TheAbout,
    OurServices,
    RecentWorks,
  },
};
</script>

<style lang="scss">
.main-layout {
  @include flex($direction: column);
}
</style>