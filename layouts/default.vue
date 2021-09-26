<template>
  <div>
    <nuxt />
    <footer-prismic />
  </div>
</template>

<script>
import FooterPrismic from "~/components/FooterPrismic.vue";

export default {
  components: {
    FooterPrismic
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
