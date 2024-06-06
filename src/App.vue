<template>
  <div>
    <NavigationBar></NavigationBar>
    <router-view></router-view>
    <header-vue></header-vue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import FooterVue from "./components/FooterVue.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterVue,
  },
};
</script>
