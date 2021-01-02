<template>
  <div>
    <Header></Header>
    <Features></Features>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Header from "~/components/Header.vue";
import Features from "~/components/Features.vue";
import Footer from "~/components/Footer.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Header,
    Features,
    Footer
  }
})
export default class Index extends Vue {}
</script>
