<template>
  <div class="google-map">
    <gmap-map :center="center" :zoom="12" style="width: 100%; height: 100%">
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 48.94119815151706, lng: 24.71050146789437 },
    };
  },
};
</script>
<style lang="scss">
.gmnoprint,
.gm-fullscreen-control {
  display: none;
}
</style>