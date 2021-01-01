<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class IdeasPage extends Vue {
  mounted() {
    this.$axios.get('ideas');
  }
}
</script>
