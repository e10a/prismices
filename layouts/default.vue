<template>
  <div>
    <nuxt />
    <site-footer />
  </div>
</template>

<script>
import SiteFooter from "~/components/SiteFooter.vue";

export default {
  components: {
    SiteFooter
  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog",
      script: [
        {
          src: "https://static.cdn.prismic.io/prismic.js?new=true&repo=e10a",
          defer: true,
          async: true
        }
      ]
    };
  }
};
</script>
