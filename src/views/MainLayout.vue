<template>
  <div class="main-layout">
    <first-screen />
    <the-about />
    <our-services />
    <recent-works />
    <our-team />
    <the-contact />
  </div>
</template>
<script>
import FirstScreen from "../components/sections/FirstScreen";
import OurServices from "../components/sections/OurServices.vue";
import TheAbout from "../components/sections/TheAbout";
import RecentWorks from "../components/sections/RecentWorks";
import OurTeam from "../components/sections/OurTeam.vue";
import TheContact from "../components/sections/TheContact.vue";

export default {
  name: "MainLayout",
  components: {
    FirstScreen,
    TheAbout,
    OurServices,
    RecentWorks,
    OurTeam,
    TheContact,
  },
};
</script>

<style lang="scss">
.main-layout {
  @include flex($direction: column);
}
</style>