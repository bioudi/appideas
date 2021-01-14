<template>
  <IdeasList></IdeasList>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { ideasStore } from "~/store";

@Component({
  middleware: "auth",
  layout: "authenticated",
  asyncData(ctx) {
    return ideasStore.getIdeas({ page: 1, rating: { min: 2, max: 3 } });
  }
})
export default class IdeasPage extends Vue {}
</script>
