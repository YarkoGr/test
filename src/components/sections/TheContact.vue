<template>
  <div class="the-contact" id="contact">
    <goole-map />
    <div class="the-contact__wrapper">
      <img
        src="../../assets/svg/Icon-Contact.svg"
        alt="contact-icon"
        class="the-contact__icon"
      />
      <h2 class="the-contact__title">GET IN TOUCH</h2>
      <div class="the-contact__slide-button-wrapper">
        <!-- <div class="the-contact__slide-button">
          <img
            src="../../assets/svg/Icon-Address.svg"
            alt="adres-icon"
            class="the-contact__slide-button-adress-icon"
          />
          <div class="the-contact__slide-button-adress-text"></div>
        </div> -->
        <div
          class="the-contact__slide-button"
          v-for="(item, idx) in buttons"
          :key="idx"
        >
          <div class="the-contact__slide-button-icon">
            <img :src="item.icon" :alt="item.name" />
          </div>
          <span class="the-contact__slide-button-text">{{ item.text }}</span>
        </div>
      </div>
      <form class="the-contact__form">
        <div class="the-contact__form-wrapper">
          <div class="the-contact__form-inputs">
            <input type="text" name="name" placeholder="Name *" required />
            <input type="email" name="email" placeholder="E-Mail *" required />
          </div>
          <textarea name="text" placeholder="Message *" rows="10"></textarea>
        </div>
        <button class="the-contact__form-btn" type="submit">
          SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import "ant-design-vue/dist/antd.css";
import GooleMap from "../GooleMap.vue";
export default {
  components: { GooleMap },
  name: "TheContact",
  data() {
    return {
      buttons: [
        {
          name: "adress",
          icon: require("@/assets/svg/Icon-Address.svg"),
          text: "Ikan Piranha Atas 220C Malang - East Java Indonesia",
        },
        {
          name: "phone",
          icon: require("@/assets/svg/icon-phone.svg"),
          text: "+380000000000; +388888888888",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../../styles/sections/theContact.scss";
</style>